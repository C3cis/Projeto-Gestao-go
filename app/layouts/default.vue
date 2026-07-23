<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  const sidebarAberto = ref(false)

  function toggleSidebar() : void {
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
      <SidebarLink to="/" :label="t('painel_geral')" />
      <SidebarLink to="/funcionarios" :label="t('funcionarios')" />
      <SidebarLink to="/equipamentos" :label="t('equipamentos')" />
      <SidebarLink to="/manutencao" :label="t('manutencoes')" />
      <SidebarLink to="/pedidos" :label="t('pedidos')" />
      <SidebarLink to="/relatorios" :label="t('relatorios')" />
    </nav>

    <main class="w-full bg-white p-5 dark:bg-neutral-950">
      <div class="mx-auto max-w-7xl">
        <slot />
      </div>
    </main>
  </div>
</template>

<i18n lang="json">
{
  "pt": {
    "painel_geral": "Painel Geral",
    "funcionarios": "Funcionários",
    "equipamentos": "Equipamentos",
    "manutencoes": "Manutenções",
    "pedidos": "Pedidos",
    "relatorios": "Relatorios"
  },
  "en": {
    "painel_geral": "Dashboard",
    "funcionarios": "Employees",
    "equipamentos": "Equipment",
    "manutencoes": "Maintenance",
    "pedidos": "Orders",
    "relatorios": "Reports"
  }
}
</i18n>
