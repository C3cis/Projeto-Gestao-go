package deletar

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/pedidos"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarPedido(c *gin.Context) {
	idPedido := c.Param("id")

	id, err := bson.ObjectIDFromHex(idPedido)
	if err != nil {
		c.JSON(400, gin.H{"error": "ID inválido"})
		return
	}

	deletados, err := pedidos.Deletar(id)
	if err != nil {
		c.JSON(500, gin.H{"error": "Erro ao deletar pedido"})
		return
	}

	if deletados == 0 {
		c.JSON(404, gin.H{"error": "Pedido não encontrado"})
		return
	}

	c.JSON(200, gin.H{"message": "Pedido deletado com sucesso"})
}
