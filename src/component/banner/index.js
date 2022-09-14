import React from "react";
import { Badge } from "antd";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./main.css";
import Properies from "../../pages/properties";

const Banner = () => {
  return (
    <div>
      <Card className="banner">
        <Container>
          <Row>
            <Col>
              <h1 className="banner-text mb-md-5">
                209,650 Properties <br />
                For{" "}
                <Link to="./properties/Sale" className="sale1">
                  Sale
                </Link> & <Link to="./properties/Rent" className="sale1">
                  Rent
                </Link>
              </h1>
              <div className="button-cont">
                <Link className="btn py-1 px-2 m-2" to="./searchFilter">
                  Properties
                </Link>
                <Link className="btn py-1 px-2 m-2" to="./compounds">
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
};

export default Banner;