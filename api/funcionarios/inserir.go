package funcionarios

import (
	"context"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Inserir(nome, email, telefone, cargo, status string) error {
	_, err := mongo.Russaninha.Collection("funcionarios").InsertOne(context.TODO(), map[string]interface{}{
		"nome":     nome,
		"email":    email,
		"telefone": telefone,
		"cargo":    cargo,
		"status":   status,
	})
	if err != nil {
		return err
	}
	return nil
}
