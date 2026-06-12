<script setup>
  defineProps({
    tipo: String,
    texto: String,
    cor: String,
  })
</script>
<template>
  <button
  :class="{
      'px-2 py-1  ': tipo === 'pequeno',
      'px-4 py-2 ': tipo === 'medio',
      'px-6 py-3': tipo === 'grande',


      
      'rounded-[11px] bg-fuchsia-400 text-white dark:bg-rose-100 dark:text-black': cor === 'rosa',
      'rounded-[11px] bg-pink-800 text-white dark:bg-rose-200 dark:text-pink-900': cor === 'rosao',
      'rounded-[11px] bg-rose-300 text-white dark:bg-neutral-300/90 dark:text-black': cor === 'rosinha',
      'rounded-[11px] bg-red-100 text-black dark:bg-rose-300/70 dark:text-white': cor === 'rosaClaro',

    }">
    {{ texto }}
  </button>
</template>
