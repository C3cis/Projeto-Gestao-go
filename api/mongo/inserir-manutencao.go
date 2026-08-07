package mongo

import (
	"context"
	"time"
)

func InserirManutencao(equipamentoID, tipoManu, descricao string, dataFechamento time.Time, valor float64, status string) error {
	_, err := Russaninha.Collection("manutencoes").InsertOne(context.TODO(), map[string]interface{}{
		"equipamentoId":   equipamentoID,
		"tipoManu":       tipoManu,
		"descricao":      descricao,
		"dataAbertura":   time.Now(),
		"dataFechamento": dataFechamento,
		"valor":          valor,
		"status":         status,
	})
	if err != nil {
		return err
	}
	return nil
}
