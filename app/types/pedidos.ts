export type StatusPedido = 'Pendente' | 'Em Triagem' | 'Concluido' | 'Cancelado'

export type StatusSensorPedido = 'Urgencia' | 'Alerta' | 'Normal'

export interface Pedido {
  id: number
  tecnicoId: number
  tecnicoNome?: string
  descricao: string
  statusPedido: StatusPedido
  dataCriacao: string
  prazo: string
  statusSensorPedido: StatusSensorPedido
}
