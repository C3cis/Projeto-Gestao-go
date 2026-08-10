package equipamentos

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Equipamento struct {
	ID            bson.ObjectID `bson:"_id" json:"id"`
	Nome          string        `bson:"nome" json:"nome"`
	Descricao     string        `bson:"descricao" json:"descricao"`
	Status        string        `bson:"status" json:"status"`
	Localizacao   string        `bson:"localizacao" json:"localizacao"`
	DataAquisicao time.Time     `bson:"dataAquisicao" json:"dataAquisicao"`
}
