<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { eraColor, eras, type Era } from '../data/history.ts'
import { useTopics } from '../composables/useTopics.ts'
import CountryFlag from '../components/CountryFlag.vue'

const { topics, isLoading } = useTopics()
const selectedEra = ref<Era | 'Todas'>('Todas')
const selectedLevel = ref<'Todos' | 'ESO' | 'Bachillerato' | 'Universidad'>('Todos')

/* Se filtra por los niveles en los que el tema SE PUEDE LEER, no por el nivel
   al que está escrito. Comparar con `topic.level` era el motivo de que ESO y
   Bachillerato devolvieran cero resultados: los 35 temas son de Universidad. */
const filteredTopics = computed(() =>
  topics.value.filter(
    (topic) =>
      (selectedEra.value === 'Todas' || topic.era === selectedEra.value) &&
      (selectedLevel.value === 'Todos' || topic.levels.includes(selectedLevel.value)),
  ),
)

const totalProgress = computed(() => {
  if (!topics.value.length) return 0
  const sum = topics.value.reduce((acc, topic) => acc + topic.progress, 0)
  return Math.round(sum / topics.value.length)
})
</script>

<template>
  <section class="page-intro shell library-intro">
    <div class="library-intro-grid">
      <div>
        <p class="eyebrow eyebrow-light">Aprender y leer</p>
        <h1>Biblioteca</h1>
        <p>
          {{ topics.length }} lecciones con fuentes, conceptos y debates historiográficos.
          Filtra por época o entra desde el globo.
        </p>
      </div>
      <div class="library-progress">
        <span class="library-progress-value">{{ totalProgress }}%</span>
        <span class="library-progress-label">Tu progreso total</span>
        <span class="progress-line"><i :style="{ width: `${totalProgress}%` }"></i></span>
      </div>
    </div>
  </section>

  <section class="library-content shell">
    <div class="filter-row" aria-label="Filtros de la biblioteca">
      <div class="filter-group">
        <span>Época</span>
        <div class="filter-pills">
          <button :class="{ active: selectedEra === 'Todas' }" type="button" @click="selectedEra = 'Todas'">Todas</button>
          <button
            v-for="era in eras"
            :key="era.name"
            :class="{ active: selectedEra === era.name }"
            type="button"
            @click="selectedEra = era.name"
          >
            {{ era.name }}
          </button>
        </div>
      </div>
      <div class="filter-group">
        <span>Nivel</span>
        <div class="filter-pills">
          <button
            v-for="level in ['Todos', 'ESO', 'Bachillerato', 'Universidad'] as const"
            :key="level"
            :class="{ active: selectedLevel === level }"
            type="button"
            @click="selectedLevel = level"
          >
            {{ level }}
          </button>
        </div>
      </div>
    </div>

    <p class="results-count">
      {{ isLoading ? 'Cargando temas…' : `${filteredTopics.length} lecciones` }}
      <template v-if="!isLoading && !filteredTopics.length && selectedLevel !== 'Todos'">
        · todavía no hay temas adaptados a {{ selectedLevel }} en este filtro.
      </template>
    </p>

    <div class="library-grid">
      <RouterLink
        v-for="topic in filteredTopics"
        :key="topic.id"
        class="library-card"
        :class="`era-${eraColor(topic.era)}`"
        :to="`/estudiar/${topic.id}`"
      >
        <img
          v-if="topic.cover"
          class="library-cover"
          :src="topic.cover.src"
          :alt="topic.cover.alt"
          :width="topic.cover.width"
          :height="topic.cover.height"
          loading="lazy"
          decoding="async"
        />
        <div class="library-card-body">
          <div class="topic-meta">
            <span>{{ topic.era }}</span>
            <span class="topic-country"><CountryFlag :country="topic.country" size="sm" />{{ topic.country }}</span>
          </div>
          <h2>{{ topic.title }}</h2>
          <div class="card-numbers">
            <span>{{ topic.years }}</span><span>{{ topic.duration }}</span>
          </div>
          <span class="progress-line"><i :style="{ width: `${topic.progress}%` }"></i></span>
          <div class="library-card-footer">
            <span class="level-tag-group">
              <span v-for="level in topic.levels" :key="level" class="level-tag">{{ level }}</span>
            </span>
            <span class="card-cta">{{ topic.progress ? 'Seguir' : 'Empezar' }} →</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
