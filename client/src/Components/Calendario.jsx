import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Importa o calendário principal
import dayGridPlugin from "@fullcalendar/daygrid"; // Exibe o calendário em grade diária
import timeGridPlugin from "@fullcalendar/timegrid"; // Adiciona a visualização em grade de tempo
import interactionPlugin from "@fullcalendar/interaction"; // Permite interações no calendário
import "../Styles/Calendario.css";

export function Calendario() {
  const [events, setEvents] = useState([]); // Estado para armazenar eventos

  // Função para lidar com o clique em uma data
  const handleDateClick = (info) => {
    const title = prompt("Digite o nome do recurso ou evento:");
    if (title) {
      setEvents([
        ...events,
        {
          title, // Nome do evento/recurso
          start: info.dateStr, // Data do evento
          allDay: true, // Evento de dia inteiro
        },
      ]);
    }
  };

  return (
    <div className="calendario-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Plugins necessários
        initialView="dayGridMonth" // Exibição inicial
        editable={true} // Permite arrastar eventos
        selectable={true} // Permite selecionar datas
        events={events} // Lista de eventos
        dateClick={handleDateClick} // Adiciona eventos ao clicar em uma data
        id="calendario"
      />
    </div>
  );
}
