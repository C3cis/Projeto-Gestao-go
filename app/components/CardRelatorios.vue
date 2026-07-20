<script lang="ts" setup>
  import type { Equipamento } from '~/types/equipamentos'
  import type { Manutencao } from '~/types/manutencao'

  // o card é "burro": recebe o equipamento e a lista de manutenções já cruzada pela página
  const props = defineProps<{
    equipamento: Equipamento
    manutencoes: Manutencao[]
  }>()

  // custo acumulado = soma do 'valor' de todas as manutenções
  const custoTotal = computed(() => props.manutencoes.reduce((soma, m) => soma + m.valor, 0))

  // quantas manutenções esse equipamento já teve
  const quantidade = computed(() => props.manutencoes.length)

  // próxima manutenção agendada = a 'Agendadas' com a data de abertura mais próxima
  const proximaAgendada = computed(() =>
    props.manutencoes
      .filter((m) => m.status === 'Agendadas')
      .sort((a, b) => new Date(a.dataAbertura).getTime() - new Date(b.dataAbertura).getTime())
      .at(0),
  )
</script>

<template>
  <article
    class="flex flex-col gap-4 rounded-2xl border border-rose-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-800/90">
    <!-- Corpinho de dados dos Equipamentos-->
    <div class="flex items-start gap-4 border-b border-rose-100 pb-4 dark:border-neutral-700">
      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/40">
        <Icon name="tabler:microscope" class="text-2xl text-rose-800 dark:text-rose-300" />
      </span>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {{ equipamento.nome }}
          </h2>
          <span
            class="rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap"
            :class="equipamentoStyles[equipamento.status]">
            {{ equipamento.status }}
          </span>
        </div>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ equipamento.descricao }}</p>
        <div
          class="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
          <span class="flex items-center gap-1">
            <Icon name="tabler:map-pin" /> {{ equipamento.localizacao }}
          </span>
          <span class="flex items-center gap-1">
            <Icon name="tabler:calendar" /> Aquisição: {{ formatarData(equipamento.dataAquisicao) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Faixa de métricas -->
    <div class="grid grid-cols-3 gap-3">
      <div class="rounded-xl bg-rose-50 p-3 text-center dark:bg-neutral-800">
        <p class="text-2xl font-bold text-rose-800 dark:text-rose-300">{{ quantidade }}</p>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">Manutenções</p>
      </div>

      <div class="rounded-xl bg-rose-50 p-3 text-center dark:bg-neutral-800">
        <p class="text-lg font-bold text-rose-800 dark:text-rose-300">
          {{ formatarMoeda(custoTotal) }}
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">Custo acumulado</p>
      </div>

      <div class="rounded-xl bg-rose-50 p-3 text-center dark:bg-neutral-800">
        <p class="text-lg font-bold text-rose-800 dark:text-rose-300">
          {{ proximaAgendada ? formatarData(proximaAgendada.dataAbertura) : '—' }}
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">Próxima agendada</p>
      </div>
    </div>

    <!-- Histórico de manutenções -->
    <div>
      <h3 class="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
        Histórico de manutenções
      </h3>

      <p
        v-if="manutencoes.length === 0"
        class="rounded-xl bg-rose-50 p-4 text-center text-sm text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
        Nenhuma manutenção registrada para este equipamento.
      </p>

      <ul v-else class="flex flex-col gap-2">
        <li
          v-for="m in manutencoes"
          :key="m.id"
          class="flex items-center justify-between gap-3 rounded-xl border border-rose-100 p-3 dark:border-neutral-700">
          <div class="min-w-0">
            <p class="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {{ m.tipoManu }}
            </p>
            <p class="text-xs text-neutral-500 dark:text-neutral-400">
              {{ formatarData(m.dataAbertura) }} — {{ formatarData(m.dataFechamento) }}
            </p>
          </div>
          <div class="flex shrink-0 items-center gap-3">
            <span
              class="rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap"
              :class="manutencaoStyles[m.status]">
              {{ m.status }}
            </span>
            <span class="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{{
              formatarMoeda(m.valor)
            }}</span>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>
