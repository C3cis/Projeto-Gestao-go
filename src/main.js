import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import './css/base/variables.css'
import './css/base/reset.css'

createApp(App).mount('#app')
app.use(router)