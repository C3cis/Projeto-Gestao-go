import tailwindcss from '@tailwindcss/vite'   // ← o import continua igual ao do vite.config

export default defineNuxtConfig({
  app: {
    baseURL: '/projetogestao/',
  },
  compatibilityDate: '2026-06-18',
  srcDir: 'src',
  css: ['~/main.css'],          // o CSS que o main.js importava (ajustamos o caminho no passo 10)
  vite: {
    plugins: [tailwindcss()],   // só o tailwind; o vue() saiu
  },
  
})