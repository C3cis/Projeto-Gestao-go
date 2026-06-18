<script setup lang="ts">
  defineProps({
    titulo: {
      type: String,
      required: true
    },
    valor: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <article class="flex flex-col  rounded-[20px] border-2 border-black bg-violet-50 p-3 text-xs py-2 
  dark:border-white dark:bg-neutral-500/50">
    <div class=" text-[2rem] text-rose-900 
    dark:text-rose-200">
      <Icon :name="icone" />
    </div>

    <div>
      <h3 class="text-base text-center font-medium
      sm:text-center sm:text-base
      dark:text-rose-300">
        {{ titulo }}
      </h3>

      <p class="text-xl text-center font-medium
      dark:text-neutral-300">
        {{ valor }}
      </p>
    </div>
  </article>
</template>
