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
  <router-link class="block rounded-[1.2rem] p-4 text-rose-800  transition-all hover:bg-white border border-r-9  mt-10 border-rose-800" :to="to">
    {{ label }}
  </router-link>
</template>
