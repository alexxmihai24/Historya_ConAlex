import { ref } from 'vue'
import { supabase } from '../lib/supabase.ts'
import { quizQuestions } from '../data/history.ts'
import { useAuthStore } from '../stores/auth.ts'
import { shuffled } from '../lib/shuffle.ts'
import { locale, t } from '../lib/i18n.ts'
import { topicTranslation } from '../data/topics/ro/index.ts'

export interface QuizOption {
  id: string
  label: string
}

export interface QuizQuestionUI {
  id: string
  era: string
  topic: string
  prompt: string
  options: QuizOption[]
}

export interface AnswerResult {
  isCorrect: boolean
  correctOptionId: string
  explanation: string
}

interface RawQuestionRow {
  question_id: string
  topic_slug: string
  era_title: string
  prompt: string
  options: QuizOption[]
}

/** Respuesta y explicación de las preguntas de demostración, solo para el modo sin Supabase. */
const demoAnswers = new Map(quizQuestions.map((question) => [
  String(question.id),
  { correctOptionId: String(question.answer), explanation: question.explanation },
]))

/* Traducción del quiz (SPEC §20, fase 3).
 *
 *  Las preguntas siguen viniendo de Supabase en español y la corrección la sigue
 *  haciendo el servidor con los ids reales: aquí solo se cambia el texto que se
 *  pinta. El emparejamiento es por POSICIÓN, que es lo único estable entre el
 *  repositorio y la base de datos: `get_quiz_questions` devuelve las opciones
 *  ordenadas por `question_options.position`, y esa posición es el índice de la
 *  opción en el tema español, que es de donde se generó el seed.
 *
 *  Si algo no cuadra —tema sin traducir, enunciado que no aparece en el banco
 *  local, distinto número de opciones— se deja el español. */
interface QuestionTranslation {
  topicTitle: string
  question: string
  options: string[]
  explanation: string
}

function questionTranslation(topicSlug: string, spanishPrompt: string, optionCount: number): QuestionTranslation | null {
  const ro = topicTranslation(topicSlug, locale.value)
  if (!ro) return null
  const bank = quizQuestions.filter((question) => question.topicId === topicSlug)
  const index = bank.findIndex((question) => question.question === spanishPrompt)
  const translated = index >= 0 ? ro.questions[index] : undefined
  if (!translated || translated.options.length !== optionCount) return null
  return { topicTitle: ro.title, ...translated }
}

/** Explicación traducida de cada pregunta servida, por su id. La corrección
 *  viene del servidor; esto solo sustituye el texto que se lee después. */
const translatedExplanations = new Map<string, string>()

function demoQuestions(topicSlug: string | null): QuizQuestionUI[] {
  const source = topicSlug ? quizQuestions.filter((question) => question.topicId === topicSlug) : quizQuestions
  return source.map((question) => {
    const ro = questionTranslation(question.topicId, question.question, question.options.length)
    if (ro) translatedExplanations.set(String(question.id), ro.explanation)
    else translatedExplanations.delete(String(question.id))
    return {
      id: String(question.id),
      era: question.era,
      topic: ro?.topicTitle ?? question.topic,
      prompt: ro?.question ?? question.question,
      // El `id` es el índice original y es lo que compara `checkAnswer`; el orden
      // en que se pintan lo decide `shuffled`. Ver src/lib/shuffle.ts.
      options: shuffled(question.options.map((label, index) => ({ id: String(index), label: ro?.options[index] ?? label }))),
    }
  })
}

