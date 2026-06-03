<script setup lang="js">
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
  <router-link class="block rounded-[0.9rem] p-2 text-rose-800  transition-all hover:bg-white border border-r-6  mt-2 border-rose-800 " :to="to">
    {{ label }}
  </router-link>

</template>
