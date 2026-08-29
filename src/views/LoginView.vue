<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase.ts'
import { useAuthStore } from '../stores/auth.ts'

const auth = useAuthStore()
const router = useRouter()
const mode = ref<'login' | 'register'>('login')
const email = ref('')
const password = ref('')
const message = ref('')
const isLoading = ref(false)
const isRegister = computed(() => mode.value === 'register')

async function submit() {
  message.value = ''
  if (!auth.isConfigured) {
    message.value = 'El acceso estará disponible cuando conectemos el proyecto de Supabase. Puedes seguir explorando la demostración.'
    return
  }

  isLoading.value = true
  try {
    if (isRegister.value) {
      await auth.signUp(email.value, password.value)
      message.value = 'Te hemos enviado un correo de confirmación. Ábrelo para activar tu cuenta.'
    } else {
      await auth.signIn(email.value, password.value)
      await router.push('/perfil')
    }
  } catch {
    message.value = isRegister.value
      ? 'No se ha podido crear la cuenta. Prueba con otro correo o revisa la configuración de acceso.'
      : 'No se ha podido iniciar sesión. Revisa tus datos e inténtalo de nuevo.'
  } finally {
    isLoading.value = false
  }
}

function changeMode(nextMode: 'login' | 'register') {
  mode.value = nextMode
  message.value = ''
}

async function sendPasswordReset() {
  message.value = ''
  if (!supabase) { message.value = 'La recuperación de contraseña estará disponible cuando conectemos el proyecto de Supabase.'; return }
  if (!email.value) { message.value = 'Escribe tu correo electrónico para enviarte el enlace de recuperación.'; return }
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.value, { redirectTo: `${window.location.origin}/acceso` })
    if (error) throw error
    message.value = 'Te hemos enviado un correo con el enlace para restablecer tu contraseña.'
  } catch {
    message.value = 'No se ha podido enviar el correo de recuperación. Inténtalo de nuevo.'
  }
}
</script>

<template>
  <section class="access-page">
    <div class="access-aside"><div><RouterLink class="brand brand-on-dark" to="/"><span class="brand-mark">H</span><span>Historia <em>Con Alex</em></span></RouterLink><p class="eyebrow eyebrow-light">HISTORIA PARA ENTENDER EL PRESENTE</p><h1>Tu historia.<br /><i>Tu ritmo.</i></h1><p>Guarda lo que estudias, recupera tus quizzes y descubre rutas pensadas para ti.</p></div><span class="aside-quote">“El pasado no está muerto. Ni siquiera es pasado.”</span></div>
    <div class="access-form-wrap"><form class="access-form" @submit.prevent="submit"><p class="eyebrow"><span class="eyebrow-dot"></span> {{ isRegister ? 'Empieza tu recorrido' : 'Bienvenido de nuevo' }}</p><h1>{{ isRegister ? 'Crea tu cuenta' : 'Entra a tu cuenta' }}</h1><p>{{ isRegister ? 'Personaliza tu biblioteca y guarda todo tu progreso.' : 'Continúa exactamente donde lo dejaste.' }}</p><div class="auth-mode-switch" role="tablist" aria-label="Acceso"><button :class="{ active: !isRegister }" type="button" role="tab" :aria-selected="!isRegister" @click="changeMode('login')">Entrar</button><button :class="{ active: isRegister }" type="button" role="tab" :aria-selected="isRegister" @click="changeMode('register')">Crear cuenta</button></div><label>Correo electrónico<input v-model.trim="email" type="email" autocomplete="email" required maxlength="254" placeholder="tu@email.com" /></label><label>Contraseña<input v-model="password" type="password" :autocomplete="isRegister ? 'new-password' : 'current-password'" required minlength="12" placeholder="12 caracteres o más" /><small v-if="isRegister">Usa al menos 12 caracteres; evita reutilizar una contraseña.</small></label><button v-if="!isRegister" class="text-button" type="button" @click="sendPasswordReset">¿Has olvidado tu contraseña?</button><button class="button button-primary access-submit" type="submit" :disabled="isLoading">{{ isLoading ? 'Procesando…' : isRegister ? 'Crear cuenta' : 'Entrar' }} <span>→</span></button><p v-if="message" class="form-message" role="status">{{ message }}</p><p class="access-switch">{{ isRegister ? '¿Ya tienes una cuenta?' : '¿Todavía no tienes cuenta?' }} <button type="button" @click="changeMode(isRegister ? 'login' : 'register')">{{ isRegister ? 'Entrar' : 'Crear una cuenta' }}</button></p></form></div>
  </section>
</template>
