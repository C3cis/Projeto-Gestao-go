package pedidos

import "git.cbpf.br/ceciliarussano/projetogestao/api/funcionarios"

type FuncPedi struct {
	Funcionario funcionarios.Funcionario
	Pedido      Pedidos
}
