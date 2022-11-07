import React from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Sider from "antd/lib/layout/Sider";
import { useParams } from "react-router-dom";
// import FilteredCard from "../../component/filteredCard";
import "./style.css";
import ListingSection from "../../component/listingSection";

export default function ListingPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <ListingSection />
          </Col>
          <Col sm={4}>
            <Sider />
          </Col>
        </Row>
      </Container>
    </>
  );
}
