<script setup>
  import { Icon } from '@iconify/vue'
  import Cabecalho from './components/cabecalho.vue'
  import SidebarLink from './components/SidebarLink.vue'
  import { ref } from 'vue'

  const sidebarAberto = ref(false)

  function toggleSidebar() {
    sidebarAberto.value = !sidebarAberto.value
  }
</script>

<template>
  <cabecalho />
  <button class="md:hidden fixed top-0 left-0 z-[60] text-3xl text-rose-800" @click="toggleSidebar">
    <Icon icon="line-md:align-justify" />
  </button>

  <div class="flex min-h-screen">
    <nav class="flex-col bg-red-50 p-4 gap-4 w-64
  fixed md:relative top-0 left-0 h-full md:h-auto z-50 md:z-auto pt-16 md:pt-4"
  :class="sidebarAberto ? 'flex' : 'hidden md:flex'">

      <SidebarLink to="/" label="Painel Geral" />
      <SidebarLink to="/funcionarios" label="Funcionarios" />
      <SidebarLink to="/equipamentos" label="Equipamentos" />
      <SidebarLink to="/manutencao" label="Manutenções" />
      <SidebarLink to="/pedidos" label="Pedidos" />
    </nav>

    <main class="flex-1 bg-white dark:bg-slate-900 p-5">
      <router-view />
    </main>

  </div>
</template>