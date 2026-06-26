<script setup lang="ts">
import Equipamentos from '~/data/equipamentos.json'

  const { t } = useI18n({ useScope: 'local' })

  const meusCards = computed(() => [
    { titulo: t('cards.totais'), valor: '3', icone: 'ph:toolbox' },
    { titulo: t('cards.operacionais'), valor: '4', icone: 'line-md:fork-right' },
    {
      titulo: t('cards.em_manutencao'),
      valor: '2',
      icone: 'line-md:construction-twotone',
    },
    {
      titulo: t('cards.inativos'),
      valor: '2',
      icone: 'line-md:menu-to-close-alt-transition',
    },
  ])
  
  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), valor:'busca', tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), valor:'todos', tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.ativos'), valor:'Ativos',tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.em_manutencao'), valor:'Em Manutenção', tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const filtroStatus = ref('todos')
  const equipamentosFiltrados = computed(() => {
    if (filtroStatus.value == 'todos')
      return Equipamentos
    return Equipamentos.filter((e) => e.status == filtroStatus.value)
  })
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
    <p class="text-white">filtro atual: {{ filtroStatus }}</p>
    <Botoes
      v-for="botoes in BotoesBusca"
      :key="botoes.valor"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor" 
      @click="filtroStatus = botoes.valor"/>
  </section>
  <section>
    <div>
      <Tabelas
        :colunas="[
          { titulo: t('tabela.id'), chave: 'id' },
          { titulo: t('tabela.equipamento'), chave: 'nome' },
          { titulo: t('tabela.modelo'), chave: 'modelo' },
          { titulo: t('tabela.localizacao'), chave: 'localizacao' },
          { titulo: t('tabela.status'), chave: 'status' },
        ]"
        :dados="equipamentosFiltrados" /><br />
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
      "modelo": "Modelo",
      "localizacao": "Localização",
      "status": "Status"
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
      "modelo": "Model",
      "localizacao": "Location",
      "status": "Status"
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
