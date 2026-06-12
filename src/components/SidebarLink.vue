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
  <router-link class="block rounded-[0.9rem] p-3 text-rose-800  transition-all hover:bg-rose-200 border border-r-6  mt-3 border-rose-800 
  dark:text-slate-50 dark:bg-rose-900/70 dark:hover:bg-rose-800/90 dark:border-rose-200 " :to="to">
    {{ label }}
  </router-link>

</template>
