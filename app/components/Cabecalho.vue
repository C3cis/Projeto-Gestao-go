<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <header
    class="mb-1 flex flex-wrap items-center justify-between bg-rose-100 p-2.25 sm:w-full dark:bg-rose-950/90">
    <div>
      <h1 class="text-xl font-bold text-rose-950 dark:text-rose-400">
        {{ t('cabecalho.meu_painel') }}
      </h1>
      <p class="text-xs text-rose-800 dark:text-rose-200">
        {{ t('cabecalho.atividades_realizadas') }}
      </p>
    </div>
    <div class="text-right">
      <h1 class="text-sm text-rose-950 dark:text-rose-400">Russaneta</h1>
      <p class="text-xs text-rose-800 dark:text-rose-200">Nivel de Acesso</p>

      <div class="flex flex-row gap-2" >
      <button class="mt-2 rounded-full bg-rose-200 p-2" @click="colorMode.preference = isDark ? 'light' : 'dark'">
        <Icon
          :name="
            isDark ? 'line-md:moon-alt-loop' : 'line-md:moon-filled-to-sunny-filled-loop-transition'
          "
          class="text-2xl text-rose-900" />
      </button>
      <select class=" rounded-[20px]  text-[0.8rem] dark:text-white text-black" v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
      </div>
    </div>
  </header>
</template>
