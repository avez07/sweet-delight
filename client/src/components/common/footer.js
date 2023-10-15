import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import review_1 from "../assets/review/review-1.jpg";
import review_2 from "../assets/review/review-2.jpg";
import review_3 from "../assets/review/review-3.jpg";
import review_4 from "../assets/review/review-4.jpg";
import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';

function footer() {
  return (
    <Container fluid style={{ background: "#ffefe8" }} className="px-0">
      <div className="mx-4  px-4 py-3">
        <div className="text-center my-4 text-capitalize head">
          <h3>Read some of our recent blogs</h3>
        </div>
        <Row xs={2} md={4} className="g-4">
          <Col key={1}>
            <Card>
              <Card.Img variant="top" className="p-2" src={review_1} />
              <Card.Body>
                <Card.Title>Amazing Cake!</Card.Title>
                <Card.Text>
                  I ordered a cake from this website, and it was simply amazing!
                  The flavor, decoration, and service were top-notch. I'll be
                  ordering again for sure
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col key={2}>
            <Card>
              <Card.Img variant="top" className="p-2" src={review_2} />
              <Card.Body>
                <Card.Title>Impressive Cake!</Card.Title>
                <Card.Text>
                  I was thoroughly impressed. The cake was delicious, and the
                  design was stunning. It was a hit at our event, and the
                  ordering process was a breeze. I highly recommend it!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col key={3}>
            <Card>
              <Card.Img variant="top" className="p-2" src={review_3} />
              <Card.Body>
                <Card.Title>Impressive Cake Selection!</Card.Title>
                <Card.Text>
                  I must say, the selection they offer is truly impressive. The
                  cake I chose was not only beautiful but also scrumptious.
                  Highly recommended!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col key={4}>
            <Card>
              <Card.Img variant="top" className="p-2" src={review_4} />
              <Card.Body>
                <Card.Title>Exquisite Cake and Outstanding Service!</Card.Title>
                <Card.Text>
                  The cake was not only delicious but also beautifully
                  presented. The service and delivery were top-notch. Highly
                  recommended!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
      <Row xs={2} md={5} className="footer-image g-4" style={{width:"100%"}}>
        <Col key={1}>
          <h5>logo</h5>
        </Col>
        <Col key={2}>
          <h5>Know us</h5>
          <Nav className="ms-auto flex-column nav_bar">
            <NavLink
              to="/"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">About us</NavLink>
            <NavLink
              to="/about"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">contact us</NavLink>
            <NavLink
              to="/contact"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">need help</NavLink>
            <NavLink
              to="/login"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">blogs</NavLink>
            <NavLink
              to="/signup"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">locate us</NavLink>
          </Nav>
        </Col>
        <Col key={3}>
          <h5>Need help</h5>
          <Nav className="ms-auto flex-column nav_bar">
            <NavLink
              to="/"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">F&Q</NavLink>
            <NavLink
              to="/about"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">cancellation and refund</NavLink>
            <NavLink
              to="/contact"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">privarcy policy</NavLink>
            <NavLink
              to="/login"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">term and condition</NavLink>
            <NavLink
              to="/signup"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">customer</NavLink>
            <NavLink
              to="/signup"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">sitemap</NavLink>
          </Nav>
        </Col>
        <Col key={4}>
          <h5>More Info</h5>
          <Nav className="ms-auto flex-column nav_bar">
            <NavLink
              to="/"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">trending cakes</NavLink>
            <NavLink
              to="/about"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">coupon & offer</NavLink>
            <NavLink
              to="/contact"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">francies</NavLink>
            <NavLink
              to="/login"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">investor relation</NavLink>
            <NavLink
              to="/signup"
              className="text-muted text-decoration-none fw-semibold fs-6 text-capitalize me-3">stamps</NavLink>
          </Nav>
        </Col>
        <Col key={5}>
          <h5>Know us</h5>
          <ul className="d-flex icons">
            <li>
              <a href="/link"><BsFacebook/></a>
            </li>
            <li>
              <a href="/link"><BsInstagram/></a>
            </li>
            <li>
              <a href="/link"><BsTwitter/></a>
            </li>
          </ul>
          <div>
            <input type="text" placeholder="Email Address" className="form-control" />
            <Button variant="danger" className="mt-2" style={{width :"100%"}}>Submit</Button>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default footer;
