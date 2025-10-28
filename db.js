import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zyra_store',
  password: 'tu_contraseña_aquí',
  port: 5432,
});

export default pool;
