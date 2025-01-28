import React from "react";
import "../Styles/HomePage.css";

import { useNavigate } from "react-router-dom";
import { Calendario } from "../Components/Calendario";
import { Reservas } from "../Components/Reservas";
import { Updates } from "../Components/Updates";

export function HomePage() {
  return (
    <div className="homepage-container">
      <div>
        <Reservas />
      </div>
      <div>
        <Calendario />
      </div>
      <div>
        <Updates />
      </div>
    </div>
  );
}
