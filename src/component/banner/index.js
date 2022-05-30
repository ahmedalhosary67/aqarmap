import React  from "react";
import { Badge } from "antd";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Card className="banner">
        <Card.Img
          src="./image/websitecover1desktopsmall~1.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex align-items-center">
          <Container>
            <Row>
              <Col>
                <h1 className="banner-text mb-md-5">
                  209,650 Properties <br />
                  For Sale & Rent
                </h1>
                <div className="button-cont">
                  <Link className="btn py-1 px-2 m-2" to="/">
                    Properties
                  </Link>
                  <Link className="btn py-1 px-2 m-2" to="./compounds">
                    Compound
                    <Badge count="NEW" className="NewBadge" />
                  </Link>
                  {/* </Badge> */}
                </div>
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
