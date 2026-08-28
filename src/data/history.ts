import type { Era, QuizQuestion, Topic, TopicModule } from './types'
import { prehistoria } from './topics/prehistoria'
import { mesopotamia } from './topics/mesopotamia'
import { egipto } from './topics/egipto'
import { grecia } from './topics/grecia'
import { romaRepublica } from './topics/roma-republica'
import { romaImperio } from './topics/roma-imperio'
import { bizancio } from './topics/bizancio'
import { islam } from './topics/islam'
import { feudalismo } from './topics/feudalismo'
import { andalus } from './topics/andalus'
import { renacimiento } from './topics/renacimiento'
import { revolucionesLiberales } from './topics/revoluciones-liberales'

export type { Era, EducationLevel, StudySection, Concept, Topic, QuizQuestion, TopicModule } from './types'

/** Orden de lectura de la biblioteca. Un módulo por tema. */
const modules: TopicModule[] = [prehistoria, mesopotamia, egipto, grecia, romaRepublica, romaImperio, bizancio, islam, feudalismo, andalus, renacimiento, revolucionesLiberales]

export const topics: Topic[] = modules.map((module) => module.topic)

export const quizQuestions: QuizQuestion[] = modules.flatMap((module) => module.questions)

export const eras: Array<{ name: Era; range: string; description: string; color: string }> = [
  { name: 'Antigüedad', range: 'c. 3500 a. C.–476', description: 'Las primeras civilizaciones y el mundo clásico.', color: 'gold' },
  { name: 'Edad Media', range: '476–1453', description: 'Reinos, religiones y rutas que conectaron continentes.', color: 'green' },
  { name: 'Edad Moderna', range: '1453–1789', description: 'Nuevos mundos, ideas y formas de entender el poder.', color: 'plum' },
  { name: 'Edad Contemporánea', range: '1789–hoy', description: 'Revoluciones, conflictos y sociedades globales.', color: 'red' },
]

export function findTopic(id: string) {
  return topics.find((topic) => topic.id === id)
}
