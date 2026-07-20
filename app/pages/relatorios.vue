<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  const { equipamentos, buscarEquipamentos } = useEquipamentos()
  const { manutencao, buscarManutencao } = useManutencao()

  onMounted(() => Promise.all([buscarEquipamentos(), buscarManutencao()]))

  const equipamentoId = ref<number | null>(null)

  const equipamentoSelecionado = computed(() =>
    equipamentos.value.find((e) => e.id === equipamentoId.value),
  )

  // a relação FK: manutenções desse equipamento
  const manutencoesDoEquipamento = computed(() =>
    manutencao.value.filter((m) => m.equipamentoId === equipamentoId.value),
  )
</script>
<template>
  <!-- Título -->
  <section class="mb-6">
    <h1
      class="mb-1.5 bg-linear-to-r from-pink-600 via-rose-300 to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent">
      {{ t('titulo') }}
    </h1>
    <p class="text-sm text-gray-600 dark:text-neutral-400">{{ t('sub_titulo') }}</p>
  </section>

  <!-- Seletor: escolhe qual equipamento ver -->
  <section class="mb-6 max-w-sm">
    <label class="flex flex-col gap-1.5">
      <span class="text-[13px] text-neutral-500 dark:text-neutral-400">{{ t('selecione') }}</span>
      <select
        v-model="equipamentoId"
        class="h-10 w-full rounded-[10px] border border-gray-200 bg-white px-3 text-sm text-neutral-900 transition-colors outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
        <option :value="null" disabled>{{ t('placeholder') }}</option>
        <option v-for="e in equipamentos" :key="e.id" :value="e.id">{{ e.nome }}</option>
      </select>
    </label>
  </section>

  <!-- Ficha: só aparece depois de escolher um equipamento -->
  <section>
    <CardRelatorios
      v-if="equipamentoSelecionado"
      :equipamento="equipamentoSelecionado"
      :manutencoes="manutencoesDoEquipamento" />

    <p
      v-else
      class="rounded-2xl border border-dashed border-rose-200 p-8 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
      {{ t('vazio') }}
    </p>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "titulo": "Relatórios",
    "sub_titulo": "Ficha completa por equipamento",
    "selecione": "Equipamento",
    "placeholder": "Selecione um equipamento",
    "vazio": "Selecione um equipamento acima para ver a ficha completa."
  },
  "en": {
    "titulo": "Reports",
    "sub_titulo": "Full record per equipment",
    "selecione": "Equipment",
    "placeholder": "Select an equipment",
    "vazio": "Select an equipment above to see its full record."
  }
}
</i18n>
