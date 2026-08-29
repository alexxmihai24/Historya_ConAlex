import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // historya-globe, historya-outline e historya-map son custom elements que
      // registra src/lib/globe.js. Sin esto Vue los buscaría como componentes.
      template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('historya-') } },
    }),
  ],
})
