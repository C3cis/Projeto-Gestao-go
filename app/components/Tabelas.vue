<script setup lang="ts">
  defineProps({
    colunas: {
      type: Array as PropType<{ titulo: string; chave: string; formato?: (valor: any) => string }[]>,
    },
    dados: {
      type: Array as PropType<Record<string, unknown>[]>,
    },
  })
</script>

<template>
  <section class="rounded-2.5 w-full overflow-x-auto bg-purple-50 p-2.5 dark:bg-rose-100/93">
    <table class="mt-3.75 w-full border-collapse bg-white dark:bg-neutral-800">
      <thead>
        <tr>
          <th
            v-for="coluna in colunas"
            :key="coluna.chave"
            class="bg-rose-300 px-3 py-3.75 text-left text-sm font-semibold text-white dark:bg-rose-500/55">
            {{ coluna.titulo }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in dados" :key="index">
          <td
            v-for="coluna in colunas"
            :key="coluna.chave"
            class="border-r border-b px-3 py-5 align-middle text-sm text-black dark:text-white">
            {{ coluna.formato ? coluna.formato(item[coluna.chave]) : item[coluna.chave] }}

          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
