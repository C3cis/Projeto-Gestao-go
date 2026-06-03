<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const meusCards = [
    { titulo: 'Total', valor: '3', icone: 'line-md:account' },
    { titulo: 'Ativos', valor: '4',icone:'line-md:account-add'},
    { titulo: 'Afastados', valor: '2', icone: 'line-md:account-alert' },
    { titulo: 'Inativos', valor: '2', icone: 'line-md:account-delete' },
  ]

  const Funcionarios = [
    { id: '001', funcionario: 'Rosa mosqueta', contato:'(11)1234567',  setor: 'Webzinho', status: 'Negativado' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
    { id: '000', funcionario: '---', setor: '---', status: '---' },
  ]

  const BotoesBusca = [
    {texto: "Buscar", tamanho: "pequeno", cor: "rosaClaro"},
  {texto: "Todos", tamanho: "pequeno", cor: "rosao"},
  {texto: "Ativo", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Afastado", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Inativo", tamanho: "pequeno", cor: "rosinha"},
]
</script>

<template>
 <section class="grid grid-cols-1">
    <div>
    <h1 class="text-3xl 
     bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-3">Funcionários</h1>
      <p class="text-gray-600 mb-8">Colaboradores Cadastrados</p>
         <Botoes class="text-xs mb-4" tipo="medio" texto="+ Novo Funcionário" cor="rosao" />
    </div>
   
  </section>
  <section class="grid grid-cols-2 gap-1 text-center mb-9
   sm:grid-cols-2 sm:gap-3 
   md:grid-cols-4
   lg:grid-cols-8
   xl:grid-cols-4">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="flex flex-col gap-2 mb-2 text-xs
  sm:gap-3 
   md:grid-cols-4
   lg:grid-cols-8
   xl:grid-cols-4
  ">
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />
  </section>

  <section>   
    <div class="mt-4 rounded-xl bg-white p-5">
     <h2 class="text-2xl font-bold">Funcionários</h2>
      <div class="flex items-center justify-between mb-4 px-0.5 p-4">
      
      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Funcionario', chave: 'funcionario' },
          { titulo: 'Setor', chave: 'setor' },
          { titulo: 'Contato', chave: 'contato' },
          { titulo: 'Status', chave: 'status'}
        ]"
        :dados="Funcionarios" /><br/>
        </div> 
    </div>
  </section>
</template>
