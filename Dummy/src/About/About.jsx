import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h1>About Our College</h1>
              <p>Learn more about our college, our mission, and our commitment to excellence.</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>We, the community of Sacred Heart College, inspired by the love of the Heart of Jesus and fundamental human values, following the educative system of Don Bosco, are committed to the creation of an educated, ethical, and prosperous society where equality, freedom and fraternity reign by imparting higher education to poor and rural youth which enables them towards integral human development.</p>
              <h2>Our Vision</h2>
              <p>In the field of Higher Education we are committed to</p>
              <h2>Our Values</h2>
              <ul>
                <p>Integrity</p>
                <p>Accountability</p>
               <p> predictability</p>
               <p> Ownership</p>
              </ul>
            </Col>
            <Col md={6}>
              <Image src="https://www.shctpt.edu/assets/img/blog/recent-post-1.jpg" alt="About Us Image" fluid />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h2>Our Achievements</h2>
              <Card>
                <Card.Body>
                  <Card.Title>2023: College ranked #1 in the country</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies justo eget eros malesuada ullamcorper. Nulla facilisi. Fusce venenatis ex non lacus tincidunt lacinia.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>2022: Award for Excellence in Education</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies justo eget eros malesuada ullamcorper. Nulla facilisi. Fusce venenatis ex non lacus tincidunt lacinia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-light py-4">
        <Container>
          <Row>
            <Col>
              <h5>Contact Us</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </Col>
            <Col>
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper magna.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default About;