export function useQuiz() {
  const isDemoMode = ref(!supabase)

  async function loadQuestions(topicSlug: string | null, limit = 10): Promise<QuizQuestionUI[]> {
    if (!supabase) {
      isDemoMode.value = true
      return demoQuestions(topicSlug)
    }
    try {
      const { data, error } = await supabase.rpc('get_quiz_questions', { p_topic_slug: topicSlug, p_limit: limit })
      if (error) throw error
      isDemoMode.value = false
      return ((data ?? []) as unknown as RawQuestionRow[]).map((row) => {
        // Las opciones llegan ordenadas por `position`, que es el índice de la
        // opción en el tema español: por eso la traducción casa por posición.
        const ro = questionTranslation(row.topic_slug, row.prompt, row.options.length)
        if (ro) translatedExplanations.set(row.question_id, ro.explanation)
        else translatedExplanations.delete(row.question_id)
        return {
          id: row.question_id,
          era: row.era_title,
          topic: ro?.topicTitle ?? row.topic_slug.replaceAll('-', ' '),
          prompt: ro?.question ?? row.prompt,
          // El orden que devuelve la base de datos arrastra el mismo sesgo que el
          // repositorio, porque el seed se genera de ahí. Se baraja igualmente.
          options: shuffled(row.options.map((option, index) => ({ ...option, label: ro?.options[index] ?? option.label }))),
        }
      })
    } catch (err) {
      console.error('useQuiz: no se pudieron cargar preguntas desde Supabase', err)
      isDemoMode.value = true
      return demoQuestions(topicSlug)
    }
  }

  async function checkAnswer(questionId: string, optionId: string): Promise<AnswerResult> {
    if (isDemoMode.value) {
      const answer = demoAnswers.get(questionId)
      return answer
        ? {
            isCorrect: optionId === answer.correctOptionId,
            correctOptionId: answer.correctOptionId,
            explanation: translatedExplanations.get(questionId) ?? answer.explanation,
          }
        : { isCorrect: false, correctOptionId: optionId, explanation: t('quiz.demoMissing') }
    }
    try {
      const { data, error } = await supabase!.rpc('check_quiz_answer', { p_question_id: questionId, p_option_id: optionId })
      if (error) throw error
      // check_quiz_answer está declarada `returns table`, así que PostgREST devuelve
      // un array de una fila, no un objeto. Tratarlo como objeto dejaba is_correct
      // en undefined y daba toda respuesta por incorrecta, sin explicación.
      const rows = (Array.isArray(data) ? data : [data]) as Array<{ is_correct: boolean; correct_option_id: string; explanation: string }>
      const result = rows[0]
      if (!result) throw new Error('check_quiz_answer no ha devuelto ninguna fila')
      // El acierto y la opción correcta vienen SIEMPRE del servidor; lo único que
      // se cambia aquí es el idioma de la explicación.
      return {
        isCorrect: result.is_correct,
        correctOptionId: result.correct_option_id,
        explanation: translatedExplanations.get(questionId) ?? result.explanation,
      }
    } catch (err) {
      console.error('useQuiz: no se pudo comprobar la respuesta', err)
      return { isCorrect: false, correctOptionId: optionId, explanation: t('quiz.checkFailed') }
    }
  }

  /* El orden del array es el orden de juego y el servidor lo respeta: la racha
     depende de él. `secondsLeft` es lo único que aporta el cliente, y allí se
     acota a [0, SECONDS_PER_QUESTION]; la corrección y la racha las calcula el
     servidor, que es lo que exige SPEC §10.4. Aquí no se envía ninguna
     puntuación: enviarla sería pedirle a la base de datos que se fíe. */
  async function finishQuiz(
    scope: string,
    answers: Array<{ questionId: string; optionId: string; secondsLeft?: number }>,
  ) {
    const auth = useAuthStore()
    if (!supabase || isDemoMode.value || !auth.isAuthenticated) return
    try {
      const { error } = await supabase.rpc('submit_quiz_attempt', {
        p_scope: scope,
        p_answers: answers.map((answer) => ({
          question_id: answer.questionId,
          option_id: answer.optionId,
          seconds_left: Math.max(0, Math.round(answer.secondsLeft ?? 0)),
        })),
      })
      if (error) throw error
    } catch (err) {
      console.error('useQuiz: no se pudo guardar el resultado del quiz', err)
    }
  }

  return { isDemoMode, loadQuestions, checkAnswer, finishQuiz }
}
