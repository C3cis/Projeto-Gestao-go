import express from 'express'
import cors from 'cors'
import equipamentosRouter from './src/routes/equipamentos'
import funcionariosRouter from './src/routes/funcionarios'
import pedidosRouter from './src/routes/pedidos'
import manutencaoRouter from './src/routes/manutencao'

const app = express()
const PORT = process.env.PORT || 8080

// middlewares globais
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

// rotas
app.use('/api/equipamentos', equipamentosRouter)
app.use('/api/funcionarios', funcionariosRouter) 
app.use('/api/pedidos', pedidosRouter)
app.use('/api/manutencao', manutencaoRouter)


// iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`)
})