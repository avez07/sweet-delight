import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import carousal_img from "../assets/caurosal/caraosal-imge.jpg";
import sameday from "../assets/same-day.jpg";
import midnight from "../assets/Midnight-Delivery.jpg";
import bestseller from "../assets/Bestseller.jpg";
import newAraival from "../assets/New-Arrival.jpg";
import aniversary from "../assets/aniversary.jpg";
import birthday from "../assets/Birthday.jpg";



function home() {
  return (
    <>
      <Container fluid className="px-0 pt-3"style={{ background: '#fff6f7' }}>
        <Carousel className="mt-5">
          <Carousel.Item>
            <img src={carousal_img} className="img-fluid" alt="" />
          </Carousel.Item>
        </Carousel>

        <div className="text-center my-4">
          <h3>Flavors Beyond Imagination</h3>
        </div>
        <div className="mx-4 my-3 bg-light px-4">
          <Row xs={1} md={2} className="g-4">
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={sameday} />
              </Card>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={midnight} />
              </Card>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={bestseller} />
              </Card>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={newAraival} />
              </Card>
            </Col>
          </Row>
        </div>
        <div className="text-start my-5 mx-5">
          <h3>Celebrate Special Occasions</h3>
        </div>
        <div className="mx-4 my-3 bg-light px-4">
          <Row xs={1} md={2} className="g-4">
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={birthday} />
              </Card>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={aniversary} />
              </Card>
            </Col>
           
          </Row>
        </div>
      </Container>
    </>
  );
}

export default home;
