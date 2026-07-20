<script setup lang="ts">
  defineProps({
    colunas: {
      type: Array as PropType<
        {
          titulo: string
          chave: string
          formato?: (valor: any) => string
          classe?: (valor: any) => string
        }[]
      >,
    },
    dados: {
      type: Array as PropType<Record<string, unknown>[]>,
    },
  })
</script>

<template>
  <section
    class="rounded-2.5 max-h-[70vh] w-full overflow-x-auto overflow-y-auto bg-purple-50 p-2.5 dark:bg-rose-100/70">
    <table class="mt-3.75 w-full border-collapse bg-white dark:bg-neutral-800">
      <thead>
        <tr>
          <th
            v-for="coluna in colunas"
            :key="coluna.chave"
            class="sticky top-0 z-10 bg-rose-300 px-3 py-3.75 text-left text-sm font-semibold text-white dark:bg-rose-500/55">
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
            <span
              :class="
                coluna.classe
                  ? [
                      'inline-block rounded-full border px-2 py-0.5 text-xs',
                      coluna.classe(item[coluna.chave]),
                    ]
                  : ''
              ">
              {{ coluna.formato ? coluna.formato(item[coluna.chave]) : item[coluna.chave] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
