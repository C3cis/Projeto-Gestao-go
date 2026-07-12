<script lang="ts" setup>
// Componente específico de teste
import type { Equipamento } from '~/types/equipamentos'

const emit = defineEmits<{
  salvar: [novo: Omit<Equipamento, 'id'>],
  fechar: []

}>()

const novoEquipamento = ref<Omit<Equipamento, 'id'>>({
  nome: '',
  descricao: '',
  localizacao: '',
  status: 'Ativo',
  dataAquisicao: '',
})

function enviar() {
  emit('salvar', novoEquipamento.value)
  // Limpar o formulário após o envio
  novoEquipamento.value = {
    nome: '',
    descricao: '',
    localizacao: '',
    status: 'Ativo',
    dataAquisicao: '',
  }
  emit('fechar') // fecha o modal depois de salvar
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
      <span class="font-medium text-gray-900">Novo equipamento</span>
      <button @click="emit('fechar')" class="text-gray-400 hover:text-gray-600">✕</button>
    </div>

    <!-- Campos -->
    <div class="px-5 py-4 flex flex-col gap-3">
      <input v-model="novoEquipamento.nome" placeholder="Nome" />
      <input v-model="novoEquipamento.descricao" placeholder="Descrição" />
      <input v-model="novoEquipamento.localizacao" placeholder="Localização" />
      <select v-model="novoEquipamento.status">
        <option value="Ativo">Ativo</option>
        <option value="Manutencao">Manutenção</option>
        <option value="Inativo">Inativo</option>
      </select>
      <input type="date" v-model="novoEquipamento.dataAquisicao" />
    </div>

    <!-- Rodapé -->
    <div class="flex justify-end gap-2 px-5 py-4 border-t border-gray-100">
      <button @click="emit('fechar')">Cancelar</button>
      <button @click="enviar" class="bg-blue-500 text-white px-4 py-1.5 rounded-lg">Salvar</button>
    </div>

  </div>
</div>

</template>
