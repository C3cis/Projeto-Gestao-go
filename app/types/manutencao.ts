export type StatusManutencao = 'Agendadas' | 'Concluidas' | 'Canceladas' | 'Urgentes' | 'Em Andamento';

export interface Manutencao {
    id: number;
    equipamentoId: number;
    equipamentoNome?: string;
    tipoManu: string
    descricao: string;
    dataAbertura: string;
    dataFechamento: string;
    valor: number;
    status: StatusManutencao;
}