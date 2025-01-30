import React, { useState, useEffect } from "react";
import "../Styles/Modal.css";

export default function EditModal({ event, onUpdate, onDelete, onClose }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    if (event) {
      setNome(event.title);
      setDescricao(event.extendedProps.description);
      setHora(new Date(event.start).toISOString().substring(11, 16));
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataHora = `${new Date(event.start)
      .toISOString()
      .substring(0, 10)}T${hora}:00`;

    onUpdate({
      id: event.id,
      nome,
      descricao,
      dataHora,
    });

    // Atrasar o recarregamento da página em 1,5 segundos
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  const handleDelete = () => {
    onDelete(event.id);

    // Atrasar o recarregamento da página em 1,5 segundos
    setTimeout(() => {
      window.location.reload();
    }, 1500);
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
            <button type="button" onClick={handleDelete}>
              Excluir
            </button>
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
