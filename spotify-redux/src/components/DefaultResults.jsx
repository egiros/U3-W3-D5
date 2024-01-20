// DefaultResults.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function DefaultResults({ query, category }) {
  const [artistResults, setArtistResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}&limit=6`);
        setArtistResults(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${query} results:`, error);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <Container fluid className="main-container">
      <Row>
        <Col className="main-content">
          <Row>
            <h2 className="text-white mb-3">{category}</h2>
            {artistResults.slice(0, 6).map((track) => (
              <Col xs={6} md={3} xl={2} key={track.id} className="mb-4">
                <Card className="bg-transparent border-0 rounded-0">
                  <Card.Img variant="top" src={track.album.cover_big} className="shadow-lg rounded-0" />
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

export default DefaultResults;
