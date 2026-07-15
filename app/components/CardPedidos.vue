<script lang="ts" setup>
 import type { Pedido } from '~/types/pedidos'

 defineProps<{
   pedido: Pedido,
   icone: string
 }>()
  </script>
  <template>
    <article
    class="flex flex-col rounded-[20px] border border-black bg-violet-50 p-2 text-xs dark:bg-neutral-500/60">
    <div class="p-2 text-xl">
      <Icon :name="icone" class="text-3xl text-amber-950 dark:text-rose-200" />

       <p class="mb-3.5 text-sm font-medium dark:text-neutral-50">
        {{ pedido.tecnico }}
      </p>

      <div class="mb-2 flex flex-wrap items-center justify-between text-3xl dark:text-rose-400">
        <h3 class="m-2 gap-1 text-base font-medium">
          {{ pedido.descricao }}
        </h3>

        <h2
          class="mb-4 w-min rounded-[20px] border-2 border-rose-800 bg-red-100 p-[4.3px] text-xs font-medium text-rose-800">
          {{ pedido.statusPedido }}
        </h2>
      </div>

      <div class="m-3 flex flex-col dark:text-neutral-300">
        <p class="text-xs font-medium"> {{ pedido.dataCriacao }}</p>
        <p class="text-xs font-medium">{{ pedido.prazo }}</p>
        <p class="text-xs font-medium"> {{ pedido.statusSensorPedido }}</p>
      </div>
    </div>
  </article>

  </template>