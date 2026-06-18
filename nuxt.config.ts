import tailwindcss from '@tailwindcss/vite' 

export default defineNuxtConfig({
  compatibilityDate: '2026-06-18',
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()], 
  },
})