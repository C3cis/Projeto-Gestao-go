<script setup>import { h } from 'vue';
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import Tabelas from '../components/tabelas.vue'

 const meusCards = [
    { titulo: 'Total', valor: '3', icone: 'ph:toolbox' },
    { titulo: 'Operacionais', valor: '4',icone:'line-md:fork-right'},
    { titulo: 'Em Manutenção', valor: '2', icone: 'line-md:construction-twotone'},
    { titulo: 'Inativos', valor: '2', icone: 'line-md:menu-to-close-alt-transition' }
  ]

  const Equipamentos = [
    { id: '001', nome: 'Notebook Dell', tipo: 'Computador', status: 'Ativo', localizacao: 'Setor de TI' },
    { id: '002', nome: 'Impressora HP', tipo: 'Imprimidora', status: 'Em Manutenção', localizacao: 'Setor de TI' },
    { id: '003', nome: 'Monitor Samsung', tipo: 'Monitor', status: 'Inativo', localizacao: 'Setor de TI' },
  ]

  const BotoesBusca = [
    {texto: "Buscar", tamanho: "pequeno", cor: "rosaClaro"},
  {texto: "Todos", tamanho: "pequeno", cor: "rosao"},
  {texto: "Ativo", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Em Manutenção", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Inativo", tamanho: "pequeno", cor: "rosinha"},
]
</script>

<template>
 <section class="mb-9">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5 ">Equipamentos</h1>
         <Botoes class="text-xs mb-4" tipo="medio" texto="+ Novo Equipamento" cor="rosao" />
    </div>
    <p class="text-gray-600 text-xl">Equipamentos Cadastrados</p>
  </section>
  <section class="grid grid-cols-1 gap-4 text-justify mb-5 px-20 text-sm
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
  <section class="flex flex-wrap p-2 mb-6 gap-2">
  
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />
  </section>
  <section>   
    <div>      
      <Tabelas
        :colunas="[
          { titulo: 'ID', chave: 'id' },
          { titulo: 'Nome', chave: 'nome' },
          { titulo: 'Tipo', chave: 'tipo' },
          { titulo: 'Localização', chave: 'localizacao'},
          { titulo: 'Status', chave: 'status'}

        ]"
        :dados="Equipamentos" /><br/>
        </div> 
  </section>
</template>
