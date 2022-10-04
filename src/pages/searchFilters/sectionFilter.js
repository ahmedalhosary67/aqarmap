import React from "react";
import { Col, Form, Tab, Nav } from "react-bootstrap";
import "./main.css";

export default function SectionFilter({ onChange, searchParams }) {
  return (
    <>
      <Tab.Container
        onSelect={(e) => onChange("section", e)}
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
    </>
  );
}
