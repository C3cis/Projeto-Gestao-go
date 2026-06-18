<script setup>
import { h } from 'vue';
import { computed} from 'vue'
import { useI18n } from 'vue-i18n'
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const {t} = useI18n()


 const meusCards = computed(() =>[
    { titulo: t('equipamentos.cards.totais'), valor: '3', icone: 'ph:toolbox' },
    { titulo: t('equipamentos.cards.operacionais'), valor: '4',icone:'line-md:fork-right'},
    { titulo: t('equipamentos.cards.em_manutencao'), valor: '2', icone: 'line-md:construction-twotone'},
    { titulo: t('equipamentos.cards.inativos'), valor: '2', icone: 'line-md:menu-to-close-alt-transition' }
  ])

  const Equipamentos = [
    { id: '001', nome: 'Notebook Dell', modelo: 'Computador', status: 'Ativo', localizacao: 'Setor de TI' },
    { id: '002', nome: 'Impressora HP', modelo: 'Imprimidora', status: 'Em Manutenção', localizacao: 'Setor de TI' },
    { id: '003', nome: 'Monitor Samsung', modelo: 'Monitor', status: 'Inativo', localizacao: 'Setor de TI' },
  ]

  const BotoesBusca = computed(() =>[
  {texto: t('equipamentos.botoes.busca'), tamanho: "pequeno", cor: "rosaClaro"},
  {texto: t('equipamentos.botoes.todos'), tamanho: "pequeno", cor: "rosao"},
  {texto: t('equipamentos.botoes.ativos'), tamanho: "pequeno", cor: "rosinha"},
  {texto: t('equipamentos.botoes.em_manutencao'), tamanho: "pequeno", cor: "rosinha"},])
</script>

<template>
 <section class="mb-9">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5 ">{{ $t('equipamentos.titulo') }}</h1>
         <Botoes class="text-xs mb-4" tipo="medio" :texto="$t('equipamentos.botoes.adicionar')" cor="rosao" />
    </div>
    <p class="text-gray-600 text-xl">{{ $t('equipamentos.sub_titulo') }}</p>
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
          { titulo: $t('equipamentos.tabela.id'), chave: 'id' },
          { titulo: $t('equipamentos.tabela.equipamento'), chave: 'nome' },
          { titulo: $t('equipamentos.tabela.modelo'), chave: 'tipo' },
          { titulo: $t('equipamentos.tabela.localizacao'), chave: 'localizacao'},
          { titulo: $t('equipamentos.tabela.status'), chave: 'status'}

        ]"
        :dados="Equipamentos" /><br/>
        </div> 
  </section>
</template>
