const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const reservasRoutes = require("./routes/reservas");

dotenv.config();

const app = express();

// Configuração do CORS antes de outros middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // Permite requisições do frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Permite métodos específicos
    allowedHeaders: ["Content-Type", "Authorization"], // Permite cabeçalhos específicos
  })
);

// Middleware para parsing de JSON
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/reservas", reservasRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
