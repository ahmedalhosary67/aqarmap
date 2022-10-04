import React from "react";
import { Form, Tab, Nav } from "react-bootstrap";

export default function SelectTab({ onChange, searchParams, FilterData, Label, name }) {
  return (
    <>
      <Tab.Container
        onSelect={(e) => onChange(name, e)}
        defaultActiveKey={searchParams.get("type") || "all"}
      >
        <Form.Label>{Label}</Form.Label>
        <Nav variant="pills" className="Property2">
          {FilterData.map((item) => (
            <Nav.Item key={item.key}>
              <Nav.Link eventKey={item.key}>{item.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Tab.Container>
    </>
  );
}