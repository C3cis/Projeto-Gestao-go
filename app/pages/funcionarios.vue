<script setup lang="ts">
import Funcionarios from '~/data/funcionarios.json'

  const { t } = useI18n({ useScope: 'local' })

  const meusCards = computed(() => [
    { titulo: t('cards.totais'), valor: '3', icone: 'line-md:account' },
    { titulo: t('cards.ativos'), valor: '4', icone: 'line-md:account-add' },
    { titulo: t('cards.afastados'), valor: '2', icone: 'line-md:account-alert' },
    { titulo: t('cards.inativos'), valor: '2', icone: 'line-md:account-delete' },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.ativos'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.afastados'), tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.inativo'), tamanho: 'pequeno', cor: 'rosinha' },
  ])
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-3 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('titulo') }}
      </h1>
      <Botoes class="mb-4 text-xs" tipo="medio" :texto="t('botoes.adicionar')" cor="rosao" />
    </div>
    <p class="mb-8 text-gray-600">{{ t('sub_titulo') }}</p>
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
          { titulo: t('tabela.funcionario'), chave: 'funcionario' },
          { titulo: t('tabela.setor'), chave: 'setor' },
          { titulo: t('tabela.contato'), chave: 'contato' },
          { titulo: t('tabela.status'), chave: 'status' },
        ]"
        :dados="Funcionarios" /><br />
    </div>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "titulo": "Funcionários",
    "sub_titulo": "Colaboradores Cadastrados",
    "cards": {
      "totais": "Totais",
      "ativos": "Ativos",
      "afastados": "Afastados",
      "inativos": "Inativos"
    },
    "tabela": {
      "id": "ID",
      "funcionario": "Funcionario",
      "setor": "Setor",
      "contato": "Contato",
      "status": "Status"
    },
    "botoes": {
      "adicionar": "+ Novo Funcionario",
      "busca": "Busca",
      "todos": "Todos",
      "ativos": "Ativos",
      "afastados": "Afastados",
      "inativo": "Inativos"
    }
  },
  "en": {
    "titulo": "Employees",
    "sub_titulo": "Registered Staff",
    "cards": {
      "totais": "Total",
      "ativos": "Active",
      "afastados": "On Leave",
      "inativos": "Inactive"
    },
    "tabela": {
      "id": "ID",
      "funcionario": "Employee",
      "setor": "Department",
      "contato": "Contact",
      "status": "Status"
    },
    "botoes": {
      "adicionar": "+ New Employee",
      "busca": "Search",
      "todos": "All",
      "ativos": "Active",
      "afastados": "On Leave",
      "inativo": "Inactive"
    }
  }
}
</i18n>
