import type { Manutencao } from '~/types/manutencao'

export function useManutencao() {
  const manutencao = ref<Manutencao[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarManutencao() {
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

  async function adicionarManutencao(novaManutencao: Omit<Manutencao, 'id'>) {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      const response = await $fetch(`${config.public.apiBase}/api/manutencao`, {
        method: 'POST',
        body: novaManutencao,
      })
      await buscarManutencao()
      return response
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function deletarManutencao(id: number) {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      const response = await $fetch(`${config.public.apiBase}/api/manutencao/${id}`, {
        method: 'DELETE',
      })
      await buscarManutencao()
      return response
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  const totalManutencao = computed(() => manutencao.value.length)

  const manutencaoAgendadas = computed(
    () => manutencao.value.filter((manutencao) => manutencao.status === 'Agendadas').length,
  )

  const manutencaoConcluidos = computed(
    () => manutencao.value.filter((manutencao) => manutencao.status === 'Concluidas').length,
  )

  const manutencaoCancelados = computed(
    () => manutencao.value.filter((manutencao) => manutencao.status === 'Canceladas').length,
  )

  const manutencaoUrgentes = computed(
    () => manutencao.value.filter((manutencao) => manutencao.status == 'Urgentes').length,
  )

  const manutencaoEmAndamento = computed(
    () => manutencao.value.filter((manutencao) => manutencao.status == 'Em Andamento').length,
  )

  const filtroStatus = ref('todos')
  const manutencaoFiltrados = computed(() => {
    if (filtroStatus.value == 'todos') return manutencao.value
    return manutencao.value.filter((e) => e.status == filtroStatus.value)
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
