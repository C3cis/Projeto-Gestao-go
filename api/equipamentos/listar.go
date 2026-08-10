package equipamentos

import (
	"context"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Listar() ([]Equipamento, error) {
	cursor, err := mongo.Russaninha.Collection("equipamentos").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var equipamentos []Equipamento
	if err := cursor.All(context.TODO(), &equipamentos); err != nil {
		return nil, err
	}

	return equipamentos, nil
}
