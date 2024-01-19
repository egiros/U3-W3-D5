// components/MainPage.jsx
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function MainPage() {
  const searchResults = useSelector((state) => state.search.results);
  return (
    <Container fluid className="main-container">
      <Row>
        <Col className="main-content">
          <Row>
            {searchResults.map((track) => (
              <Col xs={4} md={3} xl={2} key={track.id} className="mb-4">
                <Card className="bg-transparent border-0 rounded-0">
                  <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                  <Card.Body>
                    <Card.Title className="text-white">{track.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
