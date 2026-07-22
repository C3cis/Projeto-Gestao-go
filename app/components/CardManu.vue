<script setup lang="ts">
  import type { PropType } from 'vue';
import type { Manutencao } from '~/types/manutencao'
  defineProps({
    icone: {type: String, required: true},
    manutencao: {type: Object as PropType<Manutencao>, required: true}
  })

  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <article
    class="flex flex-col rounded-[20px] border border-black bg-violet-50/40 p-2 text-xs dark:border-neutral-700 dark:bg-neutral-800/90">
    <div class="p-2 text-xl">
      <Icon :name="icone" class="text-3xl text-rose-300 dark:text-rose-200" />

      <div
        class="mb-2 flex flex-wrap items-center justify-between text-3xl text-rose-700 dark:text-rose-400">
        <h3 class="m-2 gap-1 text-base font-medium">
          {{ manutencao.tipoManu }}
          <span class="block text-xs font-normal text-neutral-800 dark:text-neutral-500">{{
            manutencao.equipamentoNome
          }}</span>
        </h3>

        <h2
          class="mb-4 w-min rounded-[20px] border-2 p-[4.3px] text-xs font-medium whitespace-nowrap"
          :class="manutencaoStyles[manutencao.status]">
          {{ manutencao.status }}
        </h2>
      </div>
      <p class="mb-3.5 text-sm font-medium text-rose-700 dark:text-neutral-50">
        {{ manutencao.descricao }}
      </p>

      <div class="m-3 flex flex-col text-neutral-400">
        <p class="text-xs font-medium text-neutral-900 dark:text-white">
          {{ t('cardManu.data_abertura') }}: {{ formatarData(manutencao.dataAbertura) }}
        </p>
        <p class="text-xs font-medium text-rose-400">
          {{ t('cardManu.data_fechamento') }}: {{ formatarData(manutencao.dataFechamento) }}
        </p>
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
