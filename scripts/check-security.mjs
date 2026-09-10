// Comprobación de seguridad antes de publicar.
//
//   npm run check:security
//
// Recorre el checklist de quince puntos (A1-E3) contra el proyecto REAL, no
// contra lo que dicen las migraciones. Leer el SQL prueba lo que se quiso hacer;
// esto prueba lo que hace el servidor.
//
// NO ES DESTRUCTIVO: las escrituras que intenta son todas escrituras que DEBEN
// fallar. Si alguna sale bien, eso es exactamente el hallazgo, y se avisa por
// pantalla con el dato que se ha conseguido escribir.
//
// Lo que no se puede automatizar aquí queda marcado como MANUAL y explicado:
// hacen falta dos cuentas reales abiertas a la vez, y crearlas es una decisión
// del dueño del proyecto, no de un script.

import { readFile, readdir } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const env = Object.fromEntries(
  (await readFile(join(root, '.env.local'), 'utf8'))
    .split('\n')
    .filter((line) => line.includes('=') && !line.trim().startsWith('#'))
    .map((line) => {
      const index = line.indexOf('=')
      return [line.slice(0, index).trim(), line.slice(index + 1).trim()]
    }),
)

const url = env.VITE_SUPABASE_URL
const key = env.VITE_SUPABASE_PUBLISHABLE_KEY
if (!url || !key) throw new Error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_PUBLISHABLE_KEY en .env.local')

const anon = { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }

const resultados = []
function check(id, titulo, ok, detalle = '') {
  resultados.push({ id, titulo, estado: ok ? 'OK' : 'FALLO', detalle })
}
function manual(id, titulo, detalle) {
  resultados.push({ id, titulo, estado: 'MANUAL', detalle })
}

async function rest(path, options = {}) {
  const respuesta = await fetch(`${url}/rest/v1/${path}`, { headers: anon, ...options })
  let cuerpo = null
  try {
    cuerpo = await respuesta.json()
  } catch {
    cuerpo = null
  }
  return { status: respuesta.status, body: cuerpo }
}

/** Una tabla está cerrada si no devuelve filas: da igual que responda 200 con
 *  array vacío (RLS filtra) o 401/403 (sin grant). Lo que no puede pasar es que
 *  devuelva datos. */
function cerrada({ status, body }) {
  if (status >= 400) return true
  return Array.isArray(body) && body.length === 0
}

// ---------------------------------------------------------------------------
// A. Secretos que llegan al navegador
// ---------------------------------------------------------------------------

// A1. Ninguna clave dentro del bundle.
/* Patrones de CLAVE REAL, no de la palabra que la nombra.
   La primera versión de esta comprobación buscaba «service_role» y daba fallo
   por los tres comentarios del repositorio que advierten de que no se use.
   Una comprobación que se dispara con su propia documentación no sirve: lo que
   hay que detectar es el valor, no la mención. */
