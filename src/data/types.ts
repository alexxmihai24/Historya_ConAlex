export type Era = 'Antigüedad' | 'Edad Media' | 'Edad Moderna' | 'Edad Contemporánea'
export type EducationLevel = 'ESO' | 'Bachillerato' | 'Universidad'

export interface StudySection {
  title: string
  /** Párrafos separados por una línea en blanco. StudyView los renderiza uno a uno. */
  body: string
  callout?: string
}

export interface Concept {
  term: string
  definition: string
}

/** Una controversia abierta entre historiadores, con las posiciones enfrentadas. */
export interface Debate {
  question: string
  positions: Array<{ school: string; argument: string }>
  /** Dónde está hoy la discusión, sin cerrarla artificialmente. */
  state: string
}

/** Referencia bibliográfica o fuente primaria citada en la lección. */
export interface Source {
  author: string
  title: string
  year: string
  /** 'primaria' para textos de la época, 'estudio' para historiografía moderna. */
  kind: 'primaria' | 'estudio'
  note?: string
}

export interface Topic {
  id: string
  era: Era
  title: string
  years: string
  country: string
  description: string
  duration: string
  level: EducationLevel
  progress: number
  visual: string
  color: string
  summary: string
  keyDates: Array<{ date: string; event: string }>
  sections: StudySection[]
  concepts: Concept[]
  debates: Debate[]
  sources: Source[]
}

export interface QuizQuestion {
  id: string
  era: Era
  topicId: string
  topic: string
  question: string
  options: string[]
  answer: number
  explanation: string
}

/** Un archivo por tema: la lección y su banco de preguntas viajan juntos. */
export interface TopicModule {
  topic: Topic
  questions: QuizQuestion[]
}
