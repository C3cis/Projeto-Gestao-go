package routes

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/controller/deletar"
	"git.cbpf.br/ceciliarussano/projetogestao/api/controller/insert"
	"git.cbpf.br/ceciliarussano/projetogestao/api/controller/list"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(server *gin.Engine) {
	//rotas para Equipamentos
	server.POST("/equipamentos/inserir", insert.InserirEquipamento)
	server.GET("/equipamentos/listar", list.ListarEquipamentos)
	server.DELETE("/equipamentos/deletar/:id", deletar.DeletarEquipamento)

	//rotas para Funcionarios
	server.POST("/funcionarios/inserir", insert.InserirFuncionario)
	server.GET("/funcionarios/listar", list.ListarFuncionario)
	server.DELETE("/funcionarios/deletar/:id", deletar.DeletarFuncionario)

	//rotas para Manutencao
	server.POST("/manutencao/inserir", insert.InserirManutencao)
	server.GET("/manutencao/listar", list.ListarManutencao)
	server.DELETE("/manutencao/deletar/:id", deletar.DeletarManutencao)

	//rotas para Pedidos
	server.POST("/pedidos/inserir", insert.InserirPedido)
	server.GET("/pedidos/listar", list.ListarPedido)
	server.DELETE("/pedidos/deletar/:id", deletar.DeletarPedido)

}
