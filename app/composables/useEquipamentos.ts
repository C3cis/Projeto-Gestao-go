import type { ItemDashboard } from '~/types/dashboard'
import type { Equipamento } from '~/types/equipamentos'

export function useEquipamentos() {
  const equipamentos = ref<Equipamento[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarEquipamentos() {
    carregando.value = true
    const config = useRuntimeConfig()

    try {
      const dados = await $fetch<Equipamento[]>(`${config.public.apiBase}/api/equipamentos`)
      equipamentos.value = dados
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function adicionarEquipamento(novoEquipamento: Omit<Equipamento, 'id'>) {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      const response = await $fetch(`${config.public.apiBase}/api/equipamentos`, {
        method: 'POST',

        body: novoEquipamento,
      })

      await buscarEquipamentos()
      return response
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function deletarEquipamento(id: number) {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      const response = await $fetch(`${config.public.apiBase}/api/equipamentos/${id}`, {
        method: 'DELETE',
      })
      await buscarEquipamentos()
      return response
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  const TotalEquipamentos = computed(() => equipamentos.value.length)

  const EquipamentosOperacionais = computed(
    () => equipamentos.value.filter((equipamento) => equipamento.status === 'Ativo').length,
  )

  const EquipamentosManutencao = computed(
    () => equipamentos.value.filter((equipamento) => equipamento.status === 'Manutencao').length,
  )

  const EquipamentosInativos = computed(
    () => equipamentos.value.filter((equipamento) => equipamento.status === 'Inativo').length,
  )

  const filtroStatus = ref('todos')
  const equipamentosFiltrados = computed(() => {
    if (filtroStatus.value === 'todos') return equipamentos.value
    return equipamentos.value.filter((e) => e.status === filtroStatus.value)
  })
  function mapParaItemDashboard(equipamento: Equipamento): ItemDashboard {
    return {
      id: equipamento.id,
      titulo: equipamento.nome,
      subtitulo: equipamento.localizacao,
    }
  }
  const emManutencao = computed(() =>
    equipamentos.value.filter((e) => e.status === 'Manutencao').map(mapParaItemDashboard),
  )

  return {
    equipamentos,
    buscarEquipamentos,
    adicionarEquipamento,
    deletarEquipamento,
    TotalEquipamentos,
    EquipamentosOperacionais,
    EquipamentosManutencao,
    EquipamentosInativos,
    error,
    carregando,
    filtroStatus,
    equipamentosFiltrados,
    emManutencao,
  }
}
