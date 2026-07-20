import { Router } from 'express'

import { db } from '../db'

const router = Router()

// GET — listar todos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM equipamentos')
    res.json(rows)
  } catch {
    res.status(500).json({ erro: 'Erro ao buscar equipamentos' })
  }
})

// POST — criar novo
router.post('/', async (req, res) => {
  try {
    const { nome, descricao, status, localizacao, dataAquisicao } = req.body
    await db.query(
      'INSERT INTO equipamentos (nome, descricao, status, localizacao, dataAquisicao) VALUES (?, ?, ?, ?, ?)',
      [nome, descricao, status, localizacao, dataAquisicao],
    )
    res.status(201).json({ mensagem: 'Equipamento criado com sucesso' })
  } catch {
    res.status(500).json({ erro: 'Erro ao criar equipamento' })
  }
})

// DELETE — excluir
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM equipamentos WHERE id = ?', [req.params.id])
    res.json({ mensagem: 'Equipamento excluído com sucesso' })
  } catch {
    res.status(500).json({ erro: 'Erro ao excluir equipamento' })
  }
})

export default router
