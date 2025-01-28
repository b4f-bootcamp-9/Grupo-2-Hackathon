const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const loginRoutes = require("./routes/login");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB diretamente no `mongodb.js`
const mongoUri =
  "mongodb+srv://username:password@cluster0.mongodb.net/userdata?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado!"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));

// Definição do nome da coleção
const collectionName = "users"; // Nome da coleção

// Rotas
app.use("/login", loginRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
