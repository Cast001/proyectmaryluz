import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/menu">Michael Jacksons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to={"/menu"}>Inicio</Nav.Link> */}
            <Nav.Link as={Link} to={"/Pag1"}>Vida</Nav.Link>
            <Nav.Link as={Link} to={"/Pag2"}>Carrera</Nav.Link>
            <Nav.Link as={Link} to={"/Pag3"}>Albunes</Nav.Link>
            <Nav.Link as={Link} to={"/Pag4"}>Reconocido</Nav.Link>
            <Nav.Link as={Link} to={"/Pag5"}>Datos</Nav.Link>
            <Nav.Link as={Link} to={"/Pag6"}>Musica</Nav.Link>
            <Nav.Link as={Link} to={"/Pag7"}>Caracteristicas Artisticas</Nav.Link>
            <Nav.Link as={Link} to={"/Pag8"}>Premios y Logros</Nav.Link>
            <Nav.Link as={Link} to={"/Pag9"}>Fallecimiento</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;