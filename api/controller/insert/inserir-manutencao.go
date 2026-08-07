package insert

import (
	"time"

	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

type InserirManutencaoRequest struct {
	EquipamentoID   string  `json:"equipamentoId"`
	TipoManu       string  `json:"tipoManu"`
	Descricao      string  `json:"descricao"`
	DataFechamento string  `json:"dataFechamento"`
	Valor          float64 `json:"valor"`
	Status         string  `json:"status"`
}

func InserirManutencao(c *gin.Context) {
	var req InserirManutencaoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request body"})
		return
	}

	statusManutencao := map[string]bool{
		"Agendadas":    true,
		"Concluidas":   true,
		"Canceladas":   true,
		"Em andamento": true,
	}
	if !statusManutencao[req.Status] {
		c.JSON(400, gin.H{"error": "status inválido"})
		return
	}

	tipoManu := map[string]bool{
		"Preventiva": true,
		"Corretiva":  true,
		"Urgente":    true,
	}
	if !tipoManu[req.TipoManu] {
		c.JSON(400, gin.H{"error": "tipo de manutenção inválido"})
		return
	}

	// data que o usuário seleciona → converte o texto "AAAA-MM-DD" em time.Time
	dataFechamento, err := time.Parse("2006-01-02", req.DataFechamento)
	if err != nil {
		c.JSON(400, gin.H{"error": "data de fechamento inválida (use o formato AAAA-MM-DD)"})
		return
	}

	if err := mongo.InserirManutencao(req.EquipamentoID, req.TipoManu, req.Descricao, dataFechamento, req.Valor, req.Status); err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert maintenance"})
		return
	}

	c.JSON(201, gin.H{"message": "Manutenção inserida com sucesso"})
}
