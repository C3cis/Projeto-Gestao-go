<script setup>
  import Botoes from '../components/botoes.vue';
import Tabelas from '../components/tabelas.vue'

  const Pedidos = [
    { id: '001', cliente: 'João Silva', produto: 'Microscópio Zeiss', status: 'Em Processamento' },
    { id: '002', cliente: 'Maria Oliveira', produto: 'Centrífuga Digital', status: 'Enviado' },
    { id: '003', cliente: 'Carlos Santos', produto: 'Espectrofotômetro', status: 'Entregue' },
  ]
</script>
<template>
  <section>
    <div class="mt-5 rounded-xl bg-white p-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold">Pedidos Realizados</h2>
        <Botoes tipo="pequeno" texto="Adicionar Pedido" cor="verde" />
      </div>
      <Tabelas
        :colunas="[
          { titulo: 'ID do Pedido', chave: 'id' },
          { titulo: 'Cliente', chave: 'cliente' },
          { titulo: 'Produto', chave: 'produto' },
          { titulo: 'Status', chave: 'status' },
        ]"
        :dados="Pedidos" /><br />
    </div>
    </section>
</template>

<!--<div class="mb-10">
    <Botoes tipo="medio" texto="Adicionar Equipamento" cor="vermelho" />
    <Botoes tipo="grande" texto="Adicionar Equipamento" cor="verde" />
  </div>-->