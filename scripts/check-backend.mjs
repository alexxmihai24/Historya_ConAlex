// Comprobación de humo del backend de Supabase.
//
//   npm run check:backend
//
// Verifica contra el proyecto real lo que la interfaz da por supuesto:
// que hay contenido, que la lección trae todos sus bloques, que las respuestas
// correctas NO son legibles desde el navegador y que la corrección del servidor
// marca exactamente una opción como buena.
//
// Existe porque el fallo de check_quiz_answer (devuelve un array, no un objeto)
// era invisible sin backend conectado y habría dado toda respuesta por incorrecta.

import { readFile } from 'node:fs/promises'
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
if (url.includes('your-project')) throw new Error('.env.local todavía tiene la URL de ejemplo')

const headers = { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }
const get = async (path) => (await fetch(`${url}/rest/v1/${path}`, { headers })).json()
const rpc = async (name, body) =>
  (await fetch(`${url}/rest/v1/rpc/${name}`, { method: 'POST', headers, body: JSON.stringify(body) })).json()

const fallos = []
function check(descripcion, condicion, detalle = '') {
  const ok = Boolean(condicion)
  console.log(`${ok ? 'ok  ' : 'FALLA'} ${descripcion}${ok || !detalle ? '' : ` — ${detalle}`}`)
  if (!ok) fallos.push(descripcion)
}

const temas = await get('topics?select=slug,accent_color')
check('hay temas publicados', Array.isArray(temas) && temas.length > 0, JSON.stringify(temas).slice(0, 120))

const COLORES = ['gold', 'blue', 'terracotta', 'green', 'plum', 'red']
const colorMalo = (temas ?? []).find((tema) => !COLORES.includes(tema.accent_color))
check('todos los colores tienen clase CSS', !colorMalo, colorMalo && `${colorMalo.slug}: ${colorMalo.accent_color}`)

const lecciones = await get('lessons?select=body,topics!inner(slug)&topics.slug=eq.egipto')
const bloques = lecciones?.[0]?.body ?? []
const tipos = new Set(bloques.map((bloque) => bloque.type))
for (const tipo of ['section', 'concepts', 'debates', 'timeline', 'sources']) {
  check(`la lección trae bloques «${tipo}»`, tipos.has(tipo))
}
const apartado = bloques.find((bloque) => bloque.type === 'section')
check('los apartados conservan sus párrafos', (apartado?.text ?? '').includes('\n\n'))

const fuga = await get('questions?select=id')
check('questions no es legible desde el navegador', fuga?.code === '42501', JSON.stringify(fuga).slice(0, 120))

const preguntas = await rpc('get_quiz_questions', { p_topic_slug: 'egipto', p_limit: 1 })
const pregunta = preguntas?.[0]
check('get_quiz_questions devuelve preguntas', Boolean(pregunta))
check(
  'las opciones no revelan cuál es correcta',
  pregunta && !pregunta.options.some((opcion) => Object.keys(opcion).some((clave) => clave.includes('correct'))),
)

if (pregunta) {
  const resultados = []
  for (const opcion of pregunta.options) {
    const respuesta = await rpc('check_quiz_answer', { p_question_id: pregunta.question_id, p_option_id: opcion.id })
    // Declarada `returns table`: PostgREST devuelve un array de una fila.
    resultados.push((Array.isArray(respuesta) ? respuesta[0] : respuesta) ?? {})
  }
  const correctas = resultados.filter((resultado) => resultado.is_correct).length
  check('el servidor marca exactamente una opción correcta', correctas === 1, `marcadas: ${correctas}`)
  check('la corrección devuelve explicación', Boolean(resultados[0]?.explanation))
}

console.log(fallos.length === 0 ? '\nBackend correcto.' : `\n${fallos.length} comprobación(es) fallida(s).`)
process.exit(fallos.length === 0 ? 0 : 1)
