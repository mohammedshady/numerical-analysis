


import "./App.css"
import PolynomialRoots from "./routes/PolynomialRoots/PolynomialRoots";
import Home from "./routes/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import LinearAlgebric from "./routes/LinearAlgebric/LinearAlgebric";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="about" Component={<PolynomialRoots />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="polynomialroot" element={<PolynomialRoots />} />
        <Route path="linearalgebric" element={<LinearAlgebric />} />

      </Routes>

    </div>
  );
}

export default App;
