import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, NavDropdown, Col, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NIDAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
              <Nav.Link href="#link">Carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
