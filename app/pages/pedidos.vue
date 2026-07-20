<script setup lang="ts">
  import type { Campo } from '~/types/formulario'
  import type { Pedido } from '~/types/pedidos'

  const { t } = useI18n({ useScope: 'local' })

  const {
    pedidos,
    buscarPedidos,
    adicionarPedido,
    deletarPedido,
    totalPedidos,
    pedidosUrgentes,
    pedidosCancelados,
    pedidosConcluidos,
    pedidosEmTriagem,
    pedidosPendentes,
    error,
    carregando,
    filtroStatus,
    pedidosFiltrados,
  } = usePedidos()

  // técnicos = funcionários; carregados pra popular o select do formulário
  const { funcionarios, buscarFuncionarios } = useFuncionarios()

  onMounted(async () => {
    await buscarPedidos()
    await buscarFuncionarios()
  })

  const meusCards = computed(() => [
    {
      titulo: t('cards.pendentes'),
      valor: pedidosPendentes.value,
      icone: 'line-md:document-report',
    },
    { titulo: t('cards.aprovados'), valor: pedidosConcluidos.value, icone: 'line-md:email-check' },
    {
      titulo: t('cards.em_analise'),
      valor: pedidosEmTriagem.value,
      icone: 'line-md:downloading-loop',
    },
    {
      titulo: t('cards.total'),
      valor: totalPedidos.value,
      icone: 'line-md:folder-settings-filled',
    },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), valor: 'busca', tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), valor: 'todos', tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.urgencia'), valor: 'Urgencia', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.concluidos'), valor: 'Concluido', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.cancelados'), valor: 'Cancelado', tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const camposPedido = computed<Campo[]>(() => [
    {
      chave: 'tecnicoId',
      label: 'Técnico',
      tipo: 'select',
      opcoes: funcionarios.value.map((f) => ({ label: f.nome, valor: f.id })),
    },
    { chave: 'descricao', label: 'Descrição', tipo: 'text' },
    {
      chave: 'statusPedido',
      label: 'Status',
      tipo: 'select',
      opcoes: ['Pendente', 'Em Triagem', 'Concluido', 'Cancelado'],
    },
    {
      chave: 'statusSensorPedido',
      label: 'Status de Urgência',
      tipo: 'select',
      opcoes: ['Urgencia', 'Alerta', 'Normal'],
    },
    { chave: 'dataCriacao', label: 'Data de Criação', tipo: 'date' },
    { chave: 'prazo', label: 'Prazo', tipo: 'date' },
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
    </div>
    <FormularioBase
      v-if="modalAberto"
      titulo="Cadastro de Pedido"
      :campos="camposPedido"
      @salvar="(dados) => adicionarPedido(dados as Omit<Pedido, 'id'>)"
      @fechar="modalAberto = false" />

    <p class="text-xl text-gray-600">{{ t('sub_titulo') }}</p>
  </section>
  <section
    class="mb-5 grid grid-cols-1 gap-4 px-20 text-left text-sm sm:grid-cols-2 sm:gap-6 sm:px-10 lg:grid-cols-4 lg:px-4 lg:text-lg xl:text-xl">
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
  <section>
    <div
      class="mb-5 grid grid-cols-1 gap-4 px-2 text-left text-sm sm:gap-4 sm:px-4 lg:grid-cols-2 lg:px-20 xl:text-2xl">
      <CardPedidos
        v-for="pedido in pedidosFiltrados"
        :key="pedido.id"
        :pedido="pedido"
        :icone="'line-md:document-report'" />
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
      "concluidos": "Concluídos",
      "cancelados": "Cancelados",
      "urgencia": "Urgência"
    }
  },
  "en": {
    "titulo": "Orders",
    "sub_titulo": "Manage orders placed by your customers",
    "cards": {
      "pendentes": "Pending",
      "concluidos": "Completed",
      "cancelados": "Cancelled",
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
      "concluidos": "Completed",
      "cancelados": "Cancelled",
      "urgencia": "Urgency"
    }
  }
}
</i18n>
