import { Container, Nav, Navbar, Button } from "react-bootstrap";

import "./Nav.css";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">MS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinkItems me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="primary">Contact Me</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
