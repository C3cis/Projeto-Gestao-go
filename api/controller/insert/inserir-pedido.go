package insert

import (
	"time"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

type InserirPedidoRequest struct {
	TecnicoId  string `json:"tecnicoId" binding:"required"`
	Descricao    string `json:"descricao" binding:"required"`
	StatusPedido string `json:"statusPedido" binding:"required"`
	Prazo        string `json:"prazo" binding:"required"`
	StatusAviso  string `json:"statusAviso" binding:"required"`
}

func InserirPedido(c *gin.Context) {
	var req InserirPedidoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request body"})
		return
	}

	statusPedido := map[string]bool{
		"Em Triagem": true,
		"Concluido":  true,
		"Cancelado":  true,
		"Pendente":   true,
	}
	if !statusPedido[req.StatusPedido] {
		c.JSON(400, gin.H{"error": "status inválido"})
		return
	}

	statusAviso := map[string]bool{
		"Urgencia": true,
		"Alerta":   true,
		"Normal":   true,
	}
	if !statusAviso[req.StatusAviso] {
		c.JSON(400, gin.H{"error": "status de aviso inválido"})
		return
	}

	// data que o usuário seleciona → converte o texto "AAAA-MM-DD" em time.Time
	prazo, err := time.Parse("2006-01-02", req.Prazo)
	if err != nil {
		c.JSON(400, gin.H{"error": "prazo inválido (use o formato AAAA-MM-DD)"})
		return
	}

	if err := mongo.InserirPedido(req.TecnicoId, req.Descricao, req.StatusPedido, prazo, req.StatusAviso); err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert order"})
		return
	}

	c.JSON(201, gin.H{"message": "Pedido inserido com sucesso"})
}
