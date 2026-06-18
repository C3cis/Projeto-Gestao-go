<script setup lang="ts">
defineProps({
  icone: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  dataAberto: {
    type: String,
    required: true
  },
  dataFechado: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  }
})
</script>

<template>
    <article class="flex flex-col  rounded-[20px] border border-black bg-violet-50 p-2 text-xs dark:bg-neutral-500/60">

    <div class="text-xl p-2">
        <Icon :name="icone" class="text-3xl text-amber-950 dark:text-rose-200"/>

        <div class="flex flex-wrap items-center justify-between mb-2 text-3xl dark:text-rose-400">
     <h3 class="m-2 text-base font-medium gap-1 ">
            {{ titulo }}</h3>
     
      <h2 class="text-xs text-rose-800 font-medium border-2 border-rose-800 bg-red-100 rounded-[20px] mb-4 p-[4.3px] w-min "> {{ status }}</h2>
        </div>
            <p class="text-sm font-medium mb-3.5 dark:text-neutral-50">
                {{ conteudo }}
            </p>

        <div class="flex flex-col m-3 dark:text-neutral-300 ">
    <p class=" text-xs font-medium">
        {{ t('manutencoes.cardHist.data_abertura') }}: {{ dataAberto }}
    </p>
    <p class="text-xs font-medium">
        {{ t('manutencoes.cardHist.data_fechamento') }}: {{ dataFechado }}
    </p>
    <p class="text-xs font-medium">
        {{ t('manutencoes.cardHist.custo') }}: {{ valor }}
    </p>
</div>
          
            </div>
    </article>

</template>