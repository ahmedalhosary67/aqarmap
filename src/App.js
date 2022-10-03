import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/navbar/index";
import Footer from "./component/footer";
import HomePage from "./pages/home/index";
import Compounds from "./pages/compounds/index";
import Properties from "./pages/properties/index";
import SearchFilter from "./pages/searchFilters";
import "./App.css";
import { Data, User } from "./context/context";
import FaceApis from "../src/services/data.json";

function App() {
  const [user, setUser] = useState(FaceApis);
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   console.log(data)

  // },[data])
  return (
    <Router>
      <NavBar />
      
        <Data.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compounds" element={<Compounds />} />
            <Route path="/properties/:type" element={<User.Provider value={{ user, setUser }}><Properties /></User.Provider>} />
            <Route path="/searchFilter" element={<SearchFilter />} />
          </Routes>
        </Data.Provider>
      
      <Footer />
    </Router>
  );
}

export default App;
