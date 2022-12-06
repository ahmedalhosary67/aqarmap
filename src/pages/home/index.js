import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Banner from "../../component/banner/index";
import { Data } from "../../context/context";
import Details from "./../../component/details/index";

const HomePage = () => {
  const { setData } = useContext(Data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    setLoading(true);
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("no");
      });
  };

  return (
    <>
      <Banner />
      <Details />
    </>
  );
};

export default HomePage;
