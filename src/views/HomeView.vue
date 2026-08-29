<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { eraColor, eras, findTopic } from '../data/history.ts'
import { useTopics } from '../composables/useTopics.ts'
import { atlasCountries, coveredCountries } from '../lib/regions.ts'
import CountryFlag from '../components/CountryFlag.vue'
import '../lib/globe.js'

const { topics } = useTopics()

const hovered = ref<string | null>(null)
const selected = ref<string | null>(null)
const countryTotal = ref(0)

/** Países del atlas con al menos una lección. Es lo que se enciende en brasa. */
const covered = computed(() => coveredCountries(topics.value.map((topic) => topic.country)))
// `.attr` es obligatorio: el elemento tiene un método covered() y, sin el
// modificador, Vue ve la clave en el elemento y asigna la propiedad en vez del
// atributo, dejando el método sobrescrito con una cadena.
const coveredAttr = computed(() => covered.value.join(','))

function topicsOf(country: string) {
  return topics.value.filter((topic) => atlasCountries(topic.country).includes(country))
}

const selectedTopics = computed(() => (selected.value ? topicsOf(selected.value) : []))
const hasLesson = computed(() => selectedTopics.value.length > 0)

const readout = computed(() => hovered.value ?? selected.value ?? 'Gira el globo')

/** Hitos del primer tema del país. El contenido vive en el repositorio, así que
 *  se leen de ahí en lugar de pedir la lección entera solo para el panel. */
const selectedDates = computed(() => {
  const first = selectedTopics.value[0]
  return first ? (findTopic(first.id)?.keyDates ?? []).slice(0, 5) : []
})

const selectedStats = computed(() => {
  const list = selectedTopics.value
  if (!list.length) return []
  const years = list.map((topic) => topic.years).filter(Boolean)
  return [
    { k: 'Lecciones', v: String(list.length) },
    { k: 'Nivel', v: list.some((topic) => topic.level === 'Universidad') ? 'Univ.' : list[0].level },
    { k: 'Periodo', v: years.length === 1 ? years[0] : `${years.length} tramos` },
  ]
})

/** Los cinco países con más lecciones, para la lista «Empieza por aquí». */
const starters = computed(() =>
  covered.value
    .map((country) => ({ country, list: topicsOf(country) }))
    .sort((a, b) => b.list.length - a.list.length || a.country.localeCompare(b.country, 'es'))
    .slice(0, 5)
    .map(({ country, list }, index) => ({
      country,
      n: String(index + 1).padStart(2, '0'),
      era: eraColor(list[0].era),
      meta: list.length === 1 ? list[0].era : `${list.length} lecciones`,
    })),
)

function onHover(event: Event) {
  hovered.value = (event as CustomEvent<{ name: string } | null>).detail?.name ?? null
}
function onSelect(event: Event) {
  selected.value = (event as CustomEvent<{ name: string }>).detail.name
}
function onReady(event: Event) {
  countryTotal.value = (event as CustomEvent<{ count: number }>).detail.count
}
function pick(country: string) {
  selected.value = country
}
function back() {
  selected.value = null
  hovered.value = null
}
</script>

