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
    <article class="rounded-[20px] border border-black bg-violet-50 p-[1.2%] text-justify mb-9">

    <div class="text-[1.3rem] p-2">
        <Icon :icon="icone" class="text-[1.6rem]"/>
        <div class="flex items-center mb-1 gap-12 text-[2rem] ">
     
     <h3 class="flex items-center m-4 text-[0.8rem] font-medium gap-1">
            {{ titulo }}</h3>
     
      <h2 class="text-[0.7rem] font-medium border border-bs-amber-200 rounded-full "> {{ status }}</h2>
        </div>
            <p class="m-0 text-[0.6rem] font-medium mb-3.5">
                {{ conteudo }}
            </p>

        <div class="flex items-center justify-left mb-3 gap-[2.3rem]">
              <p class="m-0 text-[0.6rem] font-medium">
                {{ "Data de Abertura: " + dataAberto }}
            </p>
            <p class="m-0 text-[0.6rem] font-medium">
                {{ "Data de Fechamento: " + dataFechado }}
            </p>
            <p class="m-0 text-[0.6rem] font-medium">
                {{ "Custo: " + valor }}
            </p>
        </div>
          
            </div>
    </article>

</template>