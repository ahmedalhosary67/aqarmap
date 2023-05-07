import React from "react";
import { Form, Tab, Nav, Col } from "react-bootstrap";
import { listingSection } from "../../services/formData";

export default function SelectTab({
  onChange,
  searchParams,
  FilterData,
  Label,
  name,
}) {
  return (
    <>
      {name === "section" ? (
        <Tab.Container
          onSelect={(e) => onChange("section", e)}
          defaultActiveKey={searchParams.get("section") || "sale"}
        >
          <Form.Label>Section</Form.Label>

          <Nav variant="pills" className="section2">
            {listingSection.map(({ key, name }) => (
              <Col key={key}>
                <Nav.Item>
                  <Nav.Link eventKey={key}>{name}</Nav.Link>
                </Nav.Item>
              </Col>
            ))}
            {/* <Col>
              <Nav.Item>
                <Nav.Link eventKey="rent">For rent</Nav.Link>
              </Nav.Item>
            </Col> */}
          </Nav>
        </Tab.Container>
      ) : (
        <Tab.Container
          onSelect={(e) => onChange(name, e)}
          defaultActiveKey={searchParams.get(name) || FilterData[0].key}
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
      )}
    </>
  );
}
