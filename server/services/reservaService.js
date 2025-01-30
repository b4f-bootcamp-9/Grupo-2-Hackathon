const Reserva = require("../models/reserva");

// Criar uma nova reserva
const createReserva = async (req, res) => {
  try {
    const { nome, descricao, dataHora } = req.body;

    // Verifica se todos os campos estão presentes
    if (!nome || !descricao || !dataHora) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    // Cria a reserva com o campo createdAt definido para a data atual
    const novaReserva = new Reserva({
      nome,
      descricao,
      dataHora,
      createdAt: Date.now(),
    });

    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao criar reserva." });
  }
};

// Obter todas as reservas
const getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao obter reservas." });
  }
};

// Editar uma reserva
const editReserva = async (req, res) => {
  try {
    const { id } = req.params; // Pegando o id da reserva a ser editada
    const { nome, descricao, dataHora } = req.body; // Dados para atualização

    const reserva = await Reserva.findById(id);

    if (!reserva) {
      return res.status(404).json({ message: "Reserva não encontrada." });
    }

    // Atualizando os campos da reserva
    reserva.nome = nome || reserva.nome;
    reserva.descricao = descricao || reserva.descricao;
    reserva.dataHora = dataHora || reserva.dataHora;

    await reserva.save(); // Salvando as alterações

    res.status(200).json(reserva); // Retorna a reserva editada
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao editar reserva." });
  }
};

// Deletar uma reserva
const deleteReserva = async (req, res) => {
  try {
    const { id } = req.params; // Pega o id da reserva a partir dos parâmetros da URL

    // Encontra a reserva e a deleta
    const reservaDeletada = await Reserva.findByIdAndDelete(id);

    if (!reservaDeletada) {
      return res.status(404).json({ message: "Reserva não encontrada." });
    }

    res.status(200).json({ message: "Reserva deletada com sucesso." });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao deletar a reserva." });
  }
};

// Obter as reservas mais recentes
const getReservasRecentes = async (req, res) => {
  try {
    const reservasRecentes = await Reserva.find()
      .sort({ createdAt: -1 }) // Ordenar pelo campo createdAt
      .limit(5);
    res.status(200).json(reservasRecentes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro ao obter reservas recentes." });
  }
};

module.exports = {
  createReserva,
  getReservas,
  getReservasRecentes, // Adicionar o novo método exportado
  editReserva,
  deleteReserva,
};
