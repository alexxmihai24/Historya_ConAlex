<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { eras } from '../data/history'
import { useTopics } from '../composables/useTopics'

const { topics } = useTopics()
const selectedEra = ref('Todas')
const highlightedTopics = computed(() =>
  selectedEra.value === 'Todas'
    ? topics.value.slice(0, 3)
    : topics.value.filter((topic) => topic.era === selectedEra.value).slice(0, 3),
)
</script>

<template>
  <section class="hero-section">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Aprende a mirar el pasado</p>
        <h1>La historia no se memoriza.<br /><i>Se descubre.</i></h1>
        <p class="hero-intro">Lee, explora y pon a prueba lo que sabes. Un lugar para estudiantes y curiosos que quieren conectar los hechos.</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/biblioteca">Empezar a explorar <span>→</span></RouterLink>
          <RouterLink class="button button-quiet" to="/quiz">Jugar un quiz</RouterLink>
        </div>
        <div class="hero-trust"><div class="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div><p><strong>+2.400</strong> personas aprendiendo cada semana</p></div>
      </div>

      <div class="hero-art" aria-label="Composición editorial inspirada en la historia antigua" role="img">
        <div class="sun-disc"></div><div class="arch arch-back"></div><div class="arch arch-front"><span class="arch-inscription">SPQR</span></div>
        <div class="laurel laurel-left">❧</div><div class="laurel laurel-right">❧</div>
        <div class="paper-label label-top">SIGLO I <small>ROMA</small></div><div class="paper-label label-bottom">DESCUBRE<br />EL PASADO</div>
      </div>
    </div>
  </section>

  <section class="period-section">
    <div class="shell">
      <div class="section-heading split-heading"><div><p class="eyebrow">VIAJA EN EL TIEMPO</p><h2>¿Por dónde quieres<br /><i>empezar?</i></h2></div><p>Elige una época, sigue tu curiosidad y avanza a tu ritmo.</p></div>
      <div class="era-grid">
        <button v-for="(era, index) in eras" :key="era.name" class="era-card" :class="[`era-${era.color}`, { selected: selectedEra === era.name }]" type="button" @click="selectedEra = era.name">
          <span class="era-number">{{ String(index + 1).padStart(2, '0') }}</span><span class="era-range">{{ era.range }}</span><strong>{{ era.name }}</strong><small>{{ era.description }}</small><span class="era-arrow">→</span>
        </button>
      </div>
    </div>
  </section>

  <section class="study-section">
    <div class="shell">
      <div class="section-heading inline-heading"><div><p class="eyebrow">CONTINÚA APRENDIENDO</p><h2>Una historia a la vez</h2></div><RouterLink to="/biblioteca" class="text-link">Ver todos los temas <span>→</span></RouterLink></div>
      <div class="topic-grid">
        <article v-for="topic in highlightedTopics" :key="topic.id" class="topic-card">
          <div class="topic-visual" :class="`visual-${topic.color}`"><span>{{ topic.visual }}</span></div>
          <div class="topic-content"><div class="topic-meta"><span>{{ topic.era }}</span><span>{{ topic.years }}</span></div><h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><div class="topic-footer"><span>{{ topic.duration }} · {{ topic.level }}</span><RouterLink :to="`/estudiar/${topic.id}`" :aria-label="`Estudiar ${topic.title}`">→</RouterLink></div></div>
        </article>
      </div>
    </div>
  </section>

  <section class="quiz-cta">
    <div class="shell quiz-cta-inner"><div><p class="eyebrow eyebrow-light">¿TE ANIMAS?</p><h2>Convierte lo que lees<br />en lo que <i>sabes.</i></h2><p>Elige un tema o mezcla toda la historia. Cada pregunta viene con contexto para que aprender sea parte del juego.</p><RouterLink class="button button-cream" to="/quiz">Ir al quiz <span>→</span></RouterLink></div><div class="quiz-card-preview" aria-hidden="true"><span class="quiz-number">03</span><p>¿Qué civilización construyó la ciudad de Machu Picchu?</p><div><span>○ Maya</span><span class="answer-preview">● Inca</span><span>○ Azteca</span></div><small>HISTORIA DE AMÉRICA</small></div></div>
  </section>
</template>
