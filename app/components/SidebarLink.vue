<script setup lang="ts">
  defineProps({
    to: {type: String, required: true},
    label: {type: String, required: true},
  })
</script>

<template>
  <NuxtLinkLocale
    class="mt-3 block rounded-[0.9rem] border border-r-6 border-rose-800 p-3 text-rose-800 transition-all hover:bg-rose-200 dark:border-rose-200 dark:bg-rose-900/70 dark:text-slate-50 dark:hover:bg-rose-800/90"
    :to="to">
    {{ label }}
  </NuxtLinkLocale>
</template>
