<script lang="ts" setup>
  import type { Pedido } from '~/types/pedidos'

  defineProps<{
    pedido: Pedido
    icone: string
    urgente?: boolean
  }>()
</script>

<template>
  <article
    class="flex flex-col gap-3 rounded-xl border border-rose-950 bg-violet-50/40 p-4 dark:border-neutral-700 dark:bg-neutral-800/90">
    <div class="flex items-start justify-between text-2xl">
      <Icon :name="icone" class="h-9 w-9 text-rose-500 dark:text-rose-400" />

      <div class="mb-2 flex items-center gap-2">
        <span
          class="w-fit rounded-full border px-3 py-1 text-[11px] font-semibold"
          :class="pedidoStyles[pedido.statusPedido]">
          {{ pedido.statusPedido }}
        </span>
        <span
          class="w-fit rounded-full border px-3 py-1 text-[11px] font-semibold"
          :class="sensorStyles[pedido.statusSensorPedido]">
          {{ pedido.statusSensorPedido }}
        </span>
      </div>
    </div>

    <div class="flex flex-row gap-x-6 gap-y-3 sm:grid-cols-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-600 dark:text-rose-400">Pedido:</span>
        <span class="text-xs font-medium text-neutral-800 dark:text-neutral-100">{{
          pedido.descricao
        }}</span>
        <span class="text-xs text-neutral-500 dark:text-neutral-400"
          >Técnico: {{ pedido.tecnicoNome }}</span
        >
      </div>

      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-600 dark:text-rose-400"
          >Prazo de Entrega:</span
        >
        <span class="text-xs font-medium text-neutral-800 dark:text-neutral-100">{{
          formatarData(pedido.prazo)
        }}</span>
      </div>

      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-600 dark:text-rose-400">Criado em:</span>
        <span class="text-xs font-medium text-neutral-800 dark:text-neutral-100">{{
          formatarData(pedido.dataCriacao)
        }}</span>
      </div>
    </div>
  </article>
</template>
