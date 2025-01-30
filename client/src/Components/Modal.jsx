import React, { useState } from "react";
import "../Styles/Modal.css";

export default function Modal({ onSave, onClose, date }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !descricao || !hora) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    if (!date) {
      alert("A data selecionada é inválida.");
      return;
    }

    const dataHoraString = `${date}T${hora}:00`;
    const dataHoraISO = new Date(dataHoraString);

    const eventData = {
      nome,
      descricao,
      dataHora: dataHoraISO.toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3080/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar a reserva.");
      }

      const responseData = await response.json();
      onSave(responseData);
      window.location.reload(); // Faz refresh à página após salvar a reserva
    } catch (error) {
      alert("Erro ao salvar a reserva.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome da pessoa:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome da pessoa"
              required
            />
          </div>
          <div>
            <label>Descrição:</label>
            <select
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            >
              <option value="">Selecione a descrição</option>
              <option value="Auditório">Auditório</option>
              <option value="Campo de futebol">Campo de futebol</option>
              <option value="Sala de jogos">Sala de jogos</option>
              <option value="Sala de reunião">Sala de reunião</option>
              <option value="Computador">Computador</option>
              <option value="Raquetes">Raquetes</option>
              <option value="Mesa de matraquilhos">Mesa de matraquilhos</option>
              <option value="Mesa de pingue-pongue">
                Mesa de pingue-pongue
              </option>
            </select>
          </div>
          <div>
            <label>Hora:</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Salvar</button>
            <button
              type="button"
              onClick={() => {
                console.log("Botão cancelar clicado");
                onClose();
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
