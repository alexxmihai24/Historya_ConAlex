<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabase'
import { useAuthStore } from '../stores/auth'
import { useTopics } from '../composables/useTopics'

interface RecentProgress { title: string; slug: string; percent: number }
interface QuizHistoryItem { scope: string; correct: number; total: number; date: string }

const auth = useAuthStore()
const { topics } = useTopics()
const selectedInterests = ref(['Antigüedad', 'Historia de España', 'Arte'])
const availableInterests = ['Antigüedad', 'Edad Media', 'Historia de España', 'Historia de América', 'Arte', 'Guerras y revoluciones']
const displayName = computed(() => auth.user?.user_metadata?.display_name || auth.user?.email?.split('@')[0] || 'Alex')
const saveMessage = ref('')
const isSaving = ref(false)

const studiedCount = ref(0)
const overallProgress = ref(0)
const recentProgress = ref<RecentProgress | null>(null)
const quizHistory = ref<QuizHistoryItem[]>([])

function interestSlug(interest: string) { return interest.toLowerCase().replaceAll(' ', '-') }
function toggleInterest(interest: string) { selectedInterests.value = selectedInterests.value.includes(interest) ? selectedInterests.value.filter((item) => item !== interest) : [...selectedInterests.value, interest] }
async function loadPreferences() {
  if (!auth.user || !supabase) return
  const { data, error } = await supabase.from('user_preferences').select('topic_slug')
  if (!error && data) selectedInterests.value = data.map((item) => availableInterests.find((interest) => interestSlug(interest) === item.topic_slug)).filter((interest): interest is string => Boolean(interest))
}
async function savePreferences() {
  saveMessage.value = ''
  if (!auth.user || !supabase) { saveMessage.value = 'Crea una cuenta para guardar tus preferencias en todos tus dispositivos.'; return }
  isSaving.value = true
  const { error } = await supabase.rpc('replace_user_preferences', {
    p_preferences: selectedInterests.value.map(interestSlug),
  })
  isSaving.value = false
  saveMessage.value = error ? 'No se han podido guardar los cambios. Vuelve a intentarlo.' : 'Preferencias guardadas.'
}

async function loadDashboard() {
  if (!auth.user || !supabase) {
    // Sin sesión no hay progreso que mostrar: el panel queda a cero en lugar de inventar cifras.
    studiedCount.value = 0
    overallProgress.value = 0
    recentProgress.value = null
    quizHistory.value = []
    return
  }
  try {
    const { data: progressRows, error: progressError } = await supabase
      .from('learning_progress')
      .select('percent_complete, updated_at, lessons(title, topics(slug, title))')
      .order('updated_at', { ascending: false })
    if (progressError) throw progressError
    const rows = (progressRows ?? []) as unknown as Array<{ percent_complete: number; lessons: { topics: { slug: string; title: string } | null } | null }>
    studiedCount.value = rows.length
    overallProgress.value = rows.length ? Math.round(rows.reduce((sum, row) => sum + row.percent_complete, 0) / rows.length) : 0
    const latest = rows[0]
    recentProgress.value = latest?.lessons?.topics
      ? { title: latest.lessons.topics.title, slug: latest.lessons.topics.slug, percent: latest.percent_complete }
      : null

    const { data: attemptRows, error: attemptError } = await supabase
      .from('quiz_attempts')
      .select('quiz_scope, total_questions, correct_answers, completed_at')
      .order('completed_at', { ascending: false })
      .limit(5)
    if (attemptError) throw attemptError
    quizHistory.value = ((attemptRows ?? []) as unknown as Array<{ quiz_scope: string; total_questions: number; correct_answers: number; completed_at: string }>).map((row) => ({
      scope: row.quiz_scope,
      correct: row.correct_answers,
      total: row.total_questions,
      date: new Date(row.completed_at).toLocaleDateString('es-ES'),
    }))
  } catch (err) {
    console.error('ProfileView: no se pudo cargar el progreso real', err)
    studiedCount.value = 0
    overallProgress.value = 0
    recentProgress.value = null
    quizHistory.value = []
  }
}

