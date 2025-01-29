import React from "react";
import "../Styles/HomePage.css";

import { useNavigate } from "react-router-dom";
import { Calendario } from "../Components/Calendario";
import { Reservas } from "../Components/Reservas";
import { Updates } from "../Components/Updates";

export function HomePage() {
  return (
    <div >
      <div className="Header">
      <img src="./header.svg" alt="Sintra" width="110" height="110" id="Sintra"/>
      <img src="./login.svg" alt="Logout" width="60" height="60" id="Logout"/>
        
      </div>
<div className="homepage-content">
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
      <div className= "Footer">
        <img src="./footer25anos.svg" alt="25 anos" width="300" height="100" id="anos"/>
        <img src="./footerSintra.svg" alt="sintra logo" width="500" height="100" id="sintraLogo"/>
      </div>
 </div>);
}