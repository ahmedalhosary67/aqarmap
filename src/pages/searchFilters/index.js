import React, { useState } from "react";
import { Col, Container, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./main.css";
import { Select, Tabs } from "antd";
import data from "../../services/data.json";

const { Option } = Select;
const sections = ["isRent", "isSale"]

function SearchFilter() {
  const [state, setState] = React.useState([]);
  const [section, setSection] = React.useState();

  const handleChange = (e) => {
    console.log(`Selected: ${e.target}`);
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
    const clone = [...state];
    clone[e.target.name] = e.target.value;
    setState(clone);
    console.log(clone);
  };

  const moreFilters = () => {
    const extrafilter = document.querySelectorAll(".extra");
    extrafilter.forEach((element) => {
      console.log(element);
      element.classList.toggle("hidden");
    });
  };
  const handleSubmit = () => {
    console.log("done");
  };

  return (
    <>
      <Container>
        <h1 className="title1">Search</h1>
        <Row>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Localion">
                <Form.Label>Localtion (0 / 5)</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <LocationOnIcon />
                  </InputGroup.Text>
                  <Col>
                    <Select
                      mode="multiple"
                      size={"large"}
                      placeholder="City or Neighborhood or Street name"
                      value={state?.location}
                      name="location"
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      {data.map((item) => (
                        <Option key={item?._id}>{item?.location}</Option>
                      ))}
                    </Select>
                  </Col>
                </InputGroup>
              </Form.Group>
              <br />

              <Tab.Container defaultActiveKey="isSale">
                <Form.Label>Section</Form.Label>
                
                <Nav variant="pills" className="section2">
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="isSale">
                        For sale
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="isRent">
                        For rent
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Tab.Container>
              <br />

              <Tab.Container defaultActiveKey="All">
                <Form.Label>Property Type</Form.Label>
                <Nav variant="pills" className="Property2">
                  <Nav.Item>
                    <Nav.Link eventKey="All">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Apartments">
                      Apartments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="FurnishedApartment">
                      Furnished Apartment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Chalets">
                      Chalets
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Villas">
                      Villas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Land">
                      Land
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Building">
                      Building
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Administrative">
                      Administrative
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Commercial">
                      Commercial
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Medical">
                      Medical
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="SharedRoom">
                      Shared Room
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Other">
                      Other
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
              <br />

              <Row>
                <Form.Label>Price range</Form.Label>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Min price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Max price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
              <br />

              <Row className="extra hidden">
                <Form.Label>Area range</Form.Label>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Min area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Max area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
              {/* <br /> */}
              <div className="extra hidden">
                <Tab.Container className="extra hidden" defaultActiveKey="101">
                  <Form.Label>Payment Method</Form.Label>
                  <Nav variant="pills" className="Property2">
                    <Nav.Item>
                      <Nav.Link eventKey="101">
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="102">
                        Cash
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="103">
                        Installments
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </div>
              {/* <br /> */}
              <div className="extra hidden">
                <Tab.Container className="extra hidden" defaultActiveKey="201">
                  <Form.Label>Listings available for mortgage</Form.Label>
                  <Nav variant="pills" className="Property2">
                    <Nav.Item>
                      <Nav.Link eventKey="201">
                        All Financing Options
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="202">
                        CBE 3% Initiative
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="203">
                        CBE 8% Initiative
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="204">
                        Commercial Financing
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </div>
              {/* <br /> */}

              <Nav.Link onClick={moreFilters}>More filters</Nav.Link>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchFilter;
