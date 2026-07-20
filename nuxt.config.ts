import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  compatibilityDate: '2026-06-18',
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'pt',
    locales: [
      {
        code: 'pt',
        language: 'pt-BR',
        name: 'Português (BR)',
        flag: 'flag:br-4x3',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English (US)',
        flag: 'flag:us-4x3',
      },
    ],
  },
  nitro: { preset: 'bun' },

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8080',
    },
  },
})
