<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTopics } from '../composables/useTopics.ts'
import { useQuiz, type AnswerResult, type QuizQuestionUI } from '../composables/useQuiz.ts'
import { useAuthStore } from '../stores/auth.ts'
/* Las reglas de la partida viven en src/lib/scoring.ts para poder comprobarlas
   sin montar el componente, y porque harán falta también en el servidor cuando
   se persistan los puntos (SPEC §10.4). */
import { BASE_POINTS, LIVES, SECONDS_PER_QUESTION, TIME_BONUS, multiplierFor, pointsFor } from '../lib/scoring.ts'

const route = useRoute()
const auth = useAuthStore()
const { topics } = useTopics()
const { loadQuestions, checkAnswer, finishQuiz } = useQuiz()

const requestedTopic = typeof route.query.topic === 'string' ? route.query.topic : 'global'
const selectedMode = ref<'global' | 'topic'>(requestedTopic === 'global' ? 'global' : 'topic')
const selectedTopic = ref(requestedTopic === 'global' ? (topics.value[0]?.id ?? '') : requestedTopic)

const hasStarted = ref(false)
const isLoadingQuiz = ref(false)
const quizError = ref('')
const activeQuestions = ref<QuizQuestionUI[]>([])
const currentIndex = ref(0)
const selectedOptionId = ref<string | null>(null)
const currentFeedback = ref<AnswerResult | null>(null)
const answers = ref<Array<{ questionId: string; optionId: string; isCorrect: boolean }>>([])
const results = ref<boolean[]>([])
const finished = ref(false)

const lives = ref(LIVES)
const streak = ref(0)
const bestStreak = ref(0)
const score = ref(0)
const timeLeft = ref(SECONDS_PER_QUESTION)
const timedOut = ref(false)
let ticker: number | undefined

watch(topics, (list) => {
  if (list.length && !list.some((topic) => topic.id === selectedTopic.value)) selectedTopic.value = list[0].id
})

const currentQuestion = computed(() => activeQuestions.value[currentIndex.value])
const isAnswered = computed(() => selectedOptionId.value !== null || timedOut.value)
const rightCount = computed(() => results.value.filter(Boolean).length)
const wrongCount = computed(() => results.value.length - rightCount.value)
const percentage = computed(() =>
  results.value.length ? Math.round((rightCount.value / results.value.length) * 100) : 0,
)
const selectedTopicInfo = computed(() => topics.value.find((topic) => topic.id === selectedTopic.value))
const scopeLabel = computed(() =>
  selectedMode.value === 'global' ? 'Historia completa' : (selectedTopicInfo.value?.title ?? ''),
)
const multiplier = computed(() => multiplierFor(streak.value))
const timeColor = computed(() =>
  timeLeft.value > 10 ? 'var(--good)' : timeLeft.value > 5 ? 'var(--warn)' : 'var(--ember)',
)

const resultStats = computed(() => [
  { k: 'Puntos', v: String(score.value) },
  { k: 'Aciertos', v: `${rightCount.value}/${results.value.length}` },
  { k: 'Mejor racha', v: String(bestStreak.value) },
  { k: 'Vidas restantes', v: String(lives.value) },
])

const resultTitle = computed(() => {
  if (!lives.value) return 'Te has quedado sin vidas.'
  if (percentage.value >= 80) return 'Tienes muy buen ojo histórico.'
  if (percentage.value >= 50) return 'Vas por buen camino.'
  return 'Cada fallo es una pista para volver a la lección.'
})

function stopTimer() {
  if (ticker) window.clearInterval(ticker)
  ticker = undefined
}

function startTimer() {
  stopTimer()
  timeLeft.value = SECONDS_PER_QUESTION
  ticker = window.setInterval(() => {
    if (timeLeft.value <= 1) {
      stopTimer()
      timeLeft.value = 0
      onTimeout()
      return
    }
    timeLeft.value -= 1
  }, 1000)
}

onUnmounted(stopTimer)

async function startQuiz() {
  quizError.value = ''
  isLoadingQuiz.value = true
  const slug = selectedMode.value === 'topic' ? selectedTopic.value : null
  activeQuestions.value = await loadQuestions(slug, 10)
  isLoadingQuiz.value = false
  if (!activeQuestions.value.length) {
    quizError.value = 'No hay preguntas disponibles todavía para esta opción. Prueba con otro tema.'
    return
  }
  hasStarted.value = true
  finished.value = false
  currentIndex.value = 0
  selectedOptionId.value = null
  currentFeedback.value = null
  answers.value = []
  results.value = []
  lives.value = LIVES
  streak.value = 0
  bestStreak.value = 0
  score.value = 0
  timedOut.value = false
  startTimer()
}

