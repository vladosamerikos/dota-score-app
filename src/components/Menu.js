import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../logo.png';
import defaultAvatar from 'images/avatar.webp'; // Importa la imagen por defecto
import { connect } from 'react-redux';
import { logout } from 'redux/actions/authActions';

function Menu({ isAuthenticated, logout }) {
  const [userName, setUserName] = useState(sessionStorage.getItem('nickname') || '');
  const [userLogo, setUserLogo] = useState(sessionStorage.getItem('logo') || '');

  const handleLogout = () => {
    logout();
  };

  const renderUserSection = () => {
    if (isAuthenticated) {
      const userAvatar = userLogo || defaultAvatar;
      return (
        <div className="d-flex">
          <img  style={{width:'40px', height: '40px'}} src={userAvatar} alt="User Avatar" className="avatar rounded-circle" />
          <NavDropdown title={userName} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </div>
      );
    } else {
      return <Nav.Link href="/auth">Login</Nav.Link>;
    }
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
            <Nav.Link href="/blog">Noticias</Nav.Link>
          </Nav>
          <Nav className="ml-auto">{renderUserSection()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Menu);
