<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import CardHist from '../components/cardHist.vue';

 const meusCards = [
    { titulo: 'Agendadas', valor: '3', icone: 'line-md:calendar' },
    { titulo: 'Em Andamento', valor: '4',icone:'line-md:construction'},
    { titulo: 'Concluídas', valor: '2', icone: 'line-md:confirm-square-twotone' },
    { titulo: 'Urgentes', valor: '2', icone: 'line-md:hazard-lights-loop' },
  ]

  const BotoesBusca = [
    {texto: "Buscar", tamanho: "pequeno", cor: "rosaClaro"},
  {texto: "Todos", tamanho: "pequeno", cor: "rosao"},
  {texto: "Agendadas", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Concluídas", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Urgentes", tamanho: "pequeno", cor: "rosinha"},
  {texto: "Cancelados", tamanho: "pequeno", cor: "rosinha"},

]

const Manutencoes = [
    { icone: 'line-md:calendar', titulo: 'Manutenção do Servidor', status: 'Concluída', conteudo: 'Substituição de peças e atualização de software', dataAberto: '01/05/2024', dataFechado: '05/05/2024', valor: 'R$ 500,00' },
    { icone: 'line-md:construction', titulo: 'Manutenção da Impressoras', status: 'Agendada', conteudo: 'Limpeza e calibração das cabeças de impressão', dataAberto: '10/06/2024', dataFechado: '15/06/2024', valor: 'R$ 300,00' },
    { icone: 'line-md:hazard-lights-loop', titulo: 'Manutenção do Ar Condicionado', status: 'Urgente', conteudo: 'Reparo do sistema de refrigeração e troca de filtros', dataAberto: '20/06/2024', dataFechado: '', valor: 'R$ 800,00' },
    { icone: 'line-md:menu-to-close-alt-transition', titulo: 'Manutenção do Sistema de Segurança', status: 'Cancelada', conteudo: 'Atualização do software e verificação dos sensores', dataAberto: '15/06/2024', dataFechado: '15/09/2026', valor: 'R$ 600,00' },

]
</script>

<template>
    <section class="mb-9">
    <div class="flex flex-wrap items-center justify-between mb-2 ">
    <h1 class="text-3xl bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-transparent font-bold mb-1.5">Manutenções</h1>
         <Botoes class="text-xs mb-4" tipo="medio" texto="+ Nova Manutenção" cor="rosao" />
    </div>
    <p class="text-gray-600 text-xl">Manutenções Cadastradas</p>
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
  <section >
    <div class="grid grid-cols-1 gap-4 text-justify mb-5 px-2 text-sm
    sm:px-4 sm:gap-4
   lg:grid-cols-2 lg:px-20
   xl:text-xl">

      <CardHist
        v-for="card in Manutencoes"
        :titulo="card.titulo"
        :valor="card.valor"
        :icone="card.icone"
        :status="card.status"
        :conteudo="card.conteudo"
        :dataAberto="card.dataAberto"
        :dataFechado="card.dataFechado"
      />
    </div>
  </section>
</template>