async function handleSignOut() {
  try {
    await auth.signOut()
  } catch (err) {
    console.error('ProfileView: no se pudo cerrar sesión', err)
  }
}

watch(() => auth.user?.id, () => { void loadPreferences(); void loadDashboard() }, { immediate: true })
</script>

<template>
  <section class="profile-header"><div class="shell profile-heading"><div class="profile-avatar">{{ displayName.charAt(0).toUpperCase() }}</div><div><p class="eyebrow"><span class="eyebrow-dot"></span> Tu espacio</p><h1>Hola, {{ displayName }}.</h1></div><RouterLink v-if="!auth.isAuthenticated" class="button button-quiet" to="/acceso">Crear cuenta</RouterLink><button v-else class="button button-quiet" type="button" @click="handleSignOut">Cerrar sesión</button></div></section>
  <section class="shell dashboard-grid"><div class="dashboard-main">
      <article class="dashboard-card progress-summary">
        <div><p class="eyebrow">TU CAMINO</p><h2>Estás construyendo una visión global.</h2><p>Has empezado {{ studiedCount }} de {{ topics.length }} temas disponibles.</p></div>
        <div class="circle-progress" :style="{ '--progress': `${overallProgress * 3.6}deg` }"><strong>{{ overallProgress }}%</strong><span>avance</span></div>
      </article>

      <article v-if="recentProgress" class="dashboard-card">
        <div class="card-title-row"><div><p class="eyebrow">SIGUE DESDE AQUÍ</p><h2>{{ recentProgress.title }}</h2></div></div>
        <div class="dashboard-progress"><i :style="{ width: `${recentProgress.percent}%` }"></i></div>
        <div class="dashboard-card-footer"><span>{{ recentProgress.percent }}% completado</span><RouterLink class="button button-primary" :to="`/estudiar/${recentProgress.slug}`">Continuar <span>→</span></RouterLink></div>
      </article>
      <article v-else class="dashboard-card">
        <div class="card-title-row"><div><p class="eyebrow">EMPIEZA POR AQUÍ</p><h2>Todavía no has abierto ninguna lección.</h2></div></div>
        <p>Elige un tema en la biblioteca y tu progreso aparecerá aquí.</p>
        <div class="dashboard-card-footer"><RouterLink class="button button-primary" to="/biblioteca">Ir a la biblioteca <span>→</span></RouterLink></div>
      </article>

      <article class="dashboard-card">
        <p class="eyebrow">ÚLTIMOS QUIZZES</p>
        <ul v-if="quizHistory.length" class="quiz-history"><li v-for="(attempt, index) in quizHistory" :key="index"><strong>{{ attempt.scope }}</strong><span>{{ attempt.correct }}/{{ attempt.total }}</span><small>{{ attempt.date }}</small></li></ul>
        <p v-else>Aquí verás tus resultados cuando completes un quiz con la sesión iniciada.</p>
      </article>
    </div>
    <aside class="dashboard-side"><article class="preferences-card"><p class="eyebrow">PERSONALIZA TU CONTENIDO</p><h2>¿Qué te interesa?</h2><p>Usaremos estas preferencias para recomendarte rutas y quizzes.</p><div class="interest-list"><button v-for="interest in availableInterests" :key="interest" type="button" :class="{ active: selectedInterests.includes(interest) }" @click="toggleInterest(interest)"><span>{{ selectedInterests.includes(interest) ? '✓' : '+' }}</span>{{ interest }}</button></div><button class="save-preferences" type="button" :disabled="isSaving" @click="savePreferences">{{ isSaving ? 'Guardando…' : 'Guardar intereses' }}</button><p v-if="saveMessage" class="preferences-message" role="status">{{ saveMessage }}</p></article><article class="daily-quiz-card"><p class="eyebrow eyebrow-light">RETO DEL DÍA</p><h2>5 preguntas para activar la memoria.</h2><RouterLink to="/quiz">Empezar ahora <span>→</span></RouterLink></article></aside></section>
</template>
