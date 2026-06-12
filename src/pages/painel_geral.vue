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
  <section class="mb-9">
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5 mt-1.5">Dashboard</h1>
    </div>
    <p class="text-gray-600">Visão geral do sistema e Pendências</p>
  </section>
  <section class="grid grid-cols-1 gap-4 text-justify mb-15 px-12 text-sm
   sm:grid-cols-2 sm:px-10 sm:gap-6
   lg:grid-cols-4 lg:text-lg lg:px-4 
   xl:text-xl">
   <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section>
     
    <div class="mt-4 rounded-xl bg-rose-50 p-5 dark:bg-neutral-200/36">
     <h2 class="text-2xl font-bold dark:text-neutral-200">Pedidos Pendentes</h2>
      <div class="flex items-center justify-between mb-4 px-0.5 p-4">
      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Pedido', chave: 'nome' },
          { titulo: 'Problemas', chave: 'modelo' },
        ]"
        :dados="listaDeEquipamentos" /><br />
      </div>
    </div>
  </section>
</template>
