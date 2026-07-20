import type { ItemDashboard } from '~/types/dashboard'
import type { Equipamento } from '~/types/equipamentos'

export function useEquipamentos() {
  const equipamentos = ref<Equipamento[]>([]) //para a listagem dos equipamentos
  const error = ref(false)
  const carregando = ref(false)

  //organizar as funcoes para colocar todo o metodo CRUD
  //Funcao para listar e buscar os dados dos equipamentos
  async function buscarEquipamentos() {
    carregando.value = true
    const config = useRuntimeConfig()

    try {
      const dados = await $fetch<Equipamento[]>(`${config.public.apiBase}/api/equipamentos`)
      equipamentos.value = dados
    } catch (e) {
      error.value = true
    } finally {
      carregando.value = false
    }
  }

  //Funcao para dar um POST e poder adicionar um equipamento novo pelo formulario
  //Ter o omit ID para o usuario não preencher esse campo
  async function adicionarEquipamento(novoEquipamento: Omit<Equipamento, 'id'>) {
    const config = useRuntimeConfig()
    carregando.value = true
    error.value = false
    try {
      const response = await $fetch(`${config.public.apiBase}/api/equipamentos`, {
        //metodo para postar dados novos
        method: 'POST',
        //Body: estrutura de dados que estabelecemos que sera enviado (Json) necessario para o metodo POST
        body: novoEquipamento,
      })
      //Atualizar a nossa tabela de equipamentos depois de criar um novo
      await buscarEquipamentos()
      return response
      //try catch para caso exista um erro na hora de adicionar o equipamento
    } catch (e) {
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
    } catch (e) {
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
    if (filtroStatus.value == 'todos') return equipamentos.value
    return equipamentos.value.filter((e) => e.status == filtroStatus.value)
  })
  //Verificar funcao
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
