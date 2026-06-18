<script setup lang="ts">
  const { t } = useI18n()

  const meusCards = computed(() => [
    { titulo: t('pedidos.cards.pendentes'), valor: '3', icone: 'line-md:document-report' },
    { titulo: t('pedidos.cards.aprovados'), valor: '4', icone: 'line-md:email-check' },
    { titulo: t('pedidos.cards.em_analise'), valor: '2', icone: 'line-md:downloading-loop' },
    { titulo: t('pedidos.cards.total'), valor: '2', icone: 'line-md:folder-settings-filled' },
  ])

  const Pedidos = [
    { id: '001', cliente: 'João Silva', produto: 'Microscópio Zeiss', status: 'Em Processamento' },
    { id: '002', cliente: 'Maria Oliveira', produto: 'Centrífuga Digital', status: 'Enviado' },
    { id: '003', cliente: 'Carlos Santos', produto: 'Espectrofotômetro', status: 'Entregue' },
  ]
  const BotoesBusca = computed(() => [
    { texto: t('pedidos.botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('pedidos.botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('pedidos.botoes.pendentes'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('pedidos.botoes.aprovados'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('pedidos.botoes.cancelados'), tamanho: 'pequeno', cor: 'rosinha' },
  ])
</script>
<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('pedidos.titulo') }}
      </h1>
      <Botoes
        class="mb-4 text-xs"
        tipo="medio"
        :texto="t('pedidos.botoes.adicionar')"
        cor="rosao" />
    </div>
    <p class="text-xl text-gray-600">{{ t('pedidos.sub_titulo') }}</p>
  </section>
  <section
    class="mb-5 grid grid-cols-1 gap-4 px-20 text-justify text-sm sm:grid-cols-2 sm:gap-6 sm:px-10 lg:grid-cols-4 lg:px-4 lg:text-lg xl:text-xl">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="mb-6 flex flex-wrap gap-2 p-2">
    <Botoes
      v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor" />
  </section>
  <section>
    <div>
      <Tabelas
        :colunas="[
          { titulo: t('pedidos.tabela.id'), chave: 'id' },
          { titulo: t('pedidos.tabela.tecnico'), chave: 'cliente' },
          { titulo: t('pedidos.tabela.pedido'), chave: 'produto' },
          { titulo: t('pedidos.tabela.status'), chave: 'status' },
        ]"
        :dados="Pedidos" /><br />
    </div>
  </section>
</template>
