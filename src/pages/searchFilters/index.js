import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./main.css";
// import { Select } from "antd";
import * as FilterData from "../../services/formData";
// import originalFakeData from "../../services/data.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import SeaMore from "../../component/moreFilters";
import LocationSearch from "./locationSearch";
import { Data } from "../../context/context";
import SelectTab from "../../component/selectTab";
import RangeNumber from "../../component/rangeNumbers";

// const { Option } = Select;

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
  } = FilterData;

  useEffect(() => {
    setSearchParams(data);
  }, [state]);

  const handleChange = (name, e) => {
    const clone = { ...state };
    clone[name] = e;
    setState(clone);
    name === "location" && setCountLocations(e.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(state);
    navigate("/properties/" + (state.section || "sale"));
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

              <SelectTab
                onChange={handleChange}
                name={"section"}
                searchParams={searchParams}
                Label={"Section"}
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

              <RangeNumber
                onChange={handleChange}
                minValue={state.minPrice}
                name={"Price"}
                FilterData={priceRang}
              />

              <div className="extra">
                <br />
                <RangeNumber
                  onChange={handleChange}
                  minValue={state.minArea}
                  name={"Area"}
                  FilterData={areaRang}
                />
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
