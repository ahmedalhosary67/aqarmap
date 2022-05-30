import React from "react";
import { Badge } from "antd";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./main.css";

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
                <Link to="./compounds" className="sale1">
                  Sale
                </Link> & <Link to="./compounds" className="sale1">
                  Rent
                </Link>
              </h1>
              <div className="button-cont">
                <Link className="btn py-1 px-2 m-2" to="./properties">
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
