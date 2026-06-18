<script setup lang="ts">
  const sidebarAberto = ref(false)

  function toggleSidebar() {
    sidebarAberto.value = !sidebarAberto.value
  }
</script>

<template>
  <cabecalho />
  <button class="fixed top-0 left-0 z-60 text-3xl text-rose-800 md:hidden" @click="toggleSidebar">
    <Icon name="line-md:align-justify" />
  </button>

  <div class="flex min-h-screen">
    <nav
      class="fixed top-0 left-0 z-50 flex h-full w-64 flex-col gap-4 bg-red-50 p-4 pt-16 md:relative md:z-auto md:h-auto md:pt-4"
      :class="[
        sidebarAberto ? 'flex' : 'hidden md:flex',
        'dark:bg-neutral-950/96',
        'dark:text-slate-500',
      ]">
      <SidebarLink to="/" :label="t('sidebar.painel_geral')" />
      <SidebarLink to="/funcionarios" :label="t('sidebar.funcionarios')" />
      <SidebarLink to="/equipamentos" :label="t('sidebar.equipamentos')" />
      <SidebarLink to="/manutencao" :label="t('sidebar.manutencoes')" />
      <SidebarLink to="/pedidos" :label="t('sidebar.pedidos')" />
    </nav>

    <main class="w-full bg-white p-5 dark:bg-neutral-950">
      <div class="mx-auto max-w-7xl">
        <slot />
      </div>
    </main>
  </div>
</template>
