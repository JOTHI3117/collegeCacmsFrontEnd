import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../Navbar/Topnav";

const Login = () => {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [staffName, setstaffName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitt = (e) => {
    e.preventDefault();
    // Reset previous errors
    setUsernameError("");
    setPasswordError("");

    // Validate username
    if (!staffName) {
      setUsernameError("Username is required");
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // Proceed with login if all fields are filled
    console.log(staffName);
    console.log(password);
    axios
      .get(`http://localhost:1234/staffLogin/${staffName}/${password}`)
      .then((res) => {
        sessionStorage.setItem("staffName", res.data.staffName);
        if(res.data.staffName === "admin" && res.data.password === "admin")
        {
          navigate("/AdminApplicationrequest");
        }
        else {navigate("/Applicationrequest");}
        
        
        }).catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Hurrah",
            text: "Please enter valid credentials",
          });
        })
      
  };

  return (
    <div>
     <Topnav></Topnav> 
    <Container fluid className="bg-light" style={{ minHeight: "66vh" }}>
      <Row
        className="justify-content-center align-items-center"
        // style={{ minHeight: "100vh" }}
      >
        <Col md={4} className="py-5">
          <div className="p-4 shadow rounded bg-white">
            <div className="text-center mb-4">
              {/* <Image
                src="https://www.shctpt.edu/assets/img/blog/recent-post-1.jpg"
                alt="College Logo"
                fluid
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  backgroundColor: "#edf0f5",
                }}
              /> */}
              <h2 className="mt-3">Staff Login</h2>
            </div>

            <Form onSubmit={handleSubmitt}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="staffName"
                  placeholder="Enter your username"
                  value={staffName}
                  style={{ height: '50px', fontSize: '20px' }}
                  onChange={(e) => setstaffName(e.target.value)}
                  isInvalid={!!usernameError}

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
                  style={{ height: '50px', fontSize: '20px' }}
                  isInvalid={!!passwordError}
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
                style={{ height: '50px', fontSize: '25px' }}
              >
                Login
              </Button>
              <p style={{ fontSize: '25px' }}> <Link to="/" style={{textSizeAdjust:"30px"}} >Go to home</Link></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
{/* Footer */}
<footer className="bg-dark text-light py-5" >
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

export default Login;
