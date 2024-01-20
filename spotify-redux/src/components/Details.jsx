// components/Details.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

function Details({ showModal, handleClose }) {
  const selectedResult = useSelector((state) => state.search.selectedResult);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className="custom-modal">
        <Modal.Title>
          <img src={logo} width="150" height="45" alt="Logo" className="mb-2" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedResult && (
          <div>
            <img
              src={selectedResult.album.cover_big}
              alt={selectedResult.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h3>{selectedResult.title}</h3>
            <p>Artist: {selectedResult.artist.name}</p>
            <p>Album: {selectedResult.album.title}</p>
            <div>
              <h5>Tracklist:</h5>
              <p>{selectedResult.album.tracklist}</p>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details;
