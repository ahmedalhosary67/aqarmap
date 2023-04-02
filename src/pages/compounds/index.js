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
import { useParams } from "react-router-dom";
import "./main.css";
import FilteredCard from "../../component/filteredCard";
import Sider from "../../component/sider";

const Compounds = () => {
  const params = useParams();

  console.log(params);

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
            Compounds For <span>{params.type}</span>
          </h2>
        </Row>
        <Row>
          <Col sm={4}>
            <Sider />
          </Col>
          <Col sm={8}>
            <Row>
              <FilteredCard properties={false} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Compounds;
