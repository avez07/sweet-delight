import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import  { AuthContext }  from '../authentication/auth';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import default_img from "../assets/Default_pfp.svg.png";
import { PiDotsNineBold } from "react-icons/pi";
import { BsSearch,BsMoonStarsFill,BsBellFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail} from "react-icons/bi";
import { IoLanguageSharp } from "react-icons/io5";

function AdminNav({ toggleSidebar }) {
  const {name} = useContext(AuthContext);
  const currentDate = new Date().toLocaleDateString();
  return (
    <Navbar className="bg-body-tertiary admin-navbar">
      <Container fluid>
        <div className="d-block me-3 toggle" onClick={toggleSidebar}>
          <PiDotsNineBold />
        </div>

        <Nav className="me-auto">
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 ps-5"
                />
                <span className="search-icon">
                  <BsSearch />
                </span>
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Nav>
        <Nav className="me-auto align-items-center">
          <NavDropdown
            id="nav-dropdown-dark-example"
            menuVariant="light"
            className="language-logo"
            title={<div className="me-auto fw-semibold"><span className="fs-4"><IoLanguageSharp /></span>EN</div>}>
            <NavDropdown.Item href="#action/3.1">Englisg</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">हिंदी</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">française</NavDropdown.Item>
          </NavDropdown>
          <div className="divider"></div>
          <span style={{cursor:'pointer',margin:'4px'}}><BsMoonStarsFill/></span>
          <span style={{cursor:'pointer',margin:'4px'}}><BsBellFill/></span>
          <span style={{cursor:'pointer',margin:'4px'}}><BiSolidMessageSquareDetail/></span>
          <div className="divider"></div>
          <div className="d-flex align-items-center"><img src={default_img} height={26} alt="user-img"/><div className="m-0"><div className="text-capitalize ms-2 fw-semibold" style={{fontSize:'13px'}}>{name}</div><div style={{fontSize:'9px',textAlign:'center'}}>{currentDate}</div></div></div>


        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
