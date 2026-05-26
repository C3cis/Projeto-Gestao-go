<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const meusCards = [
    { titulo: 'Pendentes', valor: '3', icone: 'ph:toolbox' },
    { titulo: 'Aprovados', valor: '4',icone:'material-symbols:checklist-rounded'},
    { titulo: 'Em Analise', valor: '2', icone: 'material-symbols:manage-search' },
    { titulo: 'Total', valor: '2', icone: 'material-symbols:analytics-outline' },
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
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl font-bold mb-1.5 mt-1.5">Pedidos</h1>
         <Botoes tipo="medio" texto="+ Novo Pedido" cor="rosao" />
    </div>
    <p class="text-gray-600 text-[0.9rem]">Gerencie os pedidos realizados por seus clientes</p>
  </section>
  <section class="grid grid-cols-4 gap-5 mb-6">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="flex items-center p-1.5 gap-3">
  
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />

  </section>
  <section>
      <div class="flex items-center justify-between mb-4 px-1 p-4">
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