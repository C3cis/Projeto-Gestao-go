import { Router } from 'express'
import { db } from '../db'

const router= Router()

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(
     `SELECT m.*, e.nome AS equipamentoNome
       FROM manutencoes m
       JOIN equipamentos e ON m.equipamentoId = e.id`
    )
    res.json(rows)
  } catch (e) {
    res.status(500).json({ erro: 'Erro ao buscar manutenção' })
  }
})

router.post('/', async (req, res) => {
    try {
        const {equipamentoId, tipoManu, descricao, dataAbertura, dataFechamento, valor, status} = req.body
        await db.query(
            'INSERT INTO manutencoes (equipamentoId, tipoManu, descricao, dataAbertura, dataFechamento, valor, status) VALUES (?,?,?,?,?,?,?)',
            [equipamentoId, tipoManu, descricao, dataAbertura, dataFechamento, valor, status]
        )
        res.status(201).json({ mensagem: 'Manutenção criado com sucesso' })
    } catch (e) {
        res.status(500).json({ erro: 'Erro ao criar manutenção' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await db.query ('DELETE FROM manutencoes WHERE id = ?', [req.params.id])
        res.json({ mensagem: 'Manutenção deletado com sucesso' })
    } catch (e) {
        res.status(500).json({ erro: 'Erro ao deletar Manutenção' })
    }
})

export default router