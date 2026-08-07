package mongo

import "context"

func ListarEquipamentos() ([]Equipamento, error) {
	cursor, err := Russaninha.Collection("equipamentos").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var equipamentos []Equipamento
	if err := cursor.All(context.TODO(), &equipamentos); err != nil {
		return nil, err
	}

	return equipamentos, nil
}
