import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Blog() {
  return (
    <Container>
      <Container>
        <Row>
          <Col className="pageTitle">
            <p>
              <h1>Blog</h1>
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Container>
          <Row>
            <Col>2</Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Col>3</Col>
        </Row>
      </Container>
    </Container>
  );
}
