// rutas.js
import express from 'express';
const router = express.Router();

// Ejemplo de ruta
router.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente ✅' });
});

// Más rutas aquí...
// router.post('/productos', (req, res) => { ... });

export default router;
