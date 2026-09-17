# Especificación del producto · Historya con Alex

**Última actualización:** 16 de septiembre de 2026
**Estado:** 37 temas y 590 preguntas. Los 142 países del atlas tienen historia breve y foto de portada como fondo de su ficha. **Bilingüe español/rumano** desde el 14/09/2026: interfaz y fichas de país traducidas; lecciones y quiz pendientes (§20). Rediseño «Atlas Nocturno» implantado. 156 imágenes de temas y 142 portadas de país, con licencia comprobada. **SQL al día:** migraciones y seed ejecutados por el cliente el 11/09/2026; tras un `npm run seed` solo hay que volver a lanzar los archivos de `supabase/seed/`. No volver a ejecutar `20260826` ni `20260827`. Antes de pegar nada, `npm run check:sql` (§17.1).

> **Carencias señaladas por el cliente y su estado.**
> 1. **Nivel educativo.** ❌ Retirado el 11/09/2026 a petición del cliente: cada lección tiene un solo texto. Ver §15.
> 2. **La lección era un muro de texto.** ✅ Resuelto. Figuras intercaladas, conceptos al margen y documento comentado (§14.6 y §14.8).
> 3. **120 de los 142 países del atlas no tenían ficha.** ✅ Datos de Wikidata (CC0, §14.7) e historia breve de los 142 países (§18).
> 6. **Faltaban las causas de la Segunda Guerra Mundial.** ✅ Apartado nuevo «Cómo y por qué empezó» (11/09/2026).
> 4. **La respuesta del quiz era la «b» en el 85 % de las preguntas.** ✅ Corregido con barajado al servir. Ver §16.
> 5. **Poco tiempo por pregunta.** ✅ 40 s en lugar de 20.
> 7. **Portada en la ficha de país.** ✅ Foto histórica como fondo de la cabecera de los 142 países (§19).
> 8. **Segundo idioma, rumano.** ⏳ Interfaz y fichas de país hechas; lecciones y quiz en marcha, tema a tema (§20).

## 1. Visión

Historya con Alex es una plataforma web en español para estudiantes y personas interesadas en la historia. Combina dos formas de aprender:

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

**Escritos a nivel universitario (35 temas, 555 preguntas):**

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
| `absolutismo` — El Estado moderno y el absolutismo | Edad Moderna | 16 |
| `revolucion-cientifica` — La revolución científica | Edad Moderna | 16 |
| `ilustracion` — La Ilustración | Edad Moderna | 16 |
| `revolucion-francesa` — Revolución francesa y era napoleónica | Edad Contemporánea | 16 |
| `industrializacion` — La revolución industrial | Edad Contemporánea | 16 |
| `revoluciones-liberales` — Liberalismo, nacionalismo y unificaciones | Edad Contemporánea | 16 |
| `imperialismo` — Imperialismo y colonialismo | Edad Contemporánea | 16 |
| `gran-guerra` — Primera Guerra Mundial | Edad Contemporánea | 16 |
| `revolucion-rusa` — Revolución rusa y URSS | Edad Contemporánea | 16 |
| `entreguerras` — Crisis de 1929 y fascismos | Edad Contemporánea | 16 |
| `segunda-guerra` — Segunda Guerra Mundial y Holocausto | Edad Contemporánea | 16 |
| `guerra-fria` — Guerra Fría y descolonización | Edad Contemporánea | 16 |
| `espana-siglo-xx` — España en el siglo XX | Edad Contemporánea | 16 |
| `mundo-actual` — El mundo desde 1991 | Edad Contemporánea | 16 |
| `china-imperial` — China imperial | Edad Media | 16 |
| `india` — India: de los Mauryas a los mogoles | Edad Media | 16 |
| `japon` — Japón: de Heian a Meiji | Edad Media | 16 |
| `africa` — Reinos africanos: Malí, Songhay, Etiopía y Gran Zimbabue | Edad Media | 16 |
| `america-precolombina` — Mesoamérica y los Andes | Antigüedad | 16 |

**Por escribir:** ninguno. El temario acordado con el cliente está completo: las cuatro épocas y el bloque no europeo. Los cinco temas no europeos se asignan a la época donde está su centro de gravedad y cierran el array `modules` como bloque.

El recuento vivo está en `CONTINUAR.md`, que se actualiza tema a tema. `npm run seed` imprime el número real de temas y preguntas del repositorio.

Ya no queda ningún tema con el texto corto de la demo inicial: `_pendientes.ts` se ha eliminado.

## 4. Estado técnico

### Implementado

