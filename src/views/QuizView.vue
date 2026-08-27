<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTopics } from '../composables/useTopics'
import { useQuiz, type AnswerResult, type QuizQuestionUI } from '../composables/useQuiz'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const auth = useAuthStore()
const { topics } = useTopics()
const { loadQuestions, checkAnswer, finishQuiz } = useQuiz()

const requestedTopic = typeof route.query.topic === 'string' ? route.query.topic : 'global'
const selectedMode = ref<'global' | 'topic'>(requestedTopic === 'global' ? 'global' : 'topic')
const selectedTopic = ref(requestedTopic === 'global' ? topics.value[0].id : requestedTopic)
const hasStarted = ref(false)
const isLoadingQuiz = ref(false)
const quizError = ref('')
const currentIndex = ref(0)
const selectedOptionId = ref<string | null>(null)
const currentFeedback = ref<AnswerResult | null>(null)
const answers = ref<Array<{ questionId: string; optionId: string; isCorrect: boolean }>>([])
const finished = ref(false)
const activeQuestions = ref<QuizQuestionUI[]>([])

watch(topics, (list) => {
  if (list.length && !list.some((topic) => topic.id === selectedTopic.value)) selectedTopic.value = list[0].id
})

const currentQuestion = computed(() => activeQuestions.value[currentIndex.value])
const isAnswered = computed(() => selectedOptionId.value !== null)
const score = computed(() => answers.value.filter((answer) => answer.isCorrect).length)
const percentage = computed(() => activeQuestions.value.length ? Math.round((score.value / activeQuestions.value.length) * 100) : 0)
const selectedTopicInfo = computed(() => topics.value.find((topic) => topic.id === selectedTopic.value))

async function startQuiz() {
  quizError.value = ''
  isLoadingQuiz.value = true
  const slug = selectedMode.value === 'topic' ? selectedTopic.value : null
  activeQuestions.value = await loadQuestions(slug, 10)
  isLoadingQuiz.value = false
  if (!activeQuestions.value.length) { quizError.value = 'No hay preguntas disponibles todavía para esta opción. Prueba con otro tema.'; return }
  hasStarted.value = true
  currentIndex.value = 0
  selectedOptionId.value = null
  currentFeedback.value = null
  answers.value = []
  finished.value = false
}

if (requestedTopic !== 'global') void startQuiz()

function chooseOption(optionId: string) {
  if (isAnswered.value || !currentQuestion.value) return
  selectedOptionId.value = optionId
  const question = currentQuestion.value
  void checkAnswer(question.id, optionId).then((result) => {
    currentFeedback.value = result
    answers.value.push({ questionId: question.id, optionId, isCorrect: result.isCorrect })
  })
}
function nextQuestion() {
  if (!currentFeedback.value) return
  if (currentIndex.value === activeQuestions.value.length - 1) {
    finished.value = true
    void finishQuiz(selectedMode.value === 'global' ? 'global' : `tema:${selectedTopic.value}`, answers.value)
    return
  }
  currentIndex.value += 1
  selectedOptionId.value = null
  currentFeedback.value = null
}
function restartQuiz() { void startQuiz() }
function backToModes() { hasStarted.value = false; finished.value = false; selectedOptionId.value = null; currentFeedback.value = null; answers.value = [] }
</script>

