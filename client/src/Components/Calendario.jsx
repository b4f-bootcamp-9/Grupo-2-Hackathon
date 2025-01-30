import React, { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import "../Styles/Calendario.css";
<<<<<<< HEAD
import Modal from "./Modal";
import EditModal from "./EditModal";
=======
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
import ptLocale from "@fullcalendar/core/locales/pt";

const getEventColor = (descricao) => {
  const cores = {
    Auditório: "#FF5733",
    "Campo de futebol": "#33FF57",
    "Sala de jogos": "#3357FF",
    "Sala de reunião": "#FF33A8",
    Computador: "#33FFF5",
    Raquetes: "#FFC733",
    "Mesa de matraquilhos": "#8C33FF",
    "Mesa de pingue-pongue": "#FF8C33",
  };
  return cores[descricao] || "#cb904d"; // Cor padrão
};

export function Calendario({ filterDescription }) {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/api/reservas")
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((reserva) => ({
          id: reserva._id,
          title: reserva.nome,
          description: reserva.descricao,
          start: reserva.dataHora,
          allDay: false,
          backgroundColor: getEventColor(reserva.descricao),
        }));
        setEvents(formattedEvents);
      })
      .catch((error) => console.error("Erro ao buscar as reservas:", error));
  }, []);

  const filteredEvents = filterDescription
    ? events.filter((event) => event.description === filterDescription)
    : events;

  const handleDateClick = useCallback((info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  }, []);

  const handleEventClick = useCallback((clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowEditModal(true);
  }, []);

  const handleSaveEvent = (eventData) => {
    const { nome, descricao, hora } = eventData;
    const dataHora = `${selectedDate}T${hora}:00`;

    fetch("http://localhost:3030/api/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao, dataHora }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents((prev) => [
          ...prev,
          {
            id: data._id,
            title: nome,
            description: descricao,
            start: dataHora,
            allDay: false,
            backgroundColor: getEventColor(descricao),
          },
        ]);
        setShowModal(false);
      })
      .catch((error) => console.error("Erro ao adicionar evento:", error));
  };

  const handleUpdateEvent = (eventData) => {
    const { id, nome, descricao, dataHora } = eventData;

    fetch(`http://localhost:3030/api/reservas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao, dataHora }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === id
              ? {
                  ...event,
                  title: nome,
                  description: descricao,
                  start: dataHora,
                  backgroundColor: getEventColor(descricao),
                }
              : event
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => console.error("Erro ao atualizar evento:", error));
  };

  const handleDeleteEvent = (id) => {
    fetch(`http://localhost:3030/api/reservas/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== id)
        );
        setShowEditModal(false);
      })
      .catch((error) => console.error("Erro ao excluir evento:", error));
  };

  const renderEventContent = useCallback(
    (eventInfo) => (
      <div
        className="event-content"
        style={{ backgroundColor: eventInfo.event.backgroundColor }}
      >
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.extendedProps.description}</i>
      </div>
    ),
    []
  );

  return (
    <div className="calendario-container">
      <FullCalendar
<<<<<<< HEAD
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrapPlugin,
        ]}
        initialView="dayGridMonth"
        editable
        selectable
        events={filteredEvents}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        locale={ptLocale}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{ today: "Hoje", month: "Mês", week: "Semana", day: "Dia" }}
        themeSystem="bootstrap"
=======
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Plugins necessários
        initialView="dayGridMonth" // Exibição inicial
        editable={true} // Permite arrastar eventos
        selectable = {true} // Permite selecionar datas
        events={events} // Lista de eventos
        dateClick={handleDateClick} // Adiciona eventos ao clicar em uma data
        id="calendario"
        locale={ptLocale}//
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
      />

      {showModal && (
        <Modal
          date={selectedDate}
          onSave={handleSaveEvent}
          onClose={() => setShowModal(false)}
        />
      )}

      {showEditModal && selectedEvent && (
        <EditModal
          event={selectedEvent}
          onUpdate={handleUpdateEvent}
          onDelete={handleDeleteEvent}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}
