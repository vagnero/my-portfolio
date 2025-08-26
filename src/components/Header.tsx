import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

export default function Header() {
  return (
        <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">Meu Portfólio</NavbarBrand>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/about">Sobre</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects">Projetos</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contato</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
  );
}