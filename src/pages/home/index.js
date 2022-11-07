import axios from "axios";
import React, { useEffect } from "react";
import Banner from "../../component/banner/index";
import Details from "./../../component/details/index";

const HomePage = () => {
  const [ state, setState ] = React.useState([]);
  useEffect(() => {
    init();
  }, []);
   const init = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setState(data)
    console.log(data);
  }

  return (
    <div>
      {/* {state.map((item) => <div key={item.id}>{item.title}</div>)} */}
      <Banner />
      <Details data={state} />
    </div>
  );
};

export default HomePage;
