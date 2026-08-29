repo: alexxmihai24/Historya_ConAlex
branch: main
path: src

## Last sync
date: 2026-08-29T00:00:00Z

### Updated in this project
- Rediseño visual completo «Atlas Nocturno»: fondo oscuro con auroras, tipografía Instrument Serif + IBM Plex Mono y superficies de cristal.
- Globo en modo noche: atmósfera, terminador y países con lección encendidos en brasa.
- Cuatro pantallas (globo, ficha de país, quiz contrarreloj, biblioteca) en móvil y escritorio.
- Versión clara anterior conservada en `Historya v1 claro.dc.html`.

## Screen map
| Pantalla del proyecto | Archivos del repo |
| --- | --- |
| Home con el globo | `src/views/HomeView.vue`, `src/router/index.ts`, `src/data/history.ts` |
| Ficha de país | `src/data/types.ts` (`Topic.keyDates`, `Topic.country`), `src/data/topics/*` |
| Quiz contrarreloj | `src/views/QuizView.vue`, `src/composables/useQuiz.ts`, `src/data/topics/roma-imperio.ts` |
| Biblioteca | `src/data/history.ts` (`topics`, `eras`), `src/router/index.ts` (`/biblioteca`) |
| Globo y mapas reutilizables | `globe.js` (nuevo, sin equivalente en el repo todavía) |

Todas las pantallas viven en `Historya Home Globo.dc.html`; los datos del prototipo en `historya-data.js`.
