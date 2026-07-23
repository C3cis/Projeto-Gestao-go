<script lang="ts" setup>
  // Componente específico de teste
  import type { Equipamento } from '~/types/equipamentos'

  const emit = defineEmits<{
    salvar: [novo: Omit<Equipamento, 'id'>]
    fechar: []
  }>()

  const novoEquipamento = ref<Omit<Equipamento, 'id'>>({
    nome: '',
    descricao: '',
    localizacao: '',
    status: 'Ativo',
    dataAquisicao: '',
  })
// Limpar o formulário após o envio é bom para evitar que os dados permaneçam no formulário quando o modal for reaberto
  function enviar() : void {
    emit('salvar', novoEquipamento.value)
    novoEquipamento.value = {
      nome: '',
      descricao: '',
      localizacao: '',
      status: 'Ativo',
      dataAquisicao: '',
    }
    emit('fechar') 
  }
  // fecha o modal depois de salvar
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    @click.self="emit('fechar')">
    <div class="w-full max-w-sm rounded-xl border border-gray-200 bg-white">
      <div class="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <span class="font-medium text-gray-900">Cadastro de Equipamento</span>
        <button @click="emit('fechar')" class="text-gray-400 hover:text-gray-600">✕</button>
      </div>

      <div class="flex flex-col gap-3 px-5 py-4">
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

      <div class="flex justify-end gap-2 border-t border-gray-100 px-5 py-4">
        <button @click="emit('fechar')">Cancelar</button>
        <button @click="enviar" class="rounded-lg bg-rose-900 px-4 py-1.5 text-white">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>
