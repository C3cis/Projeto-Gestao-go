<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  type Campo = unknown

  type StatusEquipamento = 'Ativo' | 'Inativo' | 'Manutencao'

  const { data } = useApi<
    {
      id: number
      nome: string
      descricao: string
      status: StatusEquipamento
      localizacao: string
      dataAquisicao: string
    }[]
  >('/equipamentos/listar')

  const meusCards = computed(() => [
    { titulo: t('cards.totais'), valor: 1, icone: 'ph:toolbox' },
    {
      titulo: t('cards.operacionais'),
      valor: 2,
      icone: 'line-md:fork-right',
    },
    {
      titulo: t('cards.em_manutencao'),
      valor: 3,
      icone: 'line-md:construction-twotone',
    },
    {
      titulo: t('cards.inativos'),
      valor: 4,
      icone: 'line-md:menu-to-close-alt-transition',
    },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), valor: 'busca', tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), valor: 'todos', tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.ativos'), valor: 'Ativo', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.em_manutencao'), valor: 'Manutencao', tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const camposEquipamento: Campo[] = [
    { chave: 'nome', label: 'Nome', tipo: 'text' },
    { chave: 'descricao', label: 'Descrição', tipo: 'text' },
    { chave: 'localizacao', label: 'Localização', tipo: 'text' },
    {
      chave: 'status',
      label: 'Status',
      tipo: 'select',
      opcoes: ['Ativo', 'Manutencao', 'Inativo'],
    },
    { chave: 'dataAquisicao', label: 'Data de Aquisição', tipo: 'date' },
  ]
  const modalAberto = ref(false)
</script>

<template>
  <section class="mb-9">
    {{ data }}
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
        titulo="Cadastro de Equipamento"
        :campos="camposEquipamento"
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
      :cor="botoes.cor" />
  </section>
  <section>
    <div>
      <Tabelas
        :colunas="[
          { titulo: t('tabela.id'), chave: 'id' },
          { titulo: t('tabela.equipamento'), chave: 'nome' },
          { titulo: t('tabela.descricao'), chave: 'descricao' },
          { titulo: t('tabela.localizacao'), chave: 'localizacao' },
          {
            titulo: t('tabela.status'),
            chave: 'status',
            classe: (valor: unknown) => equipamentoStyles[valor as keyof typeof equipamentoStyles],
          },
          {
            titulo: t('tabela.dataAquisicao'),
            chave: 'dataAquisicao',
            formato: (valor: unknown) => formatarData(valor as string),
          },
        ]"
        :dados="data || []" />
    </div>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "titulo": "Equipamentos",
    "sub_titulo": "Equipamentos Cadastrado",
    "cards": {
      "totais": "Totais",
      "operacionais": "Operacionais",
      "em_manutencao": "Em Manutenção",
      "inativos": "Inativos"
    },
    "tabela": {
      "id": "ID",
      "equipamento": "Nome",
      "descricao": "Descrição",
      "localizacao": "Localização",
      "status": "Status",
      "dataAquisicao": "Data de Aquisição"
    },
    "botoes": {
      "adicionar": "+ Novo Equipamento",
      "busca": "Busca",
      "todos": "Todos",
      "ativos": "Ativos",
      "em_manutencao": "Em manutenção"
    }
  },
  "en": {
    "titulo": "Equipment",
    "sub_titulo": "Registered Equipment",
    "cards": {
      "totais": "Total",
      "operacionais": "Operational",
      "em_manutencao": "Under Maintenance",
      "inativos": "Inactive"
    },
    "tabela": {
      "id": "ID",
      "equipamento": "Name",
      "descricao": "Description",
      "localizacao": "Location",
      "status": "Status",
      "dataAquisicao": "Acquisition Date"
    },
    "botoes": {
      "adicionar": "+ New Equipment",
      "busca": "Search",
      "todos": "All",
      "ativos": "Active",
      "em_manutencao": "Under Maintenance"
    }
  }
}
</i18n>
