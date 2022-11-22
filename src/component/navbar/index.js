import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Lang, trans, transApi } from "../../context/lang";
import { Know, List, Search } from "../../services/HomeDetails";

const NavBar = () => {
  const { lang, setLang } = useContext(Lang);
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src="../image/EnglishLogo.png"
                width="130"
                className="d-inline-block"
                alt="Aqarmap logo"
              />
            </NavLink>
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
                      src="../image/ic_search.png"
                      width={22}
                    />
                    <span>{trans("Search")}</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                {Search.map((item) => (
                  <NavDropdown.Item key={item.link} className="action">
                    <NavLink to={item.link} className="btn px-0">
                      <img alt="icon" className="me-2" src={item.imgIcon} />
                      <span>{transApi(item.title)}</span>
                    </NavLink>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <img
                      alt="icon"
                      className="me-2"
                      src="../image/ic_emblem copy.svg"
                      width={22}
                    />
                    <span>{trans("KNOW")}</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                {Know.map((item) => (
                  <NavDropdown.Item key={item.link} className="action">
                    <NavLink to={item.link} className="btn px-0">
                      <img alt="icon" className="me-2" src={item.imgIcon} />
                      <span>{transApi(item.title)}</span>
                    </NavLink>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <img
                      alt="icon"
                      className="me-2"
                      src="../image/ic_sell_property.svg"
                      width={22}
                    />
                    <span>{trans("LIST")}</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                {List.map((item) => (
                  <NavDropdown.Item key={item.link} className="action">
                    <NavLink to={item.link} className="btn px-0">
                      <img alt="icon" className="me-2" src={item.imgIcon} />
                      <span>{transApi(item.title)}</span>
                    </NavLink>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <NavDropdown
              title={<img alt="icon" src="../image/egypt.svg" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item to="#action/3.10">
                <img alt="icon" className="me-2" src="../image/egypt.svg" />
                <span>Egypt</span>
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.11">
                <img
                  alt="icon"
                  className="me-2"
                  src="../image/Saudi-flag.svg"
                />
                <span>KSA</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              onClick={() => (lang === "en" ? setLang("ar") : setLang("en"))}
            >
              {lang === "en" ? "عربي" : "English"}
            </Button>
            <Button to="#help">{trans("Help")}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
