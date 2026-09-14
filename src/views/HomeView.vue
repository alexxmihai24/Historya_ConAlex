<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { eraColor, eras, findTopic, quizQuestions } from '../data/history.ts'
import { useTopics } from '../composables/useTopics.ts'
import { atlasCountries, coveredCountries } from '../lib/regions.ts'
import CountryFlag from '../components/CountryFlag.vue'
import { countryFacts, factRows } from '../lib/countries.ts'
import { countryHistory } from '../data/country-histories/index.ts'
import { continentLabel, countryLabel, eraLabel, locale, t } from '../lib/i18n.ts'
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

const readoutCountry = computed(() => hovered.value ?? selected.value)

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
    { k: t('stat.lessons'), v: String(list.length) },
    { k: t('stat.questions'), v: String(quizQuestions.filter((q) => list.some((topic) => topic.id === q.topicId)).length) },
    { k: t('stat.period'), v: years.length === 1 ? years[0] : t('stat.stretches', { n: years.length }) },
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
      meta: list.length === 1 ? eraLabel(list[0].era) : t('common.lessons', { n: list.length }),
    })),
)

/* Datos de Wikidata del país elegido. Los 142 del atlas los tienen, así que el
   panel nunca se queda vacío aunque el país no tenga lección escrita. */
const selectedFacts = computed(() => (selected.value ? factRows(countryFacts(selected.value), locale.value) : []))
const selectedHistory = computed(() => (selected.value ? countryHistory(selected.value) : null))

function factValue(fact: { id: string; v: string }) {
  return fact.id === 'continent' ? continentLabel(fact.v) : fact.v
}

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
      <p class="globe-readout-label">{{ t('home.readoutLabel') }}</p>
      <p class="globe-readout-name" :class="{ dim: !readoutCountry }">
        {{ readoutCountry ? countryLabel(readoutCountry) : t('home.spin') }}
      </p>
      <p class="globe-readout-meta">
        {{ t('home.readoutMeta', { countries: countryTotal, covered: covered.length }) }}
      </p>
    </div>

    <aside class="globe-panel">
      <!-- Sin país elegido -->
      <div v-if="!selected" class="globe-panel-body">
        <p class="eyebrow eyebrow-light">{{ t('home.eyebrow') }}</p>
        <h1 class="globe-title">{{ t('home.title1') }}<br /><i>{{ t('home.title2') }}</i></h1>
        <p class="globe-lead">{{ t('home.lead', { n: covered.length }) }}</p>

        <div class="alex-card">
          <span class="alex-avatar" aria-hidden="true">AL</span>
          <div>
            <p class="alex-name">{{ t('common.alexGuide') }}</p>
            <p class="alex-quote">{{ t('home.alexQuote') }}</p>
          </div>
        </div>

        <div class="era-legend">
          <span v-for="era in eras" :key="era.name" class="era-chip" :class="`era-${era.color}`">
            <i></i>{{ eraLabel(era.name) }}
          </span>
        </div>

        <p class="panel-label">{{ t('home.startHere') }}</p>
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
            <span class="starter-name">{{ countryLabel(starter.country) }}</span>
            <span class="starter-meta">{{ starter.meta }}</span>
            <span class="starter-arrow">→</span>
          </button>
        </div>
      </div>

      <!-- País con lecciones -->
      <div v-else-if="hasLesson" class="globe-panel-body">
        <button class="panel-back" type="button" @click="back">{{ t('common.backGlobe') }}</button>
        <div class="panel-head">
          <div>
            <p class="eyebrow eyebrow-light">{{ t('common.countrySheet') }}</p>
            <CountryFlag class="panel-flag" :country="selected" size="md" />
            <h1 class="panel-country">{{ countryLabel(selected) }}</h1>
          </div>
          <historya-outline :country="selected" tone="ember" class="panel-outline"></historya-outline>
        </div>

        <div class="panel-stats">
          <div v-for="stat in selectedStats" :key="stat.k">
            <span class="stat-value">{{ stat.v }}</span>
            <span class="stat-key">{{ stat.k }}</span>
          </div>
        </div>

        <p class="panel-label">{{ t('home.lessonsLabel') }}</p>
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
          <p class="panel-label">{{ t('common.keyMilestones') }}</p>
          <div class="panel-dates">
            <div v-for="item in selectedDates" :key="item.date">
              <span>{{ item.date }}</span><span>{{ item.event }}</span>
            </div>
          </div>
        </template>

        <div class="panel-actions">
          <RouterLink class="button button-primary panel-grow" :to="`/pais/${encodeURIComponent(selected)}`">
            {{ t('home.openSheet') }}
          </RouterLink>
          <RouterLink class="button button-quiet" :to="{ name: 'quiz', query: { topic: selectedTopics[0].id } }">
            {{ t('home.quiz') }}
          </RouterLink>
        </div>
      </div>

      <!-- País sin lección todavía -->
      <div v-else class="globe-panel-body">
        <button class="panel-back" type="button" @click="back">{{ t('common.backGlobe') }}</button>
        <div class="panel-head">
          <div>
            <p class="eyebrow">{{ t('common.briefHistory') }}</p>
            <CountryFlag class="panel-flag" :country="selected" size="md" />
            <h1 class="panel-country">{{ countryLabel(selected) }}</h1>
          </div>
          <historya-outline :country="selected" tone="light" class="panel-outline faded"></historya-outline>
        </div>
        <p v-if="selectedHistory" class="globe-lead">{{ selectedHistory.text[0] }}</p>

        <div v-if="selectedFacts.length" class="panel-facts">
          <div v-for="fact in selectedFacts" :key="fact.id">
            <span class="stat-key">{{ t(`fact.${fact.id}`) }}</span>
            <span class="stat-value">{{ factValue(fact) }}</span>
          </div>
          <p class="country-facts-source">{{ t('common.factsSource') }}</p>
        </div>

        <div class="panel-actions">
          <RouterLink class="button button-primary panel-grow" :to="`/pais/${encodeURIComponent(selected)}`">
            {{ t('home.readHistory') }}
          </RouterLink>
        </div>

        <p class="panel-label">{{ t('common.countriesWithLesson') }}</p>
        <div class="era-legend">
          <button
            v-for="starter in starters"
            :key="starter.country"
            class="chip-button"
            type="button"
            @click="pick(starter.country)"
          >
            {{ countryLabel(starter.country) }}
          </button>
        </div>
      </div>
    </aside>
  </section>
</template>
