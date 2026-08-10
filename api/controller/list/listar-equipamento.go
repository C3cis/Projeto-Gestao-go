package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/equipamentos"
	"github.com/gin-gonic/gin"
)

func ListarEquipamentos(c *gin.Context) {
	lista, err := equipamentos.Listar()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list equipment"})
		return
	}

	c.JSON(200, lista)
}
