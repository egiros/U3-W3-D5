// components/Navbar.jsx
import { Container, Row, Col, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col className="main-content">
          <Row className="mb-4 mt-3">
            <Col className="p-0">
              <Nav className="justify-content-center d-none d-sm-flex ms-auto p-0">
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-4">
                    TRENDING
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-4">
                    PODCAST
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-4">
                    MOODS AND GENRES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links d-none d-md-flex me-4">
                    NEW RELEASES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links d-none d-lg-flex">
                    DISCOVER
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
