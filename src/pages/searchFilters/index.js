import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  InputGroup,
  Nav,
  Row,
  Tab,
  Button,
  Form,
} from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./main.css";
import { Select } from "antd";
import * as FilterData from "../../services/formData";
import { useNavigate, useSearchParams } from "react-router-dom";
import SeaMore from "../../component/moreFilters";
import { Data } from "../../context/context";

const { Option } = Select;

function SearchFilter() {
  const [state, setState] = useState({});
  const [searchParams, setSearchParams] = useSearchParams([]);
  const navigate = useNavigate();
  const [countLocations, setCountLocations] = useState(0);
  const { data, setData } = useContext(Data);
  const {
    propertyType,
    priceRang,
    areaRang,
    paymentMethod,
    Mortgage,
    sections,
    location,
  } = FilterData;

  useEffect(() => {
    setSearchParams(state);
  }, [state]);

  const handleChange = (name, e) => {
    const clone = { ...state };
    clone[name] = e;
    setState(clone);
    searchParams.set(name, e);
    setSearchParams(searchParams);
    name === "location" && setCountLocations(e.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(state);
    navigate("/properties/" + state.section);
  };

  return (
    <>
      <Container>
        <h1 className="title1">Search</h1>
        <Row>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Location">
                <Form.Label>Localtion ({countLocations} / 5)</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <LocationOnIcon />
                  </InputGroup.Text>
                  <Col>
                    <Select
                      mode="tags"
                      size={"large"}
                      placeholder="City or Neighborhood or Street name"
                      name="location"
                      maxTagCount={5}
                      disabled={countLocations >= 5}
                      // onSelect={(option) => option.length >= 5}
                      onChange={(e) => handleChange("location", e)}
                      style={{ width: "100%" }}
                    >
                      {location.map((item) => (
                        <Option key={item?.key}>{item?.name}</Option>
                      ))}
                    </Select>
                  </Col>
                </InputGroup>
              </Form.Group>
              <br />
              <Tab.Container
                onSelect={(e) => handleChange("section", e)}
                defaultActiveKey={searchParams.get("section") || "sale"}
              >
                <Form.Label>Section</Form.Label>

                <Nav variant="pills" className="section2">
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="sale">For sale</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="rent">For rent</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Tab.Container>
              <br />

              <Tab.Container
                onSelect={(e) => handleChange("type", e)}
                defaultActiveKey={searchParams.get("type") || "all"}
              >
                <Form.Label>Property Type</Form.Label>
                <Nav variant="pills" className="Property2">
                  {propertyType.map((item) => (
                    <Nav.Item key={item.key}>
                      <Nav.Link eventKey={item.key}>{item.name}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Tab.Container>
              <br />

              <Row>
                <Form.Label>Price range</Form.Label>
                <Col>
                  <Select
                    size={"large"}
                    placeholder="Min price"
                    id="minPrice"
                    name="minPrice"
                    onChange={(e) => handleChange("minPrice", e)}
                    style={{ width: "100%" }}
                  >
                    {priceRang.map((item, i) => (
                      <Option key={item}>{item}</Option>
                    ))}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size={"large"}
                    placeholder="Max price"
                    name="maxPrice"
                    onChange={(e) => handleChange("maxPrice", e)}
                    style={{ width: "100%" }}
                  >
                    {priceRang
                      .filter((item) => item >= state.minPrice)
                      .map((item, i) => (
                        <Option key={item}>{item}</Option>
                      ))}
                  </Select>
                </Col>
              </Row>
              <br />

              <div className="extra">
                <Row className="mb-3">
                  <Form.Label>Area range</Form.Label>
                  <Col>
                    <Select
                      size={"large"}
                      placeholder="Min Area"
                      id="minArea"
                      name="minArea"
                      onChange={(e) => handleChange("minArea", e)}
                      style={{ width: "100%" }}
                    >
                      {areaRang.map((item, i) => (
                        <Option key={item}>{item}</Option>
                      ))}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size={"large"}
                      placeholder="Max Area"
                      name="maxArea"
                      onChange={(e) => handleChange("maxArea", e)}
                      style={{ width: "100%" }}
                    >
                      {areaRang
                        .filter((item) => item >= state.minArea)
                        .map((item, i) => (
                          <Option key={item}>{item}</Option>
                        ))}
                    </Select>
                  </Col>
                </Row>
                {/* <br /> */}
                <div className="mb-3">
                  <Tab.Container
                    onSelect={(e) => handleChange("payment", e)}
                    defaultActiveKey={searchParams.get("payment") || "all"}
                  >
                    <Form.Label>Payment Method</Form.Label>
                    <Nav variant="pills" className="Property2">
                      {paymentMethod.map((item) => (
                        <Nav.Item key={item.key}>
                          <Nav.Link eventKey={item.key}>{item.name}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Tab.Container>
                </div>
                {/* <br /> */}
                <div className="mb-3">
                  <Tab.Container
                    onSelect={(e) => handleChange("mortgage", e)}
                    defaultActiveKey={searchParams.get("mortgage") || "all"}
                  >
                    <Form.Label>Listings available for mortgage</Form.Label>
                    <Nav variant="pills" className="Property2">
                      {Mortgage.map((item) => (
                        <Nav.Item key={item.key}>
                          <Nav.Link eventKey={item.key}>{item.name}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Tab.Container>
                </div>
              </div>

              <SeaMore />
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
