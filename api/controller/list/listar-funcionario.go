package list

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/funcionarios"
	"github.com/gin-gonic/gin"
)

func ListarFuncionario(c *gin.Context) {
	lista, err := funcionarios.Listar()
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to list funcionarios"})
		return
	}

	c.JSON(200, lista)
}