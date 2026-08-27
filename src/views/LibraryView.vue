<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { eras, type Era } from '../data/history'
import { useTopics } from '../composables/useTopics'

const route = useRoute()
const { topics, isLoading } = useTopics()
const selectedEra = ref<Era | 'Todas'>('Todas')
const selectedLevel = ref<'Todos' | 'ESO' | 'Bachillerato' | 'Universidad'>('Todos')
const activeTopic = ref(typeof route.query.tema === 'string' ? route.query.tema : '')
const filteredTopics = computed(() => topics.value.filter((topic) => (selectedEra.value === 'Todas' || topic.era === selectedEra.value) && (selectedLevel.value === 'Todos' || topic.level === selectedLevel.value)))
function openTopic(id: string) { activeTopic.value = activeTopic.value === id ? '' : id }
</script>

<template>
  <section class="page-intro library-intro"><div class="shell"><p class="eyebrow"><span class="eyebrow-dot"></span> Biblioteca de historia</p><h1>Explora el pasado<br /><i>a tu manera.</i></h1><p>Temas ordenados para estudiar desde ESO hasta la universidad, sin perder nunca el hilo de la historia.</p></div></section>
  <section class="library-content shell">
    <div class="filter-row" aria-label="Filtros de la biblioteca"><div class="filter-group"><span>Época</span><div class="filter-pills"><button :class="{ active: selectedEra === 'Todas' }" type="button" @click="selectedEra = 'Todas'">Todas</button><button v-for="era in eras" :key="era.name" :class="{ active: selectedEra === era.name }" type="button" @click="selectedEra = era.name">{{ era.name }}</button></div></div><div class="filter-group"><span>Nivel</span><div class="filter-pills"><button v-for="level in ['Todos', 'ESO', 'Bachillerato', 'Universidad'] as const" :key="level" :class="{ active: selectedLevel === level }" type="button" @click="selectedLevel = level">{{ level }}</button></div></div></div>
    <p class="results-count">{{ isLoading ? 'Cargando temas…' : `${filteredTopics.length} temas para descubrir` }}</p>
    <div class="library-grid">
      <article v-for="topic in filteredTopics" :key="topic.id" class="library-card" :class="{ expanded: activeTopic === topic.id }"><div class="topic-visual large-visual" :class="`visual-${topic.color}`"><span>{{ topic.visual }}</span></div><div class="library-card-body"><div class="topic-meta"><span>{{ topic.era }}</span><span>{{ topic.years }}</span></div><h2>{{ topic.title }}</h2><p>{{ topic.description }}</p><div v-if="activeTopic === topic.id" class="lesson-preview"><strong>En esta unidad</strong><ul><li>Contexto y línea temporal</li><li>Personajes, lugares y conceptos clave</li><li>Repaso final con 10 preguntas</li></ul><RouterLink class="lesson-link" :to="`/estudiar/${topic.id}`">Abrir lección <span>→</span></RouterLink></div><div class="library-card-footer"><div class="progress-copy"><span v-if="topic.progress">{{ topic.progress }}% completado</span><span v-else>Nuevo para ti</span><span class="progress-line"><i :style="{ width: `${topic.progress}%` }"></i></span></div><button class="round-button" type="button" :aria-expanded="activeTopic === topic.id" @click="openTopic(topic.id)">{{ activeTopic === topic.id ? '−' : '→' }}</button></div></div></article>
    </div>
  </section>
</template>
