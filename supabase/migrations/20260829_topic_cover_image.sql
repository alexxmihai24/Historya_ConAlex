-- Historya con Alex · portada de tema
-- No reescribe las migraciones anteriores: es una migración nueva, con fecha
-- posterior, tal como exige el historial de cambios del proyecto.

-- 1. Portada de la tarjeta de la biblioteca ---------------------------------
-- Las figuras y el resto de imágenes de una lección viajan dentro de
-- `lessons.body`, como ya hacen el glosario, los debates y la bibliografía, y
-- por eso no necesitan columna. La PORTADA sí la necesita: la biblioteca lista
-- temas leyendo solo `topics`, sin tocar `lessons`, y sin esta columna la
-- tarjeta no podría mostrarla sin una consulta extra por cada tema.
--
-- Nullable a propósito: un tema sin portada sigue siendo válido y cae al glifo
-- tipográfico, que es el estado de todos los temas hoy.
alter table public.topics
  add column if not exists cover_image jsonb;

-- 2. Comprobación mínima de forma -------------------------------------------
-- No sustituye a la validación del cliente ni a la de `npm run seed`: es la
-- última red, para que una fila mal escrita a mano desde el panel de Supabase no
-- llegue al navegador. Las reglas duras (allowlist de rutas y atribución
-- completa) están en src/lib/images.ts, que es lo que exige SPEC §10.10.
--
-- Aquí solo se exige que, si hay portada, sea un objeto con las claves que el
-- pie necesita y con una `src` local bajo /img/. Un dominio externo se rechaza
-- en la base de datos además de en el cliente.
alter table public.topics
  drop constraint if exists topics_cover_image_shape;

alter table public.topics
  add constraint topics_cover_image_shape check (
    cover_image is null or (
      jsonb_typeof(cover_image) = 'object'
      and cover_image ? 'src'
      and cover_image ? 'alt'
      and cover_image ? 'author'
      and cover_image ? 'title'
      and cover_image ? 'year'
      and cover_image ? 'source'
      and cover_image ? 'license'
      and cover_image ? 'url'
      and cover_image ->> 'src' like '/img/%'
      and cover_image ->> 'src' not like '%..%'
    )
  );

comment on column public.topics.cover_image is
  'Portada del tema con su atribución. Ruta local bajo /img/. Las demás imágenes van en lessons.body como bloque images.';
