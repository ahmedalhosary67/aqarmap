import React from "react";
import { Form, Tab, Nav } from "react-bootstrap";
import * as FilterData from "../../services/formData";
import "./main.css";

export default function PropertyTypeFilter({ onChange, searchParams }) {
  const { propertyType } = FilterData;
  return (
    <>
      <Tab.Container
        onSelect={(e) => onChange("type", e)}
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
    </>
  );
}
