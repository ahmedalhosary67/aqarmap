import React, { useEffect } from "react";
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
import axios from "axios";

export default function Properies() {
  const params = useParams();

  // console.log(params);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    await axios
      .get("http://localhost:3000/data")
      .then((res) => {
        console.log("done",res.data);
      })
      .catch((err) => {
        console.log("err",err);
      });
  }

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
        </Row>
        <Row>
          <Col sm={8}>
            <Row>
              <FilteredCard properties={true} />
            </Row>
          </Col>
          <Col sm={4}>
          <Sider userInfo={false} relatedProperty={false} topAgent={true} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
