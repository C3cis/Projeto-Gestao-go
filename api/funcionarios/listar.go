package funcionarios

import (
	"context"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Listar() ([]Funcionario, error) {
	cursor, err := mongo.Russaninha.Collection("funcionarios").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var funcionarios []Funcionario
	if err := cursor.All(context.TODO(), &funcionarios); err != nil {
		return nil, err
	}

	return funcionarios, nil
}
