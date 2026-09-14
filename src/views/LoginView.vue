<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase.ts'
import { useAuthStore } from '../stores/auth.ts'
import { t } from '../lib/i18n.ts'

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
    message.value = t('login.notConfigured')
    return
  }

  isLoading.value = true
  try {
    if (isRegister.value) {
      await auth.signUp(email.value, password.value)
      message.value = t('login.checkEmail')
    } else {
      await auth.signIn(email.value, password.value)
      await router.push('/perfil')
    }
  } catch {
    message.value = isRegister.value ? t('login.registerFailed') : t('login.loginFailed')
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
  if (!supabase) { message.value = t('login.resetNotConfigured'); return }
  if (!email.value) { message.value = t('login.resetNeedEmail'); return }
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.value, { redirectTo: `${window.location.origin}/acceso` })
    if (error) throw error
    message.value = t('login.resetSent')
  } catch {
    message.value = t('login.resetFailed')
  }
}
</script>

<template>
  <section class="access-page">
    <div class="access-aside"><div><RouterLink class="brand brand-on-dark" to="/"><span class="brand-mark">H</span><span>Historia <em>Con Alex</em></span></RouterLink><p class="eyebrow eyebrow-light">{{ t('login.asideEyebrow') }}</p><h1>{{ t('login.asideTitle1') }}<br /><i>{{ t('login.asideTitle2') }}</i></h1><p>{{ t('login.asideLead') }}</p></div><span class="aside-quote">{{ t('login.quote') }}</span></div>
    <div class="access-form-wrap"><form class="access-form" @submit.prevent="submit"><p class="eyebrow"><span class="eyebrow-dot"></span> {{ isRegister ? t('login.startJourney') : t('login.welcomeBack') }}</p><h1>{{ isRegister ? t('login.createTitle') : t('login.enterTitle') }}</h1><p>{{ isRegister ? t('login.createLead') : t('login.enterLead') }}</p><div class="auth-mode-switch" role="tablist" :aria-label="t('login.tabs')"><button :class="{ active: !isRegister }" type="button" role="tab" :aria-selected="!isRegister" @click="changeMode('login')">{{ t('login.enter') }}</button><button :class="{ active: isRegister }" type="button" role="tab" :aria-selected="isRegister" @click="changeMode('register')">{{ t('login.create') }}</button></div><label>{{ t('login.email') }}<input v-model.trim="email" type="email" autocomplete="email" required maxlength="254" placeholder="tu@email.com" /></label><label>{{ t('login.password') }}<input v-model="password" type="password" :autocomplete="isRegister ? 'new-password' : 'current-password'" required minlength="12" :placeholder="t('login.passwordPlaceholder')" /><small v-if="isRegister">{{ t('login.passwordHint') }}</small></label><button v-if="!isRegister" class="text-button" type="button" @click="sendPasswordReset">{{ t('login.forgot') }}</button><button class="button button-primary access-submit" type="submit" :disabled="isLoading">{{ isLoading ? t('login.processing') : isRegister ? t('login.create') : t('login.enter') }} <span>→</span></button><p v-if="message" class="form-message" role="status">{{ message }}</p><p class="access-switch">{{ isRegister ? t('login.haveAccount') : t('login.noAccount') }} <button type="button" @click="changeMode(isRegister ? 'login' : 'register')">{{ isRegister ? t('login.enter') : t('login.createOne') }}</button></p></form></div>
  </section>
</template>
