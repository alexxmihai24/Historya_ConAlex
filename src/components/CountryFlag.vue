<script setup lang="ts">
/* Bandera de un país, por su nombre en español.
 *
 * Reglas que vienen de SPEC §14.1 y §10:
 *
 *  - SIEMPRE con `<img src>`, nunca incrustando el SVG en la plantilla. Un SVG
 *    es un documento ejecutable: admite `<script>` y `<foreignObject>`. Dentro
 *    de un `<img>` el navegador no ejecuta nada.
 *  - El archivo viaja en el repositorio (`public/img/flags/`), no de un CDN: la
 *    aplicación es una PWA y tiene que funcionar sin red.
 *  - La `src` no se construye nunca con texto que venga de la base de datos. El
 *    código sale de `flagCode`, que solo devuelve valores de una tabla cerrada
 *    de dos letras, así que aquí no hay ruta de inyección.
 *  - `alt` vacío a propósito: en los tres sitios donde se usa (panel del globo,
 *    cabecera de la ficha y chip de la biblioteca) el nombre del país está
 *    escrito al lado. Repetirlo obligaría al lector de pantalla a oírlo dos veces.
 *
 * Si el país no está en el atlas devuelve null y no se pinta nada: «Europa»,
 * «Mundo» y las regiones históricas no tienen bandera, y eso no es un error. */
import { computed } from 'vue'
import { flagCode } from '../lib/country-names.ts'

const props = withDefaults(defineProps<{ country: string; size?: 'sm' | 'md' | 'lg' }>(), {
  size: 'md',
})

const code = computed(() => flagCode(props.country))
</script>

<template>
  <img
    v-if="code"
    class="country-flag"
    :class="`country-flag-${size}`"
    :src="`/img/flags/${code}.svg`"
    alt=""
    width="24"
    height="18"
    loading="lazy"
    decoding="async"
  />
</template>
