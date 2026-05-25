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
  <section>
      <div class="flex items-center justify-between mb-4">
        <h1 class="gap-5 mt-4 mb-1.5 text-2xl font-bold ">Pedidos Realizados</h1>
      </div>
      <Tabelas
        :colunas="[
          { titulo: 'ID do Pedido', chave: 'id' },
          { titulo: 'Cliente', chave: 'cliente' },
          { titulo: 'Produto', chave: 'produto' },
          { titulo: 'Status', chave: 'status' },
        ]"
        :dados="Pedidos" /><br/>
    </section>
</template>

<!--<div class="mb-10">
    <Botoes tipo="medio" texto="Adicionar Equipamento" cor="vermelho" />
    <Botoes tipo="grande" texto="Adicionar Equipamento" cor="verde" />
  </div>-->