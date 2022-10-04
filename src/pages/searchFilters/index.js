import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab, Button, Form } from "react-bootstrap";
import "./main.css";
import { Select } from "antd";
import * as FilterData from "../../services/formData";
import originalFakeData from "../../services/data.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import SeaMore from "../../component/moreFilters";
import LocationSearch from "./locationSearch";
import { Data } from "../../context/context";
import SectionFilter from "./sectionFilter";
import PropertyTypeFilter from "./propertyTypeFilter";
import SelectTab from "../../component/selectTab";

const { Option } = Select;

function SearchFilter() {
  const [state, setState] = useState({});
  const [searchParams, setSearchParams] = useSearchParams([]);
  const navigate = useNavigate();
  const [countLocations, setCountLocations] = useState(0);
  const { data, setData } = useContext(Data);
  // const { filteredFake, setFilteredFake } = useState({});
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
    // setFilteredFacke(originalFakeData)
  }, [state]);

  const handleChange = (name, e) => {
    const clone = { ...state };
    clone[name] = e;
    setState(clone);
    name === "location" && setCountLocations(e.length);
    handleFilterFakeData(name, e);
  };

  function handleFilterFakeData(name, e) {
    // originalFakeData.map(item=> console.log(item))
  }

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
              <LocationSearch
                onChange={handleChange}
                countLocations={countLocations}
              />
              <br />

              <SectionFilter
                onChange={handleChange}
                searchParams={searchParams}
              />
              <br />

              <SelectTab
                onChange={handleChange}
                name={"type"}
                searchParams={searchParams}
                FilterData={propertyType}
                Label={"Property Type"}
              />

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
                    {priceRang.map((item) => (
                      <Option key={item.key}>{item.value}</Option>
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
                      .filter((item) => item.key >= state.minPrice)
                      .map((item) => (
                        <Option key={item.key}>{item.value}</Option>
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
                <br />
                <SelectTab
                  onChange={handleChange}
                  name={"paymentMethod"}
                  searchParams={searchParams}
                  FilterData={paymentMethod}
                  Label={"Payment Method"}
                />
                <br />
                <SelectTab
                  onChange={handleChange}
                  name={"mortgage"}
                  searchParams={searchParams}
                  FilterData={Mortgage}
                  Label={"Listings available for mortgage"}
                />
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
