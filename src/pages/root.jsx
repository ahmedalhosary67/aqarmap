import React, { useState } from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import NavBar from "./../component/navbar/index";
import Footer from "./../component/footer";
import { Data, User } from "../context/context";
import { Lang } from "../context/lang.js";
import "../styles/style.css";

function Root() {
  const [lang, setLang] = useState("en");
  const [data, setData] = useState([]);
  return (
    <Lang.Provider value={{ lang, setLang }}>
      <div className={`wrapper ${lang === "en"? "ltr": "rtl"}`}>
        <NavBar />
        <Data.Provider value={{ data, setData }}>
          <Outlet />
        </Data.Provider>
        <Footer />
      </div>
    </Lang.Provider>
  );
}
export default Root;
