// Comprobaciones del contenido y de las reglas que no se pueden romper.
//
//   npm test
//
// No hay framework de tests a propósito: esto son asserts que se ejecutan con
// Node y fallan con un mensaje claro. Cubre lo que de verdad se puede romper en
// silencio en este proyecto:
//
//   1. La validación de rutas de imagen (SPEC §10.10). Es seguridad, y si deja
//      de rechazar un dominio externo nadie se daría cuenta hasta producción.
//   2. La puntuación del quiz, la única lógica no trivial de la partida.
//   3. Los filtros de la biblioteca: que cada tema tenga una época y un nivel de
//      los que los filtros ofrecen, o el tema queda invisible.
//   4. Integridad del banco de preguntas: ids únicos, cuatro opciones y una
//      respuesta dentro de rango.
//   5. Que cada imagen y cada bandera referenciadas existan en disco.

import { access, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { safeImageSrc, imageProblem } from '../src/lib/images.ts'
import { multiplierFor, pointsFor, BASE_POINTS, TIME_BONUS, MAX_MULTIPLIER } from '../src/lib/scoring.ts'
import { FLAG_CODES, flagCodeByNumericId } from '../src/lib/country-codes.ts'
import { topics, quizQuestions, eras } from '../src/data/history.ts'
import { flagCode } from '../src/lib/country-names.ts'
import { atlasCountries } from '../src/lib/regions.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const fallos = []
let comprobaciones = 0

function ok(condicion, mensaje) {
  comprobaciones += 1
  if (!condicion) fallos.push(mensaje)
}

const existe = (ruta) => access(ruta).then(() => true, () => false)

// 1. Rutas de imagen -------------------------------------------------------
// Lo que TIENE que pasar.
ok(safeImageSrc('/img/egipto/portada.jpg') === '/img/egipto/portada.jpg', 'una ruta local válida debería aceptarse')
ok(safeImageSrc('/img/flags/es.svg') === '/img/flags/es.svg', 'una bandera local debería aceptarse')
// Lo que NO puede pasar nunca. Cada una de estas es una fuga de IP y Referer
// del visitante a un tercero, o una ruta fuera de public/img.
for (const peligro of [
  'https://ejemplo.invalido/foto.jpg',
  'http://localhost/img/x.jpg',
  '//ejemplo.invalido/foto.jpg',
  '/img/../../etc/passwd',
  '/img/x.jpg/../../secreto.jpg',
  'javascript:alert(1)',
  'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=',
  '/otros/x.jpg',
  '/img/x.exe',
  '',
  null,
  undefined,
  42,
  { src: '/img/x.jpg' },
]) {
  ok(safeImageSrc(peligro) === null, `safeImageSrc debería rechazar ${JSON.stringify(peligro)}`)
}

// Atribución: sin ella no se pinta, porque varias licencias la exigen.
const imagenBase = {
  src: '/img/egipto/portada.jpg', width: 1200, height: 800, alt: 'Descripción',
  author: 'A', title: 'B', year: '1900', source: 'Wikimedia Commons', license: 'Public domain',
  url: 'https://commons.wikimedia.org/wiki/File:X.jpg',
}
ok(imageProblem(imagenBase) === null, 'una imagen completa no debería dar problema')
for (const campo of ['alt', 'author', 'title', 'year', 'source', 'license', 'url']) {
  ok(imageProblem({ ...imagenBase, [campo]: '' }) !== null, `debería rechazarse una imagen sin ${campo}`)
}
ok(imageProblem({ ...imagenBase, width: undefined }) !== null, 'debería rechazarse una imagen sin width')
ok(imageProblem({ ...imagenBase, src: 'https://ejemplo.invalido/x.jpg' }) !== null, 'debería rechazarse un origen externo')

// 2. Puntuación del quiz ---------------------------------------------------
ok(multiplierFor(0) === 1, 'sin racha el multiplicador es 1')
ok(multiplierFor(1) === 1, 'con un acierto el multiplicador sigue siendo 1')
ok(multiplierFor(2) === 2, 'a los dos aciertos seguidos el multiplicador sube a 2')
ok(multiplierFor(6) === MAX_MULTIPLIER, 'el multiplicador llega al tope con seis aciertos')
ok(multiplierFor(100) === MAX_MULTIPLIER, 'el multiplicador no pasa del tope')
ok(multiplierFor(-5) === 1, 'una racha negativa no rompe el multiplicador')
ok(pointsFor(1, 0) === BASE_POINTS, 'un acierto sin tiempo restante vale los puntos base')
ok(pointsFor(1, 10) === BASE_POINTS + 10 * TIME_BONUS, 'el tiempo restante suma')
ok(pointsFor(2, 0) === BASE_POINTS * 2, 'la racha multiplica los puntos base')
ok(pointsFor(1, 999) === BASE_POINTS + 20 * TIME_BONUS, 'el tiempo restante se limita al del reloj')
ok(pointsFor(1, -3) === BASE_POINTS, 'un tiempo negativo no resta puntos')

// 3. Filtros de la biblioteca ----------------------------------------------
const EPOCAS = new Set(eras.map((era) => era.name))
const NIVELES = new Set(['ESO', 'Bachillerato', 'Universidad'])
for (const topic of topics) {
  ok(EPOCAS.has(topic.era), `${topic.id}: época «${topic.era}» fuera del filtro de la biblioteca`)
  ok(NIVELES.has(topic.level), `${topic.id}: nivel «${topic.level}» fuera del filtro de la biblioteca`)
}
for (const era of eras) {
  ok(topics.some((topic) => topic.era === era.name), `el filtro «${era.name}» no devuelve ningún tema`)
}

// 4. Banco de preguntas ----------------------------------------------------
const vistos = new Set()
for (const pregunta of quizQuestions) {
  ok(!vistos.has(pregunta.id), `id de pregunta repetido: ${pregunta.id}`)
  vistos.add(pregunta.id)
  ok(pregunta.options.length === 4, `${pregunta.id}: debería tener cuatro opciones`)
  ok(
    Number.isInteger(pregunta.answer) && pregunta.answer >= 0 && pregunta.answer < pregunta.options.length,
    `${pregunta.id}: la respuesta ${pregunta.answer} está fuera de rango`,
  )
  ok(new Set(pregunta.options).size === pregunta.options.length, `${pregunta.id}: tiene opciones repetidas`)
  ok(pregunta.explanation.trim().length > 0, `${pregunta.id}: sin explicación`)
  ok(topics.some((topic) => topic.id === pregunta.topicId), `${pregunta.id}: apunta a un tema que no existe`)
}
for (const topic of topics) {
  ok(
    quizQuestions.some((pregunta) => pregunta.topicId === topic.id),
    `${topic.id}: no tiene ninguna pregunta, así que su quiz saldría vacío`,
  )
}

// 5. Archivos en disco ------------------------------------------------------
for (const topic of topics) {
  for (const imagen of topic.images ?? []) {
    const problema = imageProblem(imagen)
    ok(problema === null, `${topic.id}: ${problema}`)
    ok(await existe(join(root, 'public', imagen.src)), `${topic.id}: falta el archivo ${imagen.src}`)
  }
  const portadas = (topic.images ?? []).filter((imagen) => imagen.role === 'portada')
  ok(portadas.length <= 1, `${topic.id}: tiene más de una portada`)
  for (const figura of (topic.images ?? []).filter((imagen) => imagen.role === 'figura')) {
    ok(
      Number.isInteger(figura.section) && figura.section >= 0 && figura.section < topic.sections.length,
      `${topic.id}: la figura ${figura.src} apunta al apartado ${figura.section}, que no existe`,
    )
  }
}

const banderas = new Set(await readdir(join(root, 'public', 'img', 'flags')))
for (const code of FLAG_CODES) {
  ok(banderas.has(`${code}.svg`), `falta la bandera ${code}.svg. Ejecuta \`npm run flags\`.`)
}
ok(flagCode('España') === 'es', 'España debería resolver a la bandera es')
ok(flagCode('Japón') === 'jp', 'Japón debería resolver a la bandera jp')
ok(flagCode('Europa') === null, '«Europa» no es un país y no debe tener bandera')
ok(flagCode('Mundo') === null, '«Mundo» no es un país y no debe tener bandera')
ok(flagCodeByNumericId('724') === 'es', 'el id numérico 724 del atlas es España')
ok(flagCodeByNumericId('4') === 'af', 'el id numérico se compara con ceros a la izquierda')
ok(flagCodeByNumericId('999') === null, 'un id numérico desconocido devuelve null')

// Todo país al que apunte un tema tiene que existir en el atlas, o el tema no se
// puede alcanzar desde el globo y nadie se entera.
for (const topic of topics) {
  const paises = atlasCountries(topic.country)
  for (const pais of paises) {
    ok(flagCode(pais) !== null, `${topic.id}: «${pais}» no está en el atlas`)
  }
}

// --------------------------------------------------------------------------
if (fallos.length) {
  console.error(`FALLOS (${fallos.length} de ${comprobaciones} comprobaciones):`)
  for (const fallo of fallos) console.error(`  - ${fallo}`)
  process.exit(1)
}
console.log(`OK: ${comprobaciones} comprobaciones.`)
