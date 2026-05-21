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
      <router-link to="/cabecalho">Cabeçalho</router-link>
    </nav>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
  <painel_geral/>
</template>

<style scoped></style>
