<script setup lang="ts">
  const { t, locales, locale } = useI18n({ useScope: 'local' })

  const switchLocalePath = useSwitchLocalePath()

  const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
  })

  const colorMode = useColorMode()

  const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <header
    class="mb-1 flex flex-wrap items-center justify-between bg-rose-100 p-2.25 sm:w-full dark:bg-rose-950/90">
    <div>
      <h1 class="text-xl font-bold text-rose-950 dark:text-rose-400">
        {{ t('meu_painel') }}
      </h1>
      <p class="text-xs text-rose-800 dark:text-rose-200">
        {{ t('atividades_realizadas') }}
      </p>
    </div>
    <div class="flex max-w-120 items-center gap-4">
      <!-- Botão claro/escuro: fica FORA do card -->
      <button
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[0.5px] border-rose-200 bg-rose-100 dark:border-rose-800/50 dark:bg-rose-900/50"
        @click="colorMode.preference = isDark ? 'light' : 'dark'">
        <Icon
          :name="
            isDark
              ? 'line-md:moon-alt-loop'
              : 'line-md:moon-filled-to-sunny-filled-loop-transition'
          "
          class="text-2xl text-rose-800 dark:text-rose-300" />
      </button>

      <!-- Card que agrupa o resto -->
      <div
        class="flex flex-1 items-center gap-4 rounded-xl border-[0.5px] border-rose-200 bg-white/80 px-6 py-5 dark:border-rose-800/50 dark:bg-rose-900/30">
        <div class="min-w-0 flex-1">
          <p class="mb-0.5 text-[17px] font-medium text-rose-950 dark:text-rose-100">Russaneta</p>
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-900 dark:bg-rose-900/50 dark:text-rose-200">
              Nível de acesso
            </span>
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="flex items-center gap-1 text-[13px] text-rose-700 dark:text-rose-300">
              <Icon name="tabler:language" class="text-sm" />
              {{ locale.name }}
            </NuxtLink>
          </div>
        </div>
        <Icon name="tabler:chevron-down" class="shrink-0 text-lg text-rose-400 dark:text-rose-500" />
      </div>
    </div>
  </header>
</template>

<i18n lang="json">
{
  "pt": {
    "meu_painel": "Meu Painel",
    "atividades_realizadas": "Atividades Realizadas"
  },
  "en": {
    "meu_painel": "My Dashboard",
    "atividades_realizadas": "Activities"
  }
}
</i18n>
