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

  <div class="flex min-h-screen  ">
    <nav class="flex flex-col bg-red-50 p-4 gap-4 w-64 
    
  fixed md:relative top-0 left-0 h-full md:h-auto z-50 md:z-auto pt-16 md:pt-4"
  :class="[sidebarAberto ? 'flex' : 'hidden md:flex',
  'dark:bg-neutral-950/96 ', 'dark:text-slate-500']">

      <SidebarLink to="/" :label="$t('sidebar.painel_geral')" />
      <SidebarLink to="/funcionarios" :label="$t('sidebar.funcionarios')" />
      <SidebarLink to="/equipamentos" :label="$t('sidebar.equipamentos')" />
      <SidebarLink to="/manutencao" :label="$t('sidebar.manutencoes')" />
      <SidebarLink to="/pedidos" :label="$t('sidebar.pedidos')" />
    </nav>

    <main class=" w-full bg-white p-5
    dark:bg-neutral-950 
    ">
    <div class="max-w-7xl mx-auto">
      <router-view />
      
      </div>
    </main>

  </div>
</template>