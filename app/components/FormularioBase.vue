<script lang="ts" setup>
  import type { Campo, OpcaoCampo } from '~/types/formulario'

  const props = defineProps({
    titulo: { type: String, required: true },
    campos: { type: Array as PropType<Campo[]>, required: true },
    icone: { type: String, default: 'tabler:plus' },
  })

  const emit = defineEmits<{
    salvar: [dados: Record<string, unknown>]
    fechar: []
  }>()

  // classe compartilhada pelos inputs e selects, pra não repetir em cada campo
  const campoClasse =
    'h-10 w-full rounded-[10px] border border-gray-200 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors focus:border-rose-400 focus:ring-1 focus:ring-rose-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100'

  // deixa toda opção no mesmo formato { label, valor }, seja ela texto simples ou objeto
  //Lembrar sempre de colocar a typagem quando der explicit-function-return-type
  function normalizar(op: OpcaoCampo): { label: string; valor: string | number } {
  return typeof op === 'string' ? { label: op, valor: op } : op
}

  //funcao para criar o corpo do formulario com os campos e valores iniciais e certos para o que vc precisa
  function modeloVazio(): Record<string, unknown> {
    return Object.fromEntries(
      props.campos.map((c) => [
        c.chave,
        c.tipo === 'select' && c.opcoes?.[0] !== undefined ? normalizar(c.opcoes[0]).valor : '',
      ]),
    )
  }

  const modelo = ref<Record<string, unknown>>(modeloVazio())

  function enviar() : void {
    emit('salvar', { ...modelo.value })
    modelo.value = modeloVazio() 
    emit('fechar')
  }
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
    @click.self="emit('fechar')">
    <div class="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-neutral-800">
      <!-- Cabeçalho -->
      <div
        class="flex items-center gap-3 border-b border-rose-100 px-6 py-4 dark:border-neutral-800">
        <span
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/40">
          <Icon :name="icone" class="text-lg text-rose-800 dark:text-rose-300" />
        </span>
        <span class="flex-1 text-[17px] font-medium text-neutral-900 dark:text-neutral-100">{{
          titulo
        }}</span>
        <button
          class="text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-200"
          @click="emit('fechar')">
          <Icon name="tabler:x" class="text-lg" />
        </button>
      </div>

      <!-- Campos gerados a partir da configuração -->
      <div class="grid grid-cols-2 gap-4 px-6 py-5">
        <label
          v-for="campo in campos"
          :key="campo.chave"
          class="flex flex-col gap-1.5"
          :class="campo.largura === 'metade' ? 'col-span-1' : 'col-span-2'">
          <span class="text-[13px] text-neutral-500 dark:text-neutral-400">{{ campo.label }}</span>
          <select v-if="campo.tipo === 'select'" v-model="modelo[campo.chave]" :class="campoClasse">
            <option
              v-for="op in campo.opcoes"
              :key="normalizar(op).valor"
              :value="normalizar(op).valor">
              {{ normalizar(op).label }}
            </option>
          </select>
          <input
            v-else
            :type="campo.tipo"
            v-model="modelo[campo.chave]"
            :placeholder="campo.label"
            :class="campoClasse" />
        </label>
      </div>

      <!-- Rodapé -->
      <div
        class="flex justify-end gap-3 border-t border-rose-100 px-6 py-4 dark:border-neutral-800">
        <button
          class="h-9 rounded-[10px] px-4 text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          @click="emit('fechar')">
          Cancelar
        </button>
        <button
          class="h-9 rounded-[10px] bg-rose-950 px-5 text-sm font-medium text-white transition-colors hover:bg-rose-900 dark:bg-rose-700/40 dark:hover:bg-rose-600"
          @click="enviar">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>
