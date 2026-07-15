import type { Pedido } from '~/types/pedidos'

export function usePedidos(){
    const pedidos = ref<Pedido[]>([]);
    const error = ref(false);
    const carregando = ref(false);

    async function buscarPedidos(){
        carregando.value = true;
        const config = useRuntimeConfig();
        
        try {
            const dados = await $fetch<Pedido[]>(`${config.public.apiBase}/api/pedidos`);
            pedidos.value = dados;
        } catch (e) {
            error.value = true;
        } finally {
            carregando.value = false;
        }
    }

    async function adicionarPedido(novoPedido: Omit<Pedido, 'id'>){
        const config = useRuntimeConfig();
        carregando.value = true;
        error.value = false;
        try {
            const response = await $fetch(`${config.public.apiBase}/api/pedidos`, {
                method: 'POST',
                body: novoPedido,
            });
            await buscarPedidos();
            return response;
        } catch (e) {
            error.value = true;
        } finally {
            carregando.value = false;
        }
    }

    async function deletarPedido(id: number){
        const config = useRuntimeConfig();
        carregando.value = true;
        error.value = false;
        try{
            const response = await $fetch(`${config.public.apiBase}/api/pedidos/${id}`, {
                method: 'DELETE'
            });
            await buscarPedidos();
            return response;
        } catch (e) {
            error.value = true;
        } finally {
            carregando.value = false;
        }
    }

    const totalPedidos = computed (()=> pedidos.value.length);

    const pedidosUrgentes = computed (() =>
        pedidos.value.filter(pedido => pedido.statusSensorPedido === 'Urgencia').length);

    const pedidosConcluidos = computed (() =>
        pedidos.value.filter(pedido => pedido.statusPedido === 'Concluido').length);

    const pedidosCancelados = computed (() =>
        pedidos.value.filter(pedido => pedido.statusPedido === 'Cancelado').length);
    
    const pedidosEmTriagem = computed (() => 
        pedidos.value.filter(pedido => pedido.statusPedido == 'Em Triagem').length);

    const pedidosPendentes = computed (() => 
        pedidos.value.filter(pedido => pedido.statusPedido == 'Pendente').length);

    const filtroStatus = ref('todos')
  const pedidosFiltrados = computed(() => {
    if (filtroStatus.value == 'todos')
      return pedidos.value
    return pedidos.value.filter((p) => p.statusPedido === filtroStatus.value || p.statusSensorPedido === filtroStatus.value)
  })
    
    return { pedidos, buscarPedidos, adicionarPedido, deletarPedido, totalPedidos, pedidosUrgentes, pedidosConcluidos, pedidosCancelados, pedidosEmTriagem, pedidosPendentes, error, carregando, filtroStatus, pedidosFiltrados};
}