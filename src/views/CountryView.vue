<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { eraColor, eras, findTopic, quizQuestions } from '../data/history.ts'
import { useTopics } from '../composables/useTopics.ts'
import { atlasCountries, coveredCountries } from '../lib/regions.ts'
import CountryFlag from '../components/CountryFlag.vue'
import { countryFacts, factRows } from '../lib/countries.ts'
import { countryHistory } from '../data/country-histories/index.ts'
import { COUNTRY_IMAGES } from '../data/country-images.ts'
import { imageCredit, safeImage } from '../lib/images.ts'
import '../lib/globe.js'

const route = useRoute()
const { topics } = useTopics()

const country = computed(() => decodeURIComponent(String(route.params.country ?? '')))

const countryTopics = computed(() =>
  topics.value.filter((topic) => atlasCountries(topic.country).includes(country.value)),
)

/** El banco de preguntas vive en el repositorio y el seed se genera de ahí, así
 *  que contar aquí da el mismo número que la base de datos. */
function questionCount(topicId: string) {
  return quizQuestions.filter((question) => question.topicId === topicId).length
}

const totalQuestions = computed(() =>
  countryTopics.value.reduce((acc, topic) => acc + questionCount(topic.id), 0),
)

/** Épocas distintas del país, en el orden cronológico de `eras`. */
const countryEras = computed(() => {
  const present = new Set(countryTopics.value.map((topic) => topic.era))
  return eras.filter((era) => present.has(era.name)).map((era) => era.name)
})

const stats = computed(() => {
  const list = countryTopics.value
  const minutes = list.reduce((acc, topic) => acc + (parseInt(topic.duration, 10) || 0), 0)
  return [
    { k: list.length === 1 ? 'Lección' : 'Lecciones', v: String(list.length) },
    { k: totalQuestions.value === 1 ? 'Pregunta' : 'Preguntas', v: String(totalQuestions.value) },
    { k: 'Lectura', v: `${minutes} min` },
    { k: countryEras.value.length === 1 ? 'Época' : 'Épocas', v: String(countryEras.value.length) },
  ]
})

/** Las cuatro épocas, con cuántas lecciones tiene este país en cada una. */
const eraTrack = computed(() =>
  eras.map((era) => {
    const count = countryTopics.value.filter((topic) => topic.era === era.name).length
    return { ...era, count, mark: count ? `${count} lección${count > 1 ? 'es' : ''}` : 'Sin lección' }
  }),
)

/** Hitos de todas las lecciones del país, en orden de lectura. */
const milestones = computed(() =>
  countryTopics.value.flatMap((topic) =>
    (findTopic(topic.id)?.keyDates ?? []).map((item) => ({ ...item, topic: topic.title })),
  ),
)

/* Datos de Wikidata. Existen para los 142 países del atlas, tengan lección o
   no: sin ellos, pinchar en cualquiera de los 120 sin lección no mostraba nada. */
const facts = computed(() => countryFacts(country.value))
const factList = computed(() => factRows(facts.value))
const isAtlasCountry = computed(() => facts.value !== null)
const history = computed(() => countryHistory(country.value))
/** Portada del país. Validada como cualquier imagen antes de pintarse (SPEC §10.10). */
const cover = computed(() =>
  Object.hasOwn(COUNTRY_IMAGES, country.value) ? safeImage(COUNTRY_IMAGES[country.value][0]) : null,
)

const otherCountries = computed(() =>
  coveredCountries(topics.value.map((topic) => topic.country))
    .filter((name) => name !== country.value)
    .slice(0, 8),
)
</script>

