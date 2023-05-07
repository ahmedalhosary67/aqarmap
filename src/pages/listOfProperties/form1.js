import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Button, Cascader, Form, Input, Select } from "antd";
import SelectTab from "../../component/selectTab";
import AppSelect from "../../component/AppSelect";
import { propertyType } from "../../services/formData";

export default function Form1() {
  const [state, setState] = useState([]);
  const [area, setArea] = useState(null);
  const [location, setLocation] = useState(null);

  const onChangeCity = (value) => {
    propertyType.find((item) => item.key == value).hasOwnProperty("children")
      ? setArea(propertyType.find((item) => item.key == value).children)
      : setArea(null);
    console.log(value);
  };
  const onChangeArea = (value) => {
    area.find((item) => item.key == value).hasOwnProperty("children")
      ? setLocation(propertyType.find((item) => item.key == value).children)
      : setLocation(null);
    console.log(value);
  };
  const onChangeLocation = (value) => {
    console.log(value);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <AppSelect
            onChange={onChangeCity}
            name="listingType"
            label="Listing Type"
            data={propertyType}
          />
        </Col>
        <Col md={6}>
          <AppSelect
            onChange={onChangeArea}
            name="listingSection"
            label="Listing Section"
            data={propertyType}
          />
        </Col>
        <Col md={6}>
          <AppSelect
            onChange={onChangeCity}
            name="city"
            label="City"
            data={propertyType}
          />
        </Col>
      </Row>

      {area && (
        <AppSelect
          onChange={onChangeArea}
          name="area"
          label="Area"
          data={area}
        />
      )}
      {location && (
        <AppSelect
          onChange={onChangeLocation}
          name="location"
          label="Location"
          data={area}
        />
      )}
    </>
  );
}
