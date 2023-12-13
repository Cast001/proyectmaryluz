import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/navbar";
import Menu from "./pages/menu/menu";
import Pag1 from "./components/Pag1";
import Pag2 from "./components/Pag2";
import Pag3 from "./components/Pag3";
import Pag4 from "./components/Pag4";
import Pag5 from "./components/Pag5";
import Pag6 from "./components/Pag6";
import Pag7 from "./components/Pag7";
import Pag8 from "./components/Pag8";
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMenu />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/pag1" element={<Pag1 />} />
          <Route path="/pag2" element={<Pag2 />} />
          <Route path="/pag3" element={<Pag3 />} />
          <Route path="/pag4" element={<Pag4 />} />
          <Route path="/pag5" element={<Pag5 />} />
          <Route path="/pag6" element={<Pag6 />} />
          <Route path="/pag7" element={<Pag7 />} />
          <Route path="/Pag8" element={<Pag8 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
