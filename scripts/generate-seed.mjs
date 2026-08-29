// Genera los archivos de supabase/seed/ a partir de los temas de src/data/topics/.
//
// Existe para que haya una sola fuente de contenido: los archivos TypeScript.
// Antes el seed se escribía a mano y se quedaba por detrás del contenido real.
//
//   node --experimental-strip-types scripts/generate-seed.mjs
//   npm run seed
//
// El SQL resultante es idempotente: puede ejecutarse varias veces sin duplicar.
// Ningún id se escribe a mano; todo se resuelve por slug con subconsultas.
//
// Va repartido en varios archivos porque el SQL Editor de Supabase rechaza las
// consultas grandes con «Query is too large to be run via the SQL Editor», y el
// contenido completo pasa del megabyte y medio.

import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { imageProblem } from '../src/lib/images.ts'
import { TOPIC_IMAGES } from '../src/data/topic-images.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const topicsDir = join(root, 'src', 'data', 'topics')

/** Comillas simples de PostgreSQL. null si el valor no existe. */
function sql(value) {
  if (value === null || value === undefined) return 'null'
  return `'${String(value).replaceAll("'", "''")}'`
}

/** Un jsonb literal. Se serializa a JSON y se escapa como texto. */
function jsonb(value) {
  return `${sql(JSON.stringify(value))}::jsonb`
}

const ERA_SLUG = {
  'Antigüedad': 'antiguedad',
  'Edad Media': 'edad-media',
  'Edad Moderna': 'edad-moderna',
  'Edad Contemporánea': 'edad-contemporanea',
}

const ERAS = [
  ['antiguedad', 'Antigüedad', 0, -3500, 476],
  ['edad-media', 'Edad Media', 1, 476, 1453],
  ['edad-moderna', 'Edad Moderna', 2, 1453, 1789],
  ['edad-contemporanea', 'Edad Contemporánea', 3, 1789, null],
]

const LEVEL = { ESO: 'eso', Bachillerato: 'bachillerato', Universidad: 'universidad' }

// Deben coincidir con el check de accent_color en supabase/migrations/ y con las
// clases .visual-* de src/style.css. Un color fuera de esta lista rompía el seed
// a mitad de ejecución y dejaba la tarjeta sin color en la biblioteca.
const COLORS = ['gold', 'blue', 'terracotta', 'green', 'plum', 'red']

function checkTopic(topic) {
  if (!ERA_SLUG[topic.era]) throw new Error(`${topic.id}: época desconocida «${topic.era}»`)
  if (!LEVEL[topic.level]) throw new Error(`${topic.id}: nivel desconocido «${topic.level}»`)
  if (!COLORS.includes(topic.color)) {
    throw new Error(`${topic.id}: color «${topic.color}» no permitido. Usa uno de: ${COLORS.join(', ')}`)
  }
  // Las imágenes se validan AL GUARDAR y no solo al pintar (SPEC §10.10 y §14.3).
  // Aquí es donde el contenido entra en la base de datos, así que una ruta que no
  // pase la allowlist o una atribución incompleta tienen que parar el seed.
  for (const image of topic.images ?? []) {
    const problem = imageProblem(image)
    if (problem) throw new Error(`${topic.id}: imagen inválida — ${problem}`)
    if (image.role !== 'portada' && image.role !== 'figura') {
      throw new Error(`${topic.id}: imagen con role «${image.role}»; solo valen portada y figura`)
    }
  }
  if ((topic.images ?? []).filter((image) => image.role === 'portada').length > 1) {
    throw new Error(`${topic.id}: hay más de una portada`)
  }
}

/** La portada del tema, que sustituye al glifo en la tarjeta de la biblioteca. */
function coverImage(topic) {
  return (topic.images ?? []).find((image) => image.role === 'portada') ?? null
}

/** «Península ibérica» → «peninsula-iberica» */
function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function loadModules() {
  const files = (await readdir(topicsDir)).filter((name) => name.endsWith('.ts'))
  files.sort()
  const modules = []
  const isModule = (value) => value && typeof value === 'object' && value.topic && Array.isArray(value.questions)
  for (const file of files) {
    const imported = await import(pathToFileURL(join(topicsDir, file)).href)
    for (const value of Object.values(imported)) {
      if (isModule(value)) modules.push(value)
    }
  }
  // Igual que en history.ts: las imágenes viven aparte y se enganchan al tema.
  for (const module of modules) {
    module.topic.images = TOPIC_IMAGES[module.topic.id] ?? []
  }
  return modules
}

/**
 * La lección va en lessons.body como array de bloques tipados, igual que ya
 * hacía el esquema con section y timeline. Así el glosario, los debates y la
 * bibliografía no necesitan columnas nuevas.
 */
function lessonBody(topic) {
  const blocks = topic.sections.map((section) => ({
    type: 'section',
    title: section.title,
    text: section.body,
    callout: section.callout ?? null,
  }))
  if (topic.concepts?.length) blocks.push({ type: 'concepts', items: topic.concepts })
  if (topic.debates?.length) blocks.push({ type: 'debates', items: topic.debates })
  if (topic.keyDates?.length) blocks.push({ type: 'timeline', items: topic.keyDates })
  if (topic.sources?.length) blocks.push({ type: 'sources', items: topic.sources })
  // Las imágenes viajan como un bloque más, igual que el glosario o la
  // bibliografía. No hizo falta migración para aquellos y tampoco para estas.
  if (topic.images?.length) blocks.push({ type: 'images', items: topic.images })
  return blocks
}

