import LandingPage from "../LandingPage/LandingPage";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Container>
  );
}

export default App;
