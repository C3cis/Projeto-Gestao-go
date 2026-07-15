<script setup lang="ts">
  defineProps <{
    icone: string,
    titulo: string,
    status: string,
    conteudo: string,
    dataAberto: string,
    dataFechado: string,
    valor: string,
  }>()

  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <article
    class="flex flex-col rounded-[20px] border border-black bg-violet-50 p-2 text-xs dark:bg-neutral-500/60">
    <div class="p-2 text-xl">
      <Icon :name="icone" class="text-3xl text-amber-950 dark:text-rose-200" />

      <div class="mb-2 flex flex-wrap items-center justify-between text-3xl dark:text-rose-400">
        <h3 class="m-2 gap-1 text-base font-medium">
          {{ titulo }}
        </h3>

        <h2
          class="mb-4 w-min rounded-[20px] border-2 border-rose-800 bg-red-100 p-[4.3px] text-xs font-medium text-rose-800">
          {{ status }}
        </h2>
      </div>
      <p class="mb-3.5 text-sm font-medium dark:text-neutral-50">
        {{ conteudo }}
      </p>

      <div class="m-3 flex flex-col dark:text-neutral-300">
        <p class="text-xs font-medium">{{ t('cardHist.data_abertura') }}: {{ dataAberto }}</p>
        <p class="text-xs font-medium">{{ t('cardHist.data_fechamento') }}: {{ dataFechado }}</p>
        <p class="text-xs font-medium">{{ t('cardHist.custo') }}: {{ valor }}</p>
      </div>
    </div>
  </article>
</template>

<i18n lang="json">
{
  "pt": {
    "cardHist": {
      "data_abertura": "Data de Abertura",
      "data_fechamento": "Data de Fechamento",
      "custo": "Custo"
    }
  },
  "en": {
    "cardHist": {
      "data_abertura": "Opening Date",
      "data_fechamento": "Closing Date",
      "custo": "Cost"
    }
  }
}
</i18n>
