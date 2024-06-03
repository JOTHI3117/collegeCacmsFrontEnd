import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import AdminDashBoard from "./AdminDashBoard";

const AdminViewPllications = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [selectedUserId, setSelectedUserId] = useState(null);
  const [ApplicationId, setApplicationId] = useState([]);

  const [applications, setApplications] = useState([]);
  const [documents, setDocuments] = useState([]);

  const handleApprove = (applicationId, status) => {
    console.log(applicationId);
    console.log(status);
    axios
      .post(
        `http://localhost:1234/updateStatus?applicationId=${applicationId}&status=${status}`
      )
      .then((res) => {
        console.log(status + "result");
        setIsApproved(false);
        window.location.reload();
      });
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

  const handleViewDocument = async (applicationId) => {
    console.log(applicationId);
    await axios
      .get(`http://localhost:1234/findByID/${applicationId}`)
      .then((res) => {
        setApplicationId(res.data);
        setShowModal(true);
      });
  };
  console.log(ApplicationId);

  useEffect(() => {
    AllapplicationDetails();
  }, []);

  const AllapplicationDetails = () => {
    axios.get("http://localhost:1234/getAllApplications").then((response) => {
      setApplications(response.data);
    });
  };

  return (
    <div>
      <AdminDashBoard></AdminDashBoard>

      <Container
        fluid
        className="w-100"
        style={{ marginTop: "70px", size: "50%", width: "1100px" }}
      >
        <h2 className="text-center mb-4">Student Details</h2>
        <Table striped bordered hover className="w-100 custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Father's Name</th>

              <th>Parent's Mobile</th>
              <th>Religion</th>
              <th>SSLC Mark</th>
              <th>12th Mark</th>
              <th>Degree Type</th>
              <th>Address</th>
              <th>State</th>

              <th>Status</th>
              <th>View Document</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((u) => (
              <tr key={u.applicationId}>
                <td>{u.name}</td>
                <td>{u.mobileNumber}</td>
                <td>{u.gender}</td>
                <td>{u.dob}</td>
                <td>{u.fatherName}</td>
                <td>{u.parentsMobile}</td>
                <td>{u.religion}</td>
                <td>{u.sslcMark}</td>
                <td>{u.twelthmark}</td>
                <td>{u.degreeType}</td>
                <td>{u.address}</td>
                <td>{u.state}</td>
                <td>{u.status}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleViewDocument(u.applicationId)}
                    className="custom-button"
                    style={{ height: "50px", width: "110px" }}
                  >
                    View Documents
                  </Button>
                </td>
                <td>
                  {u.status == "Applied" ? (
                    <>
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ height: "60px" }}
                        onClick={() =>
                          handleApprove(u.applicationId, "Approved")
                        }
                        className="custom-button"
                      >
                        Approve Application
                      </Button>
                    </>
                  ) : u.status === "Confirm" || u.status === "Reject" ? (
                    "Application" + " " + u.status
                  ) : (
                    <>
                      <sapn>
                        <Button
                          variant="success"
                          className="custom-button"
                          size="sm"
                          onClick={() =>
                            handleApprove(u.applicationId, "Confirm")
                          }
                        >
                          Confirm Admission
                        </Button>

                        <Button
                          variant="danger"
                          size="sm "
                          className="custom-button"
                          onClick={() =>
                            handleApprove(u.applicationId, "Reject")
                          }
                          style={{ height: "50px", width: "110px" }}
                        >
                          Reject
                        </Button>
                      </sapn>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Document Viewer</Modal.Title>
          </Modal.Header>
          <Modal.Body class="modal-dialog modal-lg">
            <img
              src={`data:image/jpeg;base64,${ApplicationId.profileImage}`}
              onChange={(applicationId) =>
                setApplicationId(applicationId.target.value)
              }
            ></img>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default AdminViewPllications;
