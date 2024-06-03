import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import StudentDash from '../../Studedash/StudentDash';
// import './ViewStudentApplication.css'; // Import custom CSS file for styling

function ViewStudentApplication() {
  const [application, setApplication] = useState({});
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    axios
      .get("http://localhost:1234/findApplicationByUserId/"+userId)
      .then((res) => {
        setApplication(res.data);
       console.log(application)
      })
      .catch((error) => {
        console.error("Error fetching application:", error);
      });
  }, []);
  
  return (
    <div>
      <StudentDash></StudentDash>
    <Container className="mt-4">
      <h2 className="text-center mb-4"> Application Details</h2>
      <Card className="shadow">
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <b><h3 style={{fontSize:"30px",textShadow:" px 2px"}}>Personal Information</h3></b>
                  <p><strong>Name:</strong> {application.name}</p>
                  <p><strong>Mobile Number:</strong> {application.mobileNumber}</p>
                  <p><strong>Gender:</strong> {application.gender}</p>
                  <p><strong>Date of Birth:</strong> {application.dob}</p>
                  <p><strong>Religion:</strong> {application.religion}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Parental Information</h3>
                  <p><strong>Father's Name:</strong> {application.fatherName}</p>
                  <p><strong>Mother's Name:</strong> {application.motherName}</p>
                  <p><strong>Parents' Mobile:</strong> {application.parentsMobile}</p>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Educational Information</h3>
                  <p><strong>SSLC Mark:</strong> {application.sslcMark}</p>
                  <p><strong>Twelfth Mark:</strong> {application.twelthmark}</p>
                  <p><strong>Degree Type:</strong> {application.degreeType}</p>
                  <p><strong>Department:</strong> {application.department?.dept}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Address Information</h3>
                  <p><strong>Address:</strong> {application.address}</p>
                  <p><strong>State:</strong> {application.state}</p>
                  <p><strong>Pincode:</strong> {application.pincode}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Additional Information</h3>
                  <p><strong>Status:</strong> {application.status}</p>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
            {application.status === "Applied" ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
        <h3>Application Status description</h3>
        <p ><strong>Your application   has been waitlisted. We'll keep you updated if a spot becomes available.</strong> </p>
       
      </Card.Body>
    </Card>
  ) : application.status === 'Confirm' ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:"green"}}><strong>"Your college application is confirmed! Please report to the campus on 31/07/2024 to complete the admission process. Welcome to the college community!"</strong> </p>
       
      </Card.Body>
    </Card>
  ) : application.status === 'Approved' ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:""}}><strong>Congratulations! Your application has been approved.join us at the college on 02/07/2024 to verify your documents. We look forward to seeing you then!</strong></p> 
        <p style={{color:"red"}}>Note!! take your original documents</p>

      </Card.Body>
    </Card>
  ) : (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:"red"}}><strong>Thank you for your application. Regrettably,yor application is not Eligible we won't be moving forward at this time. Best wishes for your education.</strong> </p>
      </Card.Body>
    </Card>
  )}

</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
}

export default ViewStudentApplication;
