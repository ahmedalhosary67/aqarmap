import React, { Component } from "react";
import { Button, Card, Col, Container, Row, Badge } from "react-bootstrap";


class Banner extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <Card className="">
          <Card.Img src="./websitecover1desktopsmall~1.jpg" alt="Card image" />
          <Card.ImgOverlay className="d-flex align-items-center">
            <Container>
              <Row>
                <Col>
                  <h1 className="mb-5">
                    209,650 Properties <br />
                    For Sale & Rent
                  </h1>
                  <div className="button-cont">
                    <Button className="me-2"> Properties</Button>
                    <Button>Compound</Button>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Banner;
