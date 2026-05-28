<script setup>
  import Cabecalho from './components/cabecalho.vue'
  import SidebarLink from './components/SidebarLink.vue'
</script>

<template>
  <cabecalho />
  <div class="flex min-h-screen bg-white">
    <nav
      class="sticky top-0 flex h-screen w-64 flex-col bg-red-50 p-10  ">
      <SidebarLink to="/" label="Painel Geral" />
      <SidebarLink to="/funcionarios" label="Funcionarios" />
      <SidebarLink to="/equipamentos" label="Equipamentos" />
      <SidebarLink to="/manutencao" label="Manutenções" />
      <SidebarLink to="/pedidos" label="Pedidos" />
    </nav>
    <main class="flex-1 bg-white p-5">
      <router-view />
    </main>
  </div>
</template>
