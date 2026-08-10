package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/manutencao"
	"github.com/gin-gonic/gin"
)

func ListarManutencao(c *gin.Context) {
	manutencoes, err := manutencao.Listar()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list manutencoes"})
		return
	}

	c.JSON(200, manutencoes)
}
