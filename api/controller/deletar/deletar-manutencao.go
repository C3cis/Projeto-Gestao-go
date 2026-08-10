package deletar

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/manutencao"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarManutencao(c *gin.Context) {
	idManutencao := c.Param("id")

	id, err := bson.ObjectIDFromHex(idManutencao)
	if err != nil {
		c.JSON(400, gin.H{"error": "ID inválido"})
		return
	}

	deletados, err := manutencao.Deletar(id)
	if err != nil {
		c.JSON(500, gin.H{"error": "Erro ao deletar manutencao"})
		return
	}

	if deletados == 0 {
		c.JSON(404, gin.H{"error": "Manutencao não encontrada"})
		return
	}

	c.JSON(200, gin.H{"message": "Manutencao deletada com sucesso"})
}
