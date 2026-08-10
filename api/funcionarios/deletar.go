package funcionarios

import (
	"context"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func Deletar(id bson.ObjectID) (int64, error) {
	result, err := mongo.Russaninha.Collection("funcionarios").DeleteOne(context.TODO(), map[string]interface{}{"_id": id})
	if err != nil {
		return 0, err
	}
	return result.DeletedCount, nil
}
