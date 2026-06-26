<script setup lang="ts">

import Pedidos from '~/data/pedidos.json'

  const { t } = useI18n({ useScope: 'local' })

  const meusCards = computed(() => [
    { titulo: t('cards.pendentes'), valor: '3', icone: 'line-md:document-report' },
    { titulo: t('cards.aprovados'), valor: '4', icone: 'line-md:email-check' },
    { titulo: t('cards.em_analise'), valor: '2', icone: 'line-md:downloading-loop' },
    { titulo: t('cards.total'), valor: '2', icone: 'line-md:folder-settings-filled' },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.pendentes'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.aprovados'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.cancelados'), tamanho: 'pequeno', cor: 'rosinha' },
  ])
</script>
<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('titulo') }}
      </h1>
      <Botoes class="mb-4 text-xs" tipo="medio" :texto="t('botoes.adicionar')" cor="rosao" />
    </div>
    <p class="text-xl text-gray-600">{{ t('sub_titulo') }}</p>
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
          { titulo: t('tabela.id'), chave: 'id' },
          { titulo: t('tabela.tecnico'), chave: 'cliente' },
          { titulo: t('tabela.pedido'), chave: 'produto' },
          { titulo: t('tabela.status'), chave: 'status' },
        ]"
        :dados="Pedidos" /><br />
    </div>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "titulo": "Pedidos",
    "sub_titulo": "Gerencie os pedidos realizados por seus clientes",
    "cards": {
      "pendentes": "Pendentes",
      "aprovados": "Aprovados",
      "em_analise": "Em análise",
      "total": "Total"
    },
    "tabela": {
      "id": "ID",
      "tecnico": "Tecnico",
      "pedido": "Pedido",
      "status": "Status"
    },
    "botoes": {
      "adicionar": "+ Novo Pedido",
      "busca": "Busca",
      "todos": "Todos",
      "pendentes": "Pendentes",
      "aprovados": "Aprovados",
      "cancelados": "Cancelados"
    }
  },
  "en": {
    "titulo": "Orders",
    "sub_titulo": "Manage orders placed by your customers",
    "cards": {
      "pendentes": "Pending",
      "aprovados": "Approved",
      "em_analise": "Under Review",
      "total": "Total"
    },
    "tabela": {
      "id": "ID",
      "tecnico": "Technician",
      "pedido": "Order",
      "status": "Status"
    },
    "botoes": {
      "adicionar": "+ New Order",
      "busca": "Search",
      "todos": "All",
      "pendentes": "Pending",
      "aprovados": "Approved",
      "cancelados": "Cancelled"
    }
  }
}
</i18n>