/* 300 KB por archivo deja margen de sobra frente al límite del editor y mantiene
   el número de archivos manejable. Ninguna sentencia se parte por la mitad: si
   una sola no cupiera, iría igualmente sola en su archivo. */
const MAX_BYTES = 300 * 1024

/** Comprobación previa. Sin las migraciones, los insert fallan con errores poco
 *  claros; mejor decir qué falta y por qué. */
function comprobacionPrevia(exigirTemas) {
  const lineas = [
    'do $$ begin',
    '  if not exists (select 1 from information_schema.columns',
    "    where table_schema = 'public' and table_name = 'topics' and column_name = 'period_label') then",
    "    raise exception 'Falta la migración 20260827_content_metadata_and_answer_check.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';",
    '  end if;',
    '  if not exists (select 1 from information_schema.columns',
    "    where table_schema = 'public' and table_name = 'topics' and column_name = 'cover_image') then",
    "    raise exception 'Falta la migración 20260829_topic_cover_image.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';",
    '  end if;',
  ]
  if (exigirTemas) {
    // Sin esta comprobación, las partes de lecciones y preguntas se ejecutarían
    // sin insertar nada: sus insert son «select ... from topics where slug = ...»
    // y con la tabla vacía no dan error, simplemente no hacen nada.
    lineas.push('  if not exists (select 1 from public.topics) then')
    lineas.push("    raise exception 'La tabla topics está vacía. Ejecuta antes la parte 01-catalogo.sql.';")
    lineas.push('  end if;')
  }
  lineas.push('end $$;')
  return lineas.join('\n')
}

/** Épocas, países, temas y despublicación de los retirados. */
function sentenciasCatalogo(modules, countries) {
  const fuera = []
  fuera.push(
    [
      '-- Épocas',
      'insert into public.eras (slug, title, sort_order, start_year, end_year, published) values',
      ERAS.map(([s, t, o, a, b]) => `  (${sql(s)}, ${sql(t)}, ${o}, ${a ?? 'null'}, ${b ?? 'null'}, true)`).join(',\n'),
      'on conflict (slug) do update set',
      '  title = excluded.title, sort_order = excluded.sort_order,',
      '  start_year = excluded.start_year, end_year = excluded.end_year, published = excluded.published;',
    ].join('\n'),
  )
  fuera.push(
    [
      '-- Países',
      'insert into public.countries (slug, title, published) values',
      [...countries].map(([slug, title]) => `  (${sql(slug)}, ${sql(title)}, true)`).join(',\n'),
      'on conflict (slug) do update set title = excluded.title, published = excluded.published;',
    ].join('\n'),
  )
  for (const { topic } of modules) {
    const minutes = Number.parseInt(topic.duration, 10) || 30
    const cover = coverImage(topic)
    fuera.push(
      [
        `-- Tema: ${topic.id}`,
        'insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)',
        `select ${sql(topic.id)},`,
        `  (select id from public.eras where slug = ${sql(ERA_SLUG[topic.era])}),`,
        `  (select id from public.countries where slug = ${sql(slugify(topic.country))}),`,
        `  ${sql(topic.title)}, ${sql(topic.description)}, ${sql(LEVEL[topic.level])},`,
        `  ${minutes}, ${sql(topic.years)}, ${sql(topic.visual)}, ${sql(topic.color)}, ${cover ? jsonb(cover) : 'null'}, true`,
        'on conflict (slug) do update set',
        '  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,',
        '  summary = excluded.summary, education_level = excluded.education_level,',
        '  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,',
        '  glyph = excluded.glyph, accent_color = excluded.accent_color,',
        '  cover_image = excluded.cover_image, published = excluded.published;',
      ].join('\n'),
    )
  }
  fuera.push(
    [
      '-- Temas retirados. Los insert de arriba solo actualizan: un tema renombrado o',
      '-- eliminado del repositorio seguiría publicado. Se despublica en lugar de',
      '-- borrarlo para no perder el progreso de quien ya lo hubiera leído.',
      `update public.topics set published = false where slug not in (${modules.map((m) => sql(m.topic.id)).join(', ')});`,
    ].join('\n'),
  )
  return fuera
}

/** Una sentencia por lección. Son, con diferencia, las más grandes del seed. */
function sentenciasLecciones(modules) {
  return modules.map(({ topic }) =>
    [
      `-- Lección: ${topic.id}`,
      'insert into public.lessons (topic_id, title, body, position, published)',
      `select id, ${sql(topic.title)}, ${jsonb(lessonBody(topic))}, 0, true`,
      `from public.topics where slug = ${sql(topic.id)}`,
      'on conflict (topic_id, position) do update set',
      '  title = excluded.title, body = excluded.body, published = excluded.published;',
    ].join('\n'),
  )
}

