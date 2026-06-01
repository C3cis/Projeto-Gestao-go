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
 <section class="mb-9">
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5 mt-1.5">Funcionários</h1>
         <Botoes tipo="medio" texto="+ Novo Funcionário" cor="rosao" />
    </div>
    <p class="text-gray-600 text-[0.9rem]">Colaboradores Cadastrados</p>
  </section>
  <section class="grid grid-cols-4 gap-5 mb-6 xl:grid-cols-6 sm:grid-cols-2 sm:gap-3">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="flex items-center p-1.5 gap-3">
  
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />
  </section>
  <section>   
    <div class="flex items-center justify-between mb-4 px-1 p-4">
      
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
  </section>
</template>
