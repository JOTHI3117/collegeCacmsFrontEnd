import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import './Form.css'; // Import custom CSS file for additional styling
import axios from 'axios';
import '../src/Admin/Viewuser.css';
const Tablee = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const[applications,setApplications]=useState([])
  const[documents,setDocuments]=useState([])

  const handleApprove = () => {
    setIsApproved(true);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleReject = () => {
    setIsRejected(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewDocument = () => {
    setShowModal(true);
  };

  useEffect(() => {
    AllapplicationDetails()
    AlldocumetDetails();
  }, []);

  const AllapplicationDetails = () => {
    axios.get("http://localhost:1234/getAllApplications").then((response) => {
        setApplications(response.data)
        // console.log(response.data)
      
    });
  };

  const AlldocumetDetails = () => {
    axios.get("http://localhost:1234/getAllDocuments").then((response) => {
        setDocuments(response.data)
        console.log(response.data)
      
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Student Details</h2>
      <Table striped bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Parent's Mobile</th>
            <th>Religion</th>
            <th>SSLC Mark</th>
            <th>HSC Subject One</th>
            <th>HSC Subject Two</th>
            <th>HSC Subject Three</th>
            <th>HSC Cut Off</th>
            <th>Degree Type</th>
            <th>Address</th>
            <th>State</th>
            <th>Pincode</th>
            <th>Status</th>
            <th>user id</th>
            <th>Action</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
        {applications.map((u)=>(
            <tr key={u.applicationId}>
           
            <td>{u.firstName}</td>
            <td>{u.lastName}</td>
            <td>{u.mobileNumber}</td>
            <td>{u.gender}</td>
            <td>{u.dob}</td>
            <td>{u.fatherName}</td>
            <td>{u.motherName}</td>
            <td>{u.parentsMobile}</td>
            <td>{u.religion}</td>
            <td>{u.sslcMark}</td>
            <td>{u.hscSubjectOne}</td>
            <td>{u.hscSubjectTwo}</td>
            <td>{u.hscSubjectThree}</td>
            <td>{u.hscCutOff}</td>
            <td>{u.degreeType}</td>
            <td>{u.address}</td>
            <td>{u.state}</td>
            <td>{u.pincode}</td>
            <td>{u.status}</td>
            <td>{u.user.userId}</td>
            <td>
              {!isApproved && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleApprove}
                  className="custom-button"
                >
                  Approve
                </Button>
              )}
              {isApproved && !isConfirmed && (
                <>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={handleConfirm}
                    disabled={isConfirmed || isRejected}
                    className="mr-2"
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={handleReject}
                    disabled={isConfirmed || isRejected}
                  >
                    Reject
                  </Button>
                </>
              )}
            </td>
            <td>
              <Button
                variant="info"
                size="sm"
                onClick={handleViewDocument}
                className="custom-button"
              >
                View Documents
              </Button>
            </td>
          </tr>
        ))}
          
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal} size="lg"> {/* Set size to "lg" for large modal */}
        <Modal.Header closeButton>
          <Modal.Title>Document Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add content to display multiple documents */}
          {/* Example: Display 5 dummy files */}
          <ul>
            {/* <li><img src={`data:image/jpeg;base64,${profileImage}`}  alt={art.artTitle} /></li> */}
            <li>Document 2</li>
            <li>Document 3</li>
            <li>Document 4</li>
            <li>Document 5</li>
          </ul>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Tablee;
