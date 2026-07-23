export interface NovoEquipamento {
  nome: string
  descricao: string
  status: string
  localizacao: string
  dataAquisicao: string
}

export interface NovoFuncionario {
  nome: string
  email: string
  telefone: string
  cargo: string
  status: string
}

export interface NovoPedido {
  tecnicoId: number
  descricao: string
  statusPedido: string
  dataCriacao: string
  prazo: string
  statusSensorPedido: string
}

export interface NovaManutencao {
  equipamentoId: number
  tipoManu: string
  descricao: string
  dataAbertura: string
  dataFechamento: string
  valor: number
  status: string
}
