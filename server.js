// server.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// 🔧 Configura tu conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zyra_db",
  password: "1234",
  port: 5432,
});

// 📦 Ruta para obtener todos los productos
app.get("/api/productos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error al consultar productos:", err);
    res.status(500).send("Error al obtener productos");
  }
});

// 🚀 Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor API Zyra escuchando en http://localhost:${PORT}`);
});