<template>
  <section v-if="countryTopics.length || isAtlasCountry" class="country-page shell">
    <header class="country-hero" :class="{ 'has-cover': cover }">
      <template v-if="cover">
        <img class="country-hero-bg" :src="cover.src" alt="" :width="cover.width" :height="cover.height" decoding="async" />
        <div class="country-hero-shade" aria-hidden="true"></div>
      </template>
      <div class="country-hero-top">
        <RouterLink class="country-back" to="/">← Globo</RouterLink>
        <span class="country-tag">{{ countryTopics.length ? `${countryTopics.length} lecciones` : 'Historia breve' }}</span>
      </div>

      <div class="country-hero-main">
        <div>
          <p class="eyebrow">Ficha de país</p>
          <CountryFlag class="country-hero-flag" :country="country" size="lg" />
          <h1>{{ country }}</h1>
          <p v-if="countryTopics.length" class="country-lead">{{ countryTopics[0].description }}</p>
        </div>
        <div class="country-outline-frame">
          <historya-outline :country="country" tone="light" class="country-outline"></historya-outline>
        </div>
      </div>

      <div v-if="factList.length" class="country-facts">
        <div v-for="fact in factList" :key="fact.k">
          <span class="stat-key">{{ fact.k }}</span>
          <span class="stat-value">{{ fact.v }}</span>
        </div>
        <p class="country-facts-source">Datos de Wikidata (CC0)</p>
      </div>

      <div v-if="countryTopics.length" class="country-stats">
        <div v-for="stat in stats" :key="stat.k">
          <span class="stat-value">{{ stat.v }}</span>
          <span class="stat-key">{{ stat.k }}</span>
        </div>
      </div>
      <p v-if="cover" class="country-hero-credit">
        <span v-if="cover.caption">{{ cover.caption }}</span>
        <small>{{ imageCredit(cover) }}</small>
      </p>
    </header>

    <section v-if="history" class="country-history">
      <div>
        <p class="panel-label">Historia de {{ country }}</p>
        <p v-for="(paragraph, index) in history.text" :key="index">{{ paragraph }}</p>
      </div>
      <div>
        <p class="panel-label">Fechas clave</p>
        <div class="country-timeline">
          <div v-for="[date, event] in history.dates" :key="date">
            <span class="country-timeline-date">{{ date }}</span>
            <span class="country-timeline-event">{{ event }}</span>
          </div>
        </div>
      </div>
    </section>

    <div v-if="countryTopics.length" class="country-body">
      <div class="country-main">
        <p class="panel-label">Línea de tiempo de épocas</p>
        <div class="era-track">
          <div
            v-for="era in eraTrack"
            :key="era.name"
            class="era-track-item"
            :class="[`era-${era.color}`, { off: !era.count }]"
          >
            <span class="era-track-dot"></span>
            <span class="era-track-name">{{ era.name }}</span>
            <span class="era-track-range">{{ era.range }}</span>
            <span class="era-track-mark">{{ era.mark }}</span>
          </div>
        </div>

        <p class="panel-label">Lecciones de {{ country }}</p>
        <div class="panel-topics">
          <RouterLink
            v-for="topic in countryTopics"
            :key="topic.id"
            class="panel-topic"
            :class="`era-${eraColor(topic.era)}`"
            :to="`/estudiar/${topic.id}`"
          >
            <span class="panel-topic-bar"></span>
            <span class="panel-topic-body">
              <span class="panel-topic-title">{{ topic.title }}</span>
              <span class="panel-topic-meta">{{ topic.years }} · {{ topic.duration }} · {{ questionCount(topic.id) }} preguntas</span>
            </span>
            <span class="starter-arrow">→</span>
          </RouterLink>
        </div>

        <template v-if="milestones.length">
          <p class="panel-label">Hitos clave</p>
          <div class="country-timeline">
            <div v-for="(item, index) in milestones" :key="`${item.date}-${index}`">
              <span class="country-timeline-date">{{ item.date }}</span>
              <span class="country-timeline-event">{{ item.event }}</span>
            </div>
          </div>
        </template>
      </div>

      <aside class="country-side">
        <div class="country-quiz">
          <p class="eyebrow eyebrow-light">Quiz de {{ country }}</p>
          <p class="country-quiz-count">{{ totalQuestions }} preguntas<br /><i>con explicación</i></p>
          <div class="era-legend">
            <span v-for="era in countryEras" :key="era" class="chip-button">{{ era }}</span>
          </div>
          <RouterLink
            class="button button-primary country-quiz-cta"
            :to="{ name: 'quiz', query: { topic: countryTopics[0].id } }"
          >
            Jugar ahora
          </RouterLink>
        </div>

        <div>
          <p class="panel-label">Salta a otro país</p>
          <div class="era-legend">
            <RouterLink
              v-for="name in otherCountries"
              :key="name"
              class="chip-button"
              :to="`/pais/${encodeURIComponent(name)}`"
            >
              {{ name }}
            </RouterLink>
          </div>
        </div>
      </aside>
    </div>

    <div v-else class="country-empty">
      <p class="panel-label">Países con lección completa</p>
      <div class="era-legend">
        <RouterLink
          v-for="name in otherCountries"
          :key="name"
          class="chip-button"
          :to="`/pais/${encodeURIComponent(name)}`"
        >
          {{ name }}
        </RouterLink>
      </div>
      <RouterLink class="button button-primary" to="/biblioteca">Ver toda la biblioteca →</RouterLink>
    </div>
  </section>

  <section v-else class="not-found shell">
    <p class="eyebrow"><span class="eyebrow-dot"></span> Sin lección todavía</p>
    <h1>{{ country || 'Este país' }} está en la lista.</h1>
    <RouterLink class="button button-primary" to="/">Volver al globo</RouterLink>
  </section>
</template>
