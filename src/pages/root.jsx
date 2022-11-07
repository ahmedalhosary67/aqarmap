import React, { useState } from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import NavBar from "./../component/navbar/index";
import Footer from "./../component/footer";

import { Data, User } from "../context/context";
// import FaceApis from "../services/data.json";
import "../styles/style.css";

function Root() {
  // const [user, setUser] = useState(FaceApis);
  const [data, setData] = useState([]);
  return (
    <div className="wrapper">
      <NavBar />

      <Data.Provider value={{ data, setData }}>
        <Outlet />
      </Data.Provider>

      <Footer />
    </div>
  );
}
export default Root;
