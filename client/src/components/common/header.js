import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <Navbar expand="lg" className=" py-3 fixed-top" style={{background:"#d76957"}}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className = "text-light text-decoration-none fw-semibold fs-5 text-capitalize me-3">Home</NavLink>
            <NavLink to="/about" className ="text-light text-decoration-none fw-semibold fs-5 text-capitalize me-3">about us</NavLink>
            <NavLink to="/contact" className ="text-light text-decoration-none fw-semibold fs-5 text-capitalize me-3">services</NavLink>
            <NavLink to="/login" className ="text-light text-decoration-none fw-semibold fs-5 text-capitalize me-3">login</NavLink>
            <NavLink to="/signup" className ="text-light text-decoration-none fw-semibold fs-5 text-capitalize me-3">signup</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header;