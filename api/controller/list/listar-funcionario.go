package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

func ListarFuncionario(c *gin.Context) {
	funcionarios, err := mongo.ListarFuncionario()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list funcionarios"})
		return
	}

	c.JSON(200, funcionarios)
}