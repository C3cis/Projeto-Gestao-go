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
  <article class="flex flex-col items-center gap-3 rounded-[20px] border border-black bg-violet-50 p-2 text-xs
    sm:flex-row sm:items-center  sm:p-6 sm:text-sm
    lg:flex-row lg:items-center lg:p-4 lg:text-lg
    xl:flex-row xl:items-center xl:p-4 xl:text-xl ">
    <div class=" text-[2rem] text-rose-900">
      <Icon :icon="icone" />
    </div>

    <div>
      <h3 class="text-[0.9rem] font-medium">
        {{ titulo }}
      </h3>

      <p class="text-[1.4rem] font-medium">
        {{ valor }}
      </p>
    </div>
  </article>
</template>
