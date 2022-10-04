import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Sider from "antd/lib/layout/Sider";
import { useParams } from "react-router-dom";
import "./main.css";
import FilteredCard from "../../component/filteredCard";

export default function Properies() {
  const params = useParams();

  // console.log(data);

  return (
    <>
      <Container>
        <Form className="d-flex mt-4">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Row className="subTitle mb-4">
          <h2 className="titleOfFilter">
            <ArrowRightIcon color="warning" fontSize="large" />
            Properties For <span>{params.type}</span>
          </h2>
          <small className="d-flex">
            <ArrowRightIcon
              color="warning"
              fontSize="large"
              style={{ visibility: "hidden" }}
            />
            <span>
              Best properties For sale in , compare with prices and photos
              between <span className="counter">211,224</span> properties of
              different areas. Search in using the map and contact the seller
              directly.
            </span>
          </small>
        </Row>
        <Row>
          <Col sm={8}>
            <Row>
              <FilteredCard />
            </Row>
          </Col>
          <Col sm={4}>
            <Sider />
          </Col>
        </Row>
      </Container>
    </>
  );
}
