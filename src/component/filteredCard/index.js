import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CardD from "../card";
import originalFakeData from "../../services/data.json";
import { Data } from "../../context/context";
import { useEffect } from "react";

export default function FilteredCard() {
  const { data, setData } = useContext(Data);
  const [allData, setAllData] = useState(originalFakeData);
  const [filteredFakeData, setFilteredFakeData] = useState([]);
  const params = useParams();

  useEffect(() => {
    filtration();
    console.log(filteredFakeData);
  }, [allData]);

  function filtration() {
    console.log(data.section);
    // let sectionFilter = allData.filter(item=> item.section == data.section || item.section)
    // filteredFakeData = allData.filter(item=> item.section == data.section || item.type == data.type)
    setFilteredFakeData(allData.filter(item=> item.section == data.section || item.section));
  }

  return (
    <>
      {filteredFakeData.map((card) => (
        <Col key={card._id} sm={6}>
          <CardD cardData={card} />
        </Col>
      ))}
    </>
  );
}
