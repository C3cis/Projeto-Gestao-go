package mongo

import (
	"context"
	"time"
)

func InserirPedido( TecnicoId, descricao, statusPedido string, prazo time.Time, statusAviso string) error {
	_, err := Russaninha.Collection("pedidos").InsertOne(context.TODO(), map[string]interface{}{
		"tecnicoId": TecnicoId,
		"descricao":    descricao,
		"statusPedido": statusPedido,
		"dataAbertura": time.Now(),
		"prazo":        prazo,
		"statusAviso":  statusAviso,
	})
	if err != nil {
		return err
	}
	return nil
}
