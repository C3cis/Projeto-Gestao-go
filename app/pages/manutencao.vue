<script setup lang="ts">
  import { useManutencao } from '~/composables/useManutencao'
  import type { Campo } from '~/types/formulario'
  import type { Manutencao } from '~/types/manutencao'

  const { t } = useI18n({ useScope: 'local' })

  const {
    manutencao,
    buscarManutencao,
    adicionarManutencao,
    deletarManutencao,
    totalManutencao,
    manutencaoAgendadas,
    manutencaoConcluidos,
    manutencaoCancelados,
    manutencaoUrgentes,
    manutencaoEmAndamento,
    filtroStatus,
    manutencaoFiltrados,
    error,
    carregando,
  } = useManutencao()

  const { equipamentos, buscarEquipamentos } = useEquipamentos()

  onMounted(async () => {
    await buscarManutencao()
    await buscarEquipamentos()
  })

  const meusCards = computed(() => [
    { titulo: t('cards.agendadas'), valor: manutencaoAgendadas.value, icone: 'line-md:calendar' },
    {
      titulo: t('cards.em_andamento'),
      valor: manutencaoEmAndamento.value,
      icone: 'line-md:construction',
    },
    {
      titulo: t('cards.concluidas'),
      valor: manutencaoConcluidos.value,
      icone: 'line-md:confirm-square-twotone',
    },
    {
      titulo: t('cards.urgentes'),
      valor: manutencaoUrgentes.value,
      icone: 'line-md:hazard-lights-loop',
    },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), valor: 'buscar', tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), valor: 'todos', tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.agendadas'), valor: 'Agendadas', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.concluidas'), valor: 'Concluidas', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.urgentes'), valor: 'Urgentes', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.cancelados'), valor: 'Canceladas', tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const camposManutencao = computed<Campo[]>(() => [
    {
      chave: 'equipamentoId',
      label: 'Equipamento',
      tipo: 'select',
      opcoes: equipamentos.value.map((e) => ({ label: e.nome, valor: e.id })),
    },
    { chave: 'tipoManu', label: 'Tipo de Manutenção', tipo: 'text' },
    { chave: 'descricao', label: 'Descrição', tipo: 'text' },
    { chave: 'dataAbertura', label: 'Data de Abertura', tipo: 'date' },
    { chave: 'dataFechamento', label: 'Data de Fechamento', tipo: 'date' },
    { chave: 'valor', label: 'Valor', tipo: 'number' },
    {
      chave: 'status',
      label: 'Status',
      tipo: 'select',
      opcoes: ['Agendadas', 'Concluidas', 'Canceladas', 'Urgentes', 'Em Andamento'],
    },
  ])

  const modalAberto = ref(false)
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('titulo') }}
      </h1>

      <Botoes
        class="mb-4 text-xs"
        tipo="medio"
        :texto="t('botoes.adicionar')"
        cor="rosao"
        @click="modalAberto = !modalAberto" />
      <FormularioBase
        v-if="modalAberto"
        titulo="Cadastro de Manutenção"
        :campos="camposManutencao"
        @salvar="(dados) => adicionarManutencao(dados as Omit<Manutencao, 'id'>)"
        @fechar="modalAberto = false" />
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
      :key="botoes.valor"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
      @click="filtroStatus = botoes.valor" />
  </section>
  <section v-if="carregando">Carregando...</section>
  <section v-else-if="error">Erro ao carregar</section>
  <section v-else>
    <div
      class="mb-5 grid grid-cols-1 gap-4 px-2 text-justify text-sm sm:gap-4 sm:px-4 lg:grid-cols-2 lg:px-20 xl:text-xl">
      <CardManu
        v-for="manutencao in manutencaoFiltrados"
        :key="manutencao.id"
        :manutencao="manutencao"
        :icone="'line-md:construction'" />
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
