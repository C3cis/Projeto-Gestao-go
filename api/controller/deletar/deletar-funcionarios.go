package deletar

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/funcionarios"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func DeletarFuncionario(c *gin.Context) {
	idFuncionario := c.Param("id")

	id, err := bson.ObjectIDFromHex(idFuncionario)
	if err != nil {
		c.JSON(400, gin.H{"error": "ID inválido"})
		return
	}

	deletados, err := funcionarios.Deletar(id)
	if err != nil {
		c.JSON(500, gin.H{"error": "Erro ao deletar funcionario"})
		return
	}

	if deletados == 0 {
		c.JSON(404, gin.H{"error": "Funcionario não encontrado"})
		return
	}

	c.JSON(200, gin.H{"message": "Funcionario deletado com sucesso"})
}