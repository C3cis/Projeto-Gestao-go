<script setup>
import Tabelas from '@/components/tabelas.vue';
import Card from '@/components/card.vue';

const meusCards = [
  { titulo: 'Equipamentos', valor: '3', icone: '/funcionario.png' },
  { titulo: 'Funcionarios', valor: '4', icone: '/funcionario.png' },
  { titulo: 'Manutencao', valor: '2', icone: '/definicoes.png' },
  { titulo: 'Pedidos', valor: '2', icone: '/aviao-de-papel.png' }
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
      :key="card.titulo"
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
.component-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.painel-container {
  margin-top: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
}
</style>