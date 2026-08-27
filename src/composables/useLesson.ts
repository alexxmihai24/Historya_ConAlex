import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import { findTopic } from '../data/history'
import type { Concept, Debate, Source } from '../data/types'
import { TOPIC_SELECT, mapEducationLevel, type RawTopicRow, type EducationLevel } from './useTopics'

export type LessonBlock =
  | { type: 'section'; title: string; text: string; callout?: string | null }
  | { type: 'timeline'; items: Array<{ date: string; event: string }> }
  | { type: 'concepts'; items: Concept[] }
  | { type: 'debates'; items: Debate[] }
  | { type: 'sources'; items: Source[] }

export interface StudySectionUI {
  title: string
  body: string
  callout?: string
}

export interface TimelineItemUI {
  date: string
  event: string
}

export interface LessonView {
  id: string
  lessonId: string | null
  era: string
  country: string
  title: string
  years: string
  duration: string
  level: EducationLevel
  visual: string
  color: string
  summary: string
  sections: StudySectionUI[]
  keyDates: TimelineItemUI[]
  concepts: Concept[]
  debates: Debate[]
  sources: Source[]
}

function blocksToSections(body: LessonBlock[]) {
  const sections: StudySectionUI[] = []
  const keyDates: TimelineItemUI[] = []
  const concepts: Concept[] = []
  const debates: Debate[] = []
  const sources: Source[] = []
  for (const block of body) {
    if (block.type === 'section') sections.push({ title: block.title, body: block.text, callout: block.callout ?? undefined })
    else if (block.type === 'timeline') keyDates.push(...block.items)
    else if (block.type === 'concepts') concepts.push(...block.items)
    else if (block.type === 'debates') debates.push(...block.items)
    else if (block.type === 'sources') sources.push(...block.items)
  }
  return { sections, keyDates, concepts, debates, sources }
}

function mapDemoLesson(slug: string): LessonView | null {
  const demo = findTopic(slug)
  if (!demo) return null
  return {
    id: demo.id,
    lessonId: null,
    era: demo.era,
    country: demo.country,
    title: demo.title,
    years: demo.years,
    duration: demo.duration,
    level: demo.level,
    visual: demo.visual,
    color: demo.color,
    summary: demo.summary,
    sections: demo.sections.map((section) => ({ title: section.title, body: section.body, callout: section.callout })),
    keyDates: demo.keyDates,
    concepts: demo.concepts,
    debates: demo.debates,
    sources: demo.sources,
  }
}

export function useLesson(slug: string) {
  const topic = ref<LessonView | null>(mapDemoLesson(slug))
  const isLoading = ref(Boolean(supabase))

  async function load() {
    if (!supabase) {
      topic.value = mapDemoLesson(slug)
      isLoading.value = false
      return
    }
    isLoading.value = true
    try {
      const { data: topicRow, error: topicError } = await supabase.from('topics').select(TOPIC_SELECT).eq('slug', slug).maybeSingle()
      if (topicError) throw topicError
      const row = topicRow as unknown as RawTopicRow | null
      if (!row) {
        topic.value = null
        return
      }
      const { data: lessonRow, error: lessonError } = await supabase
        .from('lessons')
        .select('id, body')
        .eq('topic_id', row.id)
        .eq('position', 0)
        .maybeSingle()
      if (lessonError) throw lessonError
      const lesson = lessonRow as unknown as { id: string; body: LessonBlock[] } | null
      const { sections, keyDates, concepts, debates, sources } = blocksToSections(lesson?.body ?? [])
      topic.value = {
        id: row.slug,
        lessonId: lesson?.id ?? null,
        era: row.eras?.title ?? '',
        country: row.countries?.title ?? '',
        title: row.title,
        years: row.period_label ?? '',
        duration: `${row.estimated_minutes} min`,
        level: mapEducationLevel(row.education_level),
        visual: row.glyph ?? '◆',
        color: row.accent_color ?? 'gold',
        summary: row.summary,
        sections,
        keyDates,
        concepts,
        debates,
        sources,
      }
    } catch (err) {
      console.error('useLesson: no se pudo cargar la lección desde Supabase', err)
      topic.value = mapDemoLesson(slug)
    } finally {
      isLoading.value = false
    }
  }

  void load()

  return { topic, isLoading }
}
