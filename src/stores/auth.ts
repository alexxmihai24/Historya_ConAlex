import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

let authListenerAttached = false

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLoading: true,
  }),
  getters: {
    isConfigured: () => isSupabaseConfigured,
    isAuthenticated: (state) => Boolean(state.user),
  },
  actions: {
    async initialize() {
      if (!supabase) { this.isLoading = false; return }
      const { data } = await supabase.auth.getSession()
      this.user = data.session?.user ?? null
      this.isLoading = false

      if (!authListenerAttached) {
        authListenerAttached = true
        supabase.auth.onAuthStateChange((_event, session) => {
          this.user = session?.user ?? null
        })
      }
    },
    async signIn(email: string, password: string) {
      if (!supabase) throw new Error('Supabase aún no está configurado.')
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    },
    async signUp(email: string, password: string) {
      if (!supabase) throw new Error('Supabase aún no está configurado.')
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/acceso` },
      })
      if (error) throw error
    },
    async signOut() {
      if (!supabase) return
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },
  },
})
