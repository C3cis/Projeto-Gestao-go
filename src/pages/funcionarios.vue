<script setup>
import { computed} from 'vue'
import { useI18n } from 'vue-i18n'
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const {t} = useI18n()


 const meusCards = computed(() =>[
    { titulo: t('funcionarios.cards.totais'), valor: '3', icone: 'line-md:account' },
    { titulo: t('funcionarios.cards.ativos'), valor: '4',icone:'line-md:account-add'},
    { titulo: t('funcionarios.cards.afastados'), valor: '2', icone: 'line-md:account-alert' },
    { titulo: t('funcionarios.cards.inativos'), valor: '2', icone: 'line-md:account-delete' },
  ])

  const Funcionarios = [
    { id: '001', funcionario: 'Rosa mosqueta', contato:'(11)1234567',  setor: 'Webzinho', status: 'Negativado' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
  ]

  const BotoesBusca = computed(() =>[
    {texto: t('funcionarios.botoes.busca'), tamanho: "pequeno", cor: "rosaClaro"},
  {texto: t('funcionarios.botoes.todos'), tamanho: "pequeno", cor: "rosao"},
  {texto: t('funcionarios.botoes.ativos'), tamanho: "pequeno", cor: "rosinha"},
  {texto: t('funcionarios.botoes.afastados'), tamanho: "pequeno", cor: "rosinha"},
  {texto: t('funcionarios.botoes.inativo'), tamanho: "pequeno", cor: "rosinha"},
])
</script>

<template>
 <section class="mb-9">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl 
     bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-3">{{ $t('funcionarios.titulo') }}</h1>
      <Botoes class="text-xs mb-4" tipo="medio" :texto="$t('funcionarios.botoes.adicionar')" cor="rosao" />
      </div>
      <p class="text-gray-600 mb-8">{{ $t('funcionarios.sub_titulo') }}</p>
        
    
   
  </section>
  <section class="grid grid-cols-1 gap-4 text-justify mb-5 px-20 text-sm
   sm:grid-cols-2 sm:px-10 sm:gap-6
   lg:grid-cols-4 lg:text-lg lg:px-4 
   xl:text-xl">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="flex flex-wrap p-2 mb-6 gap-2">
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />
  </section>

  <section>   
    <div>
      <Tabelas
        :colunas="[
          { titulo:  $t('funcionarios.tabela.id'), chave: 'id' },
          { titulo: $t('funcionarios.tabela.funcionario'), chave: 'funcionario' },
          { titulo: $t('funcionarios.tabela.setor'), chave: 'setor' },
          { titulo: $t('funcionarios.tabela.contato'), chave: 'contato' },
          { titulo: $t('funcionarios.tabela.status'), chave: 'status'}
        ]"
        :dados="Funcionarios" /><br/>
    </div>
  </section>
</template>
