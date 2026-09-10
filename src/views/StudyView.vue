<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLesson } from '../composables/useLesson.ts'
import { useProgress } from '../composables/useProgress.ts'
import { imageCredit } from '../lib/images.ts'
import type { Concept, EducationLevel, TopicImage } from '../data/types.ts'
import { DEFAULT_LEVEL, levelsOf, sectionsForLevel, showsDebates, showsSources } from '../lib/levels.ts'

const route = useRoute()
const { topic, isLoading } = useLesson(String(route.params.topicId))
const lessonId = computed(() => topic.value?.lessonId ?? null)
const { completedSections, toggleSection: saveSection } = useProgress(lessonId)
const isBookmarked = ref(false)

/* Nivel de lectura. Se recuerda entre lecciones porque quien estudia para un
   curso concreto no quiere volver a elegirlo en cada tema. Si el guardado no
   está disponible (navegación privada, almacenamiento bloqueado) se usa el
   predeterminado: es una comodidad, no un dato que haga falta conservar. */
const LEVEL_KEY = 'historya:nivel'

function storedLevel(): EducationLevel {
  try {
    const saved = window.localStorage.getItem(LEVEL_KEY)
    return saved === 'ESO' || saved === 'Bachillerato' || saved === 'Universidad' ? saved : DEFAULT_LEVEL
  } catch {
    return DEFAULT_LEVEL
  }
}

const wantedLevel = ref<EducationLevel>(storedLevel())

/** Niveles a los que este tema está escrito. */
const availableLevels = computed(() => levelsOf(topic.value?.sections ?? []))

/** El nivel elegido, o el más cercano que este tema sí tenga. */
const level = computed<EducationLevel>(() => {
  const available = availableLevels.value
  if (!available.length) return 'Universidad'
  return available.includes(wantedLevel.value) ? wantedLevel.value : available[available.length - 1]
})

function chooseLevel(next: EducationLevel) {
  wantedLevel.value = next
  try {
    window.localStorage.setItem(LEVEL_KEY, next)
  } catch {
    /* Sin almacenamiento el nivel dura lo que la visita. No es un error. */
  }
}

/** Apartados que se leen en el nivel activo, con su índice del temario completo. */
const visibleSections = computed(() => sectionsForLevel(topic.value?.sections ?? [], level.value))

function toggleSection(index: number) {
  // El total es el de los apartados del nivel que se está leyendo: con el del
  // temario completo, quien lee en ESO no podría llegar nunca al 100 %.
  void saveSection(index, visibleSections.value.length)
}

/** El cuerpo de cada apartado guarda sus párrafos separados por una línea en blanco. */
function paragraphs(body: string) {
  return body.split(/\n{2,}/).filter((paragraph) => paragraph.trim().length > 0)
}

/** Portada del tema. Sustituye al glifo tipográfico cuando existe (SPEC §14.2). */
const cover = computed(() => topic.value?.images.find((image) => image.role === 'portada') ?? null)

/** Documento comentado de un apartado, si lo tiene. Va al final del apartado y
 *  no flotando entre los párrafos: se lee entero, no se ojea. */
function documentOf(index: number) {
  return (topic.value?.documents ?? []).find((doc) => doc.section === index) ?? null
}

/** Figuras de un apartado. `section` es el índice del apartado tras el que van. */
function figuresOf(index: number) {
  return (topic.value?.images ?? []).filter((image) => image.role === 'figura' && image.section === index)
}

/** Conceptos explicados al margen, como en un libro de texto: cada término va
 *  junto al apartado donde aparece por primera vez, y solo una vez en toda la
 *  lección. Los que no encajan en ningún apartado siguen estando en el
 *  glosario del final, que no se toca. */
const marginNotes = computed(() => {
  const bySection = new Map<number, Concept[]>()
  const used = new Set<string>()
  // Se busca en el texto del nivel activo: si no, en ESO saldrían al margen
  // términos que solo aparecen en la versión universitaria del apartado.
  for (const { section, index, text } of visibleSections.value) {
    const haystack = `${section.title} ${text}`.toLowerCase()
    for (const concept of topic.value?.concepts ?? []) {
      if (used.has(concept.term)) continue
      if (!haystack.includes(concept.term.toLowerCase())) continue
      const notes = bySection.get(index) ?? []
      // Dos por apartado como mucho: más convierte el margen en otro muro de texto.
      if (notes.length >= 2) continue
      used.add(concept.term)
      bySection.set(index, [...notes, concept])
    }
  }
  return bySection
})

type Block =
  | { kind: 'p'; key: string; text: string }
  | { kind: 'fig'; key: string; side: 'left' | 'right'; image: TopicImage }
  | { kind: 'note'; key: string; side: 'left' | 'right'; concept: Concept }

