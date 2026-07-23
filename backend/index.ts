import cors from 'cors'
import express from 'express'

import equipamentosRouter from './src/routes/equipamentos'
import funcionariosRouter from './src/routes/funcionarios'
import manutencaoRouter from './src/routes/manutencao'
import pedidosRouter from './src/routes/pedidos'

const app = express()
// eslint-disable-next-line node/no-process-env
const PORT = process.env.PORT ?? 8080

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
  // eslint-disable-next-line no-console
  console.log(`Backend rodando em http://localhost:${PORT}`)
})
