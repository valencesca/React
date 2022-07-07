import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "./CartWidget";
const NavBar = () =>{
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">NIDAS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Productos</Nav.Link>
                <Nav.Link href="#link">Ofertas</Nav.Link>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default NavBar;