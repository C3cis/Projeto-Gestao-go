package mongo

import (
	"context"
	"time"
)

func InserirEquipamento(nome, descricao, status, localizacao string) error {
	_, err := Russaninha.Collection("equipamentos").InsertOne(context.TODO(), map[string]interface{}{
		"nome":          nome,
		"descricao":     descricao,
		"status":        status,
		"localizacao":   localizacao,
		"dataAquisicao": time.Now(),
	})
	if err != nil {
		return err
	}
	return nil
}