/** El borrado previo y una sentencia por pregunta. */
function sentenciasPreguntas(modules) {
  const fuera = [
    [
      '-- questions no tiene clave natural única, así que se borran y se reinsertan',
      '-- por tema. question_options cae en cascada por su clave foránea.',
      '--',
      '-- OJO: este borrado va al principio de las preguntas. Si los archivos se',
      '-- ejecutan desordenados, las preguntas insertadas antes de esta línea se',
      '-- pierden. Ejecútalos en orden numérico.',
      `delete from public.questions where topic_id in (select id from public.topics where slug in (${modules.map((m) => sql(m.topic.id)).join(', ')}));`,
    ].join('\n'),
  ]
  for (const { topic, questions } of modules) {
    for (const question of questions) {
      fuera.push(
        [
          `-- Pregunta: ${question.id}`,
          'with nueva as (',
          '  insert into public.questions (topic_id, prompt, explanation, difficulty, published)',
          `  select id, ${sql(question.question)}, ${sql(question.explanation)}, 3, true`,
          `  from public.topics where slug = ${sql(topic.id)}`,
          '  returning id',
          ')',
          'insert into public.question_options (question_id, label, is_correct, position)',
          'select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values',
          question.options.map((label, index) => `  (${sql(label)}, ${index === question.answer}, ${index})`).join(',\n'),
          ') as opcion(label, is_correct, position);',
        ].join('\n'),
      )
    }
  }
  return fuera
}

/** Reparte las sentencias de un grupo en tandas que no pasen de MAX_BYTES. */
function repartir(sentencias) {
  const tandas = []
  let actual = []
  let bytes = 0
  for (const sentencia of sentencias) {
    const tamano = Buffer.byteLength(sentencia, 'utf8') + 2
    if (actual.length && bytes + tamano > MAX_BYTES) {
      tandas.push(actual)
      actual = []
      bytes = 0
    }
    actual.push(sentencia)
    bytes += tamano
  }
  if (actual.length) tandas.push(actual)
  return tandas
}

function render(modules) {
  for (const { topic } of modules) checkTopic(topic)
  const countries = new Map()
  for (const { topic } of modules) countries.set(slugify(topic.country), topic.country)

  const grupos = [
    { nombre: 'catalogo', sentencias: sentenciasCatalogo(modules, countries) },
    { nombre: 'lecciones', sentencias: sentenciasLecciones(modules) },
    { nombre: 'preguntas', sentencias: sentenciasPreguntas(modules) },
  ]

  const tandas = []
  for (const grupo of grupos) {
    for (const sentencias of repartir(grupo.sentencias)) {
      tandas.push({ grupo: grupo.nombre, sentencias })
    }
  }

  const preguntas = modules.reduce((n, m) => n + m.questions.length, 0)
  return tandas.map((tanda, indice) => {
    const numero = String(indice + 1).padStart(2, '0')
    const cuerpo = [
      `-- Historya con Alex · contenido publicable — parte ${numero} de ${tandas.length} (${tanda.grupo})`,
      '--',
      '-- ARCHIVO GENERADO. No editar a mano: los cambios se pierden.',
      '-- Fuente: src/data/topics/ y src/data/topic-images.ts. Regenerar con `npm run seed`.',
      '--',
      '-- Ejecutar EN ORDEN NUMÉRICO en el SQL Editor, después de las migraciones de',
      '-- supabase/migrations/. Está partido porque el editor rechaza las consultas',
      '-- grandes con «Query is too large to be run via the SQL Editor».',
      '-- Cada archivo es una transacción propia e idempotente: repetirlo no duplica.',
      `-- Contenido completo: ${modules.length} temas y ${preguntas} preguntas.`,
      '',
      'begin;',
      '',
      comprobacionPrevia(indice > 0),
      '',
      tanda.sentencias.join('\n\n'),
      '',
      'commit;',
      '',
    ].join('\n')
    return { archivo: `${numero}-${tanda.grupo}.sql`, cuerpo }
  })
}

const modules = await loadModules()
if (modules.length === 0) throw new Error('No se ha cargado ningún tema desde src/data/topics/')

const salida = join(root, 'supabase', 'seed')
await mkdir(salida, { recursive: true })

// Se limpian los .sql anteriores: si el contenido encoge, un archivo sobrante de
// una ejecución previa se quedaría ahí y alguien acabaría ejecutándolo.
for (const nombre of await readdir(salida)) {
  if (nombre.endsWith('.sql')) await rm(join(salida, nombre))
}

const partes = render(modules)
for (const { archivo, cuerpo } of partes) {
  await writeFile(join(salida, archivo), cuerpo, 'utf8')
}

const questions = modules.reduce((total, module) => total + module.questions.length, 0)
console.log(`seed generado en supabase/seed/: ${modules.length} temas, ${questions} preguntas.`)
for (const { archivo, cuerpo } of partes) {
  console.log(`  ${archivo.padEnd(22)} ${(Buffer.byteLength(cuerpo, 'utf8') / 1024).toFixed(0)} KB`)
}
console.log('Ejecútalos en orden numérico en el SQL Editor.')
