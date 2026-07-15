<script lang="ts" setup>
import type { Campo, OpcaoCampo } from '~/types/formulario'

const props = defineProps<{
    titulo: string,
    campos: Campo[]
}>()

const emit = defineEmits<{
    salvar: [dados: Record<string, any>],
    fechar: []
}>()  

// deixa toda opção no mesmo formato { label, valor }, seja ela texto simples ou objeto
function normalizar(op: OpcaoCampo) {
    return typeof op === 'string' ? { label: op, valor: op } : op
}

//funcao para criar o corpo do formulario com os campos e valores iniciais e certos para o que vc precisa
function modeloVazio():Record<string, any> {
    return Object.fromEntries(
        props.campos.map((c) => [
            c.chave,
            c.tipo === 'select' && c.opcoes?.[0] !== undefined ? normalizar(c.opcoes[0]).valor : '',
        ])
    )
}

const modelo = ref<Record<string, any>>(modeloVazio())

function enviar() {
    emit('salvar', {...modelo.value})
    modelo.value = modeloVazio() // limpa o formulário
    emit('fechar')
}
</script>

<template>
  <div
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    @click.self="emit('fechar')"
  >
    <div class="bg-white rounded-xl border border-gray-200 w-full max-w-sm">

      <!-- Cabeçalho -->
      <div class="flex justify-between items-center px-5 py-4 border-b border-gray-100">
        <span class="font-medium text-gray-900">{{ titulo }}</span>
        <button @click="emit('fechar')" class="text-gray-400 hover:text-gray-600">✕</button>
      </div>

      <!-- Campos gerados a partir da configuração -->
      <div class="px-5 py-4 flex flex-col gap-3">
        <template v-for="campo in campos" :key="campo.chave">
          <label class="flex flex-col gap-1 text-sm text-gray-700">
            <span>{{ campo.label }}</span>
            <select v-if="campo.tipo === 'select'" v-model="modelo[campo.chave]">
              <option v-for="op in campo.opcoes" :key="normalizar(op).valor" :value="normalizar(op).valor">{{ normalizar(op).label }}</option>
            </select>
            <input v-else :type="campo.tipo" v-model="modelo[campo.chave]" :placeholder="campo.label" />
          </label>
        </template>
      </div>

      <!-- Rodapé -->
      <div class="flex justify-end gap-2 px-5 py-4 border-t border-gray-100">
        <button @click="emit('fechar')">Cancelar</button>
        <button @click="enviar" class="bg-rose-900 text-white px-4 py-1.5 rounded-lg">Salvar</button>
      </div>

    </div>
  </div>
</template>
