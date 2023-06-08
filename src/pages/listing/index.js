import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import ListingSection from "../../component/listingSection";
import Sider from "../../component/sider";

export default function ListingPage() {
  const params = useParams();
  // console.log(params);
  return (
    <Container className="ListingPage">
      <Row>
        <Col sm={8}>
          <ListingSection />
        </Col>
        <Col sm={4}>
          <Sider userInfo={true} relatedProperty={false} topAgent={true} />
        </Col>
      </Row>
    </Container>
  );
}