if (requestedTopic !== 'global') void startQuiz()

function register(isCorrect: boolean) {
  results.value.push(isCorrect)
  if (isCorrect) {
    streak.value += 1
    bestStreak.value = Math.max(bestStreak.value, streak.value)
    score.value += pointsFor(streak.value, timeLeft.value)
  } else {
    streak.value = 0
    lives.value = Math.max(0, lives.value - 1)
  }
}

function onTimeout() {
  if (isAnswered.value || !currentQuestion.value) return
  timedOut.value = true
  register(false)
  currentFeedback.value = {
    isCorrect: false,
    correctOptionId: '',
    explanation: 'Se acabó el tiempo. Sigue con la siguiente y vuelve a esta al repasar.',
  }
}

function chooseOption(optionId: string) {
  if (isAnswered.value || !currentQuestion.value) return
  stopTimer()
  selectedOptionId.value = optionId
  const question = currentQuestion.value
  void checkAnswer(question.id, optionId).then((result) => {
    currentFeedback.value = result
    answers.value.push({ questionId: question.id, optionId, isCorrect: result.isCorrect })
    register(result.isCorrect)
  })
}

function endGame() {
  stopTimer()
  finished.value = true
  void finishQuiz(selectedMode.value === 'global' ? 'global' : `tema:${selectedTopic.value}`, answers.value)
}

function nextQuestion() {
  if (!currentFeedback.value) return
  if (!lives.value || currentIndex.value === activeQuestions.value.length - 1) {
    endGame()
    return
  }
  currentIndex.value += 1
  selectedOptionId.value = null
  currentFeedback.value = null
  timedOut.value = false
  startTimer()
}

function backToModes() {
  stopTimer()
  hasStarted.value = false
  finished.value = false
  selectedOptionId.value = null
  currentFeedback.value = null
  answers.value = []
  results.value = []
}
</script>

