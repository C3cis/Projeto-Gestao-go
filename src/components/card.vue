<script setup>
  defineProps({
    titulo: String,
    valor: String,
    icone: String,
  })

  import { Icon } from '@iconify/vue'
</script>

<template>
  <article
    class="flex w-full flex-col justify-center gap-0.75 rounded-[10px] border border-black bg-gray-100 p-[3%] text-justify">
    <div class="gap-0.5 mb-2 m-1 text-[2rem] text-cyan-700">
      <Icon :icon="icone" />
    </div>

    <div>
      <h3 class="m-0 text-[0.9rem] font-medium">
        {{ titulo }}
      </h3>

      <p class="m-0 text-[1.4rem] font-medium">
        {{ valor }}
      </p>
    </div>
  </article>
</template>
