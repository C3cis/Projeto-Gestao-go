<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const meusCards = [
    { titulo: 'Total', valor: '3', icone: 'ph:toolbox' },
    { titulo: 'Ativos', valor: '4',icone:'material-symbols:checklist-rounded'},
    { titulo: 'Afastados', valor: '2', icone: 'material-symbols:manage-search' },
    { titulo: 'Inativos', valor: '2', icone: 'material-symbols:analytics-outline' },
  ]

  const Funcionarios = [
    { id: '001', funcionario: 'Rosa mosqueta', contato:'(11)1234567',  setor: 'Webzinho', status: 'Negativado' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
  ]
</script>

<template>
 <section class="mb-9 f">
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl font-bold mb-1.5 mt-1.5">Funcionários</h1>
         <Botoes tipo="medio" texto="+ Novo Funcionário" cor="rosao" />
    </div>
    <p class="text-gray-600 text-[0.9rem]">Colaboradores Cadastrados</p>
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
        <h1 class="gap-5 mt-4 mb-1.5 text-2xl font-bold ">Cadastrados</h1>

      </div>
      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Funcionario', chave: 'funcionario' },
          { titulo: 'Setor', chave: 'setor' },
          { titulo: 'Contato', chave: 'contato' },
          { titulo: 'Status', chave: 'status'}
        ]"
        :dados="Funcionarios" /><br/>
  </section>
</template>
