package mongo

import (
	"context"
	"log"
)

func ListarManutencao() ([]ManuEqui, error) {
	cursor, err := Russaninha.Collection("manutencoes").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var manutencoes []Manutencao
	if err := cursor.All(context.TODO(), &manutencoes); err != nil {
		return nil, err
	}
	equipamentos, err := ListarEquipamentos()
	if err != nil {
		return nil, err
	}
	log.Println("Manutencoes:", manutencoes)
	log.Println("Equipamentos:", equipamentos)

	var manuEqui []ManuEqui
	for _, manutencao := range manutencoes {
		for _, equipamento := range equipamentos {
			log.Println("Comparando:", manutencao.EquipamentoID, "equipamento", equipamento.ID.Hex())
			if manutencao.EquipamentoID == equipamento.ID.Hex() {
				manuEqui = append(manuEqui, ManuEqui{
					Manutencao:  manutencao,
					Equipamento: equipamento,
				})
			}
		}
	}

	return manuEqui, nil
}
