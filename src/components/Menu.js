import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../logo.png';

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('accessToken') !== null);
  const [userName, setUserName] = useState(sessionStorage.getItem('nickname') || '');

  const handleLogout = () => {
    // Lógica para limpiar la sesión
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUserName('');
  };


  return (
    <Navbar className="navbar-custom" bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src={logo} width="50" height="30" className="d-inline-block align-top" />{' '}
          Dota Score
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="">Partidos</Nav.Link>
            <Nav.Link href="">Heroes</Nav.Link>
            <Nav.Link href="/blog">Noticias</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {isLoggedIn ? (
              <NavDropdown title={userName} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/auth">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
