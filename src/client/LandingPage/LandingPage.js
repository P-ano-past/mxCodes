import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import Navigation from "../Nav/Nav";

function LandingPage() {
  return (
    <Container className="LPC">
      <Navigation />
      <Container className="banner">
        <Row className="BR">
          <Col>
            <Col>
              <p>
                <h1>Hello, I am Marc!</h1>
              </p>
            </Col>
            <Col>
              <p>
                <h4>A Full-Stack Web Developer</h4>
              </p>
            </Col>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <img
                className="devImage"
                src="https://raw.githubusercontent.com/realstoman/vuejs-tailwindcss-portfolio/main/src/assets/images/developer-dark.svg"
                alt="Developer"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default LandingPage;
