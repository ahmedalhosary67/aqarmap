import { Badge, Card } from "antd";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { Link, Stack } from "@mui/material";

class Details extends Component {
  render() {
    const gridStyle = {
      width: "fit-content",
      padding: "10px 20px",
    };
    return (
      <>
        <Container className="details">
          <Row className="my-5">
            <h4>SEARCH</h4>
            <Col>
              <Link variant="" href="#contained-buttons">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_listing.svg" />
                    <Card.Meta
                      title={"properties"}
                      description="Search for properties for sale & rent"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col>
              <Link variant="" href="#Compounds">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_compounds.svg" />
                    <Card.Meta
                      title={
                        <>
                          <Stack direction="row" spacing={2}>
                            <span>Compounds</span>
                            <Badge
                              count="NEW"
                              style={{ background: "#f9a825", color: "#000" }}
                            />
                          </Stack>
                        </>
                      }
                      description="Compare all compound features & prices"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col>
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_expo.svg" />
                    <Card.Meta
                      title={
                        <>
                          <Stack direction="row" spacing={2}>
                            <span>Online Expos</span>
                            <Badge
                              count="NEW"
                              style={{ background: "#f9a825", color: "#000" }}
                            />
                          </Stack>
                        </>
                      }
                      description="Book exclusive offers via your credit card"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
          </Row>

          <Row className="my-5" gap="3">
            <h4>KNOW</h4>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_evaluate_property.svg" />
                    <Card.Meta
                      title="Valuations"
                      description="Estimate the value of any property"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_money.svg" />
                    <Card.Meta
                      title="Prices Guide"
                      description="Know the meter price in all locations"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_ask_neighbors.svg" />
                    <Card.Meta
                      title="Ask The Neighbors"
                      description="Get honest answers from fellow users"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_agent.svg" />
                    <Card.Meta
                      title="Top Agents"
                      description="Find the top experienced agents"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_index.svg" />
                    <Card.Meta
                      title="Real Estimate Index"
                      description="Understand the market demand trends"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_idea.svg" />
                    <Card.Meta
                      title="Advice & Tips"
                      description='"Learn before you take the decision"'
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col className="mb-4" md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_emblem.svg" />
                    <Card.Meta
                      title="Know more.. *"
                      description='"Aqarmap services empower you to make one ...'
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
          </Row>

          <Row className="my-5">
            <h4>LIST</h4>
            <Col md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_sell_property.svg" />
                    <Card.Meta
                      title="List Your Property"
                      description="Reach millions of users directly"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
            <Col md="4">
              <Link variant="" href="#OnlineExpos">
                <Card.Grid style={gridStyle}>
                  <Stack direction="row" spacing={2}>
                    <img alt="icon" src="./image/ic_Companies_Registration.svg" />
                    <Card.Meta
                      title="List Company Properties"
                      description="Join thousands of companies now"
                    />
                  </Stack>
                </Card.Grid>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Details;
