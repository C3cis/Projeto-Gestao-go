package deletar

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarEquipamento(c *gin.Context) {
	idEquipamento := c.Param("id")

	id, err := bson.ObjectIDFromHex(idEquipamento)
	if err != nil {
		c.JSON(400, gin.H{"error": "ID inválido"})
		return
	}

	deletados, err := mongo.DeletarEquipamento(id)
	if err != nil {
		c.JSON(500, gin.H{"error": "Erro ao deletar equipamento"})
		return
	}

	if deletados == 0 {
		c.JSON(404, gin.H{"error": "Equipamento não encontrado"})
		return
	}

	c.JSON(200, gin.H{"message": "Equipamento deletado com sucesso"})
}
