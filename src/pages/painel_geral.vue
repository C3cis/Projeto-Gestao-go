<script setup>
import Tabelas from '@/components/tabelas.vue';

// Você precisa definir a variável que usou no template!
const listaDeVendas = [
  { nome: 'Microscópio Zeiss', total: 'R$ 15.000' },
  { nome: 'Centrífuga Digital', total: 'R$ 8.500' },
  { nome: 'Espectrofotômetro', total: 'R$ 12.200' }
];
const listaDeEquipmanetos = [
  { nome: 'Microscópio Zeiss', modelo: 'Xingling' },
  { nome: 'Centrífuga Digital', modelo: 'Xingling' },
  { nome: 'Espectrofotômetro', modelo: 'SHEIN' }
];

</script>

<template>
  <div class="painel-container">
    <h1>Painel Geral de Vendas</h1>
    
    <Tabelas
      :colunas="[
        { titulo: 'Produto', chave: 'nome' },
        { titulo: 'Total', chave: 'total' }
      ]"
      :dados="listaDeVendas"
    /><br>
    <h1>Painel Geral de Equipamentos</h1>
    <Tabelas
      :colunas="[
        { titulo: 'Produto', chave: 'nome' },
        { titulo: 'Modelo', chave: 'modelo' }
      ]"
       :dados="listaDeEquipamentos"
    />
         

  </div>
</template>
<style lang="css" scoped>
.painel-container {
  padding: 20px;
}
</style>