- **Diseño «Atlas Nocturno»** (entrega del cliente del 29/08/2026, en `design/`): fondo oscuro con auroras en deriva y grano, Instrument Serif para los títulos, Archivo para la interfaz y IBM Plex Mono para cifras, acento brasa `#ff4a1c` y superficies de cristal. Aplicado a las siete vistas, a los iconos PWA, al manifest y a la página offline.
- **Home con globo interactivo**: proyección ortográfica sobre Natural Earth 110m, modo noche con atmósfera y terminador, arrastre para girar, rueda para acercar, y los países con lección encendidos en brasa. Al elegir uno, el globo vuela hasta él y el panel lateral muestra su ficha breve.
- **Ficha de país** en `/pais/:country`: hitos, línea de épocas, lecciones del país y acceso a su quiz. Sin mapa histórico ni narración de audio, por decisión del cliente.
- **Quiz contrarreloj**: 40 segundos por pregunta, 3 vidas, racha con multiplicador hasta ×4 y bonus por tiempo restante.
- Biblioteca filtrable por época, lectura de lección, perfil y acceso. Historia breve de los 142 países del atlas (§18).
- Lectura de lección con apartados multipárrafo, glosario, debate historiográfico, línea temporal y bibliografía.
- Quiz global o por tema, con corrección inmediata y explicación.
- Composables `useTopics`, `useLesson`, `useQuiz` y `useProgress` que leen de Supabase y **caen al contenido local** si no hay backend configurado.
- Perfil conectado a datos reales (progreso, historial de quizzes) y cierre de sesión.
- Formularios de registro e inicio de sesión sobre Supabase Auth.
- Migraciones con RLS, perfiles, contenido, progreso y resultados; funciones RPC que no exponen la respuesta correcta.
- **Backend en marcha:** las dos migraciones aplicadas y el contenido cargado. Verificado con `npm run check:backend`. El seed de 25 temas ya se ejecutó; el regenerado el 29/08/2026 (35 temas, 555 preguntas) está pendiente de volver a lanzarse en el SQL Editor.
- **Banderas de país**: 142 SVG empaquetados en `public/img/flags/`, copiados de `flag-icons` con `npm run flags`. Se muestran en el panel del globo, la cabecera de la ficha de país y el chip de la biblioteca; nunca dentro de una lección.
- **Imágenes de tema**: portada en la tarjeta de la biblioteca y en la cabecera de la lección, y figuras dentro de los apartados, todas con pie y atribución completa. Se declaran en `scripts/images.json` y las descarga `npm run images` desde Wikimedia Commons, rechazando cualquier licencia que no sea libre.
- **Validación de rutas de imagen** en `src/lib/images.ts`, aplicada al pintar y también al generar el seed.
- **Comprobaciones automáticas** con `npm test`: seguridad de rutas, puntuación del quiz, filtros de la biblioteca, integridad del banco de preguntas y existencia en disco de cada imagen y bandera.
- PWA instalable: manifest, iconos Android/iPhone, service worker y caché offline.
- Diseño responsive desde 320 px.

### No implementado

- Panel de administración para autores o editores.
- Recuperación de contraseña y edición de nombre/avatar.
- Búsqueda de contenido y filtros por país o materia.
- **Más figuras por lección.** Hay 35 portadas y 5 figuras; §14.2 pide entre dos y cuatro figuras por tema, así que faltan alrededor de un centenar. El trabajo restante es editorial, no técnico: añadir entradas a `scripts/images.json` y ejecutar `npm run images`.
- **Formatos AVIF y WebP con `<picture>`.** Hoy se sirve el JPEG o PNG de Commons a 1200 px de ancho. Convertirlos exigiría una herramienta de imagen que el proyecto no tiene.
- Tests de componentes con DOM y pipeline de despliegue. `npm test` cubre la lógica pura y la integridad del contenido, no el renderizado.

- **Formatos de pregunta `mapa` y `huecos`.** El diseño los contempla; el banco solo tiene `opciones`. Faltan la columna de tipo, el seed y las preguntas.

- **Mapa histórico y narración de audio** de la ficha de país: retirados a propósito, no hay datos ni grabaciones.

## 5. Stack tecnológico

| Capa | Tecnología | Decisión |
| --- | --- | --- |
| Frontend | Vue 3 + TypeScript | Componentes claros y tipado seguro |
| Build | Vite | Desarrollo rápido y despliegue estático sencillo |
| Navegación | Vue Router | Inicio, biblioteca, lección, quiz, perfil y acceso |
| Estado | Pinia | Sesión de usuario |
| Backend | Supabase | PostgreSQL, Auth, RLS, Storage y funciones RPC |
| Estilos | CSS propio | Sistema «Atlas Nocturno» en `src/style.css`, sin kit visual de terceros |
| Banderas | flag-icons (solo en desarrollo) | Los SVG se copian a `public/img/flags/`; en producción no se importa nada del paquete |
| Cartografía | d3-geo + topojson-client + world-atlas | Globo y siluetas de país. El atlas viaja en el paquete: la PWA no depende de un CDN |

No se usa Nuxt. Si el SEO de las lecciones pasa a ser prioritario, evaluar una migración posterior sin reescribir el dominio de datos.

## 6. Estructura del repositorio

