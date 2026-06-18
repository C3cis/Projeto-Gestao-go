import { createI18n } from 'vue-i18n'
import enUS from '~/i18n/en-us'
import ptBR from '~/i18n/pt-br'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,   // ← necessário pro $t funcionar no template
    locale: 'pt-BR',
    fallbackLocale: 'en-US',
    messages: { 'en-US': enUS, 'pt-BR': ptBR },
  })

  nuxtApp.vueApp.use(i18n)
})