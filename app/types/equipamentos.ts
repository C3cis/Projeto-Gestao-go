export type StatusEquipamento = 'Ativo' | 'Inativo' | 'Manutencao';

export interface Equipamento {
  id: number;
  nome: string;
  descricao: string;
  status: StatusEquipamento;
  localizacao: string;
  dataAquisicao: string;
}