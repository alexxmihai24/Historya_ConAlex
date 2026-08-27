# Historia Con Alex

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
4. Aplica **las dos migraciones en orden** desde el SQL Editor o con la CLI de Supabase:
   1. `supabase/migrations/20260826_initial_schema.sql`
   2. `supabase/migrations/20260827_content_metadata_and_answer_check.sql`
5. Ejecuta `supabase/seed.sql` para cargar el contenido. Se genera desde `src/data/topics/` con `npm run seed`; no lo edites a mano.
6. En Authentication → URL Configuration, añade la URL local y la URL de producción a los *redirect URLs*.

No subas `.env.local` al repositorio. La clave `service_role`/secret no debe usarse nunca en el navegador ni empezar por `VITE_`.

## Seguridad incorporada

- RLS habilitado en todas las tablas expuestas.
- Cada usuario solo puede consultar o modificar sus datos, intereses y progreso.
- Las preguntas y opciones correctas no se conceden directamente al navegador: las funciones RPC devuelven opciones sin solución y calculan el resultado dentro de PostgreSQL.
- Los roles de administración están fuera del perfil de usuario y no pueden modificarse desde la web.
- La creación de contenido se hace desde el panel de Supabase o un backend seguro, no desde el cliente.
