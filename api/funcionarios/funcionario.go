package funcionarios

import "go.mongodb.org/mongo-driver/v2/bson"

type Funcionario struct {
	ID       bson.ObjectID `bson:"_id" json:"id"`
	Nome     string        `bson:"nome" json:"nome"`
	Email    string        `bson:"email" json:"email"`
	Telefone string        `bson:"telefone" json:"telefone"`
	Cargo    string        `bson:"cargo" json:"cargo"`
	Status   string        `bson:"status" json:"status"`
}
