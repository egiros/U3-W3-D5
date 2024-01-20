// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import DefaultResults from "./components/DefaultResults";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        {/* <Routes>
          <Route path="/search" element={<MainPage />} />
          <Route path="/" element={<DefaultResults category="Rock Classic" query="queen" />} />
          <Route path="/" element={<DefaultResults category="Pop Culture" query="kate+perry" />} />
          <Route path="/" element={<DefaultResults category="#Hip Hop" query="eminem" />} />
        </Routes> */}
        <MainPage />
        <DefaultResults category="Rock Classic" query="queen" />
        <DefaultResults category="Pop Culture" query="kate+perry" />
        <DefaultResults category="#Hip Hop" query="eminem" />

        <Player />
      </BrowserRouter>
    </Container>
  );
}

export default App;
