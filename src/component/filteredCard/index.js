import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col } from "react-bootstrap";
import CardD from "../card";
import originalFakeData from "../../services/data.json";
import { Data } from "../../context/context";

export default function FilteredCard() {
  const { data } = useContext(Data);
  const [allData] = useState(originalFakeData);
  const [filteredFakeData, setFilteredFakeData] = useState([]);
  const params = useParams();

  useEffect(() => {
    filtration();
    // console.log(filteredFakeData);
  }, [allData]);

  function filtration() {
    let sectionFilter = allData.filter((item) => item.section === params.type)
    let typeFilter =
       data.type && data.type !== "all"
        ? sectionFilter.filter((item) => item.type === data.type)
        : sectionFilter;
    let paymentMethodFilter =
       data.paymentMethod && data.paymentMethod !== "All"
        ? typeFilter.filter((item) => item.paymentMethod === data.paymentMethod)
        : typeFilter;
    let mortgageFilter =
       data.mortgage && data.mortgage !== "All Financing Options"
        ? paymentMethodFilter.filter((item) => item.mortgage === data.mortgage)
        : paymentMethodFilter;
    let priceRangFilter =
       data.priceRang && data.priceRang !== "minPrice"
        ? mortgageFilter.filter((item) => item.priceRang === data.priceRang)
        : mortgageFilter;
    setFilteredFakeData(priceRangFilter);
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
