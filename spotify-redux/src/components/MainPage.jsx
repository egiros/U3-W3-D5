// components/MainPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Details from "./Details"; // Importa il componente Details
import { selectResult } from "../redux/actions/searchActions";

function MainPage() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Handler per aprire il modale dei dettagli
  const handleShowDetailsModal = (track) => {
    dispatch(selectResult(track)); // Dispatch l'azione per impostare l'elemento selezionato
    // setShowDetailsModal(true);
  };

  // Handler per chiudere il modale dei dettagli
  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Col className="main-content">
          <Row>
            {searchResults.map((track) => (
              <Col xs={4} md={3} xl={2} key={track.id} className="mb-4">
                <Card
                  className="selected bg-transparent border-0 rounded-0"
                  onClick={() => handleShowDetailsModal(track)}
                >
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

      {/* Aggiungi il componente Details come parte della tua pagina */}
      <Details showModal={showDetailsModal} handleClose={handleCloseDetailsModal} />
    </Container>
  );
}

export default MainPage;
