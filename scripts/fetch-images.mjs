// Descarga las imágenes de los temas desde Wikimedia Commons y genera
// src/data/topic-images.ts con su atribución completa.
//
//   npm run images
//
// Por qué existe (SPEC §12, fase 1.2 y §14.2): la alternativa es copiar a mano
// autor, título, año, fuente, licencia y URL de cada imagen, y eso se hace mal.
// Aquí la única cosa que se escribe a mano es el manifiesto: qué archivo va en
// qué tema, con qué texto alternativo y en qué apartado. Todo lo demás lo
// rellena la API de Commons y queda registrado.
//
// REGLA DURA (SPEC §14.2): solo dominio público o licencia libre. El script
// RECHAZA cualquier archivo cuya licencia no esté en LICENCIAS_OK, y no lo
// descarga. Si una imagen hace falta y no pasa el filtro, no se mete a mano: se
// busca otra.
//
// El script corre en el servidor, nunca en el navegador (SPEC §14.3.5).

import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/* `--paises` usa el mismo proceso para las portadas de las fichas de país: otro
   manifiesto, otro archivo de salida y las imágenes agrupadas por `country` en
   vez de por tema. Sin la opción, el comportamiento es el de siempre. */
const PAISES = process.argv.includes('--paises')
const manifestPath = join(root, 'scripts', PAISES ? 'country-images.json' : 'images.json')
const salidaPath = join(root, 'src', 'data', PAISES ? 'country-images.ts' : 'topic-images.ts')
const exportName = PAISES ? 'COUNTRY_IMAGES' : 'TOPIC_IMAGES'
const API = 'https://commons.wikimedia.org/w/api.php'
const UA = 'HistoryaConAlex/1.0 (proyecto educativo; contacto vía repositorio)'

const dormir = (ms) => new Promise((listo) => setTimeout(listo, ms))

/* Commons corta por ritmo, y el corte dura minutos. TODO lo que habla con
   Commons pasa por aquí: la consulta a la API, la comprobación de tamaño y la
   descarga. Antes solo reintentaba la descarga, así que un 429 en la consulta
   tiraba la ejecución entera antes de bajar nada, y un 429 en la comprobación
   de tamaño se tragaba en silencio y hacía descargar la imagen a tamaño
   completo. Los dos eran el mismo error: una vía de fallo sin tratar. */
async function pedirAComons(url, opciones = {}, intentos = 6) {
  for (let intento = 0; intento < intentos; intento += 1) {
    const respuesta = await fetch(url, { ...opciones, headers: { 'User-Agent': UA, ...(opciones.headers ?? {}) } })
    if (respuesta.ok) return respuesta
    if (respuesta.status !== 429 && respuesta.status < 500) return respuesta
    const pedido = Number(respuesta.headers.get('retry-after'))
    await dormir(Number.isFinite(pedido) && pedido > 0 ? pedido * 1000 : 20000 * (intento + 1))
  }
  throw new Error('Commons sigue rechazando tras seis intentos. Vuelve a lanzar `npm run images`: lo ya descargado no se repite.')
}

/** Ancho al que se pide la miniatura. Commons la genera al vuelo. */
const ANCHO = 1200

/* Presupuesto por archivo. Pedir 1200 px sin más dejaba PNG de 4 MB dentro de
   una lección: con tres figuras y portada, la página pasaba de 8 MB, que en
   móvil es inaceptable. Si la miniatura de 1200 no cabe, se pide más pequeña.

   OJO, aquí me equivoqué antes: NO se puede reescribir el ancho dentro de la
   URL de la miniatura («/1200px-» por «/500px-»). Wikimedia solo sirve las URLs
   que genera ella y devuelve 400 a cualquier otra. Hay que volver a preguntar a
   la API con otro `iiurlwidth`. La primera versión reescribía la URL, recibía
   400, se lo tragaba y descargaba el original: el presupuesto no hacía nada y
   además avisaba de que esas imágenes «no se podían reducir», que era falso. */
const MAX_BYTES = 600 * 1024
const ANCHOS = [1200, 950, 800, 650, 520, 420]

async function pesa(url) {
  const respuesta = await pedirAComons(url, { method: 'HEAD' })
  const tamano = Number(respuesta.headers.get('content-length'))
  return respuesta.ok && Number.isFinite(tamano) ? tamano : null
}

/** La miniatura más grande que cabe en el presupuesto, preguntando a la API.
 *
 *  Devuelve también el ancho y el alto reales: van al HTML como `width` y
 *  `height`, y si no se actualizan al bajar de escalón la página da un salto
 *  al cargar la imagen. */
