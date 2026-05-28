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
    <article class="rounded-[20px] border border-black bg-violet-50  text-justify ">

    <div class="text-[1.3rem] p-2">
        <Icon :icon="icone" class="text-[1.6rem] text-amber-950"/>
        <div class="flex items-center mb-1 gap-12 text-[2rem] ">
     
     <h3 class="flex items-center m-2 text-[0.8rem] font-medium gap-1">
            {{ titulo }}</h3>
     
      <h2 class="text-[0.7rem] text-rose-800 font-medium border-2 border-rose-800 bg-red-100 rounded-[20rem] mb-8 p-[0.2rem] "> {{ status }}</h2>
        </div>
            <p class="text-[0.7rem] font-medium mb-3.5">
                {{ conteudo }}
            </p>

        <div class="flex justify-content m-3 gap-9">
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