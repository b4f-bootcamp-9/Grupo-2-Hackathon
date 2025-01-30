import "../Styles/Reservas.css";
import React, { useState } from "react";

<<<<<<< HEAD
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
=======
export function Reservas() {
  // Estados para armazenar a seleção
  const [salaSelecionada, setSalaSelecionada] = useState("");
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState("");
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005

  return (
    <div className="reservas-container">
      <div className="reservas">
<<<<<<< HEAD
        <div className="h1-reservas">
        <h1>Reservas</h1>
        </div>
        
=======
        <h1>Reservas</h1>
        <p>____________________________</p>
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
        <h2>Salas</h2>
        <fieldset className="salas">
          <label>
            <input
              type="radio"
              name="salas"
<<<<<<< HEAD
              value="Auditório"
              checked={salaSelecionada === "Auditório"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Auditório
=======
              value="auditório1"
              checked={salaSelecionada === "auditório1"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Auditório 1
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
          </label>
          <label>
            <input
              type="radio"
              name="salas"
<<<<<<< HEAD
              value="Campo de futebol"
              checked={salaSelecionada === "Campo de futebol"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Campo de Futebol
=======
              value="auditório2"
              checked={salaSelecionada === "auditório2"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Auditório 2
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
          </label>
          <label>
            <input
              type="radio"
              name="salas"
<<<<<<< HEAD
              value="Sala de jogos"
              checked={salaSelecionada === "Sala de jogos"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Sala de Jogos
=======
              value="salaConferencias"
              checked={salaSelecionada === "salaConferencias"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Sala de Conferências
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
          </label>
          <label>
            <input
              type="radio"
              name="salas"
<<<<<<< HEAD
              value="Sala de reunião"
              checked={salaSelecionada === "Sala de reunião"}
              onChange={handleSalaChange} // Atualiza a seleção de sala
            />
            Sala de Reunião
=======
              value="salaProjeto"
              checked={salaSelecionada === "salaProjeto"}
              onChange={(e) => setSalaSelecionada(e.target.value)}
            />
            Sala de Projeto
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
          </label>
        </fieldset>
      </div>

      <div>
<<<<<<< HEAD
=======
        <p>____________________________</p>
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
        <h2>Equipamento</h2>
        <fieldset className="equipamento">
          <label>
            <input
              type="radio"
              name="equipamento"
<<<<<<< HEAD
              value="Computador"
              checked={equipamentoSelecionado === "Computador"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
=======
              value="computador"
              checked={equipamentoSelecionado === "computador"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
            />
            Computador
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
<<<<<<< HEAD
              value="Mesa de matraquilhos"
              checked={equipamentoSelecionado === "Mesa de matraquilhos"}
              onChange={handleEquipamentoChange} // Atualiza a seleção de equipamento
            />
            Mesa de Matraquilhos
=======
              value="projetor"
              checked={equipamentoSelecionado === "projetor"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            />
            Projetor
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
          </label>
          <label>
            <input
              type="radio"
              name="equipamento"
<<<<<<< HEAD
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
=======
              value="raquetes"
              checked={equipamentoSelecionado === "raquetes"}
              onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            />
            Raquetes
          </label>
        </fieldset>
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
      </div>
    </div>
  );
}