async function miniaturaQueQuepa(titulo, datosIniciales) {
  let mejor = { url: datosIniciales.thumburl.split('?')[0], width: datosIniciales.thumbwidth, height: datosIniciales.thumbheight }
  let tamano = await pesa(mejor.url)
  if (tamano !== null && tamano <= MAX_BYTES) return { ...mejor, tamano }

  for (const ancho of ANCHOS.slice(1)) {
    const info = (await pedirInfo([titulo], ancho)).get(titulo)
    if (!info?.thumburl) break
    const url = info.thumburl.split('?')[0]
    const peso = await pesa(url)
    if (peso === null) break
    mejor = { url, width: info.thumbwidth, height: info.thumbheight }
    tamano = peso
    if (peso <= MAX_BYTES) return { ...mejor, tamano }
    await dormir(1500)
  }
  // Ni el escalón más pequeño cabe. Se descarga igualmente y se avisa al final:
  // una imagen enorme no puede pasar desapercibida.
  return { ...mejor, tamano }
}

/** Licencias admitidas. Cualquier otra cosa se rechaza sin descargar. */
const LICENCIAS_OK = [/^public domain$/i, /^cc0/i, /^cc by(-sa)?[ -]/i, /^pd-/i]

function licenciaValida(nombre) {
  return LICENCIAS_OK.some((patron) => patron.test((nombre ?? '').trim()))
}

