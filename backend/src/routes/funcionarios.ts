import { Router } from "express";
import { db } from "../db";

const router = Router();

//Parte de Get
router.get('/', async (req, res) => {
    try{
        const [rows] = await db.query('SELECT * FROM funcionarios');
        res.json(rows);
    } catch (e) {
        res.status(500).json({ erro: 'Erro ao buscar funcionários' });
    }
})

router.post('/', async (req, res) => {
    try{
        const {nome, email, telefone, cargo, status} = req.body
        await db.query(
            'INSERT INTO funcionarios (nome, email, telefone, cargo, status) VALUES (?, ?, ?, ?, ?)',
            [nome, email, telefone, cargo, status]
        )
        res.status(201).json({ mensagem: 'Funcionário criado com sucesso' })
    } catch (e) {
        res.status(500).json({ erro: 'Erro ao criar funcionário' })
    }
})
    router.delete('/:id', async (req, res) => {
        try {
            await db.query('DELETE FROM funcionarios WHERE id = ?', [req.params.id])
            res.json({ mensagem: 'Funcionário excluído com sucesso' })
        } catch (e) {
            res.status(500).json({ erro: 'Erro ao excluir funcionário' })
        }

})

export default router