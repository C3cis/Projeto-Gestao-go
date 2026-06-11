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
  <article class="flex flex-col  rounded-[20px] border border-black bg-violet-50 p-2 text-xs">
    <div class=" text-[2rem] text-rose-900">
      <Icon :icon="icone" />
    </div>

    <div>
      <h3 class="text-base text-center font-medium
      sm:text-center sm:text-base">
        {{ titulo }}
      </h3>

      <p class="text-xl text-center font-medium">
        {{ valor }}
      </p>
    </div>
  </article>
</template>
