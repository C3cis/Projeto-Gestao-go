package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

func ListarPedido(c *gin.Context) {
	pedidos, err := mongo.ListarPedido()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list pedidos"})
		return
	}

	c.JSON(200, pedidos)
}
