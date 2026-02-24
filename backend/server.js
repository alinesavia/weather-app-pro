import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error(
    "Erro: A variável de ambiente API_KEY não está definida. O servidor não pode iniciar."
  );
  process.exit(1); // Encerra o processo se a chave não estiver definida
} else {
  console.log(`API_KEY carregada: ****${API_KEY.slice(-4)}`);
}

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ message: "O nome da cidade é obrigatório." });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    console.log(`[Backend] Status da resposta do OpenWeatherMap (Clima): ${response.status}`);

    if (!response.ok) {
      // Repassa o status e a mensagem de erro da API externa
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ message: "Erro interno do servidor ao buscar o clima." });
  }
});

app.get("/forecast", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ message: "O nome da cidade é obrigatório." });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    console.log(`[Backend] Status da resposta do OpenWeatherMap (Previsão): ${response.status}`);

    if (!response.ok) {
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ message: "Erro interno do servidor ao buscar a previsão." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});