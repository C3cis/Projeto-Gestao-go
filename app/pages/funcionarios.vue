<script setup lang="ts">
import type { Campo } from '~/types/formulario'
import type { Funcionario } from '~/types/funcionarios'


  const { t } = useI18n({ useScope: 'local' })

  const { funcionarios, buscarFuncionarios, adicionarFuncionario, deletarFuncionario, totalFuncionarios, funcionariosAtivos, funcionariosSuspensos, funcionariosInativos, error, carregando, filtroStatus, funcionariosFiltrados} = useFuncionarios()

  onMounted(async () => {
    await buscarFuncionarios()
  })

  const meusCards = computed(() => [
    { titulo: t('cards.totais'), valor: totalFuncionarios.value, icone: 'line-md:account' },
    { titulo: t('cards.ativos'), valor: funcionariosAtivos.value, icone: 'line-md:account-add' },
    { titulo: t('cards.suspensos'), valor: funcionariosSuspensos.value, icone: 'line-md:account-alert' },
    { titulo: t('cards.inativos'), valor: funcionariosInativos.value, icone: 'line-md:account-delete' },
  ])

  const BotoesBusca = computed(() => [
    { texto: t('botoes.busca'), valor: 'busca', tamanho: 'pequeno', cor: 'rosaClaro' },
    { texto: t('botoes.todos'), valor: 'todos', tamanho: 'pequeno', cor: 'rosao' },
    { texto: t('botoes.ativos'), valor: 'Ativo', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.suspensos'), valor: 'Suspenso', tamanho: 'pequeno', cor: 'rosinha' },
    { texto: t('botoes.inativo'), valor: 'Inativo', tamanho: 'pequeno', cor: 'rosinha' },
  ])

  const camposFuncionario: Campo[] = [
    { chave: 'nome', label: 'Nome', tipo: 'text'},
    { chave: 'email', label: 'Email', tipo: 'text'},
    { chave: 'telefone', label: 'Contato', tipo: 'text'},
    { chave: 'cargo', label: 'Cargo', tipo: 'select', opcoes: ['Administrador', 'Técnico de Desenvolvimento', 'Coordenador', 'Gerente', 'Estagiario', 'Suporte']},
    { chave: 'status', label: 'Status', tipo: 'select', opcoes: ['Ativo', 'Suspenso', 'Inativo', 'Nas Ferias']}
  ]
  
  const modalAberto = ref(false)
</script>

<template>
  <section class="mb-9">
    <div class="mb-2 flex flex-wrap items-center justify-between">
      <h1
        class="mb-3 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
        {{ t('titulo') }}
      </h1>
      <Botoes class="mb-4 text-xs" tipo="medio" :texto="t('botoes.adicionar')" cor="rosao" @click="modalAberto = !modalAberto"/>

      <FormularioBase v-if="modalAberto" titulo="Cadastro de Funcionário" :campos="camposFuncionario"
      @salvar="(dados) => adicionarFuncionario(dados as Omit<Funcionario, 'id'>)"
      @fechar="modalAberto = false" />


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
      :key="botoes.valor"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor" 
      @click="filtroStatus = botoes.valor"/>
  </section>

 <section v-if="carregando">Carregando...</section>
<section v-else-if="error">Erro ao carregar</section>
  <section v-else>
    <div>
      <Tabelas
        :colunas="[
          { titulo: t('tabela.id'), chave: 'id' },
          { titulo: t('tabela.funcionario'), chave: 'nome' },
          { titulo: t('tabela.email'), chave: 'email' },
          { titulo: t('tabela.telefone'), chave: 'telefone' },
          { titulo: t('tabela.cargo'), chave: 'cargo' },
          { titulo: t('tabela.status'), chave: 'status' }
        ]"
        :dados="funcionariosFiltrados" /><br />
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
      "suspensos": "Suspensos",
      "inativos": "Inativos"
    },
    "tabela": {
      "id": "ID",
      "funcionario": "Funcionario",
      "email": "Email",
      "telefone": "Telefone",
      "cargo": "Cargo",
      "status": "Status"
    },
    "botoes": {
      "adicionar": "+ Novo Funcionario",
      "busca": "Busca",
      "todos": "Todos",
      "ativos": "Ativo",
      "suspensos": "Suspenso",
      "inativo": "Inativo"
    }
  },
  "en": {
    "titulo": "Employees",
    "sub_titulo": "Registered Staff",
    "cards": {
      "totais": "Total",
      "ativos": "Active",
      "suspensos": "Suspended",
      "inativos": "Inactive"
    },
    "tabela": {
      "id": "ID",
      "funcionario": "Employee",
      "cargo": "Position",
      "email": "Email",
      "telefone": "Phone",
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
