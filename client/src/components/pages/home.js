import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import carousal_img_1 from "../assets/caurosal/Diwali_Banner-carosal.jpg";
import carousal_img_2 from "../assets/caurosal/Diwali-banner_carousal.jpg";
import carousal_img_3 from "../assets/caurosal/Boss-Day_Desk-carousal.jpg";
import carousal_img_4 from "../assets/caurosal/Cake-Banner_Desk-carousal.jpg";
// import carousal_img_5 from "../assets/caurosal/caraosal-imge.jpg";


import sameday from "../assets/same-day.jpg";
import midnight from "../assets/Midnight-Delivery.jpg";
import bestseller from "../assets/Bestseller.jpg";
import newAraival from "../assets/New-Arrival.jpg";
import wedding from "../assets/wedding.jpg";
import birthday from "../assets/Birthday.jpg";
import chocolate from "../assets/Chocolate-Cakes.jpg";
import butterscorh from "../assets/Butterscotch-Cakes.jpg";
import redvalvet from "../assets/Red-Velvet-Cakes.jpg";
import truffle from "../assets/Truffle-Cakes.jpg";
import vanila from "../assets/Vanila-Cakes.jpg";
import freshfruit from "../assets/Fresh-Fruit-Cakes.jpg";
import blackforest from "../assets/Black-Forest-Cakes.jpg";
import pinapple from "../assets/Pineapple-Cakes.jpg";
import flowerAndcake from "../assets/Flowers-N-Cakes.jpg";
import creamcake from "../assets/Cream-Cakes.jpg";
import fountant from "../assets/Fondant-Cakes.jpg";
import kids from "../assets/Kids.jpg";
import photo from "../assets/Photo-Cakes.jpg";
import pintacake from "../assets/Pinata-Cakes.jpg";
import white from "../assets/white.jpg";
import red from "../assets/red.jpg";
import brown from "../assets/brown.jpg";
import blue from "../assets/blue.jpg";

function home() {
  return (
    <>
      <Container fluid className="px-0 py-3" style={{ background: "#f7f0f1" }}>
        <Carousel className="mt-4">
          <Carousel.Item>
            <img src={carousal_img_1} className="img-fluid" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousal_img_2} className="img-fluid" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousal_img_3} className="img-fluid" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousal_img_4} className="img-fluid" alt="" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img src={carousal_img_5} className="img-fluid" alt="" />
          </Carousel.Item> */}
        </Carousel>

        <div className="mx-4 my-3 bg-light px-4 py-3">
          <div className="text-center my-4">
            <h3>Flavors Beyond Imagination</h3>
          </div>
          <Row xs={1} md={2} className="g-4">
            <Col key={1}>
              <Card>
                <Card.Img variant="top" src={sameday} />
              </Card>
            </Col>
            <Col key={2}>
              <Card>
                <Card.Img variant="top" src={midnight} />
              </Card>
            </Col>
            <Col key={3}>
              <Card>
                <Card.Img variant="top" src={bestseller} />
              </Card>
            </Col>
            <Col key={4}>
              <Card>
                <Card.Img variant="top" src={newAraival} />
              </Card>
            </Col>
          </Row>
        </div>

        <div className="mx-4 my-3 bg-light py-2 px-4 text-capitalize">
          <div className="text-start py-3">
            <h3>Celebrate Special Occasions</h3>
          </div>
          <Row xs={1} md={2} className="g-4">
            <Col key={1}>
              <Card>
                <Card.Img variant="top" src={birthday} />
              </Card>
              <p className="my-2 fw-semibold fs-4 text-center">Birthday</p>
            </Col>
            <Col key={2}>
              <Card>
                <Card.Img variant="top" src={wedding} />
              </Card>
              <p className="my-2 fw-semibold fs-4 text-center">Wedding</p>
            </Col>
          </Row>
        </div>

        <div className="mx-4 my-3 bg-light py-2 px-4 text-capitalize">
          <div className="text-start py-2">
            <h3>Flavour blast</h3>
          </div>
          <Row xs={2} md={4} className="g-4">
            <Col key={1}>
              <Card>
                <Card.Img variant="top" src={chocolate} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                chocolate cakes
              </p>
            </Col>
            <Col key={2}>
              <Card>
                <Card.Img variant="top" src={vanila} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">vanila cakes</p>
            </Col>
            <Col key={3}>
              <Card>
                <Card.Img variant="top" src={pinapple} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                pinapple cakes
              </p>
            </Col>
            <Col key={4}>
              <Card>
                <Card.Img variant="top" src={truffle} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">truffle cakes</p>
            </Col>
            <Col key={5}>
              <Card>
                <Card.Img variant="top" src={butterscorh} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                butter scorh cakes
              </p>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={redvalvet} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                red valvet cakes
              </p>
            </Col>
            <Col key={7}>
              <Card>
                <Card.Img variant="top" src={blackforest} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                black forest cakes
              </p>
            </Col>
            <Col key={8}>
              <Card>
                <Card.Img variant="top" src={freshfruit} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                freshfruit cakes
              </p>
            </Col>
          </Row>
        </div>
        <div className="mx-4 my-3 bg-light py-2 px-4 text-capitalize">
          <div className="text-start py-2 mx-5">
            <h3>Explore more</h3>
          </div>
          <Row xs={2} md={3} className="g-4">
            <Col key={1}>
              <Card>
                <Card.Img variant="top" src={flowerAndcake} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                chocolate cakes
              </p>
            </Col>
            <Col key={2}>
              <Card>
                <Card.Img variant="top" src={creamcake} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">vanila cakes</p>
            </Col>
            <Col key={3}>
              <Card>
                <Card.Img variant="top" src={fountant} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                pinapple cakes
              </p>
            </Col>
            <Col key={4}>
              <Card>
                <Card.Img variant="top" src={photo} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">photo cakes</p>
            </Col>
            <Col key={5}>
              <Card>
                <Card.Img variant="top" src={pintacake} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                pinta cakes
              </p>
            </Col>
            <Col key={6}>
              <Card>
                <Card.Img variant="top" src={kids} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                kids cakes
              </p>
            </Col>           
          </Row>
        </div>
        <div className="mx-4 mt-3 bg-light py-2 px-4 text-capitalize">
          <div className="text-start py-2 mx-5">
            <h3>color picker</h3>
          </div>
          <Row xs={2} md={4} className="g-4">
            <Col key={1}>
              <Card>
                <Card.Img variant="top" src={blue} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                blue cakes
              </p>
            </Col>
            <Col key={2}>
              <Card>
                <Card.Img variant="top" src={white} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">white cakes</p>
            </Col>
            <Col key={3}>
              <Card>
                <Card.Img variant="top" src={red} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                red cakes
              </p>
            </Col>
            <Col key={4}>
              <Card>
                <Card.Img variant="top" src={brown} />
              </Card>
              <p className="my-2 fw-semibold fs-5 text-center">
                brown cakes
              </p>
            </Col>
                     
          </Row>
        </div>
      </Container>
    </>
  );
}

export default home;
