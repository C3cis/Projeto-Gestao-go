<script setup>
  defineProps({
    tipo: String,
    texto: String,
    cor: String,
  })
</script>
<template>
  <button
  v-for="botoes in button"
  :class="{
      'px-2 py-1 text-sm': tipo === 'pequeno',
      'px-4 py-2 text-sm': tipo === 'medio',
      'px-6 py-3 text-lg': tipo === 'grande',
      
      'rounded-[11px] bg-fuchsia-400 text-white': cor === 'rosa',
      'rounded-[11px] bg-pink-800 text-white': cor === 'rosao',
      'rounded-[11px] bg-rose-300 text-white': cor === 'rosinha',
    }">
    {{ texto }}
  </button>
</template>
