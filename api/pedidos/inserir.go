package pedidos

import (
	"context"
	"time"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
)

func Inserir(tecnicoId, descricao, statusPedido string, prazo time.Time, statusAviso string) error {
	_, err := mongo.Russaninha.Collection("pedidos").InsertOne(context.TODO(), map[string]interface{}{
		"tecnicoId":    tecnicoId,
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
