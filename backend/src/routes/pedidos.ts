import { Router } from 'express'

import { db } from '../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT p.*, f.nome AS tecnicoNome
       FROM pedidos p
       JOIN funcionarios f ON p.tecnicoId = f.id`,
    )
    res.json(rows)
  } catch {
    res.status(500).json({ erro: 'Erro ao buscar pedidos' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { tecnicoId, descricao, statusPedido, dataCriacao, prazo, statusSensorPedido } = req.body
    await db.query(
      'INSERT INTO pedidos (tecnicoId, descricao, statusPedido, dataCriacao, prazo, statusSensorPedido) VALUES (?, ?, ?, ?, ?, ?)',
      [tecnicoId, descricao, statusPedido, dataCriacao, prazo, statusSensorPedido],
    )
    res.status(201).json({ mensagem: 'Pedido criado com sucesso' })
  } catch {
    res.status(500).json({ erro: 'Erro ao criar pedido' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM pedidos WHERE id = ?', [req.params.id])
    res.json({ mensagem: 'Pedido deletado com sucesso' })
  } catch {
    res.status(500).json({ erro: 'Erro ao deletar pedido' })
  }
})

export default router