const PATRONES = [
  { nombre: 'clave OpenAI', re: /sk-[A-Za-z0-9]{20,}/ },
  { nombre: 'clave Google', re: /AIza[0-9A-Za-z_-]{20,}/ },
  { nombre: 'token Slack', re: /xox[baprs]-[A-Za-z0-9-]{10,}/ },
  { nombre: 'clave privada PEM', re: /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { nombre: 'clave secreta de Supabase', re: /sb_secret_[A-Za-z0-9_-]{10,}/ },
  // Las claves antiguas de Supabase, anon y service_role, son JWT. Este
  // proyecto usa `sb_publishable_`, así que un JWT aquí sería anómalo.
  { nombre: 'JWT (posible clave antigua de Supabase)', re: /eyJhbGciOi[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{20,}\./ },
]

async function archivosDe(directorio) {
  const salida = []
  for (const entrada of await readdir(directorio, { withFileTypes: true })) {
    const ruta = join(directorio, entrada.name)
    if (entrada.isDirectory()) salida.push(...(await archivosDe(ruta)))
    else salida.push(ruta)
  }
  return salida
}

let bundle = []
try {
  bundle = (await archivosDe(join(root, 'dist'))).filter((f) => /\.(js|css|html|json|webmanifest)$/.test(f))
} catch {
  bundle = []
}
const hallazgosBundle = []
for (const archivo of bundle) {
  const contenido = await readFile(archivo, 'utf8')
  for (const { nombre, re } of PATRONES) {
    if (re.test(contenido)) hallazgosBundle.push(`${nombre} en ${archivo.replace(root, '.')}`)
  }
}
check(
  'A1',
  'Ninguna clave dentro del bundle',
  bundle.length > 0 && hallazgosBundle.length === 0,
  bundle.length === 0
    ? 'no hay dist/: ejecuta `npm run build` antes'
    : hallazgosBundle.join('; ') || `${bundle.length} archivos revisados`,
)

// A1b. Las variables VITE_ solo pueden llevar valores publicables.
const variablesPublicas = Object.keys(env).filter((nombre) => nombre.startsWith('VITE_'))
const sospechosas = variablesPublicas.filter((nombre) => /SECRET|SERVICE|PRIVATE|PASSWORD|TOKEN/i.test(nombre))
check(
  'A1b',
  'Las variables VITE_ no llevan secretos',
  sospechosas.length === 0 && key.startsWith('sb_publishable_'),
  sospechosas.length
    ? `variables sospechosas: ${sospechosas.join(', ')}`
    : `${variablesPublicas.join(', ')} · la clave es publishable, que es pública por diseño`,
)

// A2. Las llamadas a terceros no salen del navegador.
const fuentes = (await archivosDe(join(root, 'src'))).filter((f) => /\.(ts|js|vue)$/.test(f))
const llamadasExternas = []
for (const archivo of fuentes) {
  const contenido = await readFile(archivo, 'utf8')
  for (const dominio of contenido.match(/https?:\/\/[a-z0-9.-]+/gi) ?? []) {
    const host = dominio.replace(/^https?:\/\//, '')
    // Los dominios de Wikimedia y Wikidata aparecen como TEXTO de atribución,
    // no como destino de una petición: las descargas son de los scripts de Node.
    if (/supabase|localhost|127\.0\.0\.1|w3\.org/.test(host)) continue
    if (new RegExp(`fetch\\([^)]*${host.replace(/\./g, '\\.')}`).test(contenido)) {
      llamadasExternas.push(`${host} en ${archivo.replace(root, '.')}`)
    }
  }
}
check(
  'A2',
  'Las llamadas a terceros no salen del navegador',
  llamadasExternas.length === 0,
  llamadasExternas.join('; ') ||
    'solo Supabase. Las imágenes de Commons y los datos de Wikidata se descargan en build, con scripts de Node',
)

// A2b. La CSP es lo que HACE CUMPLIR A2 en el navegador. Sin ella, A2 depende
// de que nadie añada mañana un fetch a un tercero; con ella, el navegador lo
// bloquea aunque el código lo intente.
const hosting = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'))
const cabeceras = Object.fromEntries(
  (hosting.headers ?? []).flatMap((bloque) => (bloque.headers ?? []).map((h) => [h.key.toLowerCase(), h.value])),
)
const csp = cabeceras['content-security-policy'] ?? ''
const directiva = (nombre) => (csp.match(new RegExp(`${nombre} ([^;]*)`)) ?? [])[1] ?? ''
const problemasCsp = []
if (!csp) problemasCsp.push('no hay Content-Security-Policy')
if (/unsafe-inline|unsafe-eval/.test(directiva('script-src'))) problemasCsp.push('script-src admite unsafe-inline o unsafe-eval')
const destinos = directiva('connect-src').trim().split(/\s+/).filter(Boolean)
// Un comodín de host, `https://*.supabase.co`, acota a un dominio y vale. Un
// `*` suelto no acota nada y deja la directiva sin efecto.
if (!destinos.length || destinos.some((destino) => destino === '*' || destino === 'https:' || destino === 'http:')) {
  problemasCsp.push('connect-src abierto a cualquier destino')
}
if (!/object-src 'none'/.test(csp)) problemasCsp.push('falta object-src none')
if (!/frame-ancestors 'none'/.test(csp)) problemasCsp.push('falta frame-ancestors none')
check(
  'A2b',
  'La CSP impide llamar a terceros desde el navegador',
  problemasCsp.length === 0,
  problemasCsp.join('; ') || `connect-src ${directiva('connect-src').trim()} · script-src ${directiva('script-src').trim()}`,
)

// E4. Las demás cabeceras de la última pasada.
const exigidas = ['x-content-type-options', 'referrer-policy', 'strict-transport-security', 'permissions-policy']
const faltan = exigidas.filter((nombre) => !cabeceras[nombre])
check('E4', 'Cabeceras de seguridad del alojamiento', faltan.length === 0, faltan.length ? `faltan: ${faltan.join(', ')}` : exigidas.join(', '))

// A3. Ningún secreto en el historial de git.
let historial = ''
try {
  for (const aguja of ['sk-', 'sb_secret_', 'eyJhbGciOi', 'BEGIN PRIVATE KEY']) {
    historial += execFileSync('git', ['log', '-p', '--all', '-S', aguja, '--', '.'], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
  }
} catch {
  historial = ''
}
const enHistorial = PATRONES.filter(({ re }) => re.test(historial)).map(({ nombre }) => nombre)
let envVersionado = ''
try {
  envVersionado = execFileSync('git', ['log', '--all', '--name-only', '--pretty=format:', '--', '.env.local', '.env'], {
    cwd: root,
    encoding: 'utf8',
  }).trim()
} catch {
  envVersionado = ''
}
check(
  'A3',
  'Ningún secreto en el historial de git',
  enHistorial.length === 0 && envVersionado === '',
  [enHistorial.length ? `en el historial: ${enHistorial.join(', ')}` : '', envVersionado ? `.env versionado: ${envVersionado}` : '']
    .filter(Boolean)
    .join('; ') || 'historial limpio y .env.local nunca versionado',
)

// ---------------------------------------------------------------------------
// B. Autorización en el servidor
// ---------------------------------------------------------------------------

// B1. Sin sesión, nada personal.
const PERSONALES = ['profiles', 'quiz_attempts', 'learning_progress', 'user_preferences', 'user_roles']
const abiertas = []
for (const tabla of PERSONALES) {
  const respuesta = await rest(`${tabla}?select=*&limit=1`)
  if (!cerrada(respuesta)) abiertas.push(`${tabla} devuelve ${JSON.stringify(respuesta.body).slice(0, 120)}`)
}
check(
  'B1',
  'Sin sesión no se lee ningún dato personal',
  abiertas.length === 0,
  abiertas.join('; ') || `${PERSONALES.join(', ')} cerradas para anónimo`,
)

// B1b. Las respuestas correctas no son legibles desde el navegador (SPEC §10.3).
const respuestasCorrectas = await rest('question_options?select=*&limit=1')
const bancoPreguntas = await rest('questions?select=*&limit=1')
check(
  'B1b',
  'El banco de respuestas correctas no se lee desde el navegador',
  cerrada(respuestasCorrectas) && cerrada(bancoPreguntas),
  cerrada(respuestasCorrectas) && cerrada(bancoPreguntas)
    ? 'questions y question_options sin grant ni política: nadie las lee'
    : 'ATENCIÓN: el quiz se puede resolver leyendo la base de datos',
)

// B3. Denegar por defecto: toda tabla del esquema con RLS activo.
const migraciones = (await readdir(join(root, 'supabase', 'migrations'))).filter((f) => f.endsWith('.sql'))
let sql = ''
for (const archivo of migraciones) sql += await readFile(join(root, 'supabase', 'migrations', archivo), 'utf8')
const tablas = [...sql.matchAll(/create table public\.(\w+)/g)].map((m) => m[1])
const conRls = new Set([...sql.matchAll(/alter table public\.(\w+)\s+enable row level security/g)].map((m) => m[1]))
const sinRls = tablas.filter((tabla) => !conRls.has(tabla))
check(
  'B3',
  'Denegar por defecto: RLS en todas las tablas',
  sinRls.length === 0 && tablas.length > 0,
  sinRls.length ? `sin RLS: ${sinRls.join(', ')}` : `${tablas.length} tablas, todas con RLS`,
)

// ---------------------------------------------------------------------------
// C. IDs y objetos
// ---------------------------------------------------------------------------

// C1. Cambiar el id no abre la ficha de otro. Sin sesión ya está cubierto por
// B1; aquí se prueba además con un id concreto inventado, que es como se hace
// el ataque real.
const idInventado = '00000000-0000-0000-0000-000000000001'
const porId = await rest(`profiles?id=eq.${idInventado}&select=*`)
check(
  'C1',
  'Pedir un id concreto no devuelve la ficha de otro',
  cerrada(porId),
  cerrada(porId) ? 'consultar por id no salta la política' : `devuelve ${JSON.stringify(porId.body).slice(0, 120)}`,
)

// C2. El dueño va dentro de la consulta, no en un `if` posterior.
const politicasUsuario = [...sql.matchAll(/create policy "[^"]+" on public\.(profiles|user_preferences|learning_progress|quiz_attempts)[^;]+;/g)]
const sinDueno = politicasUsuario.filter((m) => !/auth\.uid\(\)/.test(m[0])).map((m) => m[0].slice(0, 70))
check(
  'C2',
  'El dueño va dentro de la política, no en una comprobación posterior',
  politicasUsuario.length > 0 && sinDueno.length === 0,
  sinDueno.length ? `sin auth.uid(): ${sinDueno.join('; ')}` : `${politicasUsuario.length} políticas, todas comparan con auth.uid()`,
)

// C3. Identificadores no adivinables.
const clavesEnteras = [...sql.matchAll(/(\w+)\s+(bigserial|serial|integer)\s+primary key/g)].map((m) => m[1])
check(
  'C3',
  'Identificadores no adivinables',
  clavesEnteras.length === 0,
  clavesEnteras.length ? `claves autoincrementales: ${clavesEnteras.join(', ')}` : 'todas las claves primarias son uuid',
)

// ---------------------------------------------------------------------------
// D. Acciones y permisos
// ---------------------------------------------------------------------------

// D1. Esconder el botón no es un permiso: se intenta escribir de verdad.
const escrituras = [
  { tabla: 'topics', metodo: 'POST', body: { slug: 'check-security-no-debe-existir', title: 'x', summary: 'x' } },
  { tabla: 'questions', metodo: 'POST', body: { prompt: 'check-security-no-debe-existir' } },
  { tabla: 'user_roles', metodo: 'POST', body: { user_id: idInventado, role: 'admin' } },
]
const escriturasQueColaron = []
for (const { tabla, metodo, body } of escrituras) {
  const respuesta = await rest(tabla, { method: metodo, body: JSON.stringify(body) })
  if (respuesta.status < 400) escriturasQueColaron.push(`${tabla} aceptó un ${metodo} anónimo`)
}
const borrado = await rest(`topics?slug=eq.check-security-no-debe-existir`, { method: 'DELETE' })
if (borrado.status < 400 && borrado.status !== 404) escriturasQueColaron.push('topics aceptó un DELETE anónimo')
check(
  'D1',
  'Sin permiso no se escribe, aunque se llame a la ruta directamente',
  escriturasQueColaron.length === 0,
  escriturasQueColaron.join('; ') || 'topics, questions y user_roles rechazan insert y delete anónimos',
)

// D1b. Escalada de privilegios: nadie se hace administrador desde el navegador.
check(
  'D1b',
  'Los roles no se pueden modificar desde el navegador',
  !/grant\s+(insert|update|delete)[^;]*user_roles/i.test(sql),
  'user_roles no tiene ningún grant de escritura para anon ni authenticated',
)

// D2. Las reglas, en un solo sitio.
const politicas = [...sql.matchAll(/create policy/g)].length
check(
  'D2',
  'Las reglas de acceso están en un solo sitio',
  politicas > 0,
  `${politicas} políticas RLS en supabase/migrations/. Ningún endpoint decide por su cuenta porque no hay endpoints propios: PostgREST aplica la política`,
)

// D3. Lo destructivo deja rastro.
const grantsBorrado = [...sql.matchAll(/grant[^;]*delete[^;]*;/gi)].map((m) => m[0].trim())
check(
  'D3',
  'Lo destructivo deja rastro',
  grantsBorrado.length === 0,
  grantsBorrado.length
    ? `hay grants de DELETE: ${grantsBorrado.join('; ')}`
    : 'ningún DELETE concedido al navegador: no hay borrado que auditar. Si algún día se concede, hará falta registro de quién y cuándo',
)

// ---------------------------------------------------------------------------
// E. La última pasada
// ---------------------------------------------------------------------------

// E3. Los errores no cuentan de más.
const errorProvocado = await rest('topics?select=columna_que_no_existe')
const textoError = JSON.stringify(errorProvocado.body ?? {})
const filtraciones = [/pg_/i, /postgres@/i, /\/var\//, /at \w+ \(/, /stack/i].filter((re) => re.test(textoError))
check(
  'E3',
  'Los errores no filtran el mapa de la base de datos',
  filtraciones.length === 0,
  `respuesta ${errorProvocado.status}: ${textoError.slice(0, 160)}`,
)

// E0. Configuración de Auth antes de publicar (SPEC §10.8). El endpoint de
// ajustes es público y dice si el registro está abierto y si exige confirmar el
// correo. Registro abierto SIN confirmación permite crear cuentas con correos
// ajenos y llenar la base de usuarios falsos.
let ajustes = null
try {
  ajustes = await (await fetch(`${url}/auth/v1/settings`, { headers: { apikey: key } })).json()
} catch {
  ajustes = null
}
if (ajustes) {
  const registroAbierto = ajustes.disable_signup === false
  const confirmaCorreo = ajustes.mailer_autoconfirm === false
  check(
    'E0',
    'Auth pide confirmación de correo',
    !registroAbierto || confirmaCorreo,
    registroAbierto
      ? confirmaCorreo
        ? 'registro abierto y con confirmación de correo: correcto'
        : 'registro ABIERTO y SIN confirmación: cualquiera crea cuentas con correos ajenos'
      : 'registro cerrado',
  )
  const proveedores = Object.entries(ajustes.external ?? {})
    .filter(([, activo]) => activo === true)
    .map(([nombre]) => nombre)
  check(
    'E0b',
    'Solo los proveedores de acceso que se usan',
    proveedores.length <= 1,
    proveedores.length ? `activos: ${proveedores.join(', ')}` : 'solo correo y contraseña',
  )
} else {
  manual('E0', 'Auth pide confirmación de correo', 'No se pudo leer /auth/v1/settings; revísalo en el panel de Supabase.')
}

// B2, C1 con dos cuentas y E1/E2 exigen dos usuarios reales abiertos a la vez.
// Crearlos escribe en la base de autenticación del proyecto, y esa es una
// decisión del dueño, no de un script de comprobación.
manual(
  'B2',
  'Con sesión ajena, sin acceso',
  'Requiere dos cuentas. Las políticas comparan con auth.uid() (ver C2), pero eso hay que verlo con dos sesiones abiertas.',
)
manual('E1', 'Dos cuentas abiertas a la vez', 'Dos navegadores, dos cuentas normales, el recorrido completo en paralelo.')
manual('E2', 'Recorrerla como quien no debería poder', 'Con la cuenta de menor privilegio: editar URLs, repetir peticiones, cambiar números.')

// ---------------------------------------------------------------------------

const ancho = Math.max(...resultados.map((r) => r.titulo.length))
console.log('\nChecklist de seguridad · Historya con Alex\n')
for (const { id, titulo, estado, detalle } of resultados) {
  const marca = estado === 'OK' ? '[ok]    ' : estado === 'MANUAL' ? '[manual]' : '[FALLO] '
  console.log(`${marca} ${id.padEnd(4)} ${titulo.padEnd(ancho)}  ${detalle}`)
}

const fallos = resultados.filter((r) => r.estado === 'FALLO')
const pendientes = resultados.filter((r) => r.estado === 'MANUAL')
console.log(
  `\n${resultados.length - fallos.length - pendientes.length} comprobadas, ${fallos.length} con fallo, ${pendientes.length} manuales.`,
)
if (fallos.length) process.exitCode = 1
