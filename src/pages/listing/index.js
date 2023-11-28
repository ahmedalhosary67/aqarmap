import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import ListingSection from "../../component/listingSection";
import Sider from "../../component/sider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListingPage() {
  const { id } = useParams();
  const [cardData, setCardData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    init();
  }, []);

  async function init() {
    await axios
      .get(`http://localhost:3000/data/${id}`)
      .then(({ data }) => {
        setCardData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container className="ListingPage">
      {loading ? (
        <p>loading....</p>
      ) : (
        <Row>
          <Col sm={8}>
            <ListingSection cardData={cardData} />
          </Col>
          <Col sm={4}>
            <Sider
              cardData={cardData}
              userInfo={true}
              relatedProperty={false}
              topAgent={true}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}
