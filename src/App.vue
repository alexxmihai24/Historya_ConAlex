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
      <RouterLink class="brand" to="/" aria-label="Historia Con Alex, inicio" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">H</span>
        <span>Historia <em>Con Alex</em></span>
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
        <RouterLink to="/biblioteca" @click="closeMenu">Explorar</RouterLink>
        <RouterLink to="/quiz" @click="closeMenu">Quiz</RouterLink>
        <RouterLink to="/perfil" @click="closeMenu">Mi progreso</RouterLink>
        <RouterLink class="nav-login" to="/acceso" @click="closeMenu">Entrar</RouterLink>
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
        <span>Historia <em>Con Alex</em></span>
      </RouterLink>
      <p>Aprender historia es conectar las piezas del mundo.</p>
      <p class="footer-note">Proyecto educativo · Contenido de demostración</p>
    </div>
  </footer>
</template>
