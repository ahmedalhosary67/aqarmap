import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar/index";
import HomePage from "./pages/home/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
