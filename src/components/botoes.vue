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
      'px-2 py-1 text-sm': tipo === 'pequeno',
      'px-4 py-2 text-sm': tipo === 'medio',
      'px-6 py-3 text-lg': tipo === 'grande',
      'rounded bg-fuchsia-400 text-white': cor === 'rosa',
      'rounded bg-pink-800 text-white': cor === 'rosao',
      'rounded bg-rose-300 text-white': cor === 'rosinha',
    }">
    {{ texto }}
  </button>
</template>
