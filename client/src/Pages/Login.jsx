import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Erro ao fazer login.");
      } else {
        localStorage.setItem("authToken", data.token); // Armazena o token corretamente
        navigate("/homepage"); // Redireciona para a página "/pedidos"
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="login-page">
      <video autoPlay loop muted className="background-video">
        <source src="./background.mp4" type="video/mp4" />
      </video>
      <div className="login-container">
      <img src="./logo.png" alt="Logo Principal" className="logo" width="200px" height="100px" id="Logo"/>
        <div className="login">
          <h1 className="login-title">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email"></label>
            <div className="input-with-icons">
              {/* <img
                src="/Icon/email-icon.png"
                alt="Email Icon"
                className="input-icon"
              /> */}
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <div className="input-with-icons">
              {/* <img
                src="/Icon/password-icon.png"
                alt="Password Icon"
                className="input-icon"
              /> */}
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>
          </div>
          <div className="btn">
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="Btn1">
            Entrar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
