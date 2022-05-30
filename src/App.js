import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/navbar/index";
import Footer from "./component/footer";
import HomePage from "./pages/home/index";
import Compounds from "./pages/compounds/index";
import Properties from "./pages/properties/index";
import "./App.css";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/compounds" element={<Compounds/>} />
        <Route path="/properties" element={<Properties/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
