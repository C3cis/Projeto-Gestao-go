package mongo

import (
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var (
	Russaninha      *mongo.Database
	client          *mongo.Client
)

func Connect() {
	var err error

	client, err = mongo.Connect(options.Client().ApplyURI("mongodb://webdev:webdev2023@web.cbpf.dev.br:27017/?tls=true"))
	if err != nil {
		panic(err)
	}

	Russaninha = client.Database("russaninha")
}
