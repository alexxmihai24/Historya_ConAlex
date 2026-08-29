# Especificación del producto · Historya con Alex

**Última actualización:** 29 de agosto de 2026
**Estado:** contenido en reescritura a nivel universitario. Rediseño «Atlas Nocturno» implantado. **Supabase conectado; el seed de 25 temas está pendiente de ejecutarse.**

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

**Escritos a nivel universitario (25 temas, 395 preguntas):**

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

**Por escribir:** quedan 10 temas: entreguerras, II Guerra Mundial, Guerra Fría, España siglo XX, mundo actual, y el bloque no europeo (China imperial, India, Japón, África y América precolombina).

El recuento vivo está en `CONTINUAR.md`, que se actualiza tema a tema. `npm run seed` imprime el número real de temas y preguntas del repositorio.

Ya no queda ningún tema con el texto corto de la demo inicial: `_pendientes.ts` se ha eliminado.

## 4. Estado técnico

### Implementado

- **Diseño «Atlas Nocturno»** (entrega del cliente del 29/08/2026, en `design/`): fondo oscuro con auroras en deriva y grano, Instrument Serif para los títulos, Archivo para la interfaz y IBM Plex Mono para cifras, acento brasa `#ff4a1c` y superficies de cristal. Aplicado a las siete vistas, a los iconos PWA, al manifest y a la página offline.
- **Home con globo interactivo**: proyección ortográfica sobre Natural Earth 110m, modo noche con atmósfera y terminador, arrastre para girar, rueda para acercar, y los países con lección encendidos en brasa. Al elegir uno, el globo vuela hasta él y el panel lateral muestra su ficha breve.
- **Ficha de país** en `/pais/:country`: hitos, línea de épocas, lecciones del país y acceso a su quiz. Sin mapa histórico ni narración de audio, por decisión del cliente.
- **Quiz contrarreloj**: 20 segundos por pregunta, 3 vidas, racha con multiplicador hasta ×4 y bonus por tiempo restante.
- Biblioteca filtrable por época y nivel, lectura de lección, perfil y acceso.
- Lectura de lección con apartados multipárrafo, glosario, debate historiográfico, línea temporal y bibliografía.
- Quiz global o por tema, con corrección inmediata y explicación.
- Composables `useTopics`, `useLesson`, `useQuiz` y `useProgress` que leen de Supabase y **caen al contenido local** si no hay backend configurado.
- Perfil conectado a datos reales (progreso, historial de quizzes) y cierre de sesión.
- Formularios de registro e inicio de sesión sobre Supabase Auth.
- Migraciones con RLS, perfiles, contenido, progreso y resultados; funciones RPC que no exponen la respuesta correcta.
- **Backend en marcha:** las dos migraciones aplicadas y el contenido cargado. Verificado con `npm run check:backend`. El seed regenerado el 29/08/2026 (25 temas, 395 preguntas) está pendiente de ejecutarse en el SQL Editor.
- PWA instalable: manifest, iconos Android/iPhone, service worker y caché offline.
- Diseño responsive desde 320 px.

### No implementado

- Panel de administración para autores o editores.
- Recuperación de contraseña y edición de nombre/avatar.
- Búsqueda de contenido y filtros por país o materia.
- **Imágenes: no hay ninguna.** Ni banderas de país, ni portadas de tema, ni retratos, ni caricaturas, ni figuras dentro de las lecciones. Hoy el único elemento gráfico de un tema es un glifo tipográfico. Es la carencia mayor del producto y tiene sección propia: **§14**.
- Tests automatizados y pipeline de despliegue.
- **Puntos del quiz persistidos.** `submit_quiz_attempt` guarda aciertos calculados en el servidor; los puntos, la racha y el tiempo son de la sesión. Guardarlos exigiría una función que reciba los tiempos por respuesta, con el reloj en manos del cliente.
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
| Cartografía | d3-geo + topojson-client + world-atlas | Globo y siluetas de país. El atlas viaja en el paquete: la PWA no depende de un CDN |

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
  lib/globe.js             historya-globe, historya-outline e historya-map. Portado del diseño
  lib/country-names.ts     Nombres en español de los países del atlas
  lib/regions.ts           Traduce un topic.country a los países que se encienden en el globo
  router/index.ts          Rutas de la aplicación
  stores/auth.ts           Sesión y operaciones de Supabase Auth
  views/                   HomeView, LibraryView, StudyView, QuizView, ProfileView, LoginView
  style.css                Sistema visual y responsive
public/                    Manifest, service worker e iconos PWA
design/                    Entrega de diseño del cliente. Fuente de verdad del sistema visual
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
9. **Nunca `v-html` ni `innerHTML` con datos que vengan de la base de datos.** Hoy no hay ni una sola aparición de ninguno de los dos en `src/`, y esa es la mitad de la defensa contra XSS en una aplicación cuyo contenido lo escriben editores. Comprobación: `grep -rn "v-html\|innerHTML" src/` debe salir vacío.
10. **Ninguna URL que venga de la base de datos se pinta sin validar.** Una `src` de imagen editable es un canal para filtrar la IP y el `Referer` de cada visitante a un tercero. Allowlist de dominios en el cliente, y validación también al guardar.

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

### Fase 3 · Diseño — hecha

1. ~~Recibir las referencias visuales del cliente.~~ Recibidas el 29/08/2026.
2. ~~Rediseñar sobre ellas.~~ «Atlas Nocturno» implantado en toda la aplicación.
3. Pendiente de decidir con el cliente: qué temas de ámbito «Europa» o «Mundo» deberían apuntar a un país concreto para ser alcanzables desde el globo.

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
- **El globo se porta del diseño, no se reimplementa.** `src/lib/globe.js` es el `globe.js` del cliente con tres cambios: d3 y topojson importados del bundle, el atlas empaquetado en vez de traído de un CDN, y avisos por `CustomEvent` en vez de callbacks globales.
- **La marca pasa a «Historya con Alex»**, como la escribe el diseño.
- La seguridad de los quizzes se resuelve en la base de datos, no en la interfaz.
- El perfil **no muestra cifras inventadas**: si no hay sesión ni progreso real, muestra cero.

## 14. Contenido visual pendiente: banderas e imágenes

Esta sección existe porque el rediseño «Atlas Nocturno» dejó la interfaz terminada
y el material gráfico vacío. No es un adorno: un temario de historia sin una sola
imagen es peor producto que uno con menos texto y con documentos que mirar.

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

### 14.4 Limpieza pendiente

`src/components/HelloWorld.vue` y `src/assets/{hero.png, vite.svg, vue.svg}` son
restos del andamiaje inicial de Vite. No los importa nadie. Borrar al empezar esta
tanda, para no confundirlos con material del proyecto.
