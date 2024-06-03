import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Topnav = () => {
  return (
    
     
    
      <Navbar expand="lg" style={{height:"70px", backgroundColor:"#89CFF0" ,borderBottom:"30 px" }}  >
        <b>
          <Navbar.Brand href="#home" style={{fontSize:"30px"}}>Sacred Herat College</Navbar.Brand>
        </b>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <b>
              <Nav.Link as={Link} to="/" style={{cursor: "pointer"}} className="nav-link ">
                Home
              </Nav.Link>
            </b>
            <b>
              {" "}
              <Nav.Link as={Link} to="/about"  style={{cursor: "pointer"}} className="nav-link">
                About Us
              </Nav.Link>
            </b>

            <b>
              <Nav.Link href="/Course"  style={{cursor: "pointer"}} className="nav-link">
                Courses
              </Nav.Link>
            </b>
          </Nav>
          <div className="ms-auto">
            <Nav>
              <b>
                <Nav.Link href="/stafflogin"  style={{cursor: "pointer"}} >Staff Login</Nav.Link>
              </b>
              <b>
                <Nav.Link as={Link}  style={{cursor: "pointer"}} to="/studentlogin">
                  Student Login
                </Nav.Link>
              </b>
              <b>
                <Nav.Link as={Link}  style={{cursor: "pointer"}} to="/studentlogin">
                  
                </Nav.Link>
              </b>

            </Nav>
          </div>
        </Navbar.Collapse>
        </Navbar>
  
    
   
  );
};

export default Topnav;
