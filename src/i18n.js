import { createI18n } from 'vue-i18n'

import enUS from './i18n/en-us'
import ptBR from './i18n/pt-br'

const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR,
  },
})

export default i18n