```text
src/
  data/
    types.ts               Tipos del contenido: Topic, Concept, Debate, Source, QuizQuestion
    history.ts             Agregador: reúne los módulos y expone topics, quizQuestions y eras
    topic-images.ts        GENERADO desde scripts/images.json con `npm run images`. No editar a mano
    topics/
      <slug>.ts            Un archivo por tema: lección + glosario + debates + fuentes + preguntas
  composables/             useTopics, useLesson, useQuiz, useProgress
  lib/supabase.ts          Cliente Supabase: solo URL y clave publishable
  lib/globe.js             historya-globe, historya-outline e historya-map. Portado del diseño
  lib/country-names.ts     Nombres en español de los países del atlas y búsqueda de bandera
  lib/country-codes.ts     Tabla ISO numérico y alfa-2. No importa nada: la leen los scripts desde Node
  lib/images.ts            Allowlist de rutas de imagen y comprobación de atribución
  lib/scoring.ts           Reglas de puntuación del contrarreloj, aparte para poder comprobarlas
  components/CountryFlag.vue  Bandera de un país, siempre como <img src>
  lib/regions.ts           Traduce un topic.country a los países que se encienden en el globo
  router/index.ts          Rutas de la aplicación
  stores/auth.ts           Sesión y operaciones de Supabase Auth
  views/                   HomeView, LibraryView, StudyView, QuizView, ProfileView, LoginView
  style.css                Sistema visual y responsive
public/                    Manifest, service worker, iconos PWA e imágenes
  img/flags/               142 banderas SVG. Generado con `npm run flags`
  img/<slug>/              Portada y figuras de cada tema. Generado con `npm run images`
design/                    Entrega de diseño del cliente. Fuente de verdad del sistema visual
scripts/
  generate-pwa-icons.ps1   Generador reproducible de iconos PNG
  generate-seed.mjs        Genera los archivos de supabase/seed/ desde src/data/topics/
  copy-flags.mjs           Copia a public/img/flags/ las banderas de los países del atlas
  fetch-images.mjs         Descarga imágenes de Commons y genera src/data/topic-images.ts
  check-content.mjs        Comprobaciones de contenido y seguridad (`npm test`)
  check-backend.mjs        Comprobación de humo contra el Supabase real
supabase/
  migrations/              Esquema inicial y metadatos de contenido
  seed/NN-*.sql            GENERADO con `npm run seed`. No editar a mano.
                           Repartido en varios archivos: el SQL Editor rechaza
                           las consultas grandes. Ejecutar en orden numérico.
```

## 7. Rutas de frontend

| Ruta | Propósito |
| --- | --- |
| `/` | Globo interactivo: elegir país y abrir su ficha |
| `/biblioteca` | Explorar temas por época y nivel |
| `/pais/:country` | Ficha de país; ejemplo: `/pais/Italia` |
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
- En la base de datos todo esto viaja dentro de `lessons.body`, un array de bloques tipados (`section`, `concepts`, `debates`, `timeline`, `sources`, `images`). Solo hizo falta una columna nueva, `topics.cover_image`, porque la biblioteca lista temas sin tocar `lessons`.
- `images[]` son `TopicImage`: ruta local, texto alternativo, tamaño, papel (`portada` o `figura`), apartado al que acompaña y atribución completa. Se generan en `src/data/topic-images.ts` y `history.ts` las engancha a cada tema.
- Los `id` de pregunta siguen el patrón `<slug>-<n>` para evitar colisiones entre temas.
- `npm run seed` despublica los temas que ya no están en `src/data/topics/`. Sin eso, un tema renombrado seguiría visible en la biblioteca: los `insert` solo actualizan.

### Cómo añadir un tema

1. Crear `src/data/topics/<slug>.ts` copiando la estructura de `egipto.ts`.
2. Importarlo en `src/data/history.ts` y añadirlo al array `modules`.
3. `npm run build` para comprobar tipos y compilación.
4. `npm run seed` para regenerar `supabase/seed/` y ejecutar sus archivos en orden en el SQL Editor.

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
| `eras`, `countries`, `topics`, `lessons` | Catálogo editorial publicable. `topics.cover_image` guarda la portada con su atribución |
| `questions`, `question_options` | Banco de preguntas y respuestas correctas |
| `user_preferences` | Intereses con los que se personalizan sugerencias |
| `learning_progress` | Porcentaje y apartados terminados de cada lección |
| `quiz_attempts` | Resultados calculados por el servidor |

### RPC

| Función | Usuario | Función |
| --- | --- | --- |
| `get_quiz_questions(topic_slug, limit)` | Anónimo o autenticado | Devuelve opciones sin exponer cuál es correcta |
| `check_quiz_answer(question_id, option_id)` | Anónimo o autenticado | Corrige una respuesta en el servidor |
| `submit_quiz_attempt(scope, answers)` | Autenticado | Calcula y guarda resultado **y puntuación** en PostgreSQL. La racha sale del orden de las respuestas; el tiempo declarado por el cliente va acotado (§10.4) |
| `quiz_scoring_rules()` | Anónimo o autenticado | Las constantes de puntuación, en un solo sitio |
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
9. **Nunca `v-html` ni `innerHTML` con datos que vengan de la base de datos.** Hoy no hay ni una sola aparición de ninguno de los dos en `src/`, y esa es la mitad de la defensa contra XSS en una aplicación cuyo contenido lo escriben editores. Comprobación: `grep -rn "v-html\|innerHTML" src/` debe salir vacío.
10. **Ninguna URL que venga de la base de datos se pinta sin validar.** Una `src` de imagen editable es un canal para filtrar la IP y el `Referer` de cada visitante a un tercero. Implementado en `src/lib/images.ts`: allowlist de rutas, aplicada al pintar (`safeImage`) y al guardar (`npm run seed` falla si una imagen no pasa). La lista de orígenes remotos está vacía a propósito: hoy solo se sirven imágenes locales. `npm test` comprueba los casos de rechazo uno a uno.

## 11. Configuración local

### Requisitos

- Node.js 22 o posterior y npm.
- Un proyecto Supabase cuando se active el backend.

### Comandos

```bash
npm install
npm run dev     # servidor de desarrollo
npm run build   # vue-tsc + vite build
npm run seed          # regenera supabase/seed/ desde src/data/topics/
npm run check:backend # comprueba contenido, RLS y corrección del quiz en Supabase
```

### Variables de entorno

