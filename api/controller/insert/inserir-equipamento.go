package insert

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"github.com/gin-gonic/gin"
)

type InserirEquipamentoRequest struct {
	Nome          string `json:"nome"`
	Descricao     string `json:"descricao"`
	Status        string `json:"status"`
	Localizacao   string `json:"localizacao"`
}

func InserirEquipamento(c *gin.Context) {
	var req InserirEquipamentoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request body"})
		return
	}

	statusValidos := map[string]bool{
		"ativo":      true,
		"inativo":    true,
		"manutencao": true,
	}
	if !statusValidos[req.Status] {
		c.JSON(400, gin.H{"error": "status inválido"})
		return
	}

	if err := mongo.InserirEquipamento(req.Nome, req.Descricao, req.Status, req.Localizacao); err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert equipment"})
		return
	}

	c.JSON(201, gin.H{"message": "Equipamento inserido com sucesso"})
}
