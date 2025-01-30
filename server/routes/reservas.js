const express = require("express");
const {
  createReserva,
  getReservas,
  getReservasRecentes, // Importar o novo método
  editReserva,
  deleteReserva,
} = require("../services/reservaService");

const router = express.Router();

// Rota para criar uma nova reserva
router.post("/", (req, res) => {
  console.log("HEY");
  createReserva(req, res);
});

// Rota para listar todas as reservas
router.get("/", getReservas);

// Rota para listar as reservas mais recentes
router.get("/recentes", getReservasRecentes); // Novo endpoint

// Rota para editar uma reserva
router.put("/:id", editReserva);

// Rota para deletar uma reserva
router.delete("/:id", deleteReserva);

module.exports = router;
