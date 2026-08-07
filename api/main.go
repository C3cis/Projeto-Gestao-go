package main

import (
	"git.cbpf.br/ceciliarussano/projetogestao/api/mongo"
	"git.cbpf.br/ceciliarussano/projetogestao/api/routes"
	"github.com/gin-gonic/gin"
) 



func main() {
	mongo.Connect()
	server := gin.Default()

	err := server.SetTrustedProxies([]string{
		"127.0.0.1",
		"::1",
		"172.16.0.0/12",
		"10.0.0.0/8",
		"192.168.0.0/16",
	})
	if err != nil {
		panic("Failed to set trusted proxies: " + err.Error())
	}

	routes.SetupRoutes(server)
	server.Run(":8080")

}