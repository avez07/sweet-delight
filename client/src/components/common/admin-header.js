import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PiDotsNineBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";


function AdminNav({ toggleSidebar }) {
  return (    
    <Navbar  className="bg-body-tertiary admin-navbar">
      <Container fluid>
      <div className='d-block me-3 toggle' onClick={toggleSidebar}>
        <PiDotsNineBold />
      </div>
       
        <Nav className="me-auto">
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 ps-5"
            />
            <span className='search-icon'><BsSearch/></span>
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
