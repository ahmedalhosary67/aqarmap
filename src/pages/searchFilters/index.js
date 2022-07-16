import { Col, Container, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./main.css";

function SearchFilter() {
  return (
    <>
      <Container>
        <h1 className="title1">Search</h1>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="Localion">
                <Form.Label>Localtion (0 / 5)</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <LocationOnIcon />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="City or Neighborhood or Street name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form.Group>
              <br />

              <Tab.Container defaultActiveKey="first">
                <Form.Label>Section</Form.Label>
                <Nav variant="pills" className="section2">
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="first" href="#">
                        For sale
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="second" href="#">
                        For rent
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Tab.Container>
              <br />

              <Tab.Container defaultActiveKey="1">
                <Form.Label>Property Type</Form.Label>
                <Nav variant="pills" className="Property2">
                  <Nav.Item>
                    <Nav.Link eventKey="1" href="#">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2" href="#">
                      Apartments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3" href="#">
                      Furnished Apartment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4" href="#">
                      Chalets
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="5" href="#">
                      Villas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="6" href="#">
                      Land
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="7" href="#">
                      Building
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="8" href="#">
                      Administrative
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="9" href="#">
                      Commercial
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="10" href="#">
                      Medical
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="11" href="#">
                      Shared Room
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="12" href="#">
                      Other
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
              <br />

              <Row>
                <Form.Label>Price range</Form.Label>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Min price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Max price</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchFilter;
