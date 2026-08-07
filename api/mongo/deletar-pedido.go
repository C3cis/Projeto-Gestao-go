package mongo

import (
	"context"

	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarPedido(id bson.ObjectID) (int64, error) {
	result, err := Russaninha.Collection("pedidos").DeleteOne(context.TODO(), map[string]interface{}{"_id": id})
	if err != nil {
		return 0, err
	}
	return result.DeletedCount, nil
}
