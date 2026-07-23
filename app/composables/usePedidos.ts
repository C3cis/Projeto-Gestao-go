import type { ItemDashboard } from '~/types/dashboard'
import type { Pedido } from '~/types/pedidos'

interface UsePedidosReturn {
  pedidos: Ref<Pedido[]>
  buscarPedidos: () => Promise<void>
  adicionarPedido: (novoPedido: Omit<Pedido, 'id'>) => Promise<void>
  deletarPedido: (id: number) => Promise<void>
  totalPedidos: ComputedRef<number>
  pedidosUrgentes: ComputedRef<number>
  pedidosConcluidos: ComputedRef<number>
  pedidosCancelados: ComputedRef<number>
  pedidosEmTriagem: ComputedRef<number>
  pedidosPendentes: ComputedRef<number>
  error: Ref<boolean>
  carregando: Ref<boolean>
  filtroStatus: Ref<string>
  pedidosFiltrados: ComputedRef<Pedido[]>
  urgentes: ComputedRef<ItemDashboard[]>
}

function mapParaItemDashboard(pedido: Pedido): ItemDashboard {
  return {
    id: pedido.id,
    titulo: pedido.descricao,
    subtitulo: `${pedido.tecnicoNome} · Prazo: ${formatarData(pedido.prazo)}`,
  }
}

export function usePedidos(): UsePedidosReturn {
  const pedidos = ref<Pedido[]>([])
  const error = ref(false)
  const carregando = ref(false)

  async function buscarPedidos(): Promise<void> {
    carregando.value = true
    const config = useRuntimeConfig()

    try {
      const dados = await $fetch<Pedido[]>(`${config.public.apiBase}/api/pedidos`)
      pedidos.value = dados
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function adicionarPedido(novoPedido: Omit<Pedido, 'id'>): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/pedidos`, {
        method: 'POST',
        body: novoPedido,
      })
      await buscarPedidos()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  async function deletarPedido(id: number): Promise<void> {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      await $fetch(`${config.public.apiBase}/api/pedidos/${id}`, {
        method: 'DELETE',
      })
      await buscarPedidos()
    } catch {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  const totalPedidos = computed(() => pedidos.value.length)

  const pedidosUrgentes = computed(
    () => pedidos.value.filter((pedido) => pedido.statusSensorPedido === 'Urgencia').length,
  )

  const pedidosConcluidos = computed(
    () => pedidos.value.filter((pedido) => pedido.statusPedido === 'Concluido').length,
  )

  const pedidosCancelados = computed(
    () => pedidos.value.filter((pedido) => pedido.statusPedido === 'Cancelado').length,
  )

  const pedidosEmTriagem = computed(
    () => pedidos.value.filter((pedido) => pedido.statusPedido === 'Em Triagem').length,
  )

  const pedidosPendentes = computed(
    () => pedidos.value.filter((pedido) => pedido.statusPedido === 'Pendente').length,
  )

  const filtroStatus = ref('todos')
  const pedidosFiltrados = computed(() => {
    if (filtroStatus.value === 'todos') return pedidos.value
    return pedidos.value.filter(
      (p) => p.statusPedido === filtroStatus.value || p.statusSensorPedido === filtroStatus.value,
    )
  })

  const urgentes = computed(() =>
    pedidos.value
      .filter((p) => p.statusSensorPedido === 'Urgencia')
      .map((pedido) => mapParaItemDashboard(pedido)),
  )

  return {
    pedidos,
    buscarPedidos,
    adicionarPedido,
    deletarPedido,
    totalPedidos,
    pedidosUrgentes,
    pedidosConcluidos,
    pedidosCancelados,
    pedidosEmTriagem,
    pedidosPendentes,
    error,
    carregando,
    filtroStatus,
    pedidosFiltrados,
    urgentes,
  }
}
