import { ref, watch, type Ref } from 'vue'
import { supabase } from '../lib/supabase.ts'
import { useAuthStore } from '../stores/auth.ts'

/**
 * Progreso de lectura de una lección. `lessonId` es el uuid real de `lessons` (solo existe
 * cuando el contenido viene de Supabase); en modo demo o sin lección aún cargada vale null
 * y el progreso vive solo en memoria, igual que antes.
 */
export function useProgress(lessonId: Ref<string | null>) {
  const completedSections = ref<number[]>([])
  const isLoading = ref(false)
  const auth = useAuthStore()

  async function load() {
    if (!supabase || !lessonId.value || !auth.isAuthenticated) {
      completedSections.value = []
      return
    }
    isLoading.value = true
    try {
      const { data, error } = await supabase
        .from('learning_progress')
        .select('completed_sections')
        .eq('lesson_id', lessonId.value)
        .maybeSingle()
      if (error) throw error
      completedSections.value = ((data?.completed_sections ?? []) as unknown as number[])
    } catch (err) {
      console.error('useProgress: no se pudo leer el progreso guardado', err)
      completedSections.value = []
    } finally {
      isLoading.value = false
    }
  }

  async function toggleSection(index: number, totalSections: number) {
    completedSections.value = completedSections.value.includes(index)
      ? completedSections.value.filter((value) => value !== index)
      : [...completedSections.value, index]

    if (!supabase || !lessonId.value || !auth.isAuthenticated) return
    try {
      const percent = totalSections ? Math.round((completedSections.value.length / totalSections) * 100) : 0
      const { error } = await supabase.from('learning_progress').upsert({
        user_id: auth.user!.id,
        lesson_id: lessonId.value,
        completed_sections: completedSections.value,
        percent_complete: percent,
      })
      if (error) throw error
    } catch (err) {
      console.error('useProgress: no se pudo guardar el progreso', err)
    }
  }

  watch([lessonId, () => auth.user?.id], load, { immediate: true })

  return { completedSections, isLoading, toggleSection }
}
