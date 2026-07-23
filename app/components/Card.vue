<script setup lang="ts">
  const porps = defineProps({
    titulo: { type: String, required: true },
    valor: { type: [Number, String], required: true },
    icone: { type: String, required: true },
  })
</script>

<template>
  <article
    class="flex flex-col rounded-[20px] border-2 border-rose-200 bg-rose-50/60 p-3 py-2 text-xs dark:border-rose-200 dark:bg-neutral-400/40">
    <div class="text-[2rem] text-rose-900 dark:text-rose-200">
      <Icon :name="icone" />
    </div>

    <div>
      <h3 class="text-center text-base font-medium sm:text-center sm:text-base dark:text-rose-300">
        {{ titulo }}
      </h3>

      <p class="text-center text-xl font-medium dark:text-neutral-300">
        {{ valor }}
      </p>
    </div>
  </article>
</template>
