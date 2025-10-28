import express from "express";
import OpenAI from "openai";
import { getAllProducts, getLowStock } from "./models/Product.js";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 🧠 Endpoint de IA
router.post("/zyra", async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error IA:", error);
    res.status(500).json({ error: "Error generando respuesta" });
  }
});

// 📦 Productos
router.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo productos" });
  }
});

// ⚠️ Stock bajo
router.get("/products/low-stock", async (req, res) => {
  try {
    const products = await getLowStock();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo productos" });
  }
});

export default router;
