import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import { topics as demoTopics } from '../data/history'

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
  'id, slug, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, eras(title), countries(title)'

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
  level: EducationLevel
  progress: number
  visual: string
  color: string
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
    progress: 0,
    visual: row.glyph ?? '◆',
    color: row.accent_color ?? 'gold',
  }
}

export function useTopics() {
  const topics = ref<TopicCard[]>(demoTopics)
  const isLoading = ref(Boolean(supabase))

  async function load() {
    if (!supabase) {
      topics.value = demoTopics
      isLoading.value = false
      return
    }
    isLoading.value = true
    try {
      const { data, error } = await supabase.from('topics').select(TOPIC_SELECT)
      if (error) throw error
      topics.value = ((data ?? []) as unknown as RawTopicRow[]).map(mapTopicRow)
    } catch (err) {
      console.error('useTopics: no se pudo cargar el catálogo desde Supabase', err)
      topics.value = demoTopics
    } finally {
      isLoading.value = false
    }
  }

  void load()

  return { topics, isLoading }
}
