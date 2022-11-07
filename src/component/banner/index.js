import React from "react";
import { Badge } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../services/data.json";
import "./main.css";

export default function Banner() {
  console.log();
  return (
    <div>
      <Card className="banner">
        <Container>
          <Row>
            <Col>
              <h1 className="banner-text mb-md-5">
                <span className="total">{data.length}</span> Properties <br />
                For{" "}
                <Link to="properties/sale" className="sale1">
                  Sale
                </Link>{" "}
                &{" "}
                <Link to="properties/rent" className="sale1">
                  Rent
                </Link>
              </h1>
              <div className="button-cont">
                <Link className="btn py-1 px-2 m-2" to="searchFilter">
                  Properties
                </Link>
                <Link className="btn py-1 px-2 m-2" to="compounds">
                  Compound
                  <Badge count="NEW" className="NewBadge" />
                </Link>
                {/* </Badge> */}
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
