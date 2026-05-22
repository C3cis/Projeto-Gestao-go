<script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <router-link class="block rounded-lg p-4 text-black transition-all hover:bg-white" :to>
    {{ label }}
  </router-link>
</template>
