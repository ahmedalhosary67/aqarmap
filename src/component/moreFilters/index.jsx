import React from "react";
import { Button } from "antd";
import { BiSlider } from 'react-icons/bi';
import './main.css';

export default function SeaMore() {
  const moreFilters = () => {
    const extrafilter = document.querySelectorAll(".extra");
    extrafilter.forEach((element) => {
      if (element.style.height) {
        element.style.height = null;
      } else {
        element.style.height = element.scrollHeight + "px";
      }
    });
  };
  return <Button className="seeMoreButton" type="link" onClick={moreFilters}><BiSlider /> More filters</Button>;
}
