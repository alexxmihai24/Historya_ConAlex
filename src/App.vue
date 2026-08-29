<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="shell nav-wrap">
      <RouterLink class="brand" to="/" aria-label="Historya con Alex, inicio" @click="closeMenu">
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
        <span class="sr-only">Abrir menú</span>
        <span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navegación principal">
        <RouterLink to="/">Globo</RouterLink>
        <RouterLink to="/biblioteca" @click="closeMenu">Biblioteca</RouterLink>
        <RouterLink to="/quiz" @click="closeMenu">Quiz</RouterLink>
        <RouterLink to="/perfil" @click="closeMenu">Progreso</RouterLink>
        <RouterLink class="nav-login" to="/acceso" @click="closeMenu">Acceder</RouterLink>
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
      <p>Aprender historia es conectar las piezas del mundo.</p>
      <p class="footer-note">Proyecto educativo · Contenido a nivel universitario</p>
    </div>
  </footer>
</template>
