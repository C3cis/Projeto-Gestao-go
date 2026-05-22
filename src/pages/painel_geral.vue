<script setup>
  import Botoes from '../components/botoes.vue'
  import Card from '../components/card.vue'
  import Tabelas from '../components/tabelas.vue'

  const meusCards = [
    { titulo: 'Equipamentos', valor: '3', icone: 'ph:toolbox' },
    { titulo: 'Funcionarios', valor: '4', icone: 'ph:users' },
    { titulo: 'Manutencao', valor: '2', icone: 'ph:wrench' },
    { titulo: 'Pedidos', valor: '2', icone: 'ph:git-pull-request' },
  ]

  // Você precisa definir a variável que usou no template!
  const listaDeEquipamentos = [
    { id: '----', nome: '---', modelo: '---' },
    { id: '----', nome: '----', modelo: '---' },
    { id: '---', nome: '---', modelo: '----' },
  ]
</script>

<template>
  <div class="mb-10">
    <Botoes tipo="medio" texto="Adicionar Equipamento" cor="vermelho" />
    <Botoes tipo="grande" texto="Adicionar Equipamento" cor="verde" />
  </div>
  <section class="grid grid-cols-4 gap-4">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section>
    <div class="mt-5 rounded-xl bg-white p-5">
      <h2>Equipamentos</h2>

      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Nome', chave: 'nome' },
          { titulo: 'Modelo', chave: 'modelo' },
        ]"
        :dados="listaDeEquipamentos" /><br />
    </div>
  </section>
</template>
