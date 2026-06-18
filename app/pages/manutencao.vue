<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  const meusCards = computed(() => [
    { titulo: t('cards.agendadas'), valor: '3', icone: 'line-md:calendar' },
    { titulo: t('cards.em_andamento'), valor: '4', icone: 'line-md:construction' },
    {
      titulo: t('cards.concluidas'),
      valor: '2',
      icone: 'line-md:confirm-square-twotone',
    },
    { titulo: t('cards.urgentes'), valor: '2', icone: 'line-md:hazard-lights-loop' },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.agendadas'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.concluidas'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.urgentes'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.cancelados'), tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const Manutencoes = [
    {
      icone: 'line-md:calendar',
      titulo: 'Manutenção do Servidor',
      status: 'Concluída',
      conteudo: 'Substituição de peças e atualização de software',
      dataAberto: '01/05/2024',
      dataFechado: '05/05/2024',
      valor: 'R$ 500,00',
    },
    {
      icone: 'line-md:construction',
      titulo: 'Manutenção da Impressoras',
      status: 'Agendada',
      conteudo: 'Limpeza e calibração das cabeças de impressão',
      dataAberto: '10/06/2024',
      dataFechado: '15/06/2024',
      valor: 'R$ 300,00',
    },
    {
      icone: 'line-md:hazard-lights-loop',
      titulo: 'Manutenção do Ar Condicionado',
      status: 'Urgente',
      conteudo: 'Reparo do sistema de refrigeração e troca de filtros',
      dataAberto: '20/06/2024',
      dataFechado: '',
      valor: 'R$ 800,00',
    },
    {
      icone: 'line-md:menu-to-close-alt-transition',
      titulo: 'Manutenção do Sistema de Segurança',
      status: 'Cancelada',
      conteudo: 'Atualização do software e verificação dos sensores',
      dataAberto: '15/06/2024',
      dataFechado: '15/09/2026',
      valor: 'R$ 600,00',
    },
  ]
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
    <div
      class="mb-5 grid grid-cols-1 gap-4 px-2 text-justify text-sm sm:gap-4 sm:px-4 lg:grid-cols-2 lg:px-20 xl:text-xl">
      <CardHist
        v-for="card in Manutencoes"
        :titulo="card.titulo"
        :valor="card.valor"
        :icone="card.icone"
        :status="card.status"
        :conteudo="card.conteudo"
        :dataAberto="card.dataAberto"
        :dataFechado="card.dataFechado" />
    </div>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "titulo": "Manutenções",
    "sub_titulo": "Registro de Manutenções",
    "cards": {
      "agendadas": "Agendadas",
      "em_andamento": "Em andamento",
      "concluidas": "Concluídas",
      "urgentes": "Urgentes"
    },
    "botoes": {
      "adicionar": "+ Nova Manutenção",
      "busca": "Busca",
      "todos": "Todos",
      "agendadas": "Agendadas",
      "concluidas": "Concluídas",
      "urgentes": "Urgentes",
      "cancelados": "Cancelados"
    }
  },
  "en": {
    "titulo": "Maintenance",
    "sub_titulo": "Maintenance Log",
    "cards": {
      "agendadas": "Scheduled",
      "em_andamento": "In Progress",
      "concluidas": "Completed",
      "urgentes": "Urgent"
    },
    "botoes": {
      "adicionar": "+ New Maintenance",
      "busca": "Search",
      "todos": "All",
      "agendadas": "Scheduled",
      "concluidas": "Completed",
      "urgentes": "Urgent",
      "cancelados": "Cancelled"
    }
  }
}
</i18n>
