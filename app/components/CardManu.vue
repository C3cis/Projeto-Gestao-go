<script setup lang="ts">
import type { Manutencao } from '~/types/manutencao';
  defineProps <{
    icone: string,
    manutencao: Manutencao
  }>()

  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <article
    class="flex flex-col rounded-[20px] border border-black bg-violet-50 p-2 text-xs dark:bg-neutral-800/90">
    <div class="p-2 text-xl">
      <Icon :name="icone" class="text-3xl text-amber-950 dark:text-rose-200" />

      <div class="mb-2 flex flex-wrap items-center justify-between text-3xl dark:text-rose-400">
        <h3 class="m-2 gap-1 text-base font-medium">
          {{ manutencao.tipoManu }}
          <span class="block text-xs font-normal text-neutral-400">{{ manutencao.equipamentoNome }}</span>
        </h3>

        <h2
          class="mb-4 w-min whitespace-nowrap rounded-[20px] border-2 p-[4.3px] text-xs font-medium"
          :class="manutencaoStyles[manutencao.status]">
          {{ manutencao.status }}
        </h2>
      </div>
      <p class="mb-3.5 text-sm font-medium dark:text-neutral-50">
        {{ manutencao.descricao }}
      </p>

      <div class="m-3 flex flex-col dark:text-neutral-300">
        <p class="text-xs font-medium">{{ t('cardManu.data_abertura') }}: {{formatarData(manutencao.dataAbertura) }}</p>
        <p class="text-xs font-medium">{{ t('cardManu.data_fechamento') }}: {{ formatarData (manutencao.dataFechamento) }}</p>
        <p class="text-xs font-medium">{{ t('cardManu.custo') }}: {{ manutencao.valor }}</p>
      </div>
    </div>
  </article>
</template>

<i18n lang="json">
{
  "pt": {
    "cardManu": {
      "data_abertura": "Data de Abertura",
      "data_fechamento": "Data de Fechamento",
      "custo": "Custo"
    }
  },
  "en": {
    "cardManu": {
      "data_abertura": "Opening Date",
      "data_fechamento": "Closing Date",
      "custo": "Cost"
    }
  }
}
</i18n>
