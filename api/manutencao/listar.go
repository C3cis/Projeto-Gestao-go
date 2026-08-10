package manutencao

import (
	"context"
	"log"

	"git.cbpf.br/ceciliarussano/projetogestao/api/equipamentos"
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Listar() ([]ManuEqui, error) {
	cursor, err := mongo.Russaninha.Collection("manutencoes").Find(context.TODO(), map[string]interface{}{})
	if err != nil {
		return nil, err
	}

	var manutencoes []Manutencao
	if err := cursor.All(context.TODO(), &manutencoes); err != nil {
		return nil, err
	}

	listaEquipamentos, err := equipamentos.Listar()
	if err != nil {
		return nil, err
	}

	log.Println("Manutencoes:", manutencoes)
	log.Println("Equipamentos:", listaEquipamentos)

	var manuEqui []ManuEqui
	for _, manutencao := range manutencoes {
		for _, equipamento := range listaEquipamentos {
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
