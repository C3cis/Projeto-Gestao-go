<script setup>
  import { Icon } from '@iconify/vue'

  function darkMode() {
    const html = document.documentElement
    html.classList.toggle('dark')
  }

</script>

<template>
    <header class="flex flex-wrap items-center justify-between p-2.25 sm:w-full  bg-rose-100 mb-1
    dark:bg-rose-950/90">
      <div>
        <h1 class="text-xl font-bold text-rose-950 dark:text-rose-400">Meu Painel</h1>
        <p class="text-xs text-rose-800 dark:text-rose-200">Atividades Realizadas</p>
      </div>
        <div class="text-right">
          <h1 class="text-sm text-rose-950 dark:text-rose-400">Russaneta</h1> 
          <p class="text-xs text-rose-800 dark:text-rose-200">Nivel de Acesso</p>
          <button class="bg-rose-200 rounded-full p-2 mt-2" @click="darkMode">
          <Icon
            icon="line-md:moon-alt-loop"
            class="text-2xl text-rose-900"
          />
        </button>
        </div>
    </header>
  
</template>
