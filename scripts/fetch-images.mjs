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
const manifestPath = join(root, 'scripts', 'images.json')
const API = 'https://commons.wikimedia.org/w/api.php'
const UA = 'HistoryaConAlex/1.0 (proyecto educativo; contacto vía repositorio)'

/** Ancho al que se pide la miniatura. Commons la genera al vuelo. */
const ANCHO = 1200

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

async function pedirInfo(titulos) {
  const url = new URL(API)
  url.searchParams.set('action', 'query')
  url.searchParams.set('format', 'json')
  url.searchParams.set('prop', 'imageinfo')
  url.searchParams.set('iiprop', 'url|extmetadata|size')
  url.searchParams.set('iiurlwidth', String(ANCHO))
  url.searchParams.set('titles', titulos.map((t) => `File:${t}`).join('|'))
  const respuesta = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!respuesta.ok) throw new Error(`Commons respondió ${respuesta.status}`)
  const datos = await respuesta.json()
  const porTitulo = new Map()
  for (const pagina of Object.values(datos.query?.pages ?? {})) {
    const nombre = String(pagina.title ?? '').replace(/^File:/, '')
    porTitulo.set(nombre, pagina.imageinfo?.[0] ?? null)
  }
  return porTitulo
}

const dormir = (ms) => new Promise((listo) => setTimeout(listo, ms))

/** Commons devuelve 429 si se le piden archivos demasiado seguidos. Se espera y
 *  se reintenta con retardo creciente en vez de abandonar a medias. */
async function descargar(url, destino) {
  for (let intento = 0; intento < 6; intento += 1) {
    const respuesta = await fetch(url, { headers: { 'User-Agent': UA } })
    if (respuesta.ok) {
      await writeFile(destino, Buffer.from(await respuesta.arrayBuffer()))
      return
    }
    if (respuesta.status !== 429 && respuesta.status < 500) {
      throw new Error(`descarga ${respuesta.status}`)
    }
    await dormir(5000 * (intento + 1))
  }
  throw new Error('descarga: 429 tras seis intentos. Vuelve a lanzar `npm run images`: lo ya descargado no se repite.')
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
    await descargar(datos.thumburl.split('?')[0], destino)
    await dormir(1500)
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
  if (!porTema.has(entrada.slug)) porTema.set(entrada.slug, [])
  porTema.get(entrada.slug).push(imagen)
}

const salida = [
  '// ARCHIVO GENERADO. No editar a mano: los cambios se pierden.',
  '// Fuente: scripts/images.json. Regenerar con `npm run images`.',
  '//',
  '// Las imágenes viven aparte de los archivos de tema a propósito: su',
  '// procedencia y su licencia se revisan por su cuenta, y así una imagen se',
  '// puede sustituir sin tocar el texto de la lección.',
  "import type { TopicImage } from './types'",
  '',
  'export const TOPIC_IMAGES: Record<string, TopicImage[]> = ',
  JSON.stringify(Object.fromEntries([...porTema].sort()), null, 2),
  '',
].join('\n')

await writeFile(join(root, 'src', 'data', 'topic-images.ts'), salida, 'utf8')

const total = [...porTema.values()].reduce((n, lista) => n + lista.length, 0)
console.log(`imágenes: ${total} descargadas en ${porTema.size} temas.`)
if (rechazadas.length) {
  console.warn(`\nrechazadas (${rechazadas.length}):`)
  for (const motivo of rechazadas) console.warn(`  - ${motivo}`)
  process.exitCode = 1
}
