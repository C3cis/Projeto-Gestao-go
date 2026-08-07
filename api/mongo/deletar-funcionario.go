package mongo

import (
	"context"

	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarFuncionario(id bson.ObjectID) (int64, error) {
	result, err := Russaninha.Collection("funcionarios").DeleteOne(context.TODO(), map[string]interface{}{"_id": id})
	if err != nil {
		return 0, err
	}
	return result.DeletedCount, nil
}