<template>
  <section class="quiz-page">
    <div class="shell quiz-shell">
      <section v-if="!hasStarted" class="quiz-setup">
        <p class="eyebrow"><span class="eyebrow-dot"></span> Elige cómo repasar</p>
        <h1>Tu quiz, a tu ritmo.</h1>
        <p>Mezcla épocas y países para un reto global, o afianza lo que acabas de estudiar con un quiz por tema.</p>
        <div class="quiz-mode-grid">
          <button class="quiz-mode-card" :class="{ selected: selectedMode === 'global' }" type="button" @click="selectedMode = 'global'"><span class="mode-icon">✦</span><strong>Quiz global</strong><small>Hasta 10 preguntas de todas las épocas</small><span class="mode-check">{{ selectedMode === 'global' ? '✓' : '' }}</span></button>
          <button class="quiz-mode-card" :class="{ selected: selectedMode === 'topic' }" type="button" @click="selectedMode = 'topic'"><span class="mode-icon">◌</span><strong>Quiz por tema</strong><small>Repasa una lección concreta</small><span class="mode-check">{{ selectedMode === 'topic' ? '✓' : '' }}</span></button>
        </div>
        <label v-if="selectedMode === 'topic'" class="quiz-topic-select">Tema para repasar<select v-model="selectedTopic"><option v-for="topic in topics" :key="topic.id" :value="topic.id">{{ topic.title }} · {{ topic.country }}</option></select></label>
        <button class="button button-primary start-quiz-button" type="button" :disabled="isLoadingQuiz" @click="startQuiz">{{ isLoadingQuiz ? 'Cargando…' : selectedMode === 'global' ? 'Empezar quiz global' : `Empezar: ${selectedTopicInfo?.title}` }} <span>→</span></button>
        <p v-if="quizError" class="form-message" role="status">{{ quizError }}</p>
      </section>

      <template v-else-if="!finished">
        <div class="quiz-header"><div><p class="eyebrow"><span class="eyebrow-dot"></span> {{ selectedMode === 'global' ? 'Quiz global' : `Quiz · ${selectedTopicInfo?.title}` }}</p><h1>Recorre la historia</h1></div><button class="text-button" type="button" @click="backToModes">Cambiar quiz</button><span class="question-counter">{{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(activeQuestions.length).padStart(2, '0') }}</span></div>
        <div class="quiz-progress" aria-hidden="true"><i :style="{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }"></i></div>
        <article v-if="currentQuestion" class="question-card"><div class="question-tag"><span>{{ currentQuestion.era }}</span><span>{{ currentQuestion.topic }}</span></div><h2>{{ currentQuestion.prompt }}</h2><div class="answer-list"><button v-for="(option, index) in currentQuestion.options" :key="option.id" class="answer-option" :class="{ selected: selectedOptionId === option.id, correct: currentFeedback && option.id === currentFeedback.correctOptionId, incorrect: currentFeedback && selectedOptionId === option.id && option.id !== currentFeedback.correctOptionId }" type="button" :disabled="isAnswered" @click="chooseOption(option.id)"><span>{{ ['A', 'B', 'C', 'D'][index] }}</span>{{ option.label }}</button></div><div v-if="currentFeedback" class="answer-feedback" :class="{ good: currentFeedback.isCorrect }"><strong>{{ currentFeedback.isCorrect ? '¡Bien visto!' : 'Casi. La respuesta correcta está marcada.' }}</strong><p>{{ currentFeedback.explanation }}</p></div><button class="button button-primary quiz-next" type="button" :disabled="!currentFeedback" @click="nextQuestion">{{ currentIndex === activeQuestions.length - 1 ? 'Ver resultado' : 'Siguiente pregunta' }} <span>→</span></button></article>
      </template>

      <section v-else class="quiz-result"><span class="result-seal">{{ percentage }}%</span><p class="eyebrow"><span class="eyebrow-dot"></span> Quiz completado</p><h1>{{ score / activeQuestions.length >= .75 ? 'Tienes muy buen ojo histórico.' : 'Cada respuesta es una pista para seguir aprendiendo.' }}</h1><p>Has acertado <strong>{{ score }} de {{ activeQuestions.length }}</strong> preguntas. {{ auth.isAuthenticated ? 'Hemos guardado tu resultado en tu perfil.' : 'Al crear una cuenta podrás guardar este resultado y recibir la siguiente recomendación.' }}</p><div class="result-actions"><button class="button button-primary" type="button" @click="restartQuiz">Jugar de nuevo <span>↻</span></button><button class="button button-quiet" type="button" @click="backToModes">Elegir otro quiz</button></div></section>
    </div>
  </section>
</template>
