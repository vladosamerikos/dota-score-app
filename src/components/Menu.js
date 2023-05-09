import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'; 
function Menu() {
  return (
    <Navbar className="navbar-custom" bg="dark" variant="dark"  expand="md" sticky="top" >
      <Container >
      <Navbar.Brand  href="/">
            <img
              alt=""
              src={logo}
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Dota Score
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="">Partidos</Nav.Link>
            <Nav.Link href="">Heroes</Nav.Link>
            <Nav.Link href="">Patches</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;