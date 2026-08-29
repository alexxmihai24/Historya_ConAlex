import { ref } from 'vue'
import { supabase } from '../lib/supabase.ts'
import { quizQuestions } from '../data/history.ts'
import { useAuthStore } from '../stores/auth.ts'

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

function demoQuestions(topicSlug: string | null): QuizQuestionUI[] {
  const source = topicSlug ? quizQuestions.filter((question) => question.topicId === topicSlug) : quizQuestions
  return source.map((question) => ({
    id: String(question.id),
    era: question.era,
    topic: question.topic,
    prompt: question.question,
    options: question.options.map((label, index) => ({ id: String(index), label })),
  }))
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
      return ((data ?? []) as unknown as RawQuestionRow[]).map((row) => ({
        id: row.question_id,
        era: row.era_title,
        topic: row.topic_slug.replaceAll('-', ' '),
        prompt: row.prompt,
        options: row.options,
      }))
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
        ? { isCorrect: optionId === answer.correctOptionId, correctOptionId: answer.correctOptionId, explanation: answer.explanation }
        : { isCorrect: false, correctOptionId: optionId, explanation: 'No se ha encontrado esta pregunta de demostración.' }
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
      return { isCorrect: result.is_correct, correctOptionId: result.correct_option_id, explanation: result.explanation }
    } catch (err) {
      console.error('useQuiz: no se pudo comprobar la respuesta', err)
      return { isCorrect: false, correctOptionId: optionId, explanation: 'No hemos podido comprobar esta respuesta ahora mismo.' }
    }
  }

  async function finishQuiz(scope: string, answers: Array<{ questionId: string; optionId: string }>) {
    const auth = useAuthStore()
    if (!supabase || isDemoMode.value || !auth.isAuthenticated) return
    try {
      const { error } = await supabase.rpc('submit_quiz_attempt', {
        p_scope: scope,
        p_answers: answers.map((answer) => ({ question_id: answer.questionId, option_id: answer.optionId })),
      })
      if (error) throw error
    } catch (err) {
      console.error('useQuiz: no se pudo guardar el resultado del quiz', err)
    }
  }

  return { isDemoMode, loadQuestions, checkAnswer, finishQuiz }
}
