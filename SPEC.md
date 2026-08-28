# Especificación del producto · Historia Con Alex

**Última actualización:** 28 de agosto de 2026
**Estado:** contenido en reescritura a nivel universitario. Interfaz funcional. **Supabase conectado y con el contenido cargado.**

## 1. Visión

Historia Con Alex es una plataforma web en español para estudiantes y personas interesadas en la historia. Combina dos formas de aprender:

1. **Estudiar:** leer lecciones extensas y rigurosas, organizadas por época, país y nivel.
2. **Repasar jugando:** responder quizzes globales o por tema y recibir una explicación tras cada respuesta.

**Decisión de producto (27/08/2026):** el contenido se escribe a **nivel universitario**. Cada tema incluye apartados explicativos con causas y consecuencias, glosario de conceptos, **debate historiográfico** con posiciones enfrentadas y **bibliografía** con fuentes primarias y estudios. El objetivo es que el contenido sirva también a quien ya conoce lo básico, no solo a quien memoriza fechas.

**Alcance del temario:** historia universal completa, con **peso principal en Europa** y un bloque no europeo (China, India, Japón, África, América precolombina).

## 2. Usuarios objetivo

| Usuario | Necesidad principal | Qué encuentra |
| --- | --- | --- |
| Estudiante de ESO | Entender un tema y preparar un examen | Los apartados iniciales de cada lección y el quiz por tema |
| Estudiante de Bachillerato | Relacionar procesos, causas y consecuencias | Cronologías, conceptos clave y preguntas de comprensión |
| Estudiante universitario | Situar el tema y conocer el estado de la cuestión | Debate historiográfico, bibliografía y fuentes primarias |
| Persona curiosa | Explorar por interés propio | Rutas por época y quiz global sin registro |

## 3. Estado del contenido

Un archivo por tema en `src/data/topics/`, con la forma `TopicModule` definida en `src/data/types.ts`:
lección + glosario + debates + bibliografía + banco de preguntas.

**Escritos a nivel universitario (17 temas, 267 preguntas):**

| Tema | Época | Preguntas |
| --- | --- | --- |
| `prehistoria` — Prehistoria y neolitización | Antigüedad | 14 |
| `mesopotamia` — Mesopotamia y el nacimiento del Estado | Antigüedad | 15 |
| `egipto` — El Egipto de los faraones | Antigüedad | 16 |
| `grecia` — Grecia arcaica y clásica | Antigüedad | 16 |
| `helenismo` — Alejandro y el mundo helenístico | Antigüedad | 16 |
| `roma-republica` — Roma: la República | Antigüedad | 16 |
| `roma-imperio` — El Imperio romano y su transformación | Antigüedad | 16 |
| `bizancio` — El Imperio bizantino | Edad Media | 15 |
| `islam` — Nacimiento y expansión del islam | Edad Media | 16 |
| `feudalismo` — La Europa feudal | Edad Media | 15 |
| `andalus` — Al-Ándalus y los reinos cristianos | Edad Media | 16 |
| `plena-edad-media` — Ciudades, comercio y universidades | Edad Media | 16 |
| `crisis-siglo-xiv` — Peste negra y crisis bajomedieval | Edad Media | 16 |
| `renacimiento` — Renacimiento y Humanismo | Edad Moderna | 16 |
| `descubrimientos` — Expansión atlántica y conquista de América | Edad Moderna | 16 |
| `reforma` — Reforma, Contrarreforma y guerras de religión | Edad Moderna | 16 |
| `revoluciones-liberales` — Liberalismo, nacionalismo y unificaciones | Edad Contemporánea | 16 |

**Por escribir:** quedan 17 temas: absolutismo, revolución científica, Ilustración, Revolución francesa, industrialización, imperialismo, I Guerra Mundial, revolución rusa, entreguerras, II Guerra Mundial, Guerra Fría, España siglo XX, mundo actual, y el bloque no europeo.

Ya no queda ningún tema con el texto corto de la demo inicial: `_pendientes.ts` se ha eliminado.

## 4. Estado técnico

### Implementado

- Inicio, biblioteca filtrable por época y nivel, lectura de lección, selector de quiz, perfil y acceso.
- Lectura de lección con apartados multipárrafo, glosario, debate historiográfico, línea temporal y bibliografía.
- Quiz global o por tema, con corrección inmediata y explicación.
- Composables `useTopics`, `useLesson`, `useQuiz` y `useProgress` que leen de Supabase y **caen al contenido local** si no hay backend configurado.
- Perfil conectado a datos reales (progreso, historial de quizzes) y cierre de sesión.
- Formularios de registro e inicio de sesión sobre Supabase Auth.
- Migraciones con RLS, perfiles, contenido, progreso y resultados; funciones RPC que no exponen la respuesta correcta.
- **Backend en marcha:** las dos migraciones aplicadas y el contenido cargado. Verificado con `npm run check:backend`. El seed regenerado con `descubrimientos` y `reforma` (17 temas, 267 preguntas) está pendiente de ejecutarse en el SQL Editor.
- PWA instalable: manifest, iconos Android/iPhone, service worker y caché offline.
- Diseño responsive desde 320 px.

