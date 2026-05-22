<script setup>
  defineProps({
    colunas: {
      type: Array,
      required: true,
    },
    dados: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <section class="rounded-2.5 w-full overflow-x-auto bg-[#f4f7fe] p-2.5">
    <table class="mt-3.75 w-full border-collapse bg-white">
      <thead>
        <tr>
          <th
            v-for="coluna in colunas"
            :key="coluna.chave"
            class="first:rounded-tl-2.5 last:rounded-tr-2.5 bg-[#2d6cdf] px-3 py-3.75 text-left text-[0.85rem] font-semibold text-white">
            {{ coluna.titulo }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in dados" :key="index">
          <td
            v-for="coluna in colunas"
            :key="coluna.chave"
            class="border-r border-b border-[#e9edf7] px-3 py-3.75 align-middle text-[0.9rem] text-[#1b254b]">
            {{ item[coluna.chave] }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
