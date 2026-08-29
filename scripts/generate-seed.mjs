// Genera supabase/seed.sql a partir de los temas de src/data/topics/.
//
// Existe para que haya una sola fuente de contenido: los archivos TypeScript.
// Antes el seed se escribía a mano y se quedaba por detrás del contenido real.
//
//   node --experimental-strip-types scripts/generate-seed.mjs
//   npm run seed
//
// El SQL resultante es idempotente: puede ejecutarse varias veces sin duplicar.
// Ningún id se escribe a mano; todo se resuelve por slug con subconsultas.

import { readdir, writeFile } from 'node:fs/promises'
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

function render(modules) {
  for (const { topic } of modules) checkTopic(topic)
  const out = []
  const countries = new Map()
  for (const { topic } of modules) countries.set(slugify(topic.country), topic.country)

  out.push('-- Historia Con Alex · contenido publicable')
  out.push('--')
  out.push('-- ARCHIVO GENERADO. No editar a mano: los cambios se pierden.')
  out.push('-- Fuente: src/data/topics/. Regenerar con `npm run seed`.')
  out.push('--')
  out.push('-- Ejecutar en el SQL Editor DESPUÉS de las migraciones de supabase/migrations/.')
  out.push('-- Idempotente: repetirlo no duplica filas.')
  out.push(`-- Temas: ${modules.length}. Preguntas: ${modules.reduce((n, m) => n + m.questions.length, 0)}.`)
  out.push('')
  out.push('begin;')
  out.push('')
  out.push('-- 0. Comprobación previa ------------------------------------------------------')
  out.push('-- Sin la segunda migración, el insert de topics falla con un 42703 poco claro')
  out.push('-- («column period_label does not exist»). Mejor avisar de qué falta y por qué.')
  out.push('do $$ begin')
  out.push("  if not exists (select 1 from information_schema.columns")
  out.push("    where table_schema = 'public' and table_name = 'topics' and column_name = 'period_label') then")
  out.push("    raise exception 'Falta la migración 20260827_content_metadata_and_answer_check.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';")
  out.push('  end if;')
  out.push("  if not exists (select 1 from information_schema.columns")
  out.push("    where table_schema = 'public' and table_name = 'topics' and column_name = 'cover_image') then")
  out.push("    raise exception 'Falta la migración 20260829_topic_cover_image.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';")
  out.push('  end if;')
  out.push('end $$;')
  out.push('')

  out.push('-- 1. Épocas ------------------------------------------------------------------')
  out.push('insert into public.eras (slug, title, sort_order, start_year, end_year, published) values')
  out.push(ERAS.map(([s, t, o, a, b]) => `  (${sql(s)}, ${sql(t)}, ${o}, ${a ?? 'null'}, ${b ?? 'null'}, true)`).join(',\n'))
  out.push('on conflict (slug) do update set')
  out.push('  title = excluded.title, sort_order = excluded.sort_order,')
  out.push('  start_year = excluded.start_year, end_year = excluded.end_year, published = excluded.published;')
  out.push('')

  out.push('-- 2. Países ------------------------------------------------------------------')
  out.push('insert into public.countries (slug, title, published) values')
  out.push([...countries].map(([slug, title]) => `  (${sql(slug)}, ${sql(title)}, true)`).join(',\n'))
  out.push('on conflict (slug) do update set title = excluded.title, published = excluded.published;')
  out.push('')

  out.push('-- 3. Temas -------------------------------------------------------------------')
  for (const { topic } of modules) {
    const minutes = Number.parseInt(topic.duration, 10) || 30
    const cover = coverImage(topic)
    out.push(`insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)`)
    out.push(`select ${sql(topic.id)},`)
    out.push(`  (select id from public.eras where slug = ${sql(ERA_SLUG[topic.era])}),`)
    out.push(`  (select id from public.countries where slug = ${sql(slugify(topic.country))}),`)
    out.push(`  ${sql(topic.title)}, ${sql(topic.description)}, ${sql(LEVEL[topic.level])},`)
    out.push(`  ${minutes}, ${sql(topic.years)}, ${sql(topic.visual)}, ${sql(topic.color)}, ${cover ? jsonb(cover) : 'null'}, true`)
    out.push('on conflict (slug) do update set')
    out.push('  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,')
    out.push('  summary = excluded.summary, education_level = excluded.education_level,')
    out.push('  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,')
    out.push('  glyph = excluded.glyph, accent_color = excluded.accent_color,')
    out.push('  cover_image = excluded.cover_image, published = excluded.published;')
    out.push('')
  }

  out.push('-- 3b. Temas retirados --------------------------------------------------------')
  out.push('-- Los insert de arriba solo actualizan: un tema renombrado o eliminado del')
  out.push('-- repositorio seguiría publicado. Se despublica en lugar de borrarlo para no')
  out.push('-- perder el progreso de quien ya lo hubiera leído.')
  out.push(`update public.topics set published = false where slug not in (${modules.map((m) => sql(m.topic.id)).join(', ')});`)
  out.push('')

  out.push('-- 4. Lecciones ---------------------------------------------------------------')
  out.push('-- El cuerpo va como array de bloques tipados: section, concepts, debates,')
  out.push('-- timeline y sources. No hacen falta columnas nuevas para el glosario,')
  out.push('-- el debate historiográfico ni la bibliografía.')
  for (const { topic } of modules) {
    out.push('insert into public.lessons (topic_id, title, body, position, published)')
    out.push(`select id, ${sql(topic.title)}, ${jsonb(lessonBody(topic))}, 0, true`)
    out.push(`from public.topics where slug = ${sql(topic.id)}`)
    out.push('on conflict (topic_id, position) do update set')
    out.push('  title = excluded.title, body = excluded.body, published = excluded.published;')
    out.push('')
  }

  out.push('-- 5. Preguntas ---------------------------------------------------------------')
  out.push('-- questions no tiene clave natural única, así que se borran y se reinsertan')
  out.push('-- por tema. question_options cae en cascada por su clave foránea.')
  out.push(`delete from public.questions where topic_id in (select id from public.topics where slug in (${modules.map((m) => sql(m.topic.id)).join(', ')}));`)
  out.push('')
  for (const { topic, questions } of modules) {
    for (const question of questions) {
      out.push('with nueva as (')
      out.push('  insert into public.questions (topic_id, prompt, explanation, difficulty, published)')
      out.push(`  select id, ${sql(question.question)}, ${sql(question.explanation)}, 3, true`)
      out.push(`  from public.topics where slug = ${sql(topic.id)}`)
      out.push('  returning id')
      out.push(')')
      out.push('insert into public.question_options (question_id, label, is_correct, position)')
      out.push('select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values')
      out.push(question.options.map((label, index) =>
        `  (${sql(label)}, ${index === question.answer}, ${index})`).join(',\n'))
      out.push(') as opcion(label, is_correct, position);')
      out.push('')
    }
  }

  out.push('commit;')
  out.push('')
  return out.join('\n')
}

const modules = await loadModules()
if (modules.length === 0) throw new Error('No se ha cargado ningún tema desde src/data/topics/')
const output = join(root, 'supabase', 'seed.sql')
await writeFile(output, render(modules), 'utf8')
const questions = modules.reduce((total, module) => total + module.questions.length, 0)
console.log(`seed.sql generado: ${modules.length} temas, ${questions} preguntas.`)
