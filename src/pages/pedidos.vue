<script setup>
  import Tabelas from '../components/tabelas.vue'

  const Pedidos = [
    { id: '001', cliente: 'João Silva', produto: 'Microscópio Zeiss', status: 'Em Processamento' },
    { id: '002', cliente: 'Maria Oliveira', produto: 'Centrífuga Digital', status: 'Enviado' },
    { id: '003', cliente: 'Carlos Santos', produto: 'Espectrofotômetro', status: 'Entregue' },
  ]
</script>
<template>
  <section>
    <div>
      <h2>Pedidos Realizados</h2>

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
