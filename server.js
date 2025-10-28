// server.js
import express from 'express';
import cors from 'cors';
import rutas from './rutas.js'; // Importa tu archivo de rutas

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', rutas);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
