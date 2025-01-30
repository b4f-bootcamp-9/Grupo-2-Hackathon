const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: {
    type: String,
    required: true,
    enum: [
      "Auditório",
      "Campo de futebol",
      "Sala de jogos",
      "Sala de reunião",
      "Computador",
      "Raquetes",
      "Mesa de matraquilhos",
      "Mesa de pingue-pongue",
    ],
  },
  dataHora: { type: Date, required: true }, // Data e hora da reserva
  createdAt: { type: Date, default: Date.now }, // Hora de criação da reserva
});

module.exports = mongoose.model("Reserva", ReservaSchema);
