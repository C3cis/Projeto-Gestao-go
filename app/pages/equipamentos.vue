<script setup lang="ts">
  const { t } = useI18n()

  const meusCards = computed(() => [
    { titulo: t('equipamentos.cards.totais'), valor: '3', icone: 'ph:toolbox' },
    { titulo: t('equipamentos.cards.operacionais'), valor: '4', icone: 'line-md:fork-right' },
    {
      titulo: t('equipamentos.cards.em_manutencao'),
      valor: '2',
      icone: 'line-md:construction-twotone',
    },
    {
      titulo: t('equipamentos.cards.inativos'),
      valor: '2',
      icone: 'line-md:menu-to-close-alt-transition',
    },
  ])

  const Equipamentos = [
    {
      id: '001',
      nome: 'Notebook Dell',
      modelo: 'Computador',
      status: 'Ativo',
      localizacao: 'Setor de TI',
    },
    {
      id: '002',
      nome: 'Impressora HP',
      modelo: 'Imprimidora',
      status: 'Em Manutenção',
      localizacao: 'Setor de TI',
    },
    {
      id: '003',
      nome: 'Monitor Samsung',
      modelo: 'Monitor',
      status: 'Inativo',
      localizacao: 'Setor de TI',
    },
  ]

  const BotoesBusca = computed(() => [
    { texto: t('equipamentos.botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('equipamentos.botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('equipamentos.botoes.ativos'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('equipamentos.botoes.em_manutencao'), tamanho: 'pequeno', cor: 'rosinha' },
  ])
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('equipamentos.titulo') }}
      </h1>
      <Botoes
        class="mb-4 text-xs"
        tipo="medio"
        :texto="t('equipamentos.botoes.adicionar')"
        cor="rosao" />
    </div>
    <p class="text-xl text-gray-600">{{ t('equipamentos.sub_titulo') }}</p>
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
          { titulo: t('equipamentos.tabela.id'), chave: 'id' },
          { titulo: t('equipamentos.tabela.equipamento'), chave: 'nome' },
          { titulo: t('equipamentos.tabela.modelo'), chave: 'tipo' },
          { titulo: t('equipamentos.tabela.localizacao'), chave: 'localizacao' },
          { titulo: t('equipamentos.tabela.status'), chave: 'status' },
        ]"
        :dados="Equipamentos" /><br />
    </div>
  </section>
</template>
