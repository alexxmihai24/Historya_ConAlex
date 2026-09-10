// Ejecuta las migraciones y el seed contra un Postgres de verdad ANTES de que
// lleguen al SQL Editor de Supabase.
//
//   npm run check:sql
//
// Por qué existe: el 10/09/2026 se entregaron tres migraciones que nunca se
// habían ejecutado, y dos fallaron en producción. Una tenía una subconsulta
// dentro de un CHECK, que Postgres no admite. Otra dejaba pasar un array vacío
// porque array_length('{}') devuelve NULL y un CHECK solo rechaza FALSE. Leer el
// SQL no encuentra ninguno de los dos: hay que ejecutarlo.
//
// Usa PGlite, Postgres compilado a WebAssembly, en memoria. No hace falta Docker
// ni la clave service_role, y NO toca Supabase: la base de datos nace y muere
// dentro de este proceso.
//
// Además de comprobar que el SQL corre, prueba las políticas RLS con dos
// usuarios simulados (B2 del checklist de seguridad) y el cálculo de puntos del
// servidor. Lo que no prueba es que producción coincida con estos archivos: si
// alguien toca una política desde el panel, eso solo se ve contra el servidor
// real, con `npm run check:security`.

import { PGlite } from '@electric-sql/pglite'
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const MIGRACIONES = join(root, 'supabase', 'migrations')
const SEED = join(root, 'supabase', 'seed')

// Lo que Supabase trae de serie y las migraciones dan por hecho. auth.uid()
// lee el claim `sub` igual que en Supabase, así que se puede simular una sesión.
// raw_user_meta_data hace falta porque el trigger handle_new_user la lee.
const STUB = `
create schema if not exists auth;
create table if not exists auth.users (
  id uuid primary key default gen_random_uuid(),
  email text,
  raw_user_meta_data jsonb not null default '{}'::jsonb
);
create or replace function auth.uid() returns uuid language sql stable as $$
  select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
$$;
do $$ begin create role anon nologin; exception when duplicate_object then null; end $$;
do $$ begin create role authenticated nologin; exception when duplicate_object then null; end $$;
grant usage on schema public to anon, authenticated;
grant usage on schema auth to anon, authenticated;
grant execute on function auth.uid() to anon, authenticated;
`

const db = new PGlite()
const fallos = []
let pasos = 0

/** Un archivo = una transacción, igual que el SQL Editor. */
async function ejecutar(nombre, sql, { debeFallar = null } = {}) {
  pasos += 1
  try {
    await db.exec(`begin;\n${sql}\ncommit;`)
    if (debeFallar) {
      fallos.push(`${nombre}: debía fallar con «${debeFallar}» y no falló`)
      console.log(`  [FALLO] ${nombre}`)
    } else {
      console.log(`  [ok]    ${nombre}`)
    }
  } catch (error) {
    await db.exec('rollback;').catch(() => {})
    if (debeFallar && error.message.includes(debeFallar)) {
      console.log(`  [ok]    ${nombre} falla como se espera: ${error.message}`)
    } else {
      fallos.push(`${nombre}: ${error.message}`)
      console.log(`  [FALLO] ${nombre}: ${error.message}`)
    }
  }
}

function comprobar(descripcion, condicion, detalle = '') {
  pasos += 1
  const linea = `${descripcion}${detalle ? ` · ${detalle}` : ''}`
  if (condicion) console.log(`  [ok]    ${linea}`)
  else {
    fallos.push(linea)
    console.log(`  [FALLO] ${linea}`)
  }
}

const leer = (carpeta, archivo) => readFile(join(carpeta, archivo), 'utf8')
const migraciones = (await readdir(MIGRACIONES)).filter((f) => f.endsWith('.sql')).sort()
const semillas = (await readdir(SEED)).filter((f) => f.endsWith('.sql')).sort()

console.log('\n1. Base de datos nueva: migraciones en orden')
await db.exec(STUB)
for (const archivo of migraciones) await ejecutar(archivo, await leer(MIGRACIONES, archivo))

console.log('\n2. Seed en orden')
for (const archivo of semillas) await ejecutar(`seed/${archivo}`, await leer(SEED, archivo))

console.log('\n3. Volver a ejecutar, que es lo que pasa en producción')
// El esquema inicial NO es repetible y no debe serlo: ya está aplicado, y
// ejecutarlo otra vez tiene que fallar sin cambiar nada.
await ejecutar('20260826_initial_schema.sql otra vez', await leer(MIGRACIONES, '20260826_initial_schema.sql'), {
  debeFallar: 'already exists',
})
// Las posteriores sí tienen que poder repetirse: si una falla a medias, se
// vuelve a lanzar y ya está.
for (const archivo of migraciones.filter((f) => f >= '20260829')) {
  await ejecutar(`${archivo} otra vez`, await leer(MIGRACIONES, archivo))
}
for (const archivo of semillas) await ejecutar(`seed/${archivo} otra vez`, await leer(SEED, archivo))

console.log('\n4. Contenido cargado')
const cuenta = async (sql) => (await db.query(sql)).rows[0].n
const temas = await cuenta('select count(*)::int as n from public.topics where published')
comprobar('35 temas publicados', temas === 35, `${temas}`)
const preguntas = await cuenta('select count(*)::int as n from public.questions where published')
comprobar('555 preguntas publicadas', preguntas === 555, `${preguntas}`)
const niveles = await cuenta(`select count(*)::int as n from public.topics
  where levels = array['eso','bachillerato','universidad']::public.education_level[]`)
