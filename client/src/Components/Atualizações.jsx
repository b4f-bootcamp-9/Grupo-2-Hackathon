import React, { useState, useEffect } from "react";
import "../Styles/Atualizações.css";

export function Updates() {
  const [reservasRecentes, setReservasRecentes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/reservas/recentes")
      .then((response) => response.json())
      .then((data) => {
        setReservasRecentes(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as reservas recentes:", error);
      });
  }, []);

  return (
    <div className="updates-container">
      <h1 className="text">Atualizações</h1>
      <div className="updates-list">
        {reservasRecentes.map((reserva, index) => (
          <div key={index} className="update-item">
            <p>
              <strong>Nome:</strong> {reserva.nome}
            </p>
            <p>
              <strong>Descrição:</strong> {reserva.descricao}
            </p>
            <p>
              <strong>Data e Hora:</strong>{" "}
              {new Date(reserva.dataHora).toLocaleString("pt-PT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
