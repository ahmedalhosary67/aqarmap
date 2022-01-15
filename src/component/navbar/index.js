import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./index.css";

class NavBar extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/EnglishLogo.png"
                width="130"
                className="d-inline-block"
                alt="Aqarmap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="SEARCH" id="basic-nav-dropdown">
                  <NavDropdown.Item className="action" href="#action/3.1">
                    Properties
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Compounds
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Online Expos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="KNOW" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Valuations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Prices Guide
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Ask The Neighbors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Top Agents
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Real Estimate Index
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Advice & Tips
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Know more.. *
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="LIST" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    List Your Property
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    List Company Properties
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <NavDropdown title="LIST" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  List Your Property
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  List Company Properties
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">عربي</Nav.Link>
              <Nav.Link href="#home">Help?</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
