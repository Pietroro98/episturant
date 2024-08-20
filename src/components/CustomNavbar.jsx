import { Navbar, Container, Nav } from "react-bootstrap";

const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Epiresturant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Menù</Nav.Link>
            <Nav.Link href="#features">Prenotazioni</Nav.Link>
            <Nav.Link href="#pricing">Dove siamo</Nav.Link>
            <Nav.Link href="#pricing">Contattaci</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
