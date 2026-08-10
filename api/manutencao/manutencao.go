package manutencao

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Manutencao struct {
	ID             bson.ObjectID `bson:"_id" json:"id"`
	EquipamentoID  string        `bson:"equipamentoId" json:"equipamentoId"`
	TipoManu       string        `bson:"tipoManu" json:"tipoManu"`
	Descricao      string        `bson:"descricao" json:"descricao"`
	DataAbertura   time.Time     `bson:"dataAbertura" json:"dataAbertura"`
	DataFechamento time.Time     `bson:"dataFechamento" json:"dataFechamento"`
	Valor          float64       `bson:"valor" json:"valor"`
	Status         string        `bson:"status" json:"status"`
}
