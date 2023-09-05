


import "./App.css"
import PolynomialRoots from "./routes/PolynomialRoots/PolynomialRoots";
import Home from "./routes/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import LinearAlgebric from "./routes/LinearAlgebric/LinearAlgebric";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const clickHandler = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div onClick={clickHandler} className="color-mode-btn">
        {
          !darkMode ? <DarkModeIcon style={{ color: "var(--dark)" }} fontSize={"large"} /> : <WbSunnyIcon style={{ color: "var(--dark)" }} fontSize={"large"} />
        }
      </div>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="polynomialroot" element={<PolynomialRoots />} />
          <Route path="linearalgebric" element={<LinearAlgebric />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
