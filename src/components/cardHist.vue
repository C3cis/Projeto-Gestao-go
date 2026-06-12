<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icone: String,
  titulo: String,
  status: String,
  conteudo: String,
  dataAberto: String,
  dataFechado: String,
  valor: String
})
</script>

<template>
    <article class="flex flex-col  rounded-[20px] border border-black bg-violet-50 p-2 text-xs dark:bg-neutral-500/60">

    <div class="text-xl p-2">
        <Icon :icon="icone" class="text-3xl text-amber-950 dark:text-rose-200"/>

        <div class="flex flex-wrap items-center justify-between mb-2 text-[2rem] dark:text-rose-400">
     <h3 class="flex flex-wrap items-center m-2 text-base font-medium gap-1 ">
            {{ titulo }}</h3>
     
      <h2 class="text-xs text-rose-800 font-medium border-2 border-rose-800 bg-red-100 rounded-[20rem] mb-4 p-[0.3rem] w-min "> {{ status }}</h2>
        </div>
            <p class="text-xs font-medium mb-3.5 dark:text-neutral-50">
                {{ conteudo }}
            </p>

        <div class="flex flex-1 justify-content m-3 gap-9 dark:text-neutral-300">
              <p class=" text-[0.5rem] font-medium">
                {{ "Data de Abertura: " + dataAberto }}
            </p>
            <p class="text-[0.5rem] font-medium">
                {{ "Data de Fechamento: " + dataFechado }}
            </p>
            <p class="text-[0.5rem] font-medium">
                {{ "Custo: " + valor }}
            </p>
        </div>
          
            </div>
    </article>

</template>