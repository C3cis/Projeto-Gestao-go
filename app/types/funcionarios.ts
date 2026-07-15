export type StatusFuncionario = 'Ativo' | 'Inativo' | 'Suspenso' | 'Nas Ferias' ;

export type CargoFuncionario = 'Administrador' | 'Tecnico de Desenvolvimento' | 'Coordenador' | 'Gerente' | 'Estagiario' | 'Suporte';

export interface Funcionario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cargo: CargoFuncionario;
    status: StatusFuncionario;
}