<script setup>
  import Cabecalho from './components/cabecalho.vue'
  import SidebarLink from './components/SidebarLink.vue'
</script>

<template>
  <cabecalho />
  <div class="flex min-h-screen bg-white">
    <nav
      class="sticky top-0 flex h-screen w-64 flex-col border border-solid border-white bg-white p-10  ">
      <SidebarLink to="/" label="Painel Geral" />
      <SidebarLink to="/funcionarios" label="Funcionarios" />
      <SidebarLink to="/manutencao" label="Manutenções" />
      <SidebarLink to="/pedidos" label="Pedidos" />
      <SidebarLink to="/relatorios" label="Relatorios" />
    </nav>
    <main class="flex-1 bg-white p-5">
      <router-view />
    </main>
  </div>
</template>