<template>
  <section class="quiz-page">
    <div class="shell quiz-shell">
      <!-- elegir partida -->
      <section v-if="!hasStarted" class="quiz-setup">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Elige cómo repasar</p>
        <h1>Quiz contrarreloj.</h1>
        <p>
          Diez preguntas, {{ SECONDS_PER_QUESTION }} segundos cada una y {{ LIVES }} vidas.
          Acertar seguido multiplica los puntos; el tiempo que sobra también suma.
        </p>
        <div class="quiz-mode-grid">
          <button
            class="quiz-mode-card"
            :class="{ selected: selectedMode === 'global' }"
            type="button"
            @click="selectedMode = 'global'"
          >
            <span class="mode-icon">✦</span>
            <strong>Historia completa</strong>
            <small>Diez preguntas de cualquier época</small>
            <span class="mode-check">{{ selectedMode === 'global' ? '✓' : '' }}</span>
          </button>
          <button
            class="quiz-mode-card"
            :class="{ selected: selectedMode === 'topic' }"
            type="button"
            @click="selectedMode = 'topic'"
          >
            <span class="mode-icon">◌</span>
            <strong>Por lección</strong>
            <small>Repasa un tema concreto</small>
            <span class="mode-check">{{ selectedMode === 'topic' ? '✓' : '' }}</span>
          </button>
        </div>
        <label v-if="selectedMode === 'topic'" class="quiz-topic-select">
          Lección para repasar
          <select v-model="selectedTopic">
            <option v-for="topic in topics" :key="topic.id" :value="topic.id">
              {{ topic.title }} · {{ topic.country }}
            </option>
          </select>
        </label>
        <button
          class="button button-primary start-quiz-button"
          type="button"
          :disabled="isLoadingQuiz"
          @click="startQuiz"
        >
          {{ isLoadingQuiz ? 'Cargando…' : 'Empezar partida' }}
        </button>
        <p v-if="quizError" class="form-message" role="status">{{ quizError }}</p>
      </section>

      <!-- partida en curso -->
      <template v-else-if="!finished">
        <div class="quiz-bar">
          <div class="quiz-bar-title">
            <span class="brand-mark" aria-hidden="true"></span>
            <span class="quiz-bar-name">Quiz</span>
            <span class="quiz-bar-scope">{{ scopeLabel }}</span>
          </div>
          <div class="quiz-bar-stats">
            <div class="quiz-lives" :aria-label="`${lives} vidas`">
              <span v-for="n in LIVES" :key="n" :class="{ spent: n > lives }"></span>
              <small>Vidas</small>
            </div>
            <div class="quiz-stat">
              <span class="quiz-stat-value" :class="{ hot: streak >= 2 }">{{ streak }}</span>
              <small>Racha ×{{ multiplier }}</small>
            </div>
            <div class="quiz-stat">
              <span class="quiz-stat-value">{{ score }}</span>
              <small>Puntos</small>
            </div>
            <button class="text-button" type="button" @click="backToModes">Salir</button>
          </div>
        </div>

        <div class="quiz-timer">
          <span class="question-counter">
            {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(activeQuestions.length).padStart(2, '0') }}
          </span>
          <span class="quiz-timer-track">
            <i :style="{ width: `${(timeLeft / SECONDS_PER_QUESTION) * 100}%`, background: timeColor }"></i>
          </span>
          <span class="quiz-timer-value" :style="{ color: timeColor }">{{ timeLeft }}s</span>
        </div>

        <div class="quiz-play">
          <article v-if="currentQuestion" class="question-card">
            <div class="question-tag">
              <span>{{ currentQuestion.era }}</span>
              <span>{{ currentQuestion.topic }}</span>
            </div>
            <h2>{{ currentQuestion.prompt }}</h2>
            <div class="answer-list">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="option.id"
                class="answer-option"
                :class="{
                  correct: currentFeedback && option.id === currentFeedback.correctOptionId,
                  incorrect: currentFeedback && selectedOptionId === option.id && option.id !== currentFeedback.correctOptionId,
                }"
                type="button"
                :disabled="isAnswered"
                @click="chooseOption(option.id)"
              >
                <span>{{ ['A', 'B', 'C', 'D'][index] }}</span>
                <span class="answer-label">{{ option.label }}</span>
              </button>
            </div>
            <div v-if="currentFeedback" class="answer-feedback" :class="{ good: currentFeedback.isCorrect }">
              <strong>
                {{ currentFeedback.isCorrect ? '¡Bien visto!' : timedOut ? 'Se acabó el tiempo.' : 'Casi.' }}
              </strong>
              <p>{{ currentFeedback.explanation }}</p>
              <button class="button button-primary quiz-next" type="button" @click="nextQuestion">
                {{ !lives || currentIndex === activeQuestions.length - 1 ? 'Ver resultado' : 'Siguiente' }}
              </button>
            </div>
          </article>

          <aside class="quiz-side">
            <div>
              <p class="panel-label">Progreso de la partida</p>
              <div class="quiz-dots">
                <span
                  v-for="n in activeQuestions.length"
                  :key="n"
                  :class="results[n - 1] === undefined ? '' : results[n - 1] ? 'right' : 'wrong'"
                ></span>
              </div>
              <div class="quiz-dots-legend">
                <span>{{ rightCount }} aciertos</span><span>{{ wrongCount }} fallos</span>
              </div>
            </div>

            <div>
              <p class="panel-label">Cómo puntúa</p>
              <ul class="quiz-rules">
                <li>{{ BASE_POINTS }} puntos por acierto</li>
                <li>Cada dos aciertos seguidos suben el multiplicador, hasta ×4</li>
                <li>{{ TIME_BONUS }} puntos por cada segundo que sobre</li>
                <li>Un fallo, o quedarse sin tiempo, cuesta una vida</li>
              </ul>
            </div>

            <div class="alex-card">
              <span class="alex-avatar" aria-hidden="true">AL</span>
              <div>
                <p class="alex-name">Alex te dice</p>
                <p class="alex-quote">
                  «Lee la explicación aunque aciertes: ahí está la mitad de la lección.»
                </p>
              </div>
            </div>
          </aside>
        </div>
      </template>

      <!-- resultado -->
      <section v-else class="quiz-result">
        <div class="quiz-result-copy">
          <p class="eyebrow eyebrow-light">Partida terminada · {{ scopeLabel }}</p>
          <h1>{{ resultTitle }}</h1>
          <p>
            Has acertado <strong>{{ rightCount }} de {{ results.length }}</strong> preguntas.
            {{ auth.isAuthenticated
              ? 'Hemos guardado los aciertos en tu perfil; los puntos son de esta partida.'
              : 'Con una cuenta guardarías tus resultados y podrías retomar donde lo dejaste.' }}
          </p>
          <div class="result-actions">
            <button class="button button-primary" type="button" @click="startQuiz">Jugar de nuevo</button>
            <RouterLink class="button button-quiet" to="/biblioteca">Repasar en la biblioteca</RouterLink>
          </div>
        </div>
        <div class="quiz-result-stats">
          <div v-for="stat in resultStats" :key="stat.k">
            <span class="quiz-result-key">{{ stat.k }}</span>
            <span class="quiz-result-value">{{ stat.v }}</span>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
