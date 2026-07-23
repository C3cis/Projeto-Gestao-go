import type { ItemDashboard } from '~/types/dashboard'
import type { Funcionario } from '~/types/funcionarios'

interface UseFuncionariosReturn {
  funcionarios: Ref<Funcionario[]>
  error: Ref<boolean>
  carregando: Ref<boolean>
  buscarFuncionarios: () => Promise<void>
  adicionarFuncionario: (novoFuncionario: Omit<Funcionario, 'id'>) => Promise<void>
  deletarFuncionario: (id: number) => Promise<void>
  totalFuncionarios: ComputedRef<number>
  funcionariosAtivos: ComputedRef<number>
  funcionariosInativos: ComputedRef<number>
  funcionariosSuspensos: ComputedRef<number>
  filtroStatus: Ref<string>
  funcionariosFiltrados: ComputedRef<Funcionario[]>
  ausentes: ComputedRef<ItemDashboard[]>
}

function mapParaItemDashboard(funcionario: Funcionario): ItemDashboard {
  return {
    id: funcionario.id,
    titulo: funcionario.nome,
    subtitulo: `Status: ${funcionario.status}`,
  }
}

export function useFuncionarios(): UseFuncionariosReturn {
  const funcionarios = ref<Funcionario[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarFuncionarios(): Promise<void> {
    carregando.value = true
    const config = useRuntimeConfig()

    try {
      const dados = await $fetch<Funcionario[]>(`${config.public.apiBase}/api/funcionarios`)
      funcionarios.value = dados
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function adicionarFuncionario(novoFuncionario: Omit<Funcionario, 'id'>): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false

    try {
      await $fetch(`${config.public.apiBase}/api/funcionarios`, {
        method: 'POST',
        body: novoFuncionario,
      })

      await buscarFuncionarios()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }
  async function deletarFuncionario(id: number): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false

    try {
      await $fetch(`${config.public.apiBase}/api/funcionarios/${id}`, {
        method: 'DELETE',
      })
      await buscarFuncionarios()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  const totalFuncionarios = computed(() => funcionarios.value.length)

  const funcionariosAtivos = computed(
    () => funcionarios.value.filter((funcionario) => funcionario.status === 'Ativo').length,
  )

  const funcionariosInativos = computed(
    () => funcionarios.value.filter((funcionario) => funcionario.status === 'Inativo').length,
  )

  const funcionariosSuspensos = computed(
    () => funcionarios.value.filter((funcionario) => funcionario.status === 'Suspenso').length,
  )

  const filtroStatus = ref('todos')
  const funcionariosFiltrados = computed(() => {
    if (filtroStatus.value === 'todos') {
      return funcionarios.value
    }
    return funcionarios.value.filter((funcionario) => funcionario.status === filtroStatus.value)
  })

  const ausentes = computed(() =>
    funcionarios.value
      .filter((f) => f.status === 'Nas Ferias' || f.status === 'Suspenso')
      .map((funcionario) => mapParaItemDashboard(funcionario)),
  )

  return {
    funcionarios,
    error,
    carregando,
    buscarFuncionarios,
    adicionarFuncionario,
    deletarFuncionario,
    totalFuncionarios,
    funcionariosAtivos,
    funcionariosInativos,
    funcionariosSuspensos,
    filtroStatus,
    funcionariosFiltrados,
    ausentes,
  }
}
