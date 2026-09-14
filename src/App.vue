<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { LOCALES, locale, setLocale, t } from './lib/i18n.ts'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="shell nav-wrap">
      <RouterLink class="brand" to="/" :aria-label="t('nav.home')" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">H</span>
        <span class="brand-name">Historya</span>
        <em>con Alex</em>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ t('nav.openMenu') }}</span>
        <span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" :aria-label="t('nav.aria')">
        <RouterLink to="/" @click="closeMenu">{{ t('nav.globe') }}</RouterLink>
        <RouterLink to="/biblioteca" @click="closeMenu">{{ t('nav.library') }}</RouterLink>
        <RouterLink to="/quiz" @click="closeMenu">{{ t('nav.quiz') }}</RouterLink>
        <RouterLink to="/perfil" @click="closeMenu">{{ t('nav.progress') }}</RouterLink>
        <div class="lang-switch" role="group" :aria-label="t('lang.label')">
          <button
            v-for="option in LOCALES"
            :key="option"
            type="button"
            :class="{ active: locale === option }"
            :aria-pressed="locale === option"
            :title="t(option === 'es' ? 'lang.es' : 'lang.ro')"
            :lang="option"
            @click="setLocale(option)"
          >
            {{ option.toUpperCase() }}
          </button>
        </div>
        <RouterLink class="nav-login" to="/acceso" @click="closeMenu">{{ t('nav.login') }}</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="site-footer">
    <div class="shell footer-content">
      <RouterLink class="brand footer-brand" to="/">
        <span class="brand-mark" aria-hidden="true">H</span>
        <span class="brand-name">Historya</span>
        <em>con Alex</em>
      </RouterLink>
      <p>{{ t('footer.tagline') }}</p>
      <p class="footer-note">{{ t('footer.note') }}</p>
    </div>
  </footer>
</template>
