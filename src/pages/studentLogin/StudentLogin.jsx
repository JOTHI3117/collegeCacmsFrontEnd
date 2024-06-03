import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../Navbar/Topnav";

const StudentLogin = () => {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitt = (e) => {
    e.preventDefault();
    // Reset previous errors
    setUsernameError("");
    setPasswordError("");

    // Validate username
    if (!userName) {
      setUsernameError("Username is required");
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // Proceed with login if all fields are filled
    

    axios
      .get(`http://localhost:1234/studentLogin/${userName}/${password}`)     
    
      .then((res) => {
        sessionStorage.setItem("userName", res.data.userName);
        sessionStorage.setItem("userId", res.data.userId);
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("mobile", res.data.mobile);
        
        window.location.href ="/layerform"

      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Invalid Login ? if you are new use click sign up button ",
          text: "Please enter valid credentials",
        });
      });
  };

  return (
    <div>
      <Topnav></Topnav>
    <Container fluid className="bg-light mt-0">
      <Row
        className="justify-content-center align-items-center"
        // style={{ minHeight: "60vh" }}
      >
        <Col md={4} className="py-5">
          <div className="p-4 shadow rounded bg-white">
            <div className="text-center mb-4">
              <Image
                src="https://www.shctpt.edu/assets/img/blog/recent-post-1.jpg"
                alt="College Logo"
                fluid
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  backgroundColor: "#edf0f5",
                }}
              />
              <h2 className="mt-3">Student Login</h2>
            </div>

            <Form onSubmit={handleSubmitt}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  style={{ height: "50px", fontSize: "20px" }}
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!usernameError}
                  pattern=".+@gmail\.com"
                />
                <Form.Control.Feedback type="invalid">
                  {usernameError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!passwordError}
                  style={{ height: "50px", fontSize: "20px" }}
                />
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                className="mt-5 mb-3"
                style={{ height: "50px", fontSize: "25px" }}
              >
                Login
              </Button>
            </Form>
            <p style={{ fontSize: "25px" }}>
              newUser?{" "}
              <Link to="/registerstudent" style={{ textSizeAdjust: "30px" }}>
                signUp Here!
              </Link>
            </p>
            <p style={{ fontSize: "25px" }}>
              {" "}
              <Link to="/" style={{ textSizeAdjust: "30px" }}>
                Go to home
              </Link>
            </p>
          </div>
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
              <p>You can follow us on our social media plaforms including Facebook, Instagram, Youtube, Twitter and Google + at Sacred Heart College (Autonomous).</p>
            </Col>
          </Row>
        </Container>
      </footer>

    </div>
  );
};

export default StudentLogin;
