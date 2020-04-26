import React from 'react';
import './NavBarHome.css'; 
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavBarHome  = () => (
  <div class= "navBarHome">
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/">
        <img
              src="/icons/logo.png"
              width="80"
              height="60"
              className="d-inline-block align-top" 
            />    
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Link to='/About'>About</Link> 
          <Link to='/FAQ'>FAQs</Link>
          <Link to='/TypUser'>Iniciar Sesión</Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)