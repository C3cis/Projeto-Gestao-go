<script setup lang="ts">
  const { t } = useI18n()

  const meusCards = computed(() => [
    { titulo: t('painel_geral.cards.equipamentos'), valor: '3', icone: 'line-md:computer-twotone' },
    { titulo: t('painel_geral.cards.funcionarios'), valor: '4', icone: 'ph:users' },
    { titulo: t('painel_geral.cards.manutencao_ativa'), valor: '2', icone: 'line-md:alert-loop' },
    {
      titulo: t('painel_geral.cards.pedidos_pendentes'),
      valor: '2',
      icone: 'line-md:text-box-twotone-to-text-box-multiple-twotone-transition',
    },
  ])

  const listaDeEquipamentos = [
    { id: '----', pedido: '---', problemas: '---' },
    { id: '----', pedido: '----', problemas: '---' },
    { id: '---', pedido: '---', problemas: '----' },
  ]
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex items-center justify-between">
      <h1
        class="mt-1.5 mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        Dashboard
      </h1>
    </div>
    <p class="text-gray-600">{{ t('painel_geral.titulo') }}</p>
  </section>
  <section
    class="mb-15 grid grid-cols-1 gap-4 px-12 text-justify text-sm sm:grid-cols-2 sm:gap-6 sm:px-10 lg:grid-cols-4 lg:px-4 lg:text-lg xl:text-xl">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section>
    <div class="mt-4 rounded-xl bg-rose-50 p-5 dark:bg-neutral-200/36">
      <h2 class="text-2xl font-bold dark:text-neutral-200">
        {{ t('painel_geral.titulo_tabela') }}
      </h2>
      <div class="mb-4 flex items-center justify-between p-4 px-0.5">
        <Tabelas
          :colunas="[
            { titulo: t('painel_geral.tabela.id'), chave: 'id' },
            { titulo: t('painel_geral.tabela.pedido'), chave: 'pedido' },
            { titulo: t('painel_geral.tabela.problemas'), chave: 'problema' },
          ]"
          :dados="listaDeEquipamentos" /><br />
      </div>
    </div>
  </section>
</template>
