-- Historya con Alex · niveles en los que se puede leer un tema
-- No reescribe las migraciones anteriores: es una migración nueva, con fecha
-- posterior, tal como exige el historial de cambios del proyecto.

-- 1. Por qué hace falta una columna nueva -----------------------------------
-- `education_level` guarda UN nivel: el nivel al que está escrito el tema, que
-- en los 35 temas es `universidad`. La biblioteca filtraba comparando con esa
-- columna, así que elegir ESO o Bachillerato devolvía cero resultados.
--
-- Un tema puede leerse ahora en varios niveles: cada apartado tiene su versión
-- de ESO y su de Bachillerato además del texto universitario, y los textos
-- viajan dentro de `lessons.body` como ya hacen el glosario o las imágenes. Pero
-- la biblioteca lista temas leyendo solo `topics`, sin tocar `lessons`, igual que
-- pasaba con la portada: sin esta columna tendría que abrir la lección de cada
-- tema para saber en qué niveles ofrecerlo.
--
-- `education_level` se mantiene: sigue siendo el nivel más alto y es lo que se
-- muestra como nivel del tema.
alter table public.topics
  add column if not exists levels public.education_level[]
  not null default array['universidad']::public.education_level[];

-- 2. Comprobación mínima de forma -------------------------------------------
-- Igual que con `cover_image`: la validación de verdad está en el repositorio y
-- en `npm run seed`. Esto es la última red, para que una fila editada a mano
-- desde el panel no deje un tema inalcanzable desde la biblioteca.
--
-- Se exige que haya al menos un nivel y que no haya repetidos. `curioso` es un
-- valor del enum que el temario no usa como nivel de lectura, así que se excluye:
-- si apareciera aquí, la biblioteca mostraría un filtro que no existe.
--
-- Los repetidos se comprueban con una función y no dentro del CHECK: Postgres
-- no admite subconsultas en una restricción CHECK («cannot use subquery in check
-- constraint»). La primera versión de esta migración la tenía y fallaba al
-- ejecutarse. Llamar a una función inmutable sí está permitido.
--
-- Y «al menos un nivel» se mide con cardinality(), no con array_length():
-- array_length de un array vacío devuelve NULL, no 0, y un CHECK solo rechaza
-- lo que da FALSE. Con array_length, '{}' pasaba la restricción.
create or replace function public.education_levels_have_duplicates(p_levels public.education_level[])
returns boolean
language sql immutable set search_path = public as $$
  select count(*) <> count(distinct nivel) from unnest(p_levels) as nivel;
$$;

alter table public.topics
  drop constraint if exists topics_levels_shape;

alter table public.topics
  add constraint topics_levels_shape check (
    cardinality(levels) >= 1
    and not public.education_levels_have_duplicates(levels)
    and not ('curioso' = any (levels))
  );

-- 3. Valor de partida -------------------------------------------------------
-- Los temas que ya estaban publicados quedan con su nivel escrito, que es el
-- comportamiento anterior. El seed los actualiza con los niveles reales.
update public.topics
  set levels = array[education_level]
  where levels = array['universidad']::public.education_level[]
    and education_level <> 'universidad';

comment on column public.topics.levels is
  'Niveles en los que el tema se puede leer. Se deriva de los apartados que tienen texto para cada nivel; lo calcula npm run seed. La biblioteca filtra por esta columna, no por education_level.';
