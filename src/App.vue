<script setup>
import Cabecalho from './components/cabecalho.vue';
   
</script>

<template>
  <cabecalho/>
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

</template>

<style scoped>
.dashboard-container-lateral {
    display: flex;
    min-height: 100vh;
    background-color: #f4f6fb;
}

/* SIDEBAR */
.sidebar {
    width: 260px;
    background-color: #cbd2e4;
    border-right: 1px solid #d1d3d9;
    padding: 24px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top: 0;
}

.sidebar a {
    display: block;
    padding: 16px;
    color: #000000;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.2s;
}

.sidebar a:hover {
    background-color: #ffffff;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
}
</style>