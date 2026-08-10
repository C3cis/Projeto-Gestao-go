package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/pedidos"
	"github.com/gin-gonic/gin"
)

func ListarPedido(c *gin.Context) {
	lista, err := pedidos.Listar()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list pedidos"})
		return
	}

	c.JSON(200, lista)
}