comprobar('los 35 temas con los tres niveles', niveles === 35, `${niveles}`)
const portadas = await cuenta('select count(*)::int as n from public.topics where cover_image is not null')
comprobar('35 portadas', portadas === 35, `${portadas}`)

console.log('\n5. El CHECK de niveles rechaza lo que debe')
for (const [caso, valor] of [
  ['vacío', `'{}'`],
  ['repetido', `array['eso','eso']::public.education_level[]`],
  ['curioso', `array['curioso']::public.education_level[]`],
]) {
  await ejecutar(`levels ${caso}`, `update public.topics set levels = ${valor} where slug = 'egipto';`, {
    debeFallar: 'topics_levels_shape',
  })
}

console.log('\n6. RLS con dos usuarios (B2 del checklist de seguridad)')
const A = '11111111-1111-1111-1111-111111111111'
const B = '22222222-2222-2222-2222-222222222222'
await db.exec(`insert into auth.users (id, email) values ('${A}', 'a@prueba'), ('${B}', 'b@prueba') on conflict do nothing;`)
await db.exec(`insert into public.profiles (id) values ('${A}'), ('${B}') on conflict do nothing;`)

const { rows: [pregunta] } = await db.query(`
  select q.id as question_id,
    (select o.id from public.question_options o where o.question_id = q.id and o.is_correct) as correcta
  from public.questions q where q.published limit 1`)
const { rows: [otra] } = await db.query(`
  select q.id as question_id,
    (select o.id from public.question_options o where o.question_id = q.id and o.is_correct) as correcta
  from public.questions q where q.published and q.id <> $1 limit 1`, [pregunta.question_id])

/** Ejecuta como un usuario con sesión: rol authenticated y claim sub fijado. */
async function como(usuario, sql) {
  await db.exec(`set role authenticated; set request.jwt.claim.sub = '${usuario}';`)
  try {
    return (await db.query(sql)).rows
  } finally {
    await db.exec('reset role; reset request.jwt.claim.sub;')
  }
}

async function rechazado(usuario, sql) {
  try {
    await como(usuario, sql)
    return null
  } catch (error) {
    return error.message
  }
}

// A juega dos aciertos seguidos y declara 999 segundos, que no existen.
const respuestasA = JSON.stringify([
  { question_id: pregunta.question_id, option_id: pregunta.correcta, seconds_left: 999 },
  { question_id: otra.question_id, option_id: otra.correcta, seconds_left: 999 },
])
await como(A, `select public.submit_quiz_attempt('global', '${respuestasA}'::jsonb)`)
const intentoA = (await db.query(`select * from public.quiz_attempts where user_id = '${A}'`)).rows[0]
// Racha 1 -> x1, racha 2 -> x2, y el tiempo recortado a 40 s -> 200 de bonus cada una.
comprobar('el servidor calcula los puntos', intentoA?.points === 100 * 1 + 200 + 100 * 2 + 200, `${intentoA?.points} puntos`)
comprobar('el tiempo declarado se recorta a 40 s', intentoA?.seconds_spent === 0, `${intentoA?.seconds_spent} s gastados`)
comprobar('la racha sale del orden', intentoA?.best_streak === 2, `racha ${intentoA?.best_streak}`)

// La misma pregunta acertada cincuenta veces no puede inflar nada.
const repetida = JSON.stringify(
  Array.from({ length: 50 }, () => ({ question_id: pregunta.question_id, option_id: pregunta.correcta, seconds_left: 40 })),
)
await como(B, `select public.submit_quiz_attempt('global', '${repetida}'::jsonb)`)
const intentoB = (await db.query(`select * from public.quiz_attempts where user_id = '${B}'`)).rows[0]
comprobar('cincuenta respuestas iguales cuentan como una', intentoB?.total_questions === 1, `${intentoB?.total_questions} contada(s)`)

const deA = await como(B, `select id from public.quiz_attempts where user_id = '${A}'`)
comprobar('B no ve los intentos de A', deA.length === 0, `${deA.length} filas`)
const todosB = await como(B, 'select user_id from public.quiz_attempts')
comprobar('B solo ve lo suyo', todosB.every((fila) => fila.user_id === B), `${todosB.length} filas, todas de B`)
const perfilA = await como(B, `select id from public.profiles where id = '${A}'`)
comprobar('B no ve el perfil de A', perfilA.length === 0, `${perfilA.length} filas`)

const progresoAjeno = await rechazado(B, `insert into public.learning_progress (user_id, lesson_id, percent_complete)
  select '${A}', id, 50 from public.lessons limit 1`)
comprobar('B no escribe progreso a nombre de A', progresoAjeno !== null, progresoAjeno ?? 'ACEPTADO')
const respuestas = await rechazado(A, 'select is_correct from public.question_options limit 1')
comprobar('un usuario con sesión no lee question_options', respuestas !== null, respuestas ?? 'LEÍDAS')
const ascenso = await rechazado(A, `insert into public.user_roles (user_id, role) values ('${A}', 'admin')`)
comprobar('un usuario no se da el rol admin', ascenso !== null, ascenso ?? 'ACEPTADO')

console.log(`\n${pasos - fallos.length} de ${pasos} bien.`)
if (fallos.length) {
  console.log('\nFALLOS:')
  for (const fallo of fallos) console.log(`  - ${fallo}`)
  process.exitCode = 1
}
