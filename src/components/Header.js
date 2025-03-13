import React, { useState } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css'; // Import CSS file for custom styles

export default function Header({ loggedIn }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Reload the page to reset the state
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand as={RouterLink} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Button as={RouterLink} to="/about" variant="outline-light" className="nav-link-button">About</Button> */}
          <Button as={RouterLink} to="/contact" variant="outline-light" className="nav-link-button">Contact</Button>
        </Nav>
        <Nav>
          {loggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="outline-light" as={RouterLink} to="/signup" className="signup-button">Signup</Button>
              <Button variant="outline-light" as={RouterLink} to="/login">Login</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
