import LandingPage from "../LandingPage/LandingPage";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Navigation from "../Nav/Nav";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Routes>
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
