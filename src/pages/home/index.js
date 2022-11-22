import axios from "axios";
import React, { useContext, useEffect } from "react";
import Banner from "../../component/banner/index";
import { Data } from "../../context/context";
import Details from "./../../component/details/index";

const HomePage = () => {
  const { setData } = useContext(Data);
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        console.log("no");
      });
  };

  return (
    <div>
      <Banner />
      <Details />
    </div>
  );
};

export default HomePage;
