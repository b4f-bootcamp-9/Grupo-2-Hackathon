import "../Styles/Reservas.css";
import React, { useState } from "react";

export function Reservas() {
  // Usando useState para armazenar o estado dos checkboxes
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);

  // Função para lidar com mudanças nos checkboxes
  const handleCheckbox1Change = (event) => {
    setCheckbox1(event.target.checked);
  };

  const handleCheckbox2Change = (event) => {
    setCheckbox2(event.target.checked);
  };
  const handleCheckbox3Change = (event) => {
    setCheckbox3(event.target.checked);
  };
  const handleCheckbox4Change = (event) => {
    setCheckbox4(event.target.checked);
  };

  const handleCheckbox5Change = (event) => {
    setCheckbox5(event.target.checked);
  };
  const handleCheckbox6Change = (event) => {
    setCheckbox6(event.target.checked);
  };
  const handleCheckbox7Change = (event) => {
    setCheckbox7(event.target.checked);
  };

  return (
    <div className="reservas-container">
      <div className="salas">
        <h1>Reservas</h1>
        <h2>Salas</h2>
        <label>
          <input
            type="checkbox"
            checked={checkbox1}
            onChange={handleCheckbox1Change}
          />
          Sala1
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox2}
            onChange={handleCheckbox2Change}
          />
          Sala2
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox3}
            onChange={handleCheckbox3Change}
          />
          Sala3
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox4}
            onChange={handleCheckbox4Change}
          />
          Sala4
        </label>
      </div>
      <div className="equipamento">
        <h2>Equipamento</h2>
        <label>
          <input
            type="checkbox"
            checked={checkbox5}
            onChange={handleCheckbox5Change}
          />
          Computador
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox6}
            onChange={handleCheckbox6Change}
          />
          Projetor
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox7}
            onChange={handleCheckbox7Change}
          />
          Raquetes
        </label>
      </div>
    </div>
  );
}
