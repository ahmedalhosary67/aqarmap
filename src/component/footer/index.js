import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Lang, trans } from "../../context/lang";
import { Col, Container, ListGroup, Navbar, Row } from "react-bootstrap";

const Footer = () => {
  const { lang, setLang } = useContext(Lang);
  return (
    <>
      <footer className="footer py-5">
        <Container>
          <Row>
            <Col md="6">
              <div className="d-flex justify-content-between mb-5">
                <Navbar.Brand>
                  <Link to="/">
                    <img
                      src={
                        lang === "ar"
                          ? "/image/logo-ar-white.svg"
                          : "/image/EnglishLogoWhite.png"
                      }
                      width="170"
                      className="d-inline-block"
                      alt="Aqarmap logo"
                    />
                  </Link>
                </Navbar.Brand>
                <img
                  src="../favicon.ico"
                  className="d-inline-block"
                  alt="Aqarmap logo"
                />
              </div>
              <div>{trans("footerMassege")}</div>
            </Col>
            <Col md="1"></Col>
            <Col md="5">
              <div className="footer-ul">
                <ListGroup className="d-flex flex-row flex-wrap">
                  <li>
                    <Link to="#jops">Jobs</Link>
                  </li>
                  <li>
                    <Link to="#contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="#Sitemap">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="#Terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="#Market Research">Market Research</Link>
                  </li>
                </ListGroup>
              </div>
              <div className="aqar-app mt-3">
                <Link to="#google" className="me-2">
                  <img
                    src="../image/google.svg"
                    className="d-inline-block"
                    alt="google logo"
                  />
                </Link>
                <Link to="#IOS" className="me-2">
                  <img
                    src="../image/IOS.svg"
                    className="d-inline-block"
                    alt="IOS logo"
                  />
                </Link>
                <Link to="#huawei" className="me-2">
                  <img
                    src="../image/huawei.svg"
                    className="d-inline-block"
                    alt="huawei logo"
                  />
                </Link>
              </div>
              <div className="socialmedia mt-4">
                <Link to="#facebook" className="me-5">
                  <img
                    src="../image/facebook.svg"
                    width="10"
                    className="d-inline-block"
                    alt="facebook logo"
                  />
                </Link>
                <Link to="#twitter" className="me-5">
                  <img
                    src="../image/twitter.svg"
                    width="25"
                    className="d-inline-block"
                    alt="twitter logo"
                  />
                </Link>
                <Link to="#instagram-logo" className="me-5">
                  <img
                    src="../image/instagram-logo.svg"
                    width="20"
                    className="d-inline-block"
                    alt="instagram-logo logo"
                  />
                </Link>
                <Link to="#youtube" className="me-5">
                  <img
                    src="../image/youtube.svg"
                    width="25"
                    className="d-inline-block"
                    alt="youtube logo"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
