import React, { useState } from "react";
import "../Styles/HomePage.css";
import { useNavigate } from "react-router-dom";
import { Calendario } from "../Components/Calendario";
import { Reservas } from "../Components/Reservas";
import { Updates } from "../Components/Atualizações";

export function HomePage() {
  const navigate = useNavigate();
  const [filterDescription, setFilterDescription] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleFilter = (description) => {
    setFilterDescription(description);
  };

  return (
<<<<<<< HEAD
    <div>
      <div className="Header">
        <img
          src="./header.svg"
          alt="Sintra"
          width="110"
          height="110"
          id="Sintra"
        />
        <img
          src="./logout.svg"
          alt="Logout"
          width="50"
          height="50"
          id="Logout"
          onClick={handleLogout}
        />
=======
    <div >
      <div className="Header">
      <img src="./login.svg" alt="Logo" width="60" height="60"/>
        
      </div>
<div className="homepage-content">
      <div>
        <Reservas />
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
      </div>
      <div className="homepage-content">
        <div>
          <Reservas onFilter={handleFilter} />
        </div>
        <div>
          <Calendario filterDescription={filterDescription} />
        </div>
        <div>
          <Updates />
        </div>
      </div>
      <div className="Footer">
        <img
          src="./footer25anos.svg"
          alt="25 anos"
          width="300"
          height="100"
          id="anos"
        />
        <img
          src="./footerSintra.svg"
          alt="sintra logo"
          width="500"
          height="100"
          id="sintraLogo"
        />
      </div>
<<<<<<< HEAD
=======
      </div>
>>>>>>> 5307e5723f1936c9dd5602e637d9bec957eca005
    </div>
  );
}