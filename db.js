// app.js
import postgres from 'postgres'; // Corrigido para ES6 import
import dotenv from 'dotenv'; // Import dotenv com ES6 sintaxe

dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER, // Corrigido de username para user
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Configuração típica para SSL
  },
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});
