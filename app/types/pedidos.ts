export type StatusPedido = 'Pendente' | 'Em Triagem' | 'Concluido' | 'Cancelado';

export type StatusSensorPedido = 'Urgencia' | 'Alerta' | 'Normal';

export interface Pedido {
  id: number;
  tecnicoId: number;      // FK → funcionarios.id (qual funcionário é o técnico)
  tecnicoNome?: string;   // vem do JOIN no backend; só para exibir (não é enviado no cadastro)
  descricao: string;
  statusPedido: StatusPedido;
  dataCriacao: string;
  prazo: string; 
  statusSensorPedido: StatusSensorPedido;
}