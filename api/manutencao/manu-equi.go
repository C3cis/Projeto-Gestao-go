package manutencao

import "git.cbpf.br/ceciliarussano/projetogestao/api/equipamentos"

type ManuEqui struct {
	Manutencao  Manutencao
	Equipamento equipamentos.Equipamento
}
