import type { Manutencao } from '~/types/manutencao'

interface UseManutencaoReturn {
  manutencao: Ref<Manutencao[]>
  buscarManutencao: () => Promise<void>
  adicionarManutencao: (novaManutencao: Omit<Manutencao, 'id'>) => Promise<void>
  deletarManutencao: (id: number) => Promise<void>
  totalManutencao: ComputedRef<number>
  manutencaoAgendadas: ComputedRef<number>
  manutencaoConcluidos: ComputedRef<number>
  manutencaoCancelados: ComputedRef<number>
  manutencaoUrgentes: ComputedRef<number>
  manutencaoEmAndamento: ComputedRef<number>
  filtroStatus: Ref<string>
  manutencaoFiltrados: ComputedRef<Manutencao[]>
  error: Ref<boolean>
  carregando: Ref<boolean>
}

export function useManutencao(): UseManutencaoReturn {
  const manutencao = ref<Manutencao[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarManutencao(): Promise<void> {
    carregando.value = true
    const config = useRuntimeConfig()

    try {
      const dados = await $fetch<Manutencao[]>(`${config.public.apiBase}/api/manutencao`)
      manutencao.value = dados
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function adicionarManutencao(novaManutencao: Omit<Manutencao, 'id'>): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/manutencao`, {
        method: 'POST',
        body: novaManutencao,
      })
      await buscarManutencao()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function deletarManutencao(id: number): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/manutencao/${id}`, {
        method: 'DELETE',
      })
      await buscarManutencao()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  const totalManutencao = computed(() => manutencao.value.length)

  const manutencaoAgendadas = computed(
    () => manutencao.value.filter((m) => m.status === 'Agendadas').length,
  )

  const manutencaoConcluidos = computed(
    () => manutencao.value.filter((m) => m.status === 'Concluidas').length,
  )

  const manutencaoCancelados = computed(
    () => manutencao.value.filter((m) => m.status === 'Canceladas').length,
  )

  const manutencaoUrgentes = computed(
    () => manutencao.value.filter((m) => m.status === 'Urgentes').length,
  )

  const manutencaoEmAndamento = computed(
    () => manutencao.value.filter((m) => m.status === 'Em Andamento').length,
  )

  const filtroStatus = ref('todos')
  const manutencaoFiltrados = computed(() => {
    if (filtroStatus.value === 'todos') return manutencao.value
    return manutencao.value.filter((e) => e.status === filtroStatus.value)
  })

  return {
    manutencao,
    buscarManutencao,
    adicionarManutencao,
    deletarManutencao,
    totalManutencao,
    manutencaoAgendadas,
    manutencaoConcluidos,
    manutencaoCancelados,
    manutencaoUrgentes,
    manutencaoEmAndamento,
    filtroStatus,
    manutencaoFiltrados,
    error,
    carregando,
  }
}
