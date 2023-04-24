import { Container, Nav, Navbar } from "react-bootstrap";

import "./Nav.css";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinkItems me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
