package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

func ListarManutencao(c *gin.Context) {
	manutencoes, err := mongo.ListarManutencao()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list manutencoes"})
		return
	}

	c.JSON(200, manutencoes)
}
