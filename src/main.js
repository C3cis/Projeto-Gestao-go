import { createApp } from 'vue'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import './main.css'

// 1. Criamos a instância do app e guardamos na variável 'app'
const app = createApp(App)

// 2. Instalamos o roteador ANTES de montar
app.use(router)

app.use(i18n)

// 3. Agora sim, montamos o app no HTML
app.mount('#app')
