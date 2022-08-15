import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { EditOutlined, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Card } from "antd";
import Sider from "antd/lib/layout/Sider";
import CardD from "../../component/card/index";
import data from "../../services/data.json";
import "./main.css";
import { useLocation } from "react-router-dom";

const Properies = () => {
  const [cards, setCards] = useState(data);
  const {state} = useLocation();

  return (
    <>
      <Container>
        <Row>
          <Form className="d-flex mt-4">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="subTitle mb-4">
            <h2 className="titleOfFilter">
              <ArrowRightIcon color="warning" fontSize="large" />
              Properties For <span>{state && state.type}</span>
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
          </div>
          <Row>
            <Col sm={8}>
              <Row>
                {cards.map(
                  (card) => state.type === "sale" ?
                    card.isSale && (
                      <Col key={card.id} sm={6}>
                        <CardD cardData={card} />
                      </Col>
                    ):
                    card.isRent && (
                      <Col key={card.id} sm={6}>
                        <CardD cardData={card} />
                      </Col>
                    )
                )}
              </Row>
            </Col>
            <Col sm={4}>
              <Sider></Sider>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Properies;
