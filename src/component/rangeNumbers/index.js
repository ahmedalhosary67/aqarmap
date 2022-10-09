import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { Form, Col, Row } from "react-bootstrap";

const { Option } = Select;

export default function RangeNumber({ onChange, FilterData, minValue, name }) {
  const [allPrices, setAllPrices] = useState(FilterData);
  const [filteredFakePrices, setFilteredFakePrices] = useState([]);

  useEffect(() => {
    filtration();
  }, [minValue]);

  function filtration() {
    let maxRangeFilter =
      minValue && minValue !== `min${name}`
        ? allPrices.filter((item) => item.key >= minValue)
        : allPrices;
    setFilteredFakePrices(maxRangeFilter);
  }
  return (
    <>
      <Row>
        <Form.Label>{name} Range</Form.Label>
        <Col>
          <Select
            size={"large"}
            name={`min${name}`}
            defaultValue={`min${name}`}
            onChange={(e) => onChange(`min${name}`, e)}
            style={{ width: "100%" }}
          >
            <Option key={`min${name}`}>{`Min ${name}`}</Option>
            {FilterData.map((item) => (
              <Option key={item.key}>{item.value}</Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            size={"large"}
            name={`max${name}`}
            defaultValue={`max${name}`}
            onChange={(e) => onChange(`max${name}`, e)}
            style={{ width: "100%" }}
          >
            <Option key={`max${name}`}>{`Max ${name}`}</Option>
            {filteredFakePrices.map((item) => (
              <Option key={item.key}>{item.value}</Option>
            ))}
          </Select>
        </Col>
      </Row>
    </>
  );
}
