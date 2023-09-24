import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 fixed-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className = "text-dark text-decoration-none fw-semibold fs-5 text-capitalize me-3">Home</NavLink>
            <NavLink to="/about" className ="text-dark text-decoration-none fw-semibold fs-5 text-capitalize me-3">about us</NavLink>
            <NavLink to="/contact" className ="text-dark text-decoration-none fw-semibold fs-5 text-capitalize me-3">services</NavLink>
            <NavLink to="/login" className ="text-dark text-decoration-none fw-semibold fs-5 text-capitalize me-3">login</NavLink>
            <NavLink to="/signup" className ="text-dark text-decoration-none fw-semibold fs-5 text-capitalize me-3">signup</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;