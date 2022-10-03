import React from "react";
import { Nav } from "react-bootstrap";

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
  return <Nav.Link onClick={moreFilters}>More filters</Nav.Link>;
}
