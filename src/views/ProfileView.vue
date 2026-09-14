<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../lib/supabase.ts'
import { useAuthStore } from '../stores/auth.ts'
import { useTopics } from '../composables/useTopics.ts'
import { intlLocale, locale, t } from '../lib/i18n.ts'
import type { MessageKey } from '../i18n/es.ts'

interface RecentProgress { title: string; slug: string; percent: number }
interface QuizHistoryItem { scope: string; correct: number; total: number; points: number; streak: number; completedAt: string }

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

/* El interés se guarda en la base de datos por su slug en español, que no cambia
   con el idioma; solo la etiqueta que se pinta se traduce. */
function interestSlug(interest: string) { return interest.toLowerCase().replaceAll(' ', '-') }
function interestLabel(interest: string) { return t(`interest.${interestSlug(interest)}` as MessageKey) }
function formatDate(iso: string) { return new Date(iso).toLocaleDateString(intlLocale(locale.value)) }
function toggleInterest(interest: string) { selectedInterests.value = selectedInterests.value.includes(interest) ? selectedInterests.value.filter((item) => item !== interest) : [...selectedInterests.value, interest] }
async function loadPreferences() {
  if (!auth.user || !supabase) return
  const { data, error } = await supabase.from('user_preferences').select('topic_slug')
  if (!error && data) selectedInterests.value = data.map((item) => availableInterests.find((interest) => interestSlug(interest) === item.topic_slug)).filter((interest): interest is string => Boolean(interest))
}
async function savePreferences() {
  saveMessage.value = ''
  if (!auth.user || !supabase) { saveMessage.value = t('profile.saveNeedAccount'); return }
  isSaving.value = true
  const { error } = await supabase.rpc('replace_user_preferences', {
    p_preferences: selectedInterests.value.map(interestSlug),
  })
  isSaving.value = false
  saveMessage.value = error ? t('profile.saveFailed') : t('profile.saved')
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

    /* Sin la migración 20260910 no existen `points` ni `best_streak`, y pedirlas
       haría fallar el select entero. Se reintenta sin ellas para no dejar el
       historial vacío hasta que se ejecute el SQL. */
    async function ultimosIntentos(columnas: string) {
      return supabase!
        .from('quiz_attempts')
        .select(columnas)
        .order('completed_at', { ascending: false })
        .limit(5)
    }
    let intentos = await ultimosIntentos('quiz_scope, total_questions, correct_answers, points, best_streak, completed_at')
    if (intentos.error) {
      intentos = await ultimosIntentos('quiz_scope, total_questions, correct_answers, completed_at')
    }
    if (intentos.error) throw intentos.error
    const attemptRows = intentos.data
    quizHistory.value = ((attemptRows ?? []) as unknown as Array<{ quiz_scope: string; total_questions: number; correct_answers: number; points: number | null; best_streak: number | null; completed_at: string }>).map((row) => ({
      scope: row.quiz_scope,
      correct: row.correct_answers,
      total: row.total_questions,
      // Los calcula el servidor en submit_quiz_attempt; nunca los envía el
      // cliente (SPEC §10.4). Nulos en los intentos anteriores a la migración.
      points: row.points ?? 0,
      streak: row.best_streak ?? 0,
      completedAt: row.completed_at,
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
  <section class="profile-header"><div class="shell profile-heading"><div class="profile-avatar">{{ displayName.charAt(0).toUpperCase() }}</div><div><p class="eyebrow"><span class="eyebrow-dot"></span> {{ t('profile.space') }}</p><h1>{{ t('profile.hello', { name: displayName }) }}</h1></div><RouterLink v-if="!auth.isAuthenticated" class="button button-quiet" to="/acceso">{{ t('profile.createAccount') }}</RouterLink><button v-else class="button button-quiet" type="button" @click="handleSignOut">{{ t('profile.signOut') }}</button></div></section>
  <section class="shell dashboard-grid"><div class="dashboard-main">
      <article class="dashboard-card progress-summary">
        <div><p class="eyebrow">{{ t('profile.path') }}</p><h2>{{ t('profile.pathTitle') }}</h2><p>{{ t('profile.started', { n: studiedCount, total: topics.length }) }}</p></div>
        <div class="circle-progress" :style="{ '--progress': `${overallProgress * 3.6}deg` }"><strong>{{ overallProgress }}%</strong><span>{{ t('profile.progress') }}</span></div>
      </article>

      <article v-if="recentProgress" class="dashboard-card">
        <div class="card-title-row"><div><p class="eyebrow">{{ t('profile.continueHere') }}</p><h2>{{ recentProgress.title }}</h2></div></div>
        <div class="dashboard-progress"><i :style="{ width: `${recentProgress.percent}%` }"></i></div>
        <div class="dashboard-card-footer"><span>{{ t('profile.completed', { n: recentProgress.percent }) }}</span><RouterLink class="button button-primary" :to="`/estudiar/${recentProgress.slug}`">{{ t('profile.continue') }} <span>→</span></RouterLink></div>
      </article>
      <article v-else class="dashboard-card">
        <div class="card-title-row"><div><p class="eyebrow">{{ t('profile.startHere') }}</p><h2>{{ t('profile.noLesson') }}</h2></div></div>
        <p>{{ t('profile.noLessonLead') }}</p>
        <div class="dashboard-card-footer"><RouterLink class="button button-primary" to="/biblioteca">{{ t('profile.goLibrary') }} <span>→</span></RouterLink></div>
      </article>

      <article class="dashboard-card">
        <p class="eyebrow">{{ t('profile.lastQuizzes') }}</p>
        <ul v-if="quizHistory.length" class="quiz-history"><li v-for="(attempt, index) in quizHistory" :key="index"><strong>{{ attempt.scope }}</strong><span>{{ attempt.correct }}/{{ attempt.total }}</span><span v-if="attempt.points" class="quiz-history-points">{{ t('profile.points', { n: attempt.points }) }}<template v-if="attempt.streak > 1">{{ t('profile.streak', { n: attempt.streak }) }}</template></span><small>{{ formatDate(attempt.completedAt) }}</small></li></ul>
        <p v-else>{{ t('profile.noQuizzes') }}</p>
      </article>
    </div>
    <aside class="dashboard-side"><article class="preferences-card"><p class="eyebrow">{{ t('profile.customize') }}</p><h2>{{ t('profile.interests') }}</h2><p>{{ t('profile.interestsLead') }}</p><div class="interest-list"><button v-for="interest in availableInterests" :key="interest" type="button" :class="{ active: selectedInterests.includes(interest) }" @click="toggleInterest(interest)"><span>{{ selectedInterests.includes(interest) ? '✓' : '+' }}</span>{{ interestLabel(interest) }}</button></div><button class="save-preferences" type="button" :disabled="isSaving" @click="savePreferences">{{ isSaving ? t('profile.saving') : t('profile.saveInterests') }}</button><p v-if="saveMessage" class="preferences-message" role="status">{{ saveMessage }}</p></article><article class="daily-quiz-card"><p class="eyebrow eyebrow-light">{{ t('profile.daily') }}</p><h2>{{ t('profile.dailyTitle') }}</h2><RouterLink to="/quiz">{{ t('profile.startNow') }} <span>→</span></RouterLink></article></aside></section>
</template>
