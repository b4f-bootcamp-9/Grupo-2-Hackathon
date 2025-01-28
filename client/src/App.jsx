import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./Components/Calendario";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
