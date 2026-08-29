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

/** Una imagen de un tema, con su atribución completa.
 *
 *  Solo dominio público o licencia libre comprobada una por una (SPEC §14.2).
 *  `author`, `title`, `year`, `source`, `license` y `url` son obligatorios porque
 *  varias de esas licencias exigen atribución y porque el pie los muestra. */
export interface TopicImage {
  /** Ruta local bajo `/img/`. Se valida con `safeImageSrc` antes de pintarse. */
  src: string
  /** Qué se ve en la imagen. No repetir el título del tema. */
  alt: string
  width: number
  height: number
  /** `portada` sustituye al glifo tipográfico; `figura` va dentro de un apartado. */
  role: 'portada' | 'figura'
  /** Índice del apartado tras el que va la figura. Solo para `role: 'figura'`. */
  section?: number
  /** Pie descriptivo. La atribución se compone aparte y siempre se muestra. */
  caption?: string
  author: string
  title: string
  year: string
  /** Institución o repositorio: Wikimedia Commons, Europeana, Rijksmuseum… */
  source: string
  /** Licencia exacta: «Dominio público», «CC BY-SA 4.0»… */
  license: string
  /** URL de la ficha original. Se muestra como texto, nunca como enlace ni como src. */
  url: string
  /** true solo si es una ilustración sintética. El pie la etiqueta como tal. */
  generated?: boolean
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
  images?: TopicImage[]
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
