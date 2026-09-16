import { computed, ref } from 'vue'
import { supabase } from '../lib/supabase.ts'
import { findTopic } from '../data/history.ts'
import { topicTranslation } from '../data/topics/ro/index.ts'
import { locale } from '../lib/i18n.ts'
import type { Concept, Debate, Source, TopicImage, TopicDocument } from '../data/types.ts'
import { safeImages } from '../lib/images.ts'
import { TOPIC_SELECT, mapEducationLevel, type RawTopicRow, type EducationLevel } from './useTopics.ts'

export type LessonBlock =
  | {
      type: 'section'
      title: string
      text: string
      callout?: string | null
    }
  | { type: 'timeline'; items: Array<{ date: string; event: string }> }
  | { type: 'concepts'; items: Concept[] }
  | { type: 'debates'; items: Debate[] }
  | { type: 'sources'; items: Source[] }
  | { type: 'images'; items: TopicImage[] }
  | { type: 'documents'; items: TopicDocument[] }

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
  /** Ya validadas: lo que llega aquí se puede pintar sin más comprobaciones. */
  images: TopicImage[]
  documents: TopicDocument[]
}

function blocksToSections(body: LessonBlock[]) {
  const sections: StudySectionUI[] = []
  const keyDates: TimelineItemUI[] = []
  const concepts: Concept[] = []
  const debates: Debate[] = []
  const sources: Source[] = []
  let images: TopicImage[] = []
  const documents: TopicDocument[] = []
  for (const block of body) {
    if (block.type === 'section')
      sections.push({
        title: block.title,
        body: block.text,
        callout: block.callout ?? undefined,
      })
    else if (block.type === 'timeline') keyDates.push(...block.items)
    else if (block.type === 'concepts') concepts.push(...block.items)
    else if (block.type === 'debates') debates.push(...block.items)
    else if (block.type === 'sources') sources.push(...block.items)
    // Una `src` de la base de datos no se pinta sin validarla (SPEC §10.10).
    else if (block.type === 'images') images = safeImages(block.items)
    else if (block.type === 'documents') documents.push(...block.items)
  }
  return { sections, keyDates, concepts, debates, sources, images, documents }
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
    sections: demo.sections.map((section) => ({
      title: section.title,
      body: section.body,
      callout: section.callout,
    })),
    keyDates: demo.keyDates,
    concepts: demo.concepts,
    debates: demo.debates,
    sources: demo.sources,
    images: safeImages(demo.images ?? []),
    documents: demo.documents ?? [],
  }
}

/** La lección en el idioma elegido (SPEC §20, fase 3).
 *
 *  El contenido de Supabase está en español; la traducción viaja en el paquete y
 *  se aplica aquí al pintar, así que cambiar de idioma no pide nada al servidor
 *  ni obliga a tocar la base de datos.
 *
 *  Los apartados solo se sustituyen si hay los mismos que en español: los
 *  índices de apartado son los que usan las figuras, los documentos y el
 *  progreso guardado, y descuadrarlos movería una figura de sitio. */
function translated(base: LessonView | null, lang: 'es' | 'ro'): LessonView | null {
  if (!base) return null
  const ro = topicTranslation(base.id, lang)
  if (!ro) return base
  const sections = ro.sections.length === base.sections.length
    ? ro.sections.map((section) => ({ title: section.title, body: section.body, callout: section.callout }))
    : base.sections
  const images = ro.images?.length === base.images.length
    ? base.images.map((image, index) => ({
        ...image,
        alt: ro.images![index].alt,
        caption: ro.images![index].caption ?? image.caption,
      }))
    : base.images
  return {
    ...base,
    title: ro.title,
    years: ro.years,
    summary: ro.summary,
    sections,
    keyDates: ro.keyDates,
    concepts: ro.concepts,
    debates: ro.debates,
    sources: ro.sources,
    documents: ro.documents ?? base.documents,
    images,
  }
}

export function useLesson(slug: string) {
  /** Lo que llega de Supabase o del repositorio, siempre en español. */
  const rawTopic = ref<LessonView | null>(mapDemoLesson(slug))
  const topic = computed(() => translated(rawTopic.value, locale.value))
  const isLoading = ref(Boolean(supabase))

  async function load() {
    if (!supabase) {
      rawTopic.value = mapDemoLesson(slug)
      isLoading.value = false
      return
    }
    isLoading.value = true
    try {
      const { data: topicRow, error: topicError } = await supabase.from('topics').select(TOPIC_SELECT).eq('slug', slug).maybeSingle()
      if (topicError) throw topicError
      const row = topicRow as unknown as RawTopicRow | null
      if (!row) {
        rawTopic.value = null
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
      const { sections, keyDates, concepts, debates, sources, images, documents } = blocksToSections(lesson?.body ?? [])
      rawTopic.value = {
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
        images,
        documents,
      }
    } catch (err) {
      console.error('useLesson: no se pudo cargar la lección desde Supabase', err)
      rawTopic.value = mapDemoLesson(slug)
    } finally {
      isLoading.value = false
    }
  }

  void load()

  return { topic, isLoading }
}
