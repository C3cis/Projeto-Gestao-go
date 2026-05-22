import { createRouter, createWebHashHistory } from 'vue-router'

import Cabecalho from '../components/cabecalho.vue'
import Equipamentos from '../pages/equipamentos.vue'
import Funcionarios from '../pages/funcionarios.vue'
import Manutencao from '../pages/manutencao.vue'
import Painel_geral from '../pages/painel_geral.vue'
import Pedidos from '../pages/pedidos.vue'
import Relatorios from '../pages/relatorios.vue'

const routes = [
  {
    path: '/',
    name: 'Painel Geral',
    component: Painel_geral,
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos,
  },
  {
    path: '/funcionarios',
    name: 'Funcionarios',
    component: Funcionarios,
  },
  {
    path: '/equipamentos',
    name: 'Equipamentos',
    component: Equipamentos,
  },
  {
    path: '/manutencao',
    name: 'Manutenção',
    component: Manutencao,
  },
  {
    path: '/relatorios',
    name: 'Relatorios',
    component: Relatorios,
  },
  {
    path: '/cabecalho',
    name: 'Cabecalho',
    component: Cabecalho,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
