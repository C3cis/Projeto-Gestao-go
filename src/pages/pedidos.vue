<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const meusCards = [
    { titulo: 'Pendentes', valor: '3', icone: 'line-md:document-report' },
    { titulo: 'Aprovados', valor: '4',icone:'line-md:email-check'},
    { titulo: 'Em Analise', valor: '2', icone: 'line-md:downloading-loop' },
    { titulo: 'Total', valor: '2', icone: 'line-md:folder-settings-filled' },
  ]

  const Pedidos = [
    { id: '001', cliente: 'João Silva', produto: 'Microscópio Zeiss', status: 'Em Processamento' },
    { id: '002', cliente: 'Maria Oliveira', produto: 'Centrífuga Digital', status: 'Enviado' },
    { id: '003', cliente: 'Carlos Santos', produto: 'Espectrofotômetro', status: 'Entregue' },
  ]
const BotoesBusca = [
    {texto: "Buscar", tamanho: "pequeno", cor: "rosaClaro"},
  {texto: "Todos", tamanho: "pequeno", cor: "rosao"},
  {texto: "Pendentes", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Aprovado", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Cancelado", tamanho: "pequeno", cor: "rosinha"},
]
  
</script>
<template>
  <section class="mb-9 f">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl mb-1.5 mt-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold">Pedidos</h1>
         <Botoes class="text-xs mb-4" tipo="medio" texto="+ Novo Pedido" cor="rosao" />
    </div>
    <p class="text-gray-600 text-[0.9rem]">Gerencie os pedidos realizados por seus clientes</p>
  </section>
  <section class="grid grid-cols-2 gap-5 text-justify mb-9
   sm:grid-cols-2 sm:gap-3 
   md:grid-cols-2 md:text-base
   lg:grid-cols-4 lg:text-lg
   xl:grid-cols-5 xl: text-xl">
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
          { titulo: 'ID do Pedido', chave: 'id' },
          { titulo: 'Cliente', chave: 'cliente' },
          { titulo: 'Produto', chave: 'produto' },
          { titulo: 'Status', chave: 'status' },
        ]"
        :dados="Pedidos" /><br/>
     </div>
    </section>
</template>
v-for="botoes in BotoesBusca"
    :key="botoes.button"
    :tipo="botoes.tipo"
    :texto="botoes.texto"
    :cor="botoes.cor"