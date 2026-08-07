package mongo

import "context"

func ListarFuncionario() ([]Funcionario, error) {
	cursor, err := Russaninha.Collection("funcionarios").Find(context.TODO(), map[string]interface{}{})

	if err != nil {
		return nil, err
	}

	var funcionarios []Funcionario
	if err := cursor.All(context.TODO(), &funcionarios); err != nil {
		return nil, err
	}

	return funcionarios, nil
}