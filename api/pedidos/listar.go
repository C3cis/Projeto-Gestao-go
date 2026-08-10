package pedidos

import (
	"context"

	"git.cbpf.br/ceciliarussano/projetogestao/api/funcionarios"
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Listar() ([]FuncPedi, error) {
	cursor, err := mongo.Russaninha.Collection("pedidos").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var pedidos []Pedidos
	if err := cursor.All(context.TODO(), &pedidos); err != nil {
		return nil, err
	}

	listaFuncionarios, err := funcionarios.Listar()
	if err != nil {
		return nil, err
	}

	var funcPedi []FuncPedi
	for _, pedido := range pedidos {
		for _, funcionario := range listaFuncionarios {
			if pedido.TecnicoId == funcionario.ID.Hex() {
				funcPedi = append(funcPedi, FuncPedi{
					Funcionario: funcionario,
					Pedido:      pedido,
				})
			}
		}
	}

	return funcPedi, nil
}
