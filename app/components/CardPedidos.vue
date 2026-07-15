<script lang="ts" setup>
 import type { Pedido } from '~/types/pedidos'

 defineProps<{
   pedido: Pedido,
   icone: string
  urgente?: boolean
}>()

const sensorStyles: Record<Pedido['statusSensorPedido'], string> = {
  Urgencia: 'border-rose-400 bg-rose-950/60 text-rose-300',
  Alerta: 'border-amber-400 bg-amber-950/60 text-amber-300',
  Normal: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
}
const pedidoStyles: Record<Pedido['statusPedido'], string> = {
  Pendente: 'border-amber-400 bg-amber-950/60 text-amber-300',
  'Em Triagem': 'border-sky-400 bg-sky-950/60 text-sky-300',
  Concluido: 'border-emerald-400 bg-emerald-950/60 text-emerald-300',
  Cancelado: 'border-neutral-500 bg-neutral-800 text-neutral-400',
}
</script>

<template>
  <article
    class="flex flex-col gap-3 rounded-xl border border-neutral-700 bg-neutral-900 p-4 dark:bg-neutral-800/90"
  >
    <div class="flex items-start justify-between text-2xl">
      <Icon :name="icone" class="h-9 w-9 text-rose-400 " />

      <div class="flex items-center gap-2 mb-2">
        <span
          class="w-fit rounded-full border px-3 py-1 text-[11px] font-semibold"
          :class="pedidoStyles[pedido.statusPedido]"
        >
          {{ pedido.statusPedido }}
        </span>
        <span
          class="w-fit rounded-full border px-3 py-1 text-[11px] font-semibold"
          :class="sensorStyles[pedido.statusSensorPedido]"
        >
          {{ pedido.statusSensorPedido }}
        </span>
      </div>
    </div>

    <div class="flex flex-row gap-x-6 gap-y-3 sm:grid-cols-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-400">Pedido:</span>
        <span class="text-xs font-medium text-neutral-100">{{ pedido.descricao }}</span>
        <span class="text-xs text-neutral-400">Técnico: {{ pedido.tecnico }}</span>
      </div>

      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-400">Prazo de Entrega:</span>
        <span class="text-xs font-medium text-neutral-100">{{ pedido.prazo }}</span>
      </div>

      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-semibold text-rose-400">Criado em:</span>
        <span class="text-xs font-medium text-neutral-100">{{ pedido.dataCriacao }}</span>
      </div>
    </div>
  </article>
  </template>