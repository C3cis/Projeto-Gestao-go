package insert

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/funcionarios"
	"github.com/gin-gonic/gin"
)

type InserirFuncionarioRequest struct {
	Nome          string `json:"nome"`
	Email         string `json:"email"`
	Telefone      string `json:"telefone"`
	Cargo   string `json:"cargo"`
	Status        string `json:"status"`
}

func InserirFuncionario(c *gin.Context) {
	var req InserirFuncionarioRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request body"})
		return
	}

	statusFuncionario := map[string]bool{
		"Ativo": true,
		"Inativo": true,
		"Suspenso": true,
		"Nas ferias": true,
	}
	if !statusFuncionario[req.Status] {
		c.JSON(400, gin.H{"error": "status inválido"})
		return
	}

	cargoFuncionario := map[string]bool{
		"Administrador": true,
		"Gerente": true,
		"Tecnico de desenvolvimento": true,
		"Estagiario": true,
		"Suporte": true, 
	}

	if !cargoFuncionario[req.Cargo] {
		c.JSON(400, gin.H{"error": "cargo inválido"})
		return
	}
	if !statusFuncionario[req.Status] {
		c.JSON(400, gin.H{"error": "status inválido"})
		return
	}

	if err := funcionarios.Inserir(req.Nome, req.Email, req.Telefone, req.Cargo, req.Status); err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert employee"})
		return
	}

	c.JSON(201, gin.H{"message": "Funcionário inserido com sucesso"})
}