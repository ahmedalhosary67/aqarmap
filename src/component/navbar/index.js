import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="./">
              <img
                src="./image/EnglishLogo.png"
                width="130"
                className="d-inline-block"
                alt="Aqarmap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={
                  <>
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_search.png"
                      width={22}
                    />
                    <span>SEARCH</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="action">
                  <Link to="./properties" className="btn px-0">
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_listing.svg"
                    />
                    <span>Properties</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="./compounds" className="btn px-0">
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_compounds.svg"
                    />
                    <span>Compounds</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="./online" className="btn px-0">
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_expo.svg"
                    />
                    <span>Online Expos</span>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_emblem copy.svg"
                      width={22}
                    />
                    <span>KNOW</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <img
                    alt="icon"
                    className="me-2"
                    src="./image/ic_evaluate_property.svg"
                  />
                  <span>Valuations</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img alt="icon" className="me-2" src="./image/ic_money.svg" />
                  <span>Prices Guide</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <img
                    alt="icon"
                    className="me-2"
                    src="./image/ic_ask_neighbors.svg"
                  />
                  <span>Ask The Neighbors</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <img alt="icon" className="me-2" src="./image/ic_agent.svg" />
                  <span>Top Agents</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  <img alt="icon" className="me-2" src="./image/ic_index.svg" />
                  <span>Real Estimate Index</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  <img alt="icon" className="me-2" src="./image/ic_idea.svg" />
                  <span>Advice & Tips</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  <img
                    alt="icon"
                    className="me-2"
                    src="./image/ic_emblem.svg"
                  />
                  <span>Know more.. *</span>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <img
                      alt="icon"
                      className="me-2"
                      src="./image/ic_sell_property.svg"
                      width={22}
                    />
                    <span>LIST</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.8">
                  <img
                    alt="icon"
                    className="me-2"
                    src="./image/ic_sell_property.svg"
                  />
                  <span>List Your Property</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">
                  <img
                    alt="icon"
                    className="me-2"
                    src="./image/ic_Companies_Registration.svg"
                  />
                  <span>List Company Properties</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <NavDropdown
              title={<img alt="icon" src="./image/egypt.svg" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.10">
                <img alt="icon" className="me-2" src="./image/egypt.svg" />
                <span>Egypt</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">
                <img alt="icon" className="me-2" src="./image/Saudi-flag.svg" />
                <span>KSA</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#lang">عربي</Nav.Link>
            <Nav.Link href="#help">Help?</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
