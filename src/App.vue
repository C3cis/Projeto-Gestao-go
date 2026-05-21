<script setup>
import Painel_geral from './pages/painel_geral.vue';

</script>

<template>
  <div class="dashboard-container-lateral">
    <nav class="sidebar">
      <router-link to="/painel_geral">Painel Geral</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
      <router-link to="/funcionarios">Funcionarios</router-link>
      <router-link to="/equipamentos">Equipamentos</router-link>
      <router-link to="/manutencao">Manutenções</router-link>
      <router-link to="/relatorios">Relatorios</router-link>
    </nav>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>

  <painel_geral/>

</template>

<style scoped>
.dashboard-container-lateral {
    display: flex;
    min-height: 100vh;
    background-color: #e4e7ec; /* Tom de fundo mais moderno e leve */
}
/* SIDEBAR */
.sidebar {
    width: 260px;
    background-color: #cbd2e4;
    border-right: 1px solid #686e84;
    padding: 24px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top: 0;
}
.sidebar a, .sidebar router-link {
    display: block;
    padding: 24px;
    color: #293141;
    text-decoration: none;
    cursor: pointer; 
}

.sidebar a:hover {
    background-color: #e0e7ff;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 2%;
}
</style>
