import React from 'react';
import './navBarProfile.css'; 
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavBarSalir  = () => (
    <div class= "navBarSalir">
      <Navbar bg="transparent" expand="lg">
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Nav className="mr-auto">
            <div class="out">
                <Navbar.Brand href="/">
                    <img
                    src="/icons/logo.png"
                    width="80"
                    height="60"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
            
                 <Link to='/' class="out">Salir</Link>
            </div>
          </Nav>
        
      </Navbar>
    </div>
  )