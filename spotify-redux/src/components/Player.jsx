// Components/Player.jsx
import React, { useRef, useState, useEffect } from "react";
import { Navbar, Container, ProgressBar, Row, Col } from "react-bootstrap";
import { PlayFill, PauseFill, Shuffle, SkipForwardFill, SkipBackwardFill, Repeat } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function Player() {
  const selectedResult = useSelector((state) => state.search.selectedResult);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);
      });
    }
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  function calculateTotalTime(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds.toFixed(0)).padStart(2, "0")}`;
  }

  function calculateRemainingTime(audio) {
    if (audio) {
      const remainingTime = audio.duration - audio.currentTime;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      return `-${String(minutes).padStart(2, "0")}:${String(seconds.toFixed(0)).padStart(2, "0")}`;
    }
    return "-00:00";
  }

  return (
    <Container>
      <Navbar fixed="bottom" bg="dark">
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            {selectedResult && (
              <Row className="d-flex justify-content-center text-white mt-2">
                <Col md={4}>
                  <img
                    src={selectedResult.album.cover_small}
                    alt={selectedResult.title}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={8}>
                  <h5>{selectedResult.title}</h5>
                  <p>{selectedResult.artist.name}</p>
                </Col>
              </Row>
            )}
          </Col>
          <Col md={4}>
            <Container className="d-flex flex-column align-items-center pt-2 pb-2 custom-bottom-player">
              <div className="d-flex justify-content-center mb-2">
                <Shuffle className="fs-4 custom-player-buttons mt-2 me-3" />

                <SkipBackwardFill className="fs-4 custom-player-buttons mt-2" />

                {isPlaying ? (
                  <PauseFill onClick={togglePlayPause} className="fs-1 custom-player-buttons mx-3" />
                ) : (
                  <PlayFill onClick={togglePlayPause} className="fs-1 custom-player-buttons mx-3" />
                )}

                <SkipForwardFill className="fs-4 custom-player-buttons mt-2" />
                <Repeat className="fs-4 custom-player-buttons mt-2 ms-3" />
              </div>
              <div className="d-flex justify-content-center mb-2">
                <span className="text-white">
                  {calculateTotalTime(audioRef.current ? audioRef.current.duration : 0)}
                </span>

                <ProgressBar now={progress} variant="white" className="w-100 custom-progress-bar mx-4" />

                <span className="text-white">{calculateRemainingTime(audioRef.current)}</span>
              </div>

              {selectedResult && <audio ref={audioRef} src={selectedResult.preview} />}
            </Container>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}

export default Player;
