<script setup>
  import Botoes from '../components/botoes.vue'
  import Card from '../components/card.vue'
  import Tabelas from '../components/tabelas.vue'

  const meusCards = [
    { titulo: 'Equipamentos', valor: '3', icone: 'line-md:computer-twotone' },
    { titulo: 'Funcionarios', valor: '4', icone: 'ph:users' },
    { titulo: 'Manutencao Ativas', valor: '2', icone: 'line-md:alert-loop' },
    { titulo: 'Pedidos Pendentes', valor: '2', icone: 'line-md:text-box-twotone-to-text-box-multiple-twotone-transition' },
  ]

  // Você precisa definir a variável que usou no template!
  const listaDeEquipamentos = [
    { id: '----', nome: '---', modelo: '---' },
    { id: '----', nome: '----', modelo: '---' },
    { id: '---', nome: '---', modelo: '----' },
  ]
</script>

<template>
  <section class="mb-9 f">
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5 mt-1.5">Dashboard</h1>
    </div>
    <p class="text-gray-600 text-[0.9rem]">Visão geral do sistema e Pendências</p>
  </section>
  <section class="grid grid-cols-4 gap-5">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section>
     
    <div class="mt-4 rounded-xl bg-white p-5">
     <h2 class="text-2xl font-bold">Equipamentos</h2>
      <div class="flex items-center justify-between mb-4 px-0.5 p-4">
      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Nome', chave: 'nome' },
          { titulo: 'Modelo', chave: 'modelo' },
        ]"
        :dados="listaDeEquipamentos" /><br />
      </div>
    </div>
  </section>
</template>
