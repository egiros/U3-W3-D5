// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col } from "react-bootstrap";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import DefaultResults from "./components/DefaultResults";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container fluid className="App">
      <Navbar />
      <Sidebar />
      <MainPage />
      <h2 className="text-white">Rock Classic</h2>
      <DefaultResults query="queen" />
      <h2 className="text-white">Pop Culture</h2>
      <DefaultResults query="kate+perry" />
      <h2 className="text-white">#HipHop</h2>
      <DefaultResults query="eminem" />
      <Player />
    </Container>
  );
}

export default App;
