package mongo

import "context"

func InserirFuncionario(nome, email, telefone, cargo, status string) error {
	_, err := Russaninha.Collection("funcionarios").InsertOne(context.TODO(), map[string]interface{}{
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