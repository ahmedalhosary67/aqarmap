import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CardD from "../card";
import originalFakeData from "../../services/data.json";
import { Data } from "../../context/context";
import { Card } from "antd";

export default function ListingSection() {
  const { data, setData } = useContext(Data);
  const [allData, setAllData] = useState(originalFakeData);
  const [cardData, setCardData] = useState([]);
  const params = useParams();

  useEffect(() => {
    setCardData(allData.find((item) => item._id === params.id));
    console.log(cardData);
  }, [cardData]);

  return (
    <>
      <section>
        <Row>
          <Col sm={12}>
          </Col>
        </Row>
        <Card>
            <img src={cardData.img} alt="" className="w-100" />
          <h1>Hello</h1>
        </Card>
      </section>
    </>
  );
}
