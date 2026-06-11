<script setup>
  import { Icon } from '@iconify/vue'

  function darkMode() {
    const html = document.documentElement
    html.classList.toggle('dark')
  }

</script>

<template>
    <header class="flex flex-wrap items-center justify-between p-2.25 sm:w-full  bg-rose-100 mb-3">
      <div>
        <h1 class="text-xl font-bold text-rose-950">Meu Painel</h1>
        <p class="text-xs text-rose-800">Atividades Realizadas</p>
      </div>
        <div class=" text-right">
          <h1 class="text-sm text-rose-950">Russaneta</h1> 
          <p class="text-xs text-rose-800">Nivel de Acesso</p>
          <button class="bg-black/10 rounded-full p-2 mt-2" @click="darkMode">
          <Icon
            icon="line-md:account"
            class="text-3xl text-rose-900"
          />
        </button>
        </div>
    </header>
  
</template>
