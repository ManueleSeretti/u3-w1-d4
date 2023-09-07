import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container fluid="xl">
        <Navbar.Brand className="text-white" href="#home">
          Epicbooks!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              About
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
