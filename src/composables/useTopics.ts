import { ref } from 'vue'
import { supabase } from '../lib/supabase.ts'
import { topics as demoTopics } from '../data/history.ts'
import type { Topic, TopicImage } from '../data/types.ts'
import { safeImage } from '../lib/images.ts'
import { levelsOf } from '../lib/levels.ts'

export type DbEducationLevel = 'eso' | 'bachillerato' | 'universidad' | 'curioso'
export type EducationLevel = 'ESO' | 'Bachillerato' | 'Universidad' | 'Curioso'

const LEVEL_LABEL: Record<DbEducationLevel, EducationLevel> = {
  eso: 'ESO',
  bachillerato: 'Bachillerato',
  universidad: 'Universidad',
  curioso: 'Curioso',
}

export function mapEducationLevel(level: DbEducationLevel): EducationLevel {
  return LEVEL_LABEL[level]
}

/** Columns shared by useTopics and useLesson when reading the `topics` table. */
export const TOPIC_SELECT =
  'id, slug, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, levels, eras(title), countries(title)'

/* `levels` es de la migración 20260910. Mientras no se haya ejecutado, pedirla
   haría fallar el select entero y el catálogo caería al contenido local. Se
   reintenta sin ella para no obligar a desplegar el SQL y el código a la vez. */
export const TOPIC_SELECT_SIN_LEVELS = TOPIC_SELECT.replace(', levels', '')

export interface RawTopicRow {
  id: string
  slug: string
  title: string
  summary: string
  education_level: DbEducationLevel
  estimated_minutes: number
  period_label: string | null
  glyph: string | null
  accent_color: string | null
  cover_image: unknown
  /** Niveles en los que el tema se puede leer. Ausente antes de la migración. */
  levels?: DbEducationLevel[] | null
  eras: { title: string } | null
  countries: { title: string } | null
}

export interface TopicCard {
  id: string
  era: string
  title: string
  years: string
  country: string
  description: string
  duration: string
  /** Nivel más alto al que está escrito el tema. Se muestra en la tarjeta. */
  level: EducationLevel
  /** Niveles en los que se puede leer. Es por lo que filtra la biblioteca. */
  levels: EducationLevel[]
  progress: number
  visual: string
  color: string
  /** Portada validada, o null si el tema no tiene o la que hay no es de fiar. */
  cover: TopicImage | null
}

export function mapTopicRow(row: RawTopicRow): TopicCard {
  return {
    id: row.slug,
    era: row.eras?.title ?? '',
    title: row.title,
    years: row.period_label ?? '',
    country: row.countries?.title ?? '',
    description: row.summary,
    duration: `${row.estimated_minutes} min`,
    level: mapEducationLevel(row.education_level),
    // Sin la columna, el tema se ofrece solo en su nivel escrito: es lo que había
    // antes de la migración y no deja la biblioteca vacía.
    levels: (row.levels ?? [row.education_level]).map(mapEducationLevel),
    progress: 0,
    visual: row.glyph ?? '◆',
    color: row.accent_color ?? 'gold',
    // Nunca se pinta una `src` de la base de datos sin validarla (SPEC §10.10).
    cover: safeImage(row.cover_image),
  }
}

/** Los temas del repositorio, con la misma forma que los que vienen de Supabase. */
function mapDemoTopic(topic: Topic): TopicCard {
  return {
    ...topic,
    levels: levelsOf(topic.sections),
    cover: safeImage(topic.images?.find((image) => image.role === 'portada')),
  }
}

const demoCards: TopicCard[] = demoTopics.map(mapDemoTopic)

export function useTopics() {
  const topics = ref<TopicCard[]>(demoCards)
  const isLoading = ref(Boolean(supabase))

  async function load() {
    if (!supabase) {
      topics.value = demoCards
      isLoading.value = false
      return
    }
    isLoading.value = true
    try {
      let { data, error } = await supabase.from('topics').select(TOPIC_SELECT)
      if (error) {
        // Sin la migración 20260910 la columna `levels` no existe todavía.
        ;({ data, error } = await supabase.from('topics').select(TOPIC_SELECT_SIN_LEVELS))
      }
      if (error) throw error
      topics.value = ((data ?? []) as unknown as RawTopicRow[]).map(mapTopicRow)
    } catch (err) {
      console.error('useTopics: no se pudo cargar el catálogo desde Supabase', err)
      topics.value = demoCards
    } finally {
      isLoading.value = false
    }
  }

  void load()

  return { topics, isLoading }
}