/** Los bloques de un apartado en orden de lectura. Las figuras y las notas de
 *  margen se reparten entre los párrafos, alternando lado, en vez de caer todas
 *  al final: es la diferencia entre una página de libro y un muro de texto. */
function blocksOf(index: number, text: string): Block[] {
  const paragraphList = paragraphs(text)
  type Floating =
    | { kind: 'fig'; key: string; image: TopicImage }
    | { kind: 'note'; key: string; concept: Concept }
  const pending: Floating[] = [
    ...figuresOf(index).map((image) => ({ kind: 'fig' as const, key: image.src, image })),
    ...(marginNotes.value.get(index) ?? []).map((concept) => ({ kind: 'note' as const, key: concept.term, concept })),
  ]
  const blocks: Block[] = []
  let placed = 0
  const place = () => {
    const next = pending.shift()
    if (!next) return
    const side = placed++ % 2 === 0 ? ('right' as const) : ('left' as const)
    blocks.push({ ...next, side })
  }
  paragraphList.forEach((text, position) => {
    blocks.push({ kind: 'p', key: `p${position}`, text })
    // Uno cada dos párrafos, empezando por el segundo.
    if (position % 2 === 1) place()
  })
  while (pending.length) place()
  return blocks
}

function scrollToSection(index: number) {
  window.document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section v-if="topic" class="study-page">
    <div class="shell study-crumbs">
      <RouterLink to="/biblioteca">Biblioteca</RouterLink><span>→</span><span>{{ topic.era }}</span><span>→</span><strong>{{ topic.title }}</strong>
    </div>

    <header class="shell study-hero">
      <div class="study-hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> {{ topic.era }} · {{ topic.country }}</p>
        <h1>{{ topic.title }}</h1>
        <p>{{ topic.summary }}</p>
        <div class="study-meta"><span>{{ topic.years }}</span><span>{{ topic.duration }} de lectura</span><span>{{ visibleSections.length }} apartados</span></div>
        <div v-if="availableLevels.length > 1" class="level-switch" role="group" aria-label="Nivel de la lección">
          <span class="level-switch-label">Nivel</span>
          <button
            v-for="option in availableLevels"
            :key="option"
            class="level-switch-option"
            :class="{ active: option === level }"
            type="button"
            :aria-pressed="option === level"
            @click="chooseLevel(option)"
          >
            {{ option }}
          </button>
        </div>
        <p v-else class="level-switch-note">Este tema está escrito solo para {{ level }}.</p>
      </div>
      <figure v-if="cover" class="study-cover">
        <img :src="cover.src" :alt="cover.alt" :width="cover.width" :height="cover.height" decoding="async" />
        <figcaption>
          <span v-if="cover.caption">{{ cover.caption }}</span>
          <small>{{ imageCredit(cover) }}<template v-if="cover.generated"> · Ilustración generada, no es un documento histórico</template></small>
        </figcaption>
      </figure>
      <div v-else class="study-visual topic-visual" :class="`visual-${topic.color}`" role="img" :aria-label="`Ilustración editorial de ${topic.title}`"><span>{{ topic.visual }}</span><small>{{ topic.country.toUpperCase() }}</small></div>
    </header>

    <div class="shell study-layout">
      <aside class="study-aside">
        <strong>En esta lección</strong>
        <ol><li v-for="(entry, position) in visibleSections" :key="entry.section.title" :class="{ done: completedSections.includes(entry.index) }"><button type="button" @click="scrollToSection(entry.index)">{{ String(position + 1).padStart(2, '0') }} · {{ entry.section.title }}</button></li></ol>
        <button class="bookmark-button" :class="{ saved: isBookmarked }" type="button" @click="isBookmarked = !isBookmarked">{{ isBookmarked ? '★ Guardado' : '☆ Guardar tema' }}</button>
      </aside>

      <article class="lesson-article">
        <div class="lesson-intro"><span class="drop-cap">{{ topic.title.charAt(0) }}</span><p>{{ topic.summary }}</p></div>
        <section v-for="(entry, position) in visibleSections" :id="`section-${entry.index}`" :key="entry.section.title" class="lesson-section">
          <p class="section-index">{{ String(position + 1).padStart(2, '0') }}</p><h2>{{ entry.section.title }}</h2>
          <div class="lesson-flow">
            <template v-for="block in blocksOf(entry.index, entry.text)" :key="block.key">
              <p v-if="block.kind === 'p'">{{ block.text }}</p>
              <figure v-else-if="block.kind === 'fig'" class="lesson-figure" :class="`float-${block.side}`">
                <img :src="block.image.src" :alt="block.image.alt" :width="block.image.width" :height="block.image.height" loading="lazy" decoding="async" />
                <figcaption>
                  <span v-if="block.image.caption">{{ block.image.caption }}</span>
                  <small>{{ imageCredit(block.image) }}<template v-if="block.image.generated"> · Ilustración generada, no es un documento histórico</template></small>
                </figcaption>
              </figure>
              <aside v-else class="margin-note" :class="`float-${block.side}`">
                <p class="margin-note-term">{{ block.concept.term }}</p>
                <p class="margin-note-text">{{ block.concept.definition }}</p>
              </aside>
            </template>
          </div>
          <figure v-if="documentOf(entry.index)" class="lesson-document">
            <figcaption class="lesson-document-head">
              <span class="lesson-document-tag">Documento</span>
              <strong>{{ documentOf(entry.index)!.title }}</strong>
            </figcaption>
            <blockquote>
              <p v-for="(line, lineIndex) in paragraphs(documentOf(entry.index)!.text)" :key="lineIndex">{{ line }}</p>
            </blockquote>
            <p class="lesson-document-source">
              {{ documentOf(entry.index)!.source }}
              <template v-if="documentOf(entry.index)!.note"><br /><small>{{ documentOf(entry.index)!.note }}</small></template>
            </p>
            <p class="lesson-document-question"><span>?</span>{{ documentOf(entry.index)!.question }}</p>
          </figure>
          <aside v-if="entry.section.callout" class="history-callout"><span>✦</span><p>{{ entry.section.callout }}</p></aside>
          <button class="section-complete" type="button" :class="{ complete: completedSections.includes(entry.index) }" @click="toggleSection(entry.index)">{{ completedSections.includes(entry.index) ? '✓ Apartado completado' : 'Marcar como leído' }}</button>
        </section>

        <section v-if="topic.concepts.length" class="concepts-card">
          <p class="eyebrow">CONCEPTOS CLAVE</p><h2>Vocabulario del tema</h2>
          <dl><template v-for="concept in topic.concepts" :key="concept.term"><dt>{{ concept.term }}</dt><dd>{{ concept.definition }}</dd></template></dl>
        </section>

        <!-- El debate historiográfico es material universitario; la bibliografía
             con fuentes primarias entra en Bachillerato. Ver src/lib/levels.ts. -->
        <section v-if="topic.debates.length && showsDebates(level)" class="debate-card">
          <p class="eyebrow">DEBATE HISTORIOGRÁFICO</p><h2>Lo que los historiadores discuten</h2>
          <article v-for="debate in topic.debates" :key="debate.question" class="debate-item">
            <h3>{{ debate.question }}</h3>
            <div v-for="position in debate.positions" :key="position.school" class="debate-position"><strong>{{ position.school }}</strong><p>{{ position.argument }}</p></div>
            <p class="debate-state"><span>Estado de la cuestión ·</span> {{ debate.state }}</p>
          </article>
        </section>

        <section class="timeline-card"><p class="eyebrow">LÍNEA TEMPORAL</p><h2>Fechas para orientarte</h2><ol><li v-for="item in topic.keyDates" :key="item.date"><strong>{{ item.date }}</strong><span>{{ item.event }}</span></li></ol></section>
        <section v-if="topic.sources.length && showsSources(level)" class="sources-card">
          <p class="eyebrow">FUENTES Y BIBLIOGRAFÍA</p><h2>Para seguir leyendo</h2>
          <ul><li v-for="source in topic.sources" :key="source.title"><span class="source-kind" :class="`kind-${source.kind}`">{{ source.kind === 'primaria' ? 'Fuente primaria' : 'Estudio' }}</span><p><strong>{{ source.author }}</strong>, <em>{{ source.title }}</em> ({{ source.year }}).<template v-if="source.note"> {{ source.note }}</template></p></li></ul>
        </section>

        <section class="study-finish"><p class="eyebrow"><span class="eyebrow-dot"></span> Lectura terminada</p><h2>¿Quieres ponerlo a prueba?</h2><p>Repasa este tema con preguntas y explicaciones que conectan cada respuesta con la lección.</p><RouterLink class="button button-primary" :to="{ name: 'quiz', query: { topic: topic.id } }">Quiz de este tema <span>→</span></RouterLink></section>
      </article>
    </div>
  </section>

  <section v-else-if="isLoading" class="not-found shell"><p class="eyebrow"><span class="eyebrow-dot"></span> Cargando</p><h1>Preparando esta lección…</h1></section>
  <section v-else class="not-found shell"><p class="eyebrow"><span class="eyebrow-dot"></span> Tema no encontrado</p><h1>Este capítulo todavía no existe.</h1><RouterLink class="button button-primary" to="/biblioteca">Volver a la biblioteca <span>→</span></RouterLink></section>
</template>