Crear `.env.local` en la **raíz del proyecto** a partir de `.env.example`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_tu_clave
```

> Vite solo lee los archivos `.env*` de la raíz. Un `.env` en cualquier subcarpeta se ignora en silencio y la aplicación cae al contenido local sin avisar.

Después, ejecutar las migraciones de `supabase/migrations/` en orden y luego los archivos de `supabase/seed/`, también en orden numérico.

## 12. Próximo orden de trabajo

### Fase 1 · Contenido — hecha

1. ~~Completar el temario por bloques cronológicos.~~ 35 temas y 555 preguntas, temario cerrado.
2. ~~Script para obtener imágenes con licencia clara de Wikimedia Commons.~~ Hecho: `scripts/fetch-images.mjs`. Queda pendiente el equivalente para cronologías de Wikidata.

### Fase 2 · Backend

1. ~~Crear el proyecto de Supabase y sustituir la URL de `.env.local`.~~ Hecho.
2. ~~Aplicar las dos migraciones y ejecutar el seed.~~ Hecho.
0. Ejecutar `supabase/migrations/20260829_topic_cover_image.sql` y después los archivos de `supabase/seed/` en orden numérico.
3. Configurar Auth: confirmación de correo y URLs de redirección permitidas.
4. Probar registro, login y RLS con dos usuarios distintos.
5. Volver a ejecutar `npm run seed` y el SQL cada vez que se añadan temas.

### Fase 3 · Diseño — hecha

1. ~~Recibir las referencias visuales del cliente.~~ Recibidas el 29/08/2026.
2. ~~Rediseñar sobre ellas.~~ «Atlas Nocturno» implantado en toda la aplicación.
3. Pendiente de decidir con el cliente: qué temas de ámbito «Europa» o «Mundo» deberían apuntar a un país concreto para ser alcanzables desde el globo. `src/lib/regions.ts` ya traduce «África» a Malí, Etiopía, Zimbabue y Tanzania, y «América» a México, Guatemala, Perú y Bolivia.

### Fase 4 · Calidad y despliegue

1. ~~Tests unitarios de puntuación y filtros.~~ Hechos en `npm test`. Faltan los de composables, que necesitan un entorno con DOM.
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
- **El globo se porta del diseño, no se reimplementa.** `src/lib/globe.js` es el `globe.js` del cliente con tres cambios: d3 y topojson importados del bundle, el atlas empaquetado en vez de traído de un CDN, y avisos por `CustomEvent` en vez de callbacks globales.
- **La marca pasa a «Historya con Alex»**, como la escribe el diseño.
- La seguridad de los quizzes se resuelve en la base de datos, no en la interfaz.
- El perfil **no muestra cifras inventadas**: si no hay sesión ni progreso real, muestra cero.

## 14. Contenido visual

Esta sección nació porque el rediseño «Atlas Nocturno» dejó la interfaz terminada
y el material gráfico vacío. **Implantada el 29/08/2026**: hay banderas en las tres
vistas que las piden, una portada por tema y las primeras figuras dentro de las
lecciones, todas con atribución. Lo que queda es editorial: más figuras.

**Decisión de alojamiento (29/08/2026): `public/img/` en el repositorio**, no un
bucket. La PWA funciona sin red, no hay que mantener RLS ni una vía de subida, y
la CSP puede quedarse en `img-src 'self' data: blob:`, que es lo más estricto
posible. El peso hoy es de unos 17 MB. Si algún día pasa a ser un problema, el
bucket sigue disponible: hay que añadir el origen a `ALLOWED_IMAGE_ORIGINS` en
`src/lib/images.ts` y a la CSP de `vercel.json`, y nada más.

### 14.1 Banderas de país

- **Dónde van:** panel del globo, cabecera de la ficha de país y chips de país de
  la biblioteca. Es decir, donde el país aparece **como lugar del mundo de hoy**.
- **Dónde no van:** en la lección. Una bandera moderna sobre «El Egipto de los
  faraones» o «Al-Ándalus y los reinos cristianos» es un anacronismo y enseña algo
  falso. La bandera localiza, no representa un periodo.
- **Mapeo:** el atlas ya trae la clave. `feature.id` de `world-atlas` es el código
  **ISO 3166-1 numérico** en cadena (`"724"` = España, `"242"` = Fiyi). Hace falta
  una tabla numérico → alfa-2 para nombrar el archivo; el nombre en español ya lo
  resuelve `src/lib/country-names.ts` y la tabla nueva va al lado.
- **Origen y licencia:** SVG de dominio público. El diseño de una bandera nacional
  no es obra protegida; el archivo concreto sí puede serlo, así que se toman de una
  colección con licencia declarada y se anota cuál.
- **Empaquetadas, no de CDN.** La aplicación es una PWA y debe funcionar sin red,
  y §10 no admite dependencias de terceros en tiempo de ejecución.
- **Peso:** son unos 250 archivos. Se carga solo la que se pinta, con `<img src>`
  a un archivo suelto. Nunca un sprite con las 250 dentro.
- **Seguridad:** la bandera se inserta **siempre** con `<img src="...">`, jamás
  incrustando el SVG en la plantilla. Un SVG es un documento ejecutable: admite
  `<script>` y `<foreignObject>`. Dentro de `<img>` el navegador no ejecuta nada.

### 14.2 Imágenes de los temas

Cada tema debería llevar:

1. Una **portada**, que sustituya al glifo actual en la cabecera de la lección y en
   la tarjeta de la biblioteca.
2. Entre dos y cuatro **figuras** repartidas por los apartados, con pie.
3. **Retratos y caricaturas** donde el tema los pida. La sátira gráfica del XIX y
   principios del XX (Gillray, Daumier, *Punch*, *Kladderadatsch*, *L'Assiette au
   Beurre*) es dominio público y encaja especialmente en `imperialismo`,
   `gran-guerra`, `entreguerras` y `revolucion-rusa`.

**Licencia, regla dura.** Solo dominio público o licencia libre comprobada, y se
comprueba una por una. Fuentes utilizables: Wikimedia Commons (obras PD-art),
Europeana, Rijksmuseum, Met Open Access, Library of Congress, NYPL Digital
Collections y la Biblioteca Digital Hispánica. Sigue en pie la decisión de §13 de
no usar el **texto** de Wikipedia; sus imágenes en dominio público sí valen.

**Nada generado por IA presentado como documento histórico.** Si en algún momento
hace falta una ilustración sintética, va etiquetada como tal en el pie.

**Atribución.** Cada imagen guarda autor, título, año, fuente, licencia y URL, y el
pie las muestra. Es requisito legal en varias de esas licencias y además es la
clase de rigor que el resto del contenido ya tiene.

**Modelo de datos.** Un tipo `TopicImage` en `src/data/types.ts` con esos campos, y
en la base de datos un bloque `images` dentro de `lessons.body`, igual que ya viajan
el glosario, los debates y la bibliografía. No hizo falta migración para aquellos y
tampoco haría falta para este.

**Alojamiento.** Dos opciones, y hay que elegir antes de empezar: `public/img/<slug>/`
en el repositorio, que funciona sin red pero lo engorda mucho; o un bucket de
Supabase Storage, más limpio, con la portada de los temas ya visitados guardada en
la caché del service worker. Recomendación: bucket.

**Técnica.** `width` y `height` o `aspect-ratio` siempre, para que la página no dé
saltos al cargar; `loading="lazy"` en todo menos en la portada; AVIF o WebP con
`<picture>` y un JPEG de respaldo; y `alt` que describa la imagen de verdad, no que
repita el título del tema.

### 14.3 Seguridad de esta tanda

Las reglas 9 y 10 de §10 nacen aquí. En concreto:

1. **Definir una CSP.** Hoy no hay ninguna. Al meter imágenes hace falta al menos
   `default-src 'self'`, `img-src` con los orígenes exactos que se permitan,
   `connect-src` con el dominio de Supabase y `script-src 'self'`. Va en las
   cabeceras del alojamiento, no en una `<meta>`.
2. **Allowlist de dominios de imagen** en el cliente, y validación también al
   guardar. Un editor con acceso podría apuntar una `src` a un dominio que registre
   a cada visitante que abra la lección.
3. **Bucket de Storage:** lectura pública, escritura solo con rol editor y RLS. La
   subida nunca se hace desde el navegador con la clave publishable.
4. **SVG subido por un editor es código.** O el bucket solo acepta AVIF, WebP y
   JPEG, o los SVG se sirven con `Content-Type` fijado y `Content-Disposition:
   attachment`.
5. Si se automatiza la importación desde Commons o Europeana, ese script corre en
   el servidor con clave de servicio, nunca en el navegador (§10.1).

### 14.4 Limpieza

~~`src/components/HelloWorld.vue` y `src/assets/{hero.png, vite.svg, vue.svg}`~~
Borrados el 29/08/2026 junto con la carpeta `src/assets/`.

### 14.6 Maquetado de la lección (31/08/2026)

La lección se lee como una página de libro de texto, no como un bloque de párrafos:

- **Figuras intercaladas.** Una cada dos párrafos, alternando izquierda y derecha, con el texto rodeándolas a partir de 900 px de ancho y apiladas a una columna por debajo. Antes se pintaban todas seguidas al final del apartado, detrás del texto.
- **Conceptos al margen.** Cada término del glosario aparece explicado en un recuadro lateral junto al párrafo donde sale por primera vez, una sola vez en toda la lección y dos por apartado como mucho. No es contenido nuevo: son los `concepts[]` que ya existían, y el glosario del final se mantiene. Cubre 173 de los 208 apartados.
- **Tres figuras por tema** declaradas en `scripts/images.json`: 145 entradas en total.

- **Documento comentado** al final del apartado que lo tiene: extracto de fuente primaria, su cita y una pregunta al lector. Ver §14.8.

### 14.7 Fichas de país

**Resuelto el 10/09/2026.** De los 142 países del atlas solo 22 tienen lección escrita, y al pinchar en cualquiera de los otros 120 no aparecía nada. Ahora **los 142 tienen ficha**.

- **Fuente: Wikidata, que es CC0**, y por eso sus datos sí se pueden usar sin arrastrar el share-alike que descartó el texto de Wikipedia (§13). Se cita la fuente en la ficha de todas formas, aunque la licencia no lo exija.
- **Empaquetados, no pedidos en tiempo de ejecución.** `npm run countries` ejecuta una consulta SPARQL y genera `src/data/country-facts.ts` con capital, población, superficie y continente de los 142. La PWA sigue funcionando sin red y la CSP no necesita `connect-src` hacia Wikidata. El script corre en Node, nunca en el navegador (§14.3.5).
- **Un dato ausente no se pinta.** `factRows` en `src/lib/countries.ts` devuelve solo los campos que existen, de modo que un país sin capital registrada no enseña una fila vacía ni un guión. Hoy solo falta una capital de 142.
- **Dónde se ve:** el panel del globo, para un país sin lección, muestra sus datos en vez de un mensaje suelto, y `/pais/:country` abre ficha para cualquier país del atlas, con las lecciones si las tiene y con enlaces a los que sí las tienen si no.
- `npm test` comprueba que **cada uno de los 142 países del atlas tiene ficha**: si alguno se queda sin ella vuelve a haber un agujero en el globo, y sin esa comprobación nadie se enteraría.

**Lo que sigue pendiente y es decisión del cliente:** 17 de los 35 temas tienen `country` = «Europa» o «Mundo». Esos temas no se alcanzan desde el globo porque no apuntan a ningún país concreto. Mapearlos en `src/lib/regions.ts` encendería más países, pero asignar «Prehistoria» o «Segunda Guerra Mundial» a un país concreto es una decisión editorial discutible.

### 14.5 Lo que queda

- **Más figuras.** Hay 35 portadas y 5 figuras; §14.2 pide entre dos y cuatro
  figuras por tema. Es trabajo editorial: una entrada por imagen en
  `scripts/images.json` y `npm run images`.
- **Retratos y caricaturas.** `imperialismo` ya lleva la caricatura de Sambourne
  para *Punch*. Falta explotar Daumier, Gillray y *Kladderadatsch* en
  `gran-guerra`, `entreguerras` y `revolucion-rusa`.
- **AVIF o WebP con `<picture>`.** Hoy se sirve el JPEG o PNG de Commons a
  1200 px. Hace falta una herramienta de conversión que el proyecto no tiene.
- **Peso.** Tres imágenes pasan del megabyte. Bajar `ANCHO` en
  `scripts/fetch-images.mjs` y volver a descargarlas es la vía rápida.

## 15. Niveles educativos (retirados)

Se implantaron el 10/09/2026 (textos de ESO y Bachillerato por apartado, selector en la lección, filtro en la biblioteca y columna `topics.levels`) y **se retiraron el 11/09/2026 a petición del cliente**: en producción solo veía Universidad porque la migración no estaba aplicada, y pidió dejarlo «normal, sin niveles». Se borraron `src/lib/levels.ts`, `src/data/levels/` y la migración `20260910_topic_levels.sql`. Cada lección muestra un único texto, con debates y bibliografía. Si en producción llegó a crearse la columna `levels`, se queda sin uso y no molesta.

## 16. Barajado de las opciones del quiz

La respuesta correcta estaba en la segunda posición en **474 de las 555 preguntas**, un 85 %: el quiz se aprobaba contestando siempre la «b» sin leer el enunciado.

Se baraja **al servir**, en `useQuiz`, con `shuffled` de `src/lib/shuffle.ts`, y no en los datos. Así queda arreglado a la vez el contenido local y el que viene de Supabase, sin reescribir 555 preguntas ni volver a sembrar, y cada intento sale en un orden distinto.

**La corrección va por `id` de opción y nunca por posición**, así que cambiar el orden no puede romperla; la letra A/B/C/D la pone `QuizView` al pintar y el `id` no llega al DOM. El barajado es orden de presentación, **no una medida de seguridad**: quien protege la respuesta correcta sigue siendo `check_quiz_answer` en el servidor (§10.3).

`npm test` comprueba que barajar no pierde, repite ni inventa opciones, que no modifica el array recibido y que reparte de verdad: 4000 barajados y la misma opción tiene que caer en las cuatro posiciones.

### 14.8 Documentos comentados

**Implantado el 10/09/2026.** Es la pieza que más distingue una página de libro de texto de un artículo: no basta con contar lo que pasó, hay que poner delante un texto de la época y pedirle al lector que lo lea.

- **Modelo de datos:** el tipo `TopicDocument` en `src/data/types.ts` —apartado, título, extracto, cita, nota y **pregunta**—. Los documentos viven en `src/data/documents.ts` y viajan a la base de datos como un bloque `documents` dentro de `lessons.body`, igual que el glosario o las imágenes: no hizo falta migración.
- **La pregunta no es opcional.** Un extracto sin pregunta es una cita; lo que lo convierte en documento comentado es el ejercicio. `npm test` lo exige, y exige también que el apartado al que apunta exista: un documento con un índice equivocado no se pintaría nunca y nadie se enteraría.
- **Licencia, regla dura.** Los originales son todos de dominio público. **El riesgo real está en las traducciones**, que pueden tener derechos vivos aunque el original tenga tres mil años: cuando el original no está en español la versión es propia y el pie lo dice. Los textos ya en español —Montesinos, Cádiz, la Constitución de 1978, el Acuerdo de París— se citan como tales.
- **Cobertura:** 34 documentos en 34 temas. `prehistoria` no tiene, y es deliberado: es por definición el periodo anterior a la escritura. La comprobación de `npm test` lo fija por escrito para que se lea como decisión y no como descuido.

## 17. Checklist de seguridad antes de publicar

Ejecutado el 10/09/2026 contra el proyecto real con `npm run check:security`. **19 comprobaciones en verde, ninguna con fallo, 3 pendientes de hacerse a mano.** El script está en `scripts/check-security.mjs` y no es destructivo: las escrituras que intenta son todas escrituras que deben fallar, y si alguna saliera bien, ese sería el hallazgo.

Lo que hay que entender de la arquitectura antes de leer el resultado: **este proyecto no tiene backend propio**. El navegador habla directamente con Supabase, que es PostgREST más PostgreSQL. Por eso la clave publishable **es pública por diseño** y no es un secreto filtrado, y por eso la frontera de autorización no son unos endpoints sino las **políticas RLS**. Un endpoint que se olvida de comprobar permisos es imposible aquí, porque no hay endpoints que escribir: la política se aplica en la base de datos.

| | Comprobación | Resultado |
| --- | --- | --- |
| A1 | Ninguna clave en el bundle | Sin coincidencias en los 19 archivos de `dist/` |
| A1b | Las variables `VITE_` no llevan secretos | Solo URL y clave publishable |
| A2 | Las llamadas a terceros no salen del navegador | Solo Supabase. Commons y Wikidata se consultan en build, desde Node |
| A2b | La CSP impide llamar a terceros | `connect-src` limitado a Supabase; `script-src 'self'` sin `unsafe-inline` ni `unsafe-eval` |
| A3 | Ningún secreto en el historial de git | Limpio. `.env.local` nunca versionado |
| B1 | Sin sesión no se lee nada personal | `profiles`, `quiz_attempts`, `learning_progress`, `user_preferences`, `user_roles` cerradas |
| B1b | El banco de respuestas no se lee | `questions` y `question_options` sin grant ni política: nadie las lee (§10.3) |
| B3 | Denegar por defecto | 11 tablas, las 11 con RLS |
| C1 | Cambiar el id no abre otra ficha | Consultar por id concreto no salta la política |
| C2 | El dueño va dentro de la consulta | Las 7 políticas de tablas de usuario comparan con `auth.uid()` en el `using` |
| C3 | Identificadores no adivinables | Todas las claves primarias son uuid |
| D1 | Esconder el botón no es un permiso | `topics`, `questions` y `user_roles` rechazan insert y delete anónimos |
| D1b | Nadie se hace administrador | `user_roles` no tiene ningún grant de escritura (§10.5) |
| D2 | Las reglas, en un solo sitio | 11 políticas en `supabase/migrations/` |
| D3 | Lo destructivo deja rastro | No hay `DELETE` concedido al navegador, así que no hay borrado que auditar |
| E0 | Auth pide confirmación de correo | Registro abierto **con** confirmación; solo proveedor de correo |
| E3 | Los errores no cuentan de más | Sin trazas, sin rutas, sin nombres internos |
| E4 | Cabeceras del alojamiento | `nosniff`, `Referrer-Policy`, HSTS y `Permissions-Policy` |

**Las tres que faltan exigen dos cuentas reales abiertas a la vez** —B2 con sesión ajena, E1 dos cuentas en paralelo y E2 recorrer la app con la de menor privilegio— y crearlas es decisión del dueño del proyecto, no de un script. **B2 ya está comprobado contra las políticas** con `npm run check:sql` (ver §17.1): con dos usuarios simulados, B no ve nada de A. Lo que falta es repetirlo contra producción, porque producción puede no coincidir con los archivos.

**Dos matices que el resultado en verde no debe ocultar:**

1. **Con PostgREST el esquema es descubrible.** El error de E3 nombra la tabla consultada, y cualquiera puede listar las tablas expuestas. No es un fallo: es cómo funciona el modelo, y por eso la defensa **no es la oscuridad sino RLS**. Todo lo que no debe leerse ya está cerrado.
2. **`style-src` admite `unsafe-inline`.** Lo exigen los estilos ligados con `:style` de Vue, como las barras de progreso. Es una relajación conocida y acotada: `script-src` sigue sin `unsafe-inline`, que es lo que importa para XSS.

### 17.1 El SQL se ejecuta antes de llegar a Supabase

`npm run check:sql` ejecuta todas las migraciones y los archivos del seed contra un Postgres de verdad —PGlite, Postgres compilado a WebAssembly, en memoria—, sin Docker, sin la clave `service_role` y sin tocar Supabase. Comprueba que corren sobre una base limpia, que las posteriores al esquema inicial se pueden repetir, que el contenido llega completo, y prueba las políticas RLS y el cálculo de puntos con dos usuarios simulados.

**Existe por un fallo concreto.** El 10/09/2026 se entregaron tres migraciones que nunca se habían ejecutado, y dos fallaron al pegarlas en el SQL Editor. `20260910_topic_levels.sql` tenía una subconsulta dentro de un `CHECK`, que Postgres no admite, y además dejaba pasar un array vacío porque `array_length('{}')` devuelve `NULL` y un `CHECK` solo rechaza lo que da falso. Leer el SQL no encuentra ninguno de los dos: hay que ejecutarlo.

**Lo que no prueba** es que producción coincida con los archivos. Para eso está `npm run check:security`, contra el servidor real.

## 18. Historia de cada país del atlas (11/09/2026)

Los 142 países del globo tienen una historia breve propia —tres párrafos y de cuatro a siete fechas clave— en `src/data/country-histories/` (`europa.ts`, `asia.ts`, `africa.ts`, `america.ts`, este último con Oceanía). La clave es el nombre en español exacto de `ES_NAMES`. `countryHistory(nombre)` usa `Object.hasOwn` para no devolver propiedades heredadas como `constructor`.

- **Dónde se ve:** la ficha de país (`/pais/:nombre`) la muestra entera para todos los países; el panel del globo, el primer párrafo con el botón «Leer su historia». Siempre con interpolación `{{ }}`, nunca `v-html`.
- **Texto propio**, no copiado de Wikipedia (CC BY-SA, §13). Viaja en el paquete: la PWA funciona sin red y no toca la base de datos.
- **Test:** `npm test` comprueba que todo país del atlas tiene historia con texto y fechas, y que no hay historias de países que el atlas no conoce.
- **Lecciones completas de país:** `rumania` y `estados-unidos` son temas de biblioteca completos (7 apartados, debates, bibliografía y 16 preguntas cada uno). Llevan portada y figuras con licencia comprobada (156 imágenes en total).

## 19. Portada de cada país (11/09/2026)

La ficha de país usa como fondo de su cabecera una imagen histórica o monumental representativa de cada uno de los 142 países del atlas, con una sombra para que el texto se lea y el pie y la atribución completa al final de la cabecera. Mismas reglas que las imágenes de los temas (§14.2 y §14.3): solo dominio público o licencia libre comprobada por la API de Commons, archivos locales bajo `/img/paises/`, validación con `safeImage` antes de pintarse. Manifiesto `scripts/country-images.json`, descarga con `npm run images:paises` y salida `src/data/country-images.ts`. `npm test` exige portada válida para todos los países del atlas.

Arreglo de maquetación asociado: `globe.js` fijaba estilos en línea (`position`, `width`, `height`) que anulaban `.globe-canvas`; ahora solo lo hace si el elemento no tiene clase, y el globo se muestra entero y centrado.

## 20. Segundo idioma: rumano (desde el 14/09/2026)

Petición del cliente: la PWA en **español y rumano, solo esos dos**, con selector de idioma y el contenido en el idioma elegido. La traducción es propia (no un servicio automático) y se hace por fases; lo que aún no está traducido se muestra en español.

- **Fase 1 · Interfaz (hecha).** `src/lib/i18n.ts` sin dependencias: `locale`, `setLocale`, `t`, `countryLabel`, `eraLabel`, `continentLabel`. Diccionarios `src/i18n/es.ts` y `src/i18n/ro.ts`; el tipo del rumano exige todas las claves del español. Nombres de países, regiones, épocas y continentes en `src/i18n/names-ro.ts`. Selector `ES | RO` en el menú; el idioma se guarda en `localStorage` y, la primera vez, se toma del navegador.
- **Regla:** los datos se siguen identificando por su nombre o slug en español (rutas, banderas, preferencias guardadas en Supabase). La traducción solo cambia lo que se pinta, así que ningún enlace ni dato guardado se rompe al cambiar de idioma.
- **Seguridad:** todos los textos traducidos se pintan con interpolación `{{ }}`; ninguno con `v-html`. La interpolación de `t` solo sustituye marcadores `{nombre}` y usa `Object.hasOwn`.
- **Fase 2 (hecha, 14/09/2026).** Las 142 historias de país en rumano en `src/data/country-histories/ro/` y los 142 pies de portada en `src/i18n/country-captions-ro.ts`. `countryHistory(nombre, lang)` cae al español si falta una traducción. Las capitales, que Wikidata da en español, se traducen con `CAPITAL_NAMES_RO` y `capitalLabel` (Bucarest → București). `npm test` exige la traducción completa y con la misma forma que el español.
- **Mantenimiento:** cambiar una historia o un pie en español obliga a cambiar el rumano; el test detecta que falte o que no cuadren párrafos y fechas, no que el contenido difiera.
- **Fase 3 (en marcha desde el 16/09/2026):** lecciones, documentos y preguntas, tema a tema. Traducidos: toda la Edad Contemporánea (12 temas) más `revolucion-francesa`, `ilustracion`, `absolutismo` y `revolucion-cientifica`: 16 de 37. Diseño aplicado:
  - Lecciones rumanas empaquetadas en `src/data/topics/ro/<slug>.ts`, con la misma forma que el tema español; `useLesson` las sirve cuando el idioma es rumano y cae al español si un tema no está traducido. Sin migración ni SQL.
  - Quiz: enunciados, opciones y explicaciones rumanas en el paquete, emparejadas con las opciones de la base de datos por su posición. La corrección sigue en el servidor (`check_quiz_answer`, `submit_quiz_attempt`) con los ids reales, y el navegador sigue sin conocer la respuesta correcta (§10).
  - Test de forma: mismos apartados, fechas, conceptos, debates, fuentes, preguntas y opciones que el español, mismo número de pies de imagen y las mismas notas destacadas. Un tema sin traducir no es fallo.
  - Tipo `TopicTranslation` en `src/data/types.ts`; traducciones en `src/data/topics/ro/<slug>.ts` y registro en `src/data/topics/ro/index.ts`. `useLesson` y `useTopics` aplican la traducción al pintar (computed sobre `locale`), así que el idioma se cambia sin volver a pedir nada al servidor. Los apartados solo se sustituyen si hay los mismos que en español: los índices son los que usan figuras, documentos y progreso guardado.
  - **Estado a 17/09/2026:** 16 de 37 temas traducidos (toda la Edad Contemporánea más `revolucion-francesa`, `ilustracion`, `absolutismo` y `revolucion-cientifica`). Quedan 21, todos anteriores a 1543. Siguiendo hacia atrás en el tiempo por el resto de la Edad Moderna y luego la Edad Media y la Antigüedad.
  - **Procedimiento para traducir un tema:** copiar la forma del español (mismos apartados y notas destacadas, fechas, conceptos, debates, fuentes, documentos comentados, pies de imagen en el orden de `TOPIC_IMAGES[slug]` y preguntas con las opciones en la misma posición), registrar el tema en `src/data/topics/ro/index.ts` y pasar `npm test` y `npm run build`. Ningún paso requiere migración ni SQL.
