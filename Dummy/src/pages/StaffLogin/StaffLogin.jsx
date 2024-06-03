import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Link, useNavigate } from "react-router-dom";

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
        if(res.data.staffName === "admin" && res.data.password === "admin")
        {
          navigate("/AdminDashboard");
        }
        else {navigate("/staffDashboard");}
        
        
        }).catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Hurrah",
            text: "Please enter valid credentials",
          });
        })
      
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
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
                  name="staffName"
                  placeholder="Enter your username"
                  value={staffName}
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
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
