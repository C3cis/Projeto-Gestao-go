<script setup lang="ts">
  const { t } = useI18n()

  const meusCards = computed(() => [
    { titulo: t('funcionarios.cards.totais'), valor: '3', icone: 'line-md:account' },
    { titulo: t('funcionarios.cards.ativos'), valor: '4', icone: 'line-md:account-add' },
    { titulo: t('funcionarios.cards.afastados'), valor: '2', icone: 'line-md:account-alert' },
    { titulo: t('funcionarios.cards.inativos'), valor: '2', icone: 'line-md:account-delete' },
  ])

  const Funcionarios = [
    {
      id: '001',
      funcionario: 'Rosa mosqueta',
      contato: '(11)1234567',
      setor: 'Webzinho',
      status: 'Negativado',
    },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
  ]

  const BotoesBusca = computed(() => [
    { texto: t('funcionarios.botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('funcionarios.botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('funcionarios.botoes.ativos'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('funcionarios.botoes.afastados'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('funcionarios.botoes.inativo'), tamanho: 'pequeno', cor: 'rosinha' },
  ])
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-3 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('funcionarios.titulo') }}
      </h1>
      <Botoes
        class="mb-4 text-xs"
        tipo="medio"
        :texto="t('funcionarios.botoes.adicionar')"
        cor="rosao" />
    </div>
    <p class="mb-8 text-gray-600">{{ t('funcionarios.sub_titulo') }}</p>
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
          { titulo: t('funcionarios.tabela.id'), chave: 'id' },
          { titulo: t('funcionarios.tabela.funcionario'), chave: 'funcionario' },
          { titulo: t('funcionarios.tabela.setor'), chave: 'setor' },
          { titulo: t('funcionarios.tabela.contato'), chave: 'contato' },
          { titulo: t('funcionarios.tabela.status'), chave: 'status' },
        ]"
        :dados="Funcionarios" /><br />
    </div>
  </section>
</template>
