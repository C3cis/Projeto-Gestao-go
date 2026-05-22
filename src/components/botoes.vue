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
      'rounded bg-blue-500 text-white': cor === 'azul',
      'rounded bg-green-500 text-white': cor === 'verde',
      'rounded bg-red-500 text-white': cor === 'vermelho',
    }">
    {{ texto }}
  </button>
</template>
