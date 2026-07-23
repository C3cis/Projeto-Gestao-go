import type { ItemDashboard } from '~/types/dashboard'
import type { Equipamento } from '~/types/equipamentos'

interface UseEquipamentosReturn {
  equipamentos: Ref<Equipamento[]>
  buscarEquipamentos: () => Promise<void>
  adicionarEquipamento: (novoEquipamento: Omit<Equipamento, 'id'>) => Promise<void>
  deletarEquipamento: (id: number) => Promise<void>
  TotalEquipamentos: ComputedRef<number>
  EquipamentosOperacionais: ComputedRef<number>
  EquipamentosManutencao: ComputedRef<number>
  EquipamentosInativos: ComputedRef<number>
  error: Ref<boolean>
  carregando: Ref<boolean>
  filtroStatus: Ref<string>
  equipamentosFiltrados: ComputedRef<Equipamento[]>
  emManutencao: ComputedRef<ItemDashboard[]>
}

function mapParaItemDashboard(equipamento: Equipamento): ItemDashboard {
  return {
    id: equipamento.id,
    titulo: equipamento.nome,
    subtitulo: equipamento.localizacao,
  }
}

export function useEquipamentos(): UseEquipamentosReturn {
  const equipamentos = ref<Equipamento[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarEquipamentos(): Promise<void> {
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

  async function adicionarEquipamento(novoEquipamento: Omit<Equipamento, 'id'>): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/equipamentos`, {
        method: 'POST',
        body: novoEquipamento,
      })
      await buscarEquipamentos()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function deletarEquipamento(id: number): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/equipamentos/${id}`, {
        method: 'DELETE',
      })
      await buscarEquipamentos()
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
  const emManutencao = computed(() =>
    equipamentos.value
      .filter((e) => e.status === 'Manutencao')
      .map((equipamento) => mapParaItemDashboard(equipamento)),
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
