package mongo

import "context"

func ListarPedido() ([]FuncPedi, error) {
	cursor, err := Russaninha.Collection("pedidos").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var pedidos []Pedidos
	if err := cursor.All(context.TODO(), &pedidos); err != nil {
		return nil, err
	}
	funcionarios, err := ListarFuncionario()
	if err != nil {
		return nil, err
	}
	
	var funcPedi []FuncPedi
	for _, pedido := range pedidos {
		for _, funcionario := range funcionarios {
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
