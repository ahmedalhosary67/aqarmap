import React, { Component } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./main.css";

const Properies = () => {
  return (
    <>
      <Container>
        <Row>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <h4 className="titleOfFilter"><ArrowRightIcon color="warning" fontSize="large"/> Properties For sale</h4>
          <samll>Best properties For sale in , compare with prices and photos between <span className="counter">211,224</span> properties of different areas. Search in using the map and contact the seller directly.</samll>
        </Row>
      </Container>
    </>
  );
};

export default Properies;
