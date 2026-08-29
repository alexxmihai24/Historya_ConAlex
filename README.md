# Historya con Alex

Plataforma educativa de historia construida con Vue 3, TypeScript y Vite. Incluye una biblioteca filtrable, lecciones de lectura, quiz global o por tema, perfil personalizable y acceso preparado para Supabase.

Consulta [SPEC.md](./SPEC.md) para el alcance completo, el modelo de datos, decisiones de seguridad y el plan para retomar el desarrollo.

## Ejecutar el proyecto

```sh
npm install
npm run dev
```

Vite mostrará una URL local, normalmente `http://localhost:5173`. Para generar la versión de producción:

```sh
npm run build
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Comprobación de tipos y compilación de producción |
| `npm test` | Comprueba contenido, seguridad de rutas de imagen, puntuación del quiz y archivos en disco |
| `npm run seed` | Regenera `supabase/seed.sql` desde `src/data/topics/` |
| `npm run flags` | Copia a `public/img/flags/` las banderas de los países del atlas |
| `npm run images` | Descarga las imágenes de `scripts/images.json` desde Wikimedia Commons |
| `npm run check:backend` | Comprobación de humo contra el Supabase real |

## Imágenes

Las imágenes viven en el repositorio, bajo `public/img/`, y no en un CDN: la
aplicación es una PWA y tiene que funcionar sin red.

- **Banderas de país** (`public/img/flags/`): se copian de `flag-icons` con
  `npm run flags`. Solo aparecen donde el país es un lugar del mundo de hoy
  (panel del globo, ficha de país y chip de la biblioteca), nunca dentro de una
  lección: una bandera moderna sobre «El Egipto de los faraones» es un anacronismo.
- **Imágenes de tema** (`public/img/<slug>/`): se declaran en `scripts/images.json`
  y se descargan con `npm run images`. El script consulta Wikimedia Commons,
  **rechaza cualquier archivo cuya licencia no sea dominio público o libre** y
  rellena autor, título, año, fuente, licencia y URL, que el pie muestra siempre.
  El resultado es `src/data/topic-images.ts`, que está generado y no se edita.

Para añadir una imagen: añade una entrada a `scripts/images.json`, ejecuta
`npm run images`, y después `npm test` y `npm run seed`.

## Instalar en móvil (PWA)

La aplicación incluye un manifest, iconos para Android/iPhone y un service worker propio que conserva la aplicación tras la primera visita.

- **Android (Chrome/Edge):** abrir la web publicada con HTTPS y elegir **Instalar aplicación** o **Añadir a pantalla de inicio**.
- **iPhone/iPad (Safari):** abrir la web publicada con Safari, pulsar **Compartir** y elegir **Añadir a pantalla de inicio**.

En `localhost` también se puede comprobar durante desarrollo. En producción es obligatorio servir la web por HTTPS; de lo contrario el navegador no registrará el service worker.

Los iconos de PWA se regeneran con:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\generate-pwa-icons.ps1
```

## Conectar Supabase

1. Crea un proyecto en Supabase.
2. Copia `.env.example` como `.env.local`.
3. Añade la URL del proyecto y su clave **publishable**.
4. Aplica **las tres migraciones en orden** desde el SQL Editor o con la CLI de Supabase:
   1. `supabase/migrations/20260826_initial_schema.sql`
   2. `supabase/migrations/20260827_content_metadata_and_answer_check.sql`
   3. `supabase/migrations/20260829_topic_cover_image.sql`
5. Ejecuta `supabase/seed.sql` para cargar el contenido. Se genera desde `src/data/topics/` con `npm run seed`; no lo edites a mano.
6. En Authentication → URL Configuration, añade la URL local y la URL de producción a los *redirect URLs*.

No subas `.env.local` al repositorio. La clave `service_role`/secret no debe usarse nunca en el navegador ni empezar por `VITE_`.

## Seguridad incorporada

- RLS habilitado en todas las tablas expuestas.
- Cada usuario solo puede consultar o modificar sus datos, intereses y progreso.
- Las preguntas y opciones correctas no se conceden directamente al navegador: las funciones RPC devuelven opciones sin solución y calculan el resultado dentro de PostgreSQL.
- Los roles de administración están fuera del perfil de usuario y no pueden modificarse desde la web.
- La creación de contenido se hace desde el panel de Supabase o un backend seguro, no desde el cliente.
- Ninguna URL de imagen que venga de la base de datos se pinta sin validarla contra una allowlist: hoy solo se aceptan rutas locales bajo `/img/`. Una `src` editable apuntando fuera filtraría la IP y el `Referer` de cada visitante a un tercero.
- Las banderas se insertan siempre con `<img src>` y nunca incrustando el SVG: un SVG es un documento ejecutable y admite `<script>`; dentro de un `<img>` el navegador no ejecuta nada.
- La CSP de `vercel.json` mantiene `img-src 'self' data: blob:`. Al no servir imágenes de terceros no hay ningún origen externo que añadir.
