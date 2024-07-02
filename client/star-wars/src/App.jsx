import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Planet } from "./pages/Planet";
import { Film } from "./pages/Film";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="film/:id" element={<Film />} />
        <Route path="planet/:id" element={<Planet />} />
      </Routes>
    </>
  );
}

export default App;
