export type Era = 'Antigüedad' | 'Edad Media' | 'Edad Moderna' | 'Edad Contemporánea'
export type EducationLevel = 'ESO' | 'Bachillerato' | 'Universidad'

export interface StudySection {
  title: string
  /** Párrafos separados por una línea en blanco. StudyView los renderiza uno a uno.
   *  Este es el texto de Universidad: el nivel al que se escribió el temario. */
  body: string
  /** Mismo apartado contado para ESO. Si falta, el apartado no se da en ESO. */
  bodyEso?: string
  /** Mismo apartado contado para Bachillerato. Si falta, no se da en Bachillerato. */
  bodyBachillerato?: string
  callout?: string
}

/** Los textos de un tema para los niveles que no son Universidad.
 *
 *  Viven en `src/data/levels/<slug>.ts`, aparte del archivo de tema, por el
 *  mismo motivo que las imágenes: un tema son ya 400 líneas y el temario de
 *  cada nivel se escribe y se revisa por su cuenta. `history.ts` los engancha.
 *
 *  Cada array va **en el mismo orden que `sections`**. Una cadena vacía o un
 *  hueco significa que ese apartado no se da en ese nivel, que es lo normal:
 *  un tema de ESO tiene menos apartados que el mismo tema en Universidad. */
export interface TopicLevels {
  eso?: string[]
  bachillerato?: string[]
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

/** Datos básicos de un país del atlas, tomados de Wikidata.
 *
 *  Existen para que TODO país del globo tenga ficha, no solo los 22 que tienen
 *  lección escrita: al pinchar en cualquiera de los otros 120 no aparecía nada.
 *
 *  Wikidata es CC0, así que sus datos no arrastran el share-alike que descartó
 *  el texto de Wikipedia (SPEC §13). Se generan con `npm run countries` en
 *  `src/data/country-facts.ts` y viajan en el paquete: la PWA funciona sin red.
 *
 *  Todo campo salvo `name` y `code` puede faltar: Wikidata no tiene capital ni
 *  población de todas las entidades del atlas, y un dato ausente no se pinta. */
export interface CountryFacts {
  /** Código ISO 3166-1 alfa-2 en minúscula. Es también el nombre de la bandera. */
  code: string
  /** Nombre en español TAL COMO lo usa el atlas. Es la clave de búsqueda. */
  name: string
  capital: string | null
  continent: string | null
  population: number | null
  /** Superficie en kilómetros cuadrados. */
  area: number | null
}
