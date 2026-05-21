import { createRouter, createWebHistory } from 'vue-router';
import Painel_geral from '../pages/painel_geral.vue';
import Pedidos from '../pages/pedidos.vue';
import Funcionarios from '../pages/funcionarios.vue';
import Equipamentos from '../pages/equipamentos.vue';
import Manutencao from '../pages/manutencao.vue';
import Relatorios from '../pages/relatorios.vue';
import Cabecalho from '../components/cabecalho.vue';


const routes = [{
  path: '/painel_geral',
  name: 'Painel Geral',
  component: Painel_geral
},
{
  path: '/pedidos',
  name: 'Pedidos',
  component: Pedidos
},
{
  path: '/funcionarios',
  name: 'Funcionarios',
  component: Funcionarios
},
{
  path: '/equipamentos',
  name: 'Equipamentos',
  component: Equipamentos
},
{ 
  path: '/manutencao',
  name: 'Manutenção',
  component: Manutencao
},
{ 
  path: '/relatorios',
  name: 'Relatorios',
  component: Relatorios
},
{
  path: '/cabecalho',
  name: 'Cabecalho',
  component: Cabecalho
}]
const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes,

})
export default router