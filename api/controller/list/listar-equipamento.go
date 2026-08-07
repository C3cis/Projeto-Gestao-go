package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

func ListarEquipamentos(c *gin.Context) {
	equipamentos, err := mongo.ListarEquipamentos()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list equipment"})
		return
	}

	c.JSON(200, equipamentos)
}
