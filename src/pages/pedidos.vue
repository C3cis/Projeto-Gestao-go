<script setup>
import { computed} from 'vue'
import { useI18n } from 'vue-i18n'
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

const {t} = useI18n() 

 const meusCards = computed(() =>[
    { titulo: t('pedidos.cards.pendentes'), valor: '3', icone: 'line-md:document-report' },
    { titulo: t('pedidos.cards.aprovados'), valor: '4',icone:'line-md:email-check'},
    { titulo: t('pedidos.cards.em_analise'), valor: '2', icone: 'line-md:downloading-loop' },
    { titulo: t('pedidos.cards.total'), valor: '2', icone: 'line-md:folder-settings-filled' },
  ])

  const Pedidos = [
    { id: '001', cliente: 'João Silva', produto: 'Microscópio Zeiss', status: 'Em Processamento' },
    { id: '002', cliente: 'Maria Oliveira', produto: 'Centrífuga Digital', status: 'Enviado' },
    { id: '003', cliente: 'Carlos Santos', produto: 'Espectrofotômetro', status: 'Entregue' },
  ]
const BotoesBusca = computed(() =>[
    {texto: t('pedidos.botoes.busca'), tamanho: "pequeno", cor: "rosaClaro"},
  {texto: t('pedidos.botoes.todos'), tamanho: "pequeno", cor: "rosao"},
  {texto: t('pedidos.botoes.pendentes'), tamanho: "pequeno", cor: "rosinha"},
  {texto: t('pedidos.botoes.aprovados'), tamanho: "pequeno", cor: "rosinha"},
  {texto: t('pedidos.botoes.cancelados'), tamanho: "pequeno", cor: "rosinha"},
])
  
</script>
<template>
  <section class="mb-9">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold">{{ $t('pedidos.titulo') }}</h1>
         <Botoes class="text-xs mb-4" tipo="medio" :texto="$t('pedidos.botoes.adicionar')" cor="rosao" />
    </div>
    <p class="text-gray-600 text-xl">{{ $t('pedidos.sub_titulo') }}</p>
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
          { titulo: $t('pedidos.tabela.id'), chave: 'id' },
          { titulo: $t('pedidos.tabela.tecnico'), chave: 'cliente' },
          { titulo: $t('pedidos.tabela.pedido'), chave: 'produto' },
          { titulo: $t('pedidos.tabela.status'), chave: 'status' },
        ]"
        :dados="Pedidos" /><br/>
     </div>
    </section>
</template>
