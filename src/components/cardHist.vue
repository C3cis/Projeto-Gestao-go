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
    <article class="grid gap-4 rounded-[20px] border border-black bg-violet-50 p-[1.2%] text-justify mb-9">

    <div class="mb-4 text-[1rem] ">
        <div class="flex items-center justify-center mb-3 gap-2 ">
     <h3 class="m-0 text-[0.8rem] font-medium">
            {{ titulo }}</h3>
     <Icon :icon="icone"/>
      <h2 class="m-0 text-[0.6rem] font-medium border border-bs-amber-200 rounded-full p-1"> {{ status }}</h2>
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