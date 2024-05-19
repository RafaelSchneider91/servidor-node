import {sql} from './db.js'

const sql = `CREATE TABLE videos (
    title TEXT,
    description TEXT,
    duration INTEGER`

sql = sql.then(() => {
    console.log('Tabela criada!')
})