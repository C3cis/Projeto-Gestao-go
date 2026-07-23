import mysql from 'mysql2/promise'

// backend Node/MySQL é transitório (migração p/ Go + Mongo) — não vale refatorar o env aqui
/* eslint-disable node/no-process-env */
export const db = mysql.createPool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'lims_dev',
  waitForConnections: true,
  connectionLimit: 10,
  decimalNumbers: true,
})
