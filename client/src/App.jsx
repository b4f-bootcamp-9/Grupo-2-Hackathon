import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./Components/Calendario";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
