import { Badge, Card } from "antd";
import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "antd/dist/antd.css";
import { Link, Stack } from "@mui/material";

class Details extends Component {
  render() {
    const gridStyle = {
      width: "80%",
      padding: "10px",
      border: "none",
      // textAlign: 'center',
    };
    return (
      <>
        <Container>
          <Row className="my-5">
            <h4>SEARCH</h4>
            <Col>
              <Link variant="" href="#contained-buttons">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img src="./ic_listing.svg" />
                    <Card.Meta
                      title={"properties"}
                      description="Search for properties for sale & rent"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col>
              <Link variant="" href="#contained-buttons">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img src="./ic_listing.svg" />
                    <Card.Meta
                      title={
                        <>
                          Compounds <Badge count="new" />
                        </>
                      }
                      description="Search for properties for sale & rent"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col>
              <Link variant="" href="#contained-buttons">
                <Card.Grid style={gridStyle}>
                  <Card.Meta
                    title={
                      <>
                        Online Expos <Badge count="new" />
                      </>
                    }
                    description="Search for properties for sale & rent"
                  />
                </Card.Grid>
              </Link>
            </Col>
          </Row>

          <Row className="my-5" gap="3">
            <h4>KNOW</h4>
            <Col md="4">Valuations</Col>
            <Col md="4">Prices Guide</Col>
            <Col md="4">Ask The Neighbors</Col>
            <Col md="4">Top Agents</Col>
            <Col md="4">Real Estimate Index</Col>
            <Col md="4">Advice & Tips</Col>
            <Col md="4">Know more.. *</Col>
          </Row>

          <Row className="my-5">
            <h4>LIST</h4>
            <Col md="4">List Your Property</Col>
            <Col md="4">List Company Properties</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Details;