### No implementado

- Panel de administración para autores o editores.
- Recuperación de contraseña y edición de nombre/avatar.
- Búsqueda de contenido y filtros por país o materia.
- Imágenes. La versión actual usa ilustraciones editoriales en CSS para evitar recursos de licencia incierta.
- Tests automatizados y pipeline de despliegue.
- **Rediseño visual.** Pendiente de las referencias que enviará el cliente.

## 5. Stack tecnológico

| Capa | Tecnología | Decisión |
| --- | --- | --- |
| Frontend | Vue 3 + TypeScript | Componentes claros y tipado seguro |
| Build | Vite | Desarrollo rápido y despliegue estático sencillo |
| Navegación | Vue Router | Inicio, biblioteca, lección, quiz, perfil y acceso |
| Estado | Pinia | Sesión de usuario |
| Backend | Supabase | PostgreSQL, Auth, RLS, Storage y funciones RPC |
| Estilos | CSS propio | Identidad editorial sin depender de un kit visual |

No se usa Nuxt. Si el SEO de las lecciones pasa a ser prioritario, evaluar una migración posterior sin reescribir el dominio de datos.

## 6. Estructura del repositorio

```text
src/
  data/
    types.ts               Tipos del contenido: Topic, Concept, Debate, Source, QuizQuestion
    history.ts             Agregador: reúne los módulos y expone topics, quizQuestions y eras
    topics/
      <slug>.ts            Un archivo por tema: lección + glosario + debates + fuentes + preguntas
  composables/             useTopics, useLesson, useQuiz, useProgress
  lib/supabase.ts          Cliente Supabase: solo URL y clave publishable
  router/index.ts          Rutas de la aplicación
  stores/auth.ts           Sesión y operaciones de Supabase Auth
  views/                   HomeView, LibraryView, StudyView, QuizView, ProfileView, LoginView
  style.css                Sistema visual y responsive
public/                    Manifest, service worker e iconos PWA
scripts/
  generate-pwa-icons.ps1   Generador reproducible de iconos PNG
  generate-seed.mjs        Genera supabase/seed.sql desde src/data/topics/
  check-backend.mjs        Comprobación de humo contra el Supabase real
supabase/
  migrations/              Esquema inicial y metadatos de contenido
  seed.sql                 GENERADO desde src/data/topics/ con `npm run seed`. No editar a mano.
```

## 7. Rutas de frontend

| Ruta | Propósito |
| --- | --- |
| `/` | Presentación del producto y acceso a estudio o quiz |
| `/biblioteca` | Explorar temas por época y nivel |
| `/estudiar/:topicId` | Lección detallada; ejemplo: `/estudiar/egipto` |
| `/quiz` | Elegir quiz global o por tema |
| `/quiz?topic=egipto` | Abrir directamente el quiz de un tema |
| `/perfil` | Progreso, intereses y reto diario |
| `/acceso` | Registro e inicio de sesión |

## 8. Modelo de contenido

```ts
interface TopicModule {
  topic: Topic          // metadatos + summary + keyDates + sections + concepts + debates + sources
  questions: QuizQuestion[]
}
```

- `sections[].body` guarda los párrafos separados por una línea en blanco. `StudyView` los divide al renderizar.
- `debates[]` recoge una controversia con las posiciones enfrentadas (`school` + `argument`) y el estado de la cuestión.
- `sources[]` distingue `kind: 'primaria'` (textos de la época) de `kind: 'estudio'` (historiografía moderna).
- `color` debe ser uno de `gold`, `blue`, `terracotta`, `green`, `plum` o `red`: son las clases `.visual-*` del CSS y el `check` de `accent_color` en el esquema. `npm run seed` falla si no lo es.
- En la base de datos todo esto viaja dentro de `lessons.body`, un array de bloques tipados (`section`, `concepts`, `debates`, `timeline`, `sources`). No hicieron falta columnas nuevas.
- Los `id` de pregunta siguen el patrón `<slug>-<n>` para evitar colisiones entre temas.
- `npm run seed` despublica los temas que ya no están en `src/data/topics/`. Sin eso, un tema renombrado seguiría visible en la biblioteca: los `insert` solo actualizan.

### Cómo añadir un tema

1. Crear `src/data/topics/<slug>.ts` copiando la estructura de `egipto.ts`.
2. Importarlo en `src/data/history.ts` y añadirlo al array `modules`.
3. `npm run build` para comprobar tipos y compilación.
4. `npm run seed` para regenerar `supabase/seed.sql` y ejecutarlo en el SQL Editor.

## 9. Modelo de datos de Supabase

```text
auth.users
  └── profiles
        ├── user_preferences
        ├── learning_progress ── lessons ── topics ── eras
        └── quiz_attempts                         └── countries

topics ── questions ── question_options
user_roles (separada de profiles)
```

