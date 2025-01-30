import "../Styles/Reservas.css";
import React, { useState } from "react";

export function Reservas({ onFilter }) {
  const [salaSelecionada, setSalaSelecionada] = useState("");
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState("");

  const handleSalaChange = (e) => {
    const value = e.target.value;
    setSalaSelecionada(value);
    setEquipamentoSelecionado(""); // Desseleciona o equipamento
    onFilter(value);
  };

  const handleEquipamentoChange = (e) => {
    const value = e.target.value;
    setEquipamentoSelecionado(value);
    setSalaSelecionada(""); // Desseleciona a sala
    onFilter(value);
  };

  const handleClearFilters = () => {
    setSalaSelecionada("");
    setEquipamentoSelecionado("");
    onFilter(""); // Limpa os filtros e mostra todos os eventos
  };

  return (
    <div className="reservas-container">
      <div className="reservas">
        <div className="h1-reservas">
        <h1>Reservas</h1>
        </div>
        
        <h2>Salas</h2>
        <fieldset className="salas">
          <label>
            <input
              type="radio"
              name="salas"
              value="Auditório"
              checked={salaSelecionada === "Auditório"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Auditório
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="Campo de futebol"
              checked={salaSelecionada === "Campo de futebol"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Campo de Futebol
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="Sala de jogos"
              checked={salaSelecionada === "Sala de jogos"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Sala de Jogos
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="Sala de reunião"
              checked={salaSelecionada === "Sala de reunião"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Sala de Reunião
          </label>
        </fieldset>
      </div>

      <div>
        <h2>Equipamento</h2>
        <fieldset className="equipamento">
          <label>
            <input
              type="radio"
              name="equipamento"
              value="Computador"
              checked={equipamentoSelecionado === "Computador"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
            />
            Computador
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
              value="Mesa de matraquilhos"
              checked={equipamentoSelecionado === "Mesa de matraquilhos"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
            />
            Mesa de Matraquilhos
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
              value="Raquetes"
              checked={equipamentoSelecionado === "Raquetes"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
            />
            Raquetes
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
              value="Mesa de pingue-pongue"
              checked={equipamentoSelecionado === "Mesa de pingue-pongue"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
            />
            Mesa de Pingue-Pongue
          </label>
        </fieldset>
        <button onClick={handleClearFilters} className="botao-limpar">
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
