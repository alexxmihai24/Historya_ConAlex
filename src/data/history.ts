import type { Era, QuizQuestion, Topic, TopicModule } from './types'
import { prehistoria } from './topics/prehistoria'
import { mesopotamia } from './topics/mesopotamia'
import { egipto } from './topics/egipto'
import { grecia } from './topics/grecia'
import { helenismo } from './topics/helenismo'
import { romaRepublica } from './topics/roma-republica'
import { romaImperio } from './topics/roma-imperio'
import { bizancio } from './topics/bizancio'
import { islam } from './topics/islam'
import { feudalismo } from './topics/feudalismo'
import { andalus } from './topics/andalus'
import { plenaEdadMedia } from './topics/plena-edad-media'
import { crisisSigloXiv } from './topics/crisis-siglo-xiv'
import { renacimiento } from './topics/renacimiento'
import { descubrimientos } from './topics/descubrimientos'
import { reforma } from './topics/reforma'
import { absolutismo } from './topics/absolutismo'
import { revolucionCientifica } from './topics/revolucion-cientifica'
import { ilustracion } from './topics/ilustracion'
import { revolucionFrancesa } from './topics/revolucion-francesa'
import { industrializacion } from './topics/industrializacion'
import { revolucionesLiberales } from './topics/revoluciones-liberales'
import { imperialismo } from './topics/imperialismo'
import { granGuerra } from './topics/gran-guerra'
import { revolucionRusa } from './topics/revolucion-rusa'

export type { Era, EducationLevel, StudySection, Concept, Topic, QuizQuestion, TopicModule } from './types'

/** Orden de lectura de la biblioteca. Un módulo por tema. */
const modules: TopicModule[] = [prehistoria, mesopotamia, egipto, grecia, helenismo, romaRepublica, romaImperio, bizancio, islam, feudalismo, andalus, plenaEdadMedia, crisisSigloXiv, renacimiento, descubrimientos, reforma, absolutismo, revolucionCientifica, ilustracion, revolucionFrancesa, industrializacion, revolucionesLiberales, imperialismo, granGuerra, revolucionRusa]

export const topics: Topic[] = modules.map((module) => module.topic)

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
