<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { eraColor, eras, type Era } from '../data/history.ts'
import { useTopics } from '../composables/useTopics.ts'
import CountryFlag from '../components/CountryFlag.vue'
import { countryLabel, eraLabel, t } from '../lib/i18n.ts'

const { topics, isLoading } = useTopics()
const selectedEra = ref<Era | 'Todas'>('Todas')
const filteredTopics = computed(() =>
  topics.value.filter((topic) => selectedEra.value === 'Todas' || topic.era === selectedEra.value),
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
        <p class="eyebrow eyebrow-light">{{ t('library.eyebrow') }}</p>
        <h1>{{ t('library.title') }}</h1>
        <p>{{ t('library.lead', { n: topics.length }) }}</p>
      </div>
      <div class="library-progress">
        <span class="library-progress-value">{{ totalProgress }}%</span>
        <span class="library-progress-label">{{ t('library.progress') }}</span>
        <span class="progress-line"><i :style="{ width: `${totalProgress}%` }"></i></span>
      </div>
    </div>
  </section>

  <section class="library-content shell">
    <div class="filter-row" :aria-label="t('library.filters')">
      <div class="filter-group">
        <span>{{ t('library.era') }}</span>
        <div class="filter-pills">
          <button :class="{ active: selectedEra === 'Todas' }" type="button" @click="selectedEra = 'Todas'">{{ t('library.all') }}</button>
          <button
            v-for="era in eras"
            :key="era.name"
            :class="{ active: selectedEra === era.name }"
            type="button"
            @click="selectedEra = era.name"
          >
            {{ eraLabel(era.name) }}
          </button>
        </div>
      </div>
    </div>

    <p class="results-count">
      {{ isLoading ? t('library.loading') : t('common.lessons', { n: filteredTopics.length }) }}
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
            <span>{{ eraLabel(topic.era) }}</span>
            <span class="topic-country"><CountryFlag :country="topic.country" size="sm" />{{ countryLabel(topic.country) }}</span>
          </div>
          <h2>{{ topic.title }}</h2>
          <div class="card-numbers">
            <span>{{ topic.years }}</span><span>{{ topic.duration }}</span>
          </div>
          <span class="progress-line"><i :style="{ width: `${topic.progress}%` }"></i></span>
          <div class="library-card-footer">
            <span class="card-cta">{{ topic.progress ? t('library.continue') : t('library.start') }} →</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
