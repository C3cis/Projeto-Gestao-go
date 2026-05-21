<script setup>
import Tabelas from '@/components/tabelas.vue';
import Card from '@/components/card.vue';

const meusCards = [
  { id: 1, titulo: 'Vendas', valor: 'R$ 1.500', icone: '/icons/vendas.svg' },
  { id: 2, titulo: 'Clientes', valor: 350, icone: '/icons/clientes.svg' },
  { id: 3, titulo: 'Produtos', valor: 42, icone: '/icons/produtos.svg' }
];

// Você precisa definir a variável que usou no template!
const listaDeEquipamentos = [
  { id: '----', nome: '---', modelo: '---' },
  { id: '----', nome: '----', modelo: '---' },
  { id: '---', nome: '---', modelo: '----' }
];

</script>

<template>
<section class="component-card-container">   
    <Card 
      v-for="card in meusCards" 
      :key="card.id"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone"
    />
  </section>
   <section class="tabela-container">
  <div class="painel-container"> 
      <h2>Equipamentos</h2>
     
    <Tabelas
      :colunas="[
        { titulo: 'ID', chave: 'id' },
        { titulo: 'Nome', chave: 'nome' },
        { titulo: 'Modelo', chave: 'modelo' }
      ]"
      :dados="listaDeEquipamentos"
    /><br>
  </div>
  </section>
</template>
<style lang="css" scoped>
.painel-container {
  padding: 20px;
}
.component-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 4fr));
  gap: 10px;
}
</style>