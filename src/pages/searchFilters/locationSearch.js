import React from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Select } from "antd";
import * as FromData from "../../services/formData";
import "./main.css";

const { Option } = Select;

export default function LocationSearch({ onChange, countLocations }) {
  const { location } = FromData;

  return (
    <>
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
              onChange={(e) => onChange("location", e)}
              style={{ width: "100%" }}
            >
              {location.map((item) => (
                <Option key={item.key}>{item.name}</Option>
              ))}
            </Select>
          </Col>
        </InputGroup>
      </Form.Group>
    </>
  );
}