| Tabla | Uso |
| --- | --- |
| `profiles` | Nombre visible, nivel educativo y avatar |
| `user_roles` | Roles `editor`/`admin`; nunca se modifican desde el navegador |
| `eras`, `countries`, `topics`, `lessons` | Catálogo editorial publicable |
| `questions`, `question_options` | Banco de preguntas y respuestas correctas |
| `user_preferences` | Intereses con los que se personalizan sugerencias |
| `learning_progress` | Porcentaje y apartados terminados de cada lección |
| `quiz_attempts` | Resultados calculados por el servidor |

### RPC

| Función | Usuario | Función |
| --- | --- | --- |
| `get_quiz_questions(topic_slug, limit)` | Anónimo o autenticado | Devuelve opciones sin exponer cuál es correcta |
| `check_quiz_answer(question_id, option_id)` | Anónimo o autenticado | Corrige una respuesta en el servidor |
| `submit_quiz_attempt(scope, answers)` | Autenticado | Calcula y guarda el resultado en PostgreSQL |
| `replace_user_preferences(preferences)` | Autenticado | Sustituye preferencias en una operación atómica |

## 10. Seguridad: requisitos no negociables

1. **Nunca** añadir `SUPABASE_SERVICE_ROLE_KEY` ni una clave secreta con prefijo `VITE_`.
2. Todo dato personal debe estar protegido con RLS y compararse con `auth.uid()`.
3. Las tablas de respuestas correctas no tendrán `SELECT` desde el navegador.
4. La puntuación de un quiz se calcula en el servidor; nunca se acepta una puntuación enviada por el cliente.
5. Los roles no pertenecen a `profiles`: un usuario no debe poder convertirse en administrador editando una petición.
6. La publicación de contenido se hará desde el panel de Supabase, una Edge Function protegida o un backend seguro.
7. `.env.local` **no se sube al repositorio**. `.gitignore` cubre `.env`, `.env.local` y `.env.*.local`.
8. Antes de producción: confirmación de correo, URLs de redirección exactas, límites de Auth y CAPTCHA, copias de seguridad, revisión de RLS y buckets privados en Storage.

## 11. Configuración local

### Requisitos

- Node.js 22 o posterior y npm.
- Un proyecto Supabase cuando se active el backend.

### Comandos

```bash
npm install
npm run dev     # servidor de desarrollo
npm run build   # vue-tsc + vite build
npm run seed          # regenera supabase/seed.sql desde src/data/topics/
npm run check:backend # comprueba contenido, RLS y corrección del quiz en Supabase
```

### Variables de entorno

Crear `.env.local` en la **raíz del proyecto** a partir de `.env.example`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_tu_clave
```

> Vite solo lee los archivos `.env*` de la raíz. Un `.env` en cualquier subcarpeta se ignora en silencio y la aplicación cae al contenido local sin avisar.

Después, ejecutar las migraciones de `supabase/migrations/` en orden y luego `supabase/seed.sql`.

## 12. Próximo orden de trabajo

### Fase 1 · Contenido (en curso)

1. Completar el temario por bloques cronológicos, siguiendo el orden de la sección 3.
2. Script para obtener cronologías de Wikidata e imágenes con licencia clara de Europeana o Wikimedia Commons, y así dejar de escribir fechas a mano. **Acordado con el cliente: después del contenido.**

### Fase 2 · Backend

1. ~~Crear el proyecto de Supabase y sustituir la URL de `.env.local`.~~ Hecho.
2. ~~Aplicar las dos migraciones y ejecutar el seed.~~ Hecho.
3. Configurar Auth: confirmación de correo y URLs de redirección permitidas.
4. Probar registro, login y RLS con dos usuarios distintos.
5. Volver a ejecutar `npm run seed` y el SQL cada vez que se añadan temas.

### Fase 3 · Diseño

1. Recibir las referencias visuales del cliente.
2. Rediseñar sobre ellas. Hasta entonces, no invertir en estilos más allá de lo funcional.

### Fase 4 · Calidad y despliegue

1. Tests unitarios de puntuación, filtros y composables.
2. Tests de integración de RLS con usuarios de prueba.
3. E2E de registro, lectura y quiz.
4. CI con `npm run build`, pruebas y auditoría de dependencias.
5. Publicar y añadir las URLs de producción a Supabase Auth.

## 13. Decisiones registradas

- **Vue 3**, no Nuxt, para mantener un punto de partida simple.
- **TypeScript** desde el inicio para reducir errores al crecer el contenido.
- **Un archivo por tema**: con 35 temas previstos, un único `history.ts` sería inmanejable.
- **Contenido en el repositorio**, no en Supabase, mientras no exista backend. Los composables ya hacen *fallback*.
- **Nivel universitario con historiografía**: decisión del cliente del 27/08/2026 frente a un nivel más divulgativo.
- **No usar la API de Wikipedia como fuente de texto**: su licencia CC BY-SA obligaría a que el contenido derivado fuese también share-alike y atribuido. Wikidata (datos) y Europeana o Commons (imágenes) sí son utilizables.
- El diseño evita imágenes de terceros sin licencia conocida.
- La seguridad de los quizzes se resuelve en la base de datos, no en la interfaz.
- El perfil **no muestra cifras inventadas**: si no hay sesión ni progreso real, muestra cero.