/** Los campos de Commons vienen con HTML dentro. El pie es texto plano. */
function limpiar(html) {
  return String(html ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** El campo ObjectName de Commons trae el título en veinte idiomas y marcas
 *  «title QS:» de Wikidata pegadas detrás. El pie solo quiere el primero. */
function titulo(valor) {
  return limpiar(valor)
    .split(/ (?:title|label) QS:/)[0]
    .replace(/^[A-Za-zÀ-ÿ]+:\s*/, '')
    .slice(0, 120)
    .trim()
}

/** «1892-12-10» → «1892». El pie muestra el año, no la fecha completa. */
function anio(valor) {
  const encontrado = limpiar(valor).match(/\d{3,4}/)
  return encontrado ? encontrado[0] : ''
}

async function pedirInfo(titulos, ancho = ANCHO) {
  const url = new URL(API)
  url.searchParams.set('action', 'query')
  url.searchParams.set('format', 'json')
  url.searchParams.set('prop', 'imageinfo')
  url.searchParams.set('iiprop', 'url|extmetadata|size')
  url.searchParams.set('iiurlwidth', String(ancho))
  url.searchParams.set('titles', titulos.map((t) => `File:${t}`).join('|'))
  const respuesta = await pedirAComons(url)
  if (!respuesta.ok) throw new Error(`Commons respondió ${respuesta.status}`)
  const datos = await respuesta.json()
  const porTitulo = new Map()
  for (const pagina of Object.values(datos.query?.pages ?? {})) {
    const nombre = String(pagina.title ?? '').replace(/^File:/, '')
    porTitulo.set(nombre, pagina.imageinfo?.[0] ?? null)
  }
  return porTitulo
}

/** Commons devuelve 429 si se le piden archivos demasiado seguidos, y el bloqueo
 *  dura minutos, no segundos: con esperas cortas el script abandonaba a medias.
 *  Se respeta `Retry-After` cuando viene, y si no, retardo creciente hasta unos
 *  siete minutos en total. */
async function descargar(url, destino) {
  const respuesta = await pedirAComons(url)
  if (!respuesta.ok) throw new Error(`descarga ${respuesta.status}`)
  await writeFile(destino, Buffer.from(await respuesta.arrayBuffer()))
}

const existe = async (ruta) => access(ruta).then(() => true, () => false)

const manifiesto = JSON.parse(await readFile(manifestPath, 'utf8'))
const titulos = [...new Set(manifiesto.map((entrada) => entrada.file))]

// La API acepta hasta 50 títulos por petición.
const info = new Map()
for (let i = 0; i < titulos.length; i += 40) {
  const lote = await pedirInfo(titulos.slice(i, i + 40))
  for (const [clave, valor] of lote) info.set(clave, valor)
}

const porTema = new Map()
const rechazadas = []
const pesadas = []
/* Commons corta la tanda tras muchas descargas seguidas y el bloqueo dura
   minutos. Al primer corte se deja de pedir archivos, pero lo ya descargado se
   registra igual: antes, un solo fallo tiraba la ejecución entera y se perdía
   todo el trabajo. Volver a lanzar `npm run images` recoge lo que falte. */
let cortado = false

for (const entrada of manifiesto) {
  const datos = info.get(entrada.file)
  if (!datos) {
    rechazadas.push(`${entrada.file}: no existe en Commons`)
    continue
  }
  const meta = datos.extmetadata ?? {}
  const licencia = limpiar(meta.LicenseShortName?.value) || limpiar(meta.UsageTerms?.value)
  if (!licenciaValida(licencia)) {
    rechazadas.push(`${entrada.file}: licencia no admitida («${licencia || 'desconocida'}»)`)
    continue
  }

  const extension = (datos.thumburl.split('?')[0].match(/\.(jpg|jpeg|png|webp)$/i)?.[1] ?? 'jpg').toLowerCase()
  const nombreArchivo = `${entrada.name}.${extension === 'jpeg' ? 'jpg' : extension}`
  const carpeta = join(root, 'public', 'img', entrada.slug)
  await mkdir(carpeta, { recursive: true })
  const destino = join(carpeta, nombreArchivo)
  // Idempotente: si el archivo ya está, no se vuelve a pedir. Así una ejecución
  // interrumpida se retoma sin castigar de nuevo a los servidores de Commons.
  if (!(await existe(destino))) {
    if (cortado) {
      rechazadas.push(`${entrada.file}: pendiente, Commons cortó la tanda`)
      continue
    }
    try {
      const elegida = await miniaturaQueQuepa(entrada.file, datos)
      if (elegida.tamano && elegida.tamano > MAX_BYTES) {
        pesadas.push(`${entrada.slug}/${nombreArchivo}: ${Math.round(elegida.tamano / 1024)} KB a ${elegida.width} px`)
      }
      datos.thumbwidth = elegida.width
      datos.thumbheight = elegida.height
      await descargar(elegida.url, destino)
    } catch (error) {
      cortado = true
      rechazadas.push(`${entrada.file}: ${error.message}`)
      continue
    }
    // 3 s entre archivos. Con 1,5 s, Commons bloqueaba a las ochenta descargas.
    await dormir(3000)
  }

  const imagen = {
    src: `/img/${entrada.slug}/${nombreArchivo}`,
    alt: entrada.alt,
    width: datos.thumbwidth,
    height: datos.thumbheight,
    role: entrada.role,
    ...(entrada.section === undefined ? {} : { section: entrada.section }),
    ...(entrada.caption ? { caption: entrada.caption } : {}),
    author: limpiar(meta.Artist?.value).slice(0, 120) || 'Autor desconocido',
    title: titulo(meta.ObjectName?.value) || entrada.file.replace(/\.[a-z]+$/i, ''),
    year: anio(meta.DateTimeOriginal?.value) || 'sin fecha',
    source: 'Wikimedia Commons',
    license: licencia,
    url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(entrada.file.replaceAll(' ', '_'))}`,
  }
  const clave = PAISES ? entrada.country : entrada.slug
  if (!porTema.has(clave)) porTema.set(clave, [])
  porTema.get(clave).push(imagen)
}

const salida = [
  '// ARCHIVO GENERADO. No editar a mano: los cambios se pierden.',
  PAISES
    ? '// Fuente: scripts/country-images.json. Regenerar con `npm run images:paises`.'
    : '// Fuente: scripts/images.json. Regenerar con `npm run images`.',
  '//',
  '// Las imágenes viven aparte de los archivos de tema a propósito: su',
  '// procedencia y su licencia se revisan por su cuenta, y así una imagen se',
  '// puede sustituir sin tocar el texto de la lección.',
  "import type { TopicImage } from './types'",
  '',
  `export const ${exportName}: Record<string, TopicImage[]> = `,
  JSON.stringify(Object.fromEntries([...porTema].sort()), null, 2),
  '',
].join('\n')

await writeFile(salidaPath, salida, 'utf8')

const total = [...porTema.values()].reduce((n, lista) => n + lista.length, 0)
console.log(`imágenes: ${total} descargadas en ${porTema.size} temas.`)
if (pesadas.length) {
  console.warn(`
no caben en ${Math.round(MAX_BYTES / 1024)} KB ni al ancho mínimo (${pesadas.length}):`)
  for (const linea of pesadas) console.warn(`  - ${linea}`)
}
if (rechazadas.length) {
  console.warn(`\nrechazadas (${rechazadas.length}):`)
  for (const motivo of rechazadas) console.warn(`  - ${motivo}`)
  process.exitCode = 1
}
