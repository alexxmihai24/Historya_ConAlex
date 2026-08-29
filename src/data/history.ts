import type { Era, QuizQuestion, Topic, TopicModule } from './types.ts'
import { prehistoria } from './topics/prehistoria.ts'
import { mesopotamia } from './topics/mesopotamia.ts'
import { egipto } from './topics/egipto.ts'
import { grecia } from './topics/grecia.ts'
import { helenismo } from './topics/helenismo.ts'
import { romaRepublica } from './topics/roma-republica.ts'
import { romaImperio } from './topics/roma-imperio.ts'
import { bizancio } from './topics/bizancio.ts'
import { islam } from './topics/islam.ts'
import { feudalismo } from './topics/feudalismo.ts'
import { andalus } from './topics/andalus.ts'
import { plenaEdadMedia } from './topics/plena-edad-media.ts'
import { crisisSigloXiv } from './topics/crisis-siglo-xiv.ts'
import { renacimiento } from './topics/renacimiento.ts'
import { descubrimientos } from './topics/descubrimientos.ts'
import { reforma } from './topics/reforma.ts'
import { absolutismo } from './topics/absolutismo.ts'
import { revolucionCientifica } from './topics/revolucion-cientifica.ts'
import { ilustracion } from './topics/ilustracion.ts'
import { revolucionFrancesa } from './topics/revolucion-francesa.ts'
import { industrializacion } from './topics/industrializacion.ts'
import { revolucionesLiberales } from './topics/revoluciones-liberales.ts'
import { imperialismo } from './topics/imperialismo.ts'
import { granGuerra } from './topics/gran-guerra.ts'
import { revolucionRusa } from './topics/revolucion-rusa.ts'
import { entreguerras } from './topics/entreguerras.ts'
import { segundaGuerra } from './topics/segunda-guerra.ts'
import { guerraFria } from './topics/guerra-fria.ts'
import { espanaSigloXx } from './topics/espana-siglo-xx.ts'
import { mundoActual } from './topics/mundo-actual.ts'
import { chinaImperial } from './topics/china-imperial.ts'
import { india } from './topics/india.ts'
import { japon } from './topics/japon.ts'
import { africa } from './topics/africa.ts'
import { americaPrecolombina } from './topics/america-precolombina.ts'
import { TOPIC_IMAGES } from './topic-images.ts'

export type { Era, EducationLevel, StudySection, Concept, Topic, QuizQuestion, TopicModule } from './types.ts'

/** Orden de lectura de la biblioteca. Un módulo por tema. */
const modules: TopicModule[] = [prehistoria, mesopotamia, egipto, grecia, helenismo, romaRepublica, romaImperio, bizancio, islam, feudalismo, andalus, plenaEdadMedia, crisisSigloXiv, renacimiento, descubrimientos, reforma, absolutismo, revolucionCientifica, ilustracion, revolucionFrancesa, industrializacion, revolucionesLiberales, imperialismo, granGuerra, revolucionRusa, entreguerras, segundaGuerra, guerraFria, espanaSigloXx, mundoActual, chinaImperial, india, japon, africa, americaPrecolombina]

/* Las imágenes se enganchan aquí y no dentro de cada archivo de tema: se
   generan desde `scripts/images.json` y su licencia se revisa por su cuenta,
   así que una imagen se puede sustituir sin tocar el texto de la lección. */
export const topics: Topic[] = modules.map((module) => ({
  ...module.topic,
  images: TOPIC_IMAGES[module.topic.id] ?? [],
}))

export const quizQuestions: QuizQuestion[] = modules.flatMap((module) => module.questions)

/** Los `color` son claves de las clases `.era-*` de style.css, no de `accent_color`
 *  en la base de datos: esa columna es del tema, no de la época. */
export const eras: Array<{ name: Era; range: string; description: string; color: string }> = [
  { name: 'Antigüedad', range: 'c. 3500 a. C.–476', description: 'Las primeras civilizaciones y el mundo clásico.', color: 'amber' },
  { name: 'Edad Media', range: '476–1453', description: 'Reinos, religiones y rutas que conectaron continentes.', color: 'ember' },
  { name: 'Edad Moderna', range: '1453–1789', description: 'Nuevos mundos, ideas y formas de entender el poder.', color: 'azure' },
  { name: 'Edad Contemporánea', range: '1789–hoy', description: 'Revoluciones, conflictos y sociedades globales.', color: 'mint' },
]

const ERA_COLOR = new Map(eras.map((era) => [era.name as string, era.color]))

/** Clase `.era-*` de una época. Las tarjetas colorean su filo con ella. */
export function eraColor(name: string) {
  return ERA_COLOR.get(name) ?? 'amber'
}

export function findTopic(id: string) {
  return topics.find((topic) => topic.id === id)
}
