<script setup>
import Botoes from '../components/botoes.vue';
import Card from '../components/card.vue';
import CardHist from '../components/cardHist.vue';

 const meusCards = [
    { titulo: 'Total', valor: '3', icone: 'ph:toolbox' },
    { titulo: 'Ativos', valor: '4',icone:'material-symbols:checklist-rounded'},
    { titulo: 'Afastados', valor: '2', icone: 'material-symbols:manage-search' },
    { titulo: 'Inativos', valor: '2', icone: 'material-symbols:analytics-outline' },
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
    { icone: 'ph:toolbox', titulo: 'Manutenção do Servidor', status: 'Concluída', conteudo: 'Substituição de peças e atualização de software', dataAberto: '01/05/2024', dataFechado: '05/05/2024', valor: 'R$ 500,00' },
    { icone: 'material-symbols:checklist-rounded', titulo: 'Manutenção da Impressoras', status: 'Agendada', conteudo: 'Limpeza e calibração das cabeças de impressão', dataAberto: '10/06/2024', dataFechado: '15/06/2024', valor: 'R$ 300,00' },
    { icone: 'material-symbols:manage-search', titulo: 'Manutenção do Ar Condicionado', status: 'Urgente', conteudo: 'Reparo do sistema de refrigeração e troca de filtros', dataAberto: '20/06/2024', dataFechado: '', valor: 'R$ 800,00' },
    { icone: 'material-symbols:analytics-outline', titulo: 'Manutenção do Sistema de Segurança', status: 'Cancelada', conteudo: 'Atualização do software e verificação dos sensores', dataAberto: '15/06/2024', dataFechado: '', valor: 'R$ 600,00' },

]
</script>

<template>
    <section class="mb-9">
    <div class="flex items-center justify-between mb-2 ">
    <h1 class="text-3xl font-bold mb-1.5 mt-1.5">Manutenções</h1>
         <Botoes tipo="medio" texto="+ Nova Manutenção" cor="rosao" />
    </div>
    <p class="text-gray-600 text-[0.9rem]">Manutenções Cadastradas</p>
  </section>
  <section class="grid grid-cols-4 gap-5 mb-6">
    <Card
      v-for="card in meusCards"
      :key="card.titulo"
      :titulo="card.titulo"
      :valor="card.valor"
      :icone="card.icone" />
  </section>
  <section class="flex items-center p-1.5 gap-3 mb-4">
  
    <Botoes v-for="botoes in BotoesBusca"
      :texto="botoes.texto"
      :tipo="botoes.tamanho"
      :cor="botoes.cor"
    />
  </section>
  <section >
    <div class="grid grid-cols-3 place-items-center gap-4 ">
      
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
