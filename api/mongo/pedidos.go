package mongo

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Pedidos struct {
	ID bson.ObjectID `bson:"_id" json:"id"`
	TecnicoId string `bson:"tecnicoId" json:"tecnicoId"`
	Descricao string `bson:"descricao" json:"descricao"`
	StatusPedido string `bson:"statusPedido" json:"statusPedido"`
	DataAbertura time.Time `bson:"dataAbertura" json:"dataAbertura"`
	Prazo time.Time `bson:"prazo" json:"prazo"`
	StatusAviso string `bson:"statusAviso" json:"statusAviso"`
}