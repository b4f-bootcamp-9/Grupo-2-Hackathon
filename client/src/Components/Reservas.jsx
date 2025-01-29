import "../Styles/Reservas.css";
import React, { useState } from "react";

export function Reservas() {
  // Estados para armazenar a seleção
  const [salaSelecionada, setSalaSelecionada] = useState("");
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState("");

  return (
    <div className="reservas-container">
      <div className="reservas">
        <h1>Reservas</h1>
        <p>____________________________</p>
        <h2>Salas</h2>
        <fieldset className="salas">
          <label>
            <input
              type="radio"
              name="salas"
              value="auditório1"
              checked={salaSelecionada === "auditório1"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Auditório 1
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="auditório2"
              checked={salaSelecionada === "auditório2"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Auditório 2
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="salaConferencias"
              checked={salaSelecionada === "salaConferencias"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Sala de Conferências
          </label>
          <label>
            <input
              type="radio"
              name="salas"
              value="salaProjeto"
              checked={salaSelecionada === "salaProjeto"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Sala de Projeto
          </label>
        </fieldset>
      </div>

      <div>
        <p>____________________________</p>
        <h2>Equipamento</h2>
        <fieldset className="equipamento">
          <label>
            <input
              type="radio"
              name="equipamento"
              value="computador"
              checked={equipamentoSelecionado === "computador"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            />
            Computador
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
              value="projetor"
              checked={equipamentoSelecionado === "projetor"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            />
            Projetor
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
              value="raquetes"
              checked={equipamentoSelecionado === "raquetes"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            />
            Raquetes
          </label>
        </fieldset>
      </div>
    </div>
  );
}
