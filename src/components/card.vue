<script setup>
  defineProps({
    titulo: String,
    valor: String,
    icone: String,
  })

  import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- Card de status -->
  <article
    class="flex w-full flex-col justify-center gap-0.75 rounded-[20px] border border-black bg-violet-50 p-[4%] text-justify
    sm:grid grid-flow-col sm:gap-2 sm:p-[20%] xl:grid-cols-2 xl:gap-[0.4rem] xl:p-[1.3rem] xl:text-center
    ">
    <div class="gap-0.5 mb-2 m-1 text-[2rem] text-rose-900">
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
