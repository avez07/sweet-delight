import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AuthContext } from "../authentication/auth";
import default_img from "../assets/Default_pfp.svg.png";
import Piechart from "./pie-chart/home-pie";
import BarChart from "./pie-chart/bar-chart";
import LineChart from "./pie-chart/line-chart";

function AdminHome() {
  const { name } = useContext(AuthContext);
  const name_array = name.split(" ");
  const NewName = name_array[0];

  return (
    <>
    <Container fluid>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title className="f-card-tittle d-flex justify-content-between">
            <div style={{width:'60%'}}>
              <img src={default_img} height={40} alt="owner" /> Welcome back{" "}
              <span className="fw-bolder text-capitalize"> {NewName} !</span>
              <div className="sub-tittle">
                Your CRM is Oasis: come back and explore the power of data
              </div>
              <div className="barchart">
                <BarChart />
              </div>
             
            </div>
            <div className="piechart">
              <Piechart />
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row xs={2} md={2} className="g-4 mt-2 text-capitalize">     
        <Col key={1}>
          <Card>
           
            <Card.Body>
              <Card.Title>progress in month</Card.Title>
              <div className="linechart">
                <LineChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>      
    </Row>
    </Container>
    </>
  );
}

export default AdminHome;
