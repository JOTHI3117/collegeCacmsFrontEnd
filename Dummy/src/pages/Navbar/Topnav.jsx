import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./nav.css"; // Import CSS file for hover styles

const Topnav = () => {
  return (
    
     
    
      <Navbar bg="primary" expand="lg" style={{height:"70px", color:""}} >
        <b>
          <Navbar.Brand href="#home"> College</Navbar.Brand>
        </b>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <b>
              <Nav.Link as={Link} to="/" className="nav-link ">
                Home
              </Nav.Link>
            </b>
            <b>
              {" "}
              <Nav.Link as={Link} to="/about" className="nav-link">
                About Us
              </Nav.Link>
            </b>

            <b>
              <Nav.Link href="/Course" className="nav-link">
                Courses
              </Nav.Link>
            </b>
          </Nav>
          <div className="ms-auto">
            <Nav>
              <b>
                <Nav.Link href="/stafflogin">Staff Login</Nav.Link>
              </b>
              <b>
                <Nav.Link as={Link} to="/studentlogin">
                  Student Login
                </Nav.Link>
              </b>
            </Nav>
          </div>
        </Navbar.Collapse>
        </Navbar>
  
    
   
  );
};

export default Topnav;
