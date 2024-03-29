import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./main.css";
import * as FilterData from "../../services/formData";
import { useNavigate, useSearchParams } from "react-router-dom";
import SeaMore from "../../component/moreFilters";
import LocationSearch from "./locationSearch";
import { Data } from "../../context/context";
import SelectTab from "../../component/selectTab";
import RangeNumber from "../../component/rangeNumbers";

function SearchFilter() {
  const [state, setState] = useState({});
  const [propertyType2, setPropertyType2] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const navigate = useNavigate();
  const [countLocations, setCountLocations] = useState(0);
  const { data, setData } = useContext(Data);
  const { propertyType, priceRang, areaRang, paymentMethod, Mortgage } =
    FilterData;

  const handleChange = (name, e) => {
    const clone = { ...state };
    clone[name] = e;
    setState(clone);
    name === "type" && propertyType.find((item) => item.key === e).children
      ? setPropertyType2(propertyType.find((item) => item.key === e).children)
      : setPropertyType2([]);

    name === "location" && setCountLocations(e.length);
  };
  const handleChange2 = (name, e) => {
    const clone = { ...state };
    clone[name] = e;
    setState(clone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(state);
    searchParams.get("type") === "properties"
      ? navigate("/properties/" + (state.section || "sale"))
      : navigate("/compounds/" + (state.section || "sale"));
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
              <SelectTab
                onChange={handleChange2}
                name={"type"}
                searchParams={searchParams}
                FilterData={propertyType2}
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