<template>
  <section class="globe-screen shell">
    <historya-globe
      class="globe-canvas"
      mode="night"
      spin="on"
      :selected="selected ?? undefined"
      :covered.attr="coveredAttr"
      @hy-hover="onHover"
      @hy-select="onSelect"
      @hy-ready="onReady"
    ></historya-globe>

    <div class="globe-readout">
      <p class="globe-readout-label">Bajo el cursor</p>
      <p class="globe-readout-name" :class="{ dim: !hovered && !selected }">{{ readout }}</p>
      <p class="globe-readout-meta">
        {{ countryTotal }} países · {{ covered.length }} encendidos · arrastra para girar
      </p>
    </div>

    <aside class="globe-panel">
      <!-- Sin país elegido -->
      <div v-if="!selected" class="globe-panel-body">
        <p class="eyebrow eyebrow-light">Explora el mundo</p>
        <h1 class="globe-title">Gira el globo.<br /><i>Elige un país.</i></h1>
        <p class="globe-lead">
          Cada país abre sus lecciones, sus hitos y su quiz.
          {{ covered.length }} brillan ya con lección escrita; el resto está en camino.
        </p>

        <div class="alex-card">
          <span class="alex-avatar" aria-hidden="true">AL</span>
          <div>
            <p class="alex-name">Alex te guía</p>
            <p class="alex-quote">
              «No hace falta orden. Pincha donde te dé curiosidad y yo te digo por dónde seguir.»
            </p>
          </div>
        </div>

        <div class="era-legend">
          <span v-for="era in eras" :key="era.name" class="era-chip" :class="`era-${era.color}`">
            <i></i>{{ era.name }}
          </span>
        </div>

        <p class="panel-label">Empieza por aquí</p>
        <div class="starter-list">
          <button
            v-for="starter in starters"
            :key="starter.country"
            class="starter"
            :class="`era-${starter.era}`"
            type="button"
            @click="pick(starter.country)"
          >
            <span class="starter-n">{{ starter.n }}</span>
            <span class="starter-dot"></span>
            <span class="starter-name">{{ starter.country }}</span>
            <span class="starter-meta">{{ starter.meta }}</span>
            <span class="starter-arrow">→</span>
          </button>
        </div>
      </div>

      <!-- País con lecciones -->
      <div v-else-if="hasLesson" class="globe-panel-body">
        <button class="panel-back" type="button" @click="back">← Volver al globo</button>
        <div class="panel-head">
          <div>
            <p class="eyebrow eyebrow-light">Ficha de país</p>
            <CountryFlag class="panel-flag" :country="selected" size="md" />
            <h1 class="panel-country">{{ selected }}</h1>
          </div>
          <historya-outline :country="selected" tone="ember" class="panel-outline"></historya-outline>
        </div>

        <div class="panel-stats">
          <div v-for="stat in selectedStats" :key="stat.k">
            <span class="stat-value">{{ stat.v }}</span>
            <span class="stat-key">{{ stat.k }}</span>
          </div>
        </div>

        <p class="panel-label">Lecciones</p>
        <div class="panel-topics">
          <RouterLink
            v-for="topic in selectedTopics"
            :key="topic.id"
            class="panel-topic"
            :class="`era-${eraColor(topic.era)}`"
            :to="`/estudiar/${topic.id}`"
          >
            <span class="panel-topic-bar"></span>
            <span class="panel-topic-body">
              <span class="panel-topic-title">{{ topic.title }}</span>
              <span class="panel-topic-meta">{{ topic.years }} · {{ topic.duration }}</span>
            </span>
            <span class="starter-arrow">→</span>
          </RouterLink>
        </div>

        <template v-if="selectedDates.length">
          <p class="panel-label">Hitos clave</p>
          <div class="panel-dates">
            <div v-for="item in selectedDates" :key="item.date">
              <span>{{ item.date }}</span><span>{{ item.event }}</span>
            </div>
          </div>
        </template>

        <div class="panel-actions">
          <RouterLink class="button button-primary panel-grow" :to="`/pais/${encodeURIComponent(selected)}`">
            Abrir ficha completa
          </RouterLink>
          <RouterLink class="button button-quiet" :to="{ name: 'quiz', query: { topic: selectedTopics[0].id } }">
            Quiz
          </RouterLink>
        </div>
      </div>

      <!-- País sin lección todavía -->
      <div v-else class="globe-panel-body">
        <button class="panel-back" type="button" @click="back">← Volver al globo</button>
        <div class="panel-head">
          <div>
            <p class="eyebrow">Sin lección todavía</p>
            <CountryFlag class="panel-flag" :country="selected" size="md" />
            <h1 class="panel-country">{{ selected }}</h1>
          </div>
          <historya-outline :country="selected" tone="light" class="panel-outline faded"></historya-outline>
        </div>
        <p class="globe-lead">
          Todavía no hemos escrito la historia de {{ selected }}. Está en la lista.
        </p>
        <p class="panel-label">Mientras tanto</p>
        <div class="era-legend">
          <button
            v-for="starter in starters"
            :key="starter.country"
            class="chip-button"
            type="button"
            @click="pick(starter.country)"
          >
            {{ starter.country }}
          </button>
        </div>
      </div>
    </aside>
  </section>
</template>
