import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import "./home.css";
import Topnav from "../Navbar/Topnav";
// import Applyform from "../Applyform";
// import Nnnn from "../Navbar/Nnnn";

const HomePage = () => {
  return (
    <div>
      <Topnav></Topnav>

      <Carousel className="p-3 mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100 d-flex justify-content-lg-center"
            src="https://kongunaducollege.ac.in/sites/kongunaducollege.ac.in/files/styles/home_banner/public/Home%20Banner/banner04.jpg?itok=-OAkwArl" // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Good and clean Campus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 d-flex justify-content-lg-center"
            src="https://kongunaducollege.ac.in/sites/kongunaducollege.ac.in/files/styles/home_banner/public/Home%20Banner/banner08.jpg?itok=cOD3g8vc" // Replace with your image URL
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Award Event</h3>
            <p>Our CHief Guest</p>
          </Carousel.Caption>
        </Carousel.Item>
       
        {/* Add more Carousel.Items for additional slider images */}
      </Carousel>

      {/* Announcements */}
      <Container className="mt-1">
        <h2 className="text-center mb-2">Announcements</h2>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Admission Started</Card.Title>
                <Card.Text>
                  2024-2025 admission started,
                  <marquee>
                    {" "}
                    <b className="bg-light">
                      <a className="text-danger">
                        Apply your Application clickhere!!!
                      </a>
                    </b>
                  </marquee>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Result announced</Card.Title>
                <Card.Text>
                  2023-2024 semester reults han been announced,check your
                  results
                  <marquee>
                    {" "}
                    <a href="#">check your results here</a>
                  </marquee>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Course Details */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Course Details</h2>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>UG Courses</Card.Title>
                <Card.Text>
                  Course description goes here. Add more course details as
                  needed.
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>PG Courses</Card.Title>
                <Card.Text>
                  Another course description goes here. You can add more courses
                  below.
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col>
              <h5>Contact Us</h5>
              <p>Tirupattur-635 601, Tirupattur District, Tamil Nadu, India</p>
              <p>Email: jothilinamtpt@gmail.com</p>
              <p>Phone: +1234567890</p>
            </Col>
            <Col>
              <h5>About Us</h5>
              <p>hi da</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
