package equipamentos

import (
	"context"
	"time"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Inserir(nome, descricao, status, localizacao string) error {
	_, err := mongo.Russaninha.Collection("equipamentos").InsertOne(context.TODO(), map[string]interface{}{
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
