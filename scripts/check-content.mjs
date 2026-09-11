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
//   6. Que ningún archivo del seed se pase de tamaño: el SQL Editor de Supabase
//      rechaza las consultas grandes y el fallo solo aparece al pegarlo allí.

import { access, readdir, readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { safeImageSrc, imageProblem } from '../src/lib/images.ts'
import { multiplierFor, pointsFor, BASE_POINTS, TIME_BONUS, MAX_MULTIPLIER, SECONDS_PER_QUESTION } from '../src/lib/scoring.ts'
import { shuffled } from '../src/lib/shuffle.ts'
import { TOPIC_DOCUMENTS } from '../src/data/documents.ts'
import { FLAG_CODES, flagCodeByNumericId } from '../src/lib/country-codes.ts'
import { topics, quizQuestions, eras } from '../src/data/history.ts'
import { flagCode } from '../src/lib/country-names.ts'
import { atlasCountries } from '../src/lib/regions.ts'
import { countryFacts, factRows, formatPopulation, formatArea } from '../src/lib/countries.ts'
import { ES_NAMES } from '../src/lib/country-names.ts'
import { COUNTRY_HISTORIES, countryHistory } from '../src/data/country-histories/index.ts'
import { COUNTRY_IMAGES } from '../src/data/country-images.ts'

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
// Con la constante, no con el 20 escrito a mano: al subir el reloj a 40 s este
// caso pasaba a comprobar un tope que ya no existía.
ok(pointsFor(1, 999) === BASE_POINTS + SECONDS_PER_QUESTION * TIME_BONUS, 'el tiempo restante se limita al del reloj')
ok(pointsFor(1, -3) === BASE_POINTS, 'un tiempo negativo no resta puntos')
ok(SECONDS_PER_QUESTION >= 30, 'el reloj debe dar tiempo a leer el enunciado y las cuatro opciones')

// 2.a.2 Las reglas de puntuación están escritas dos veces --------------------
// En src/lib/scoring.ts, para el navegador, y en la migración 20260910, para el
// servidor, que es quien manda (SPEC §10.4). Con las reglas duplicadas, la única
// forma de que no se separen en silencio es comparar los dos sitios.
const reglasSql = await readFile(join(root, 'supabase', 'migrations', '20260910_quiz_score.sql'), 'utf8')
const constantes = reglasSql.match(/select\s+(\d+),\s*(\d+),\s*(\d+),\s*(\d+);/)
ok(constantes !== null, 'no se encuentran las constantes de puntuación en 20260910_quiz_score.sql')
if (constantes) {
  const [, base, bonus, tope, segundos] = constantes.map(Number)
  ok(base === BASE_POINTS, `BASE_POINTS: ${BASE_POINTS} en scoring.ts y ${base} en la migración`)
  ok(bonus === TIME_BONUS, `TIME_BONUS: ${TIME_BONUS} en scoring.ts y ${bonus} en la migración`)
  ok(tope === MAX_MULTIPLIER, `MAX_MULTIPLIER: ${MAX_MULTIPLIER} en scoring.ts y ${tope} en la migración`)
  ok(segundos === SECONDS_PER_QUESTION, `SECONDS_PER_QUESTION: ${SECONDS_PER_QUESTION} en scoring.ts y ${segundos} en la migración`)
}
// Lo que el servidor NO puede verificar tiene que estar acotado: si el recorte
// del tiempo desapareciera, un cliente modificado inflaría la puntuación.
ok(reglasSql.includes('least(floor(answer.seconds_left)::integer, rules.seconds_per_question)'),
  'la migración debe recortar los segundos declarados por el cliente')
ok(reglasSql.includes('distinct on (question_id)'),
  'la migración debe quedarse con una sola respuesta por pregunta')

// 2.b Barajado de las opciones ---------------------------------------------
// La respuesta correcta está en la segunda posición en el 85 % de las preguntas
// escritas. Si el barajado dejara de aplicarse, el quiz volvería a aprobarse
// contestando siempre la «b», así que se comprueba que reparte de verdad.
const original = ['a', 'b', 'c', 'd']
ok(shuffled(original).length === 4, 'barajar no debe perder ni añadir opciones')
ok(new Set(shuffled(original)).size === 4, 'barajar no debe repetir opciones')
ok(shuffled(original).every((x) => original.includes(x)), 'barajar no debe inventar opciones')
ok(original.join('') === 'abcd', 'barajar no debe modificar el array que recibe')

const reparto = [0, 0, 0, 0]
for (let i = 0; i < 4000; i += 1) reparto[shuffled(original).indexOf('b')] += 1
for (const [posicion, veces] of reparto.entries()) {
  // 1000 esperadas de 4000. Un margen del 30 % deja pasar la variación normal y
  // sigue cazando un barajado que no baraja.
  ok(veces > 700 && veces < 1300, `la opción «b» cae ${veces} de 4000 veces en la posición ${posicion}`)
}

// 2.c.2 Documentos comentados ------------------------------------------------
// Un documento apuntando a un apartado que no existe no se pintaría nunca, y
// nadie se enteraría de que falta. Y un documento sin pregunta es una cita, no
// un ejercicio: la pregunta es lo que lo convierte en documento COMENTADO.
for (const [slug, docs] of Object.entries(TOPIC_DOCUMENTS)) {
  const tema = topics.find((topic) => topic.id === slug)
  ok(tema !== undefined, `documents.ts tiene «${slug}», que no es ningún tema`)
  if (!tema) continue
  for (const doc of docs) {
    ok(
      Number.isInteger(doc.section) && doc.section >= 0 && doc.section < tema.sections.length,
      `${slug}: documento «${doc.title}» apunta al apartado ${doc.section}, que no existe`,
    )
    ok(doc.text.trim().length > 0, `${slug}: documento «${doc.title}» sin texto`)
    ok(doc.source.trim().length > 0, `${slug}: documento «${doc.title}» sin fuente citada`)
    ok(doc.question.trim().length > 0, `${slug}: documento «${doc.title}» sin pregunta`)
  }
}
// prehistoria no tiene documento a propósito: es el periodo anterior a la
// escritura. Se comprueba para que quede claro que es decisión, no descuido.
ok(TOPIC_DOCUMENTS.prehistoria === undefined, 'prehistoria no debe tener documento: no hay fuentes escritas')

// 2.d Fichas de país --------------------------------------------------------
// El globo dibuja 142 países y solo 22 tienen lección: sin estos datos, pinchar
// en cualquiera de los otros 120 no mostraba nada. Si un país del atlas se queda
// sin ficha, vuelve a haber un agujero en el globo y nadie se entera.
for (const nombre of Object.values(ES_NAMES)) {
  ok(countryFacts(nombre) !== null, `${nombre} es país del atlas y no tiene ficha de datos`)
}
// Todo país del globo tiene historia breve, y ninguna historia apunta a un país
// que el atlas no conoce: se quedaría escrita sin que nadie pudiera leerla.
const atlasEs = new Set(Object.values(ES_NAMES))
for (const nombre of atlasEs) {
  const historia = countryHistory(nombre)
  ok(historia !== null, `${nombre} es país del atlas y no tiene historia`)
  if (!historia) continue
  ok(historia.text.length > 0 && historia.text.every((p) => p.trim().length > 0), `${nombre}: historia sin texto`)
  ok(historia.dates.length > 0 && historia.dates.every(([f, e]) => f.trim() && e.trim()), `${nombre}: historia sin fechas`)
}
for (const nombre of Object.keys(COUNTRY_HISTORIES)) {
  ok(atlasEs.has(nombre), `hay historia de «${nombre}», que no es un país del atlas`)
}
// Portadas de país: misma validación que las de los temas, archivo en disco y
// clave que exista en el atlas.
for (const [nombre, lista] of Object.entries(COUNTRY_IMAGES)) {
  ok(atlasEs.has(nombre), `hay portada de «${nombre}», que no es un país del atlas`)
  for (const imagen of lista) {
    const problema = imageProblem(imagen)
    ok(problema === null, `portada de ${nombre}: ${problema}`)
    ok(await existe(join(root, 'public', imagen.src)), `portada de ${nombre}: falta ${imagen.src}`)
  }
}
for (const nombre of atlasEs) ok(COUNTRY_IMAGES[nombre]?.length > 0, `${nombre} no tiene foto de portada`)

ok(countryHistory('constructor') === null, 'countryHistory no debe devolver propiedades heredadas')

ok(countryFacts('Europa') === null, '«Europa» no es un país del atlas y no debe tener ficha')
ok(countryFacts('Mundo') === null, '«Mundo» no es un país del atlas y no debe tener ficha')

// Un dato ausente no se pinta, en vez de enseñar un hueco o un guión.
ok(formatPopulation(null) === null, 'sin población no se pinta la fila')
ok(formatPopulation(0) === null, 'una población de cero no se pinta')
ok(formatPopulation(-5) === null, 'una población negativa no se pinta')
ok(formatArea(null) === null, 'sin superficie no se pinta la fila')
ok(formatPopulation(41454761).includes('M'), 'las poblaciones de millones se abrevian')
ok(formatArea(652230).endsWith('km²'), 'la superficie lleva unidad')
ok(factRows(null).length === 0, 'sin ficha no hay filas que pintar')
ok(
  factRows({ code: 'xx', name: 'X', capital: null, continent: null, population: null, area: null }).length === 0,
  'una ficha sin ningún dato no pinta filas vacías',
)

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

// 6. Archivos del seed ------------------------------------------------------
// El SQL Editor rechaza las consultas grandes con «Query is too large to be run
// via the SQL Editor». El límite real ronda el megabyte; se avisa mucho antes.
const LIMITE_SEED = 900 * 1024
const dirSeed = join(root, 'supabase', 'seed')
const archivosSeed = (await readdir(dirSeed)).filter((nombre) => nombre.endsWith('.sql')).sort()
ok(archivosSeed.length > 0, 'no hay archivos en supabase/seed/. Ejecuta `npm run seed`.')
for (const [indice, nombre] of archivosSeed.entries()) {
  const esperado = String(indice + 1).padStart(2, '0')
  ok(nombre.startsWith(`${esperado}-`), `los archivos del seed deben ir numerados sin huecos; se esperaba ${esperado}- y hay ${nombre}`)
  const { size } = await stat(join(dirSeed, nombre))
  ok(size <= LIMITE_SEED, `supabase/seed/${nombre} pesa ${(size / 1024).toFixed(0)} KB y el SQL Editor lo rechazará. Baja MAX_BYTES en scripts/generate-seed.mjs.`)
  const contenido = await readFile(join(dirSeed, nombre), 'utf8')
  ok(/^begin;$/m.test(contenido), `supabase/seed/${nombre}: falta el begin`)
  ok(contenido.trimEnd().endsWith('commit;'), `supabase/seed/${nombre}: no termina en commit`)
}

// --------------------------------------------------------------------------
if (fallos.length) {
  console.error(`FALLOS (${fallos.length} de ${comprobaciones} comprobaciones):`)
  for (const fallo of fallos) console.error(`  - ${fallo}`)
  process.exit(1)
}
console.log(`OK: ${comprobaciones} comprobaciones.`)
