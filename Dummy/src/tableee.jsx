import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

function ApplicantTable() {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      mobileNumber: 1234567890,
      gender: "Male",
      dob: "1990-01-01",
      fatherName: "Michael",
      motherName: "Jane",
      parentsMobile: 9876543210,
      religion: "Christian",
      sslcMark: 85.5,
      hscSubjectOne: 92.0,
      hscSubjectTwo: 88.5,
      hscSubjectThree: 90.0,
      hscCutOff: 90.0,
      degreeType: "Bachelor's",
      address: "123 Street, City",
      state: "State",
      pincode: 12345,
      status: "Pending",
    },
  ]);

  const handleApprove = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: "Confirmed" } : applicant
      )
    );
  };

  const handleReject = (id) => {
    // Handle rejection logic if needed
  };

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Parents' Mobile</th>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.firstName}</td>
              <td>{applicant.lastName}</td>
              <td>{applicant.mobileNumber}</td>
              <td>{applicant.gender}</td>
              <td>{applicant.dob}</td>
              <td>{applicant.fatherName}</td>
              <td>{applicant.motherName}</td>
              <td>{applicant.parentsMobile}</td>
              <td>{applicant.religion}</td>
              <td>{applicant.sslcMark}</td>
              <td>{applicant.hscSubjectOne}</td>
              <td>{applicant.hscSubjectTwo}</td>
              <td>{applicant.hscSubjectThree}</td>
              <td>{applicant.hscCutOff}</td>
              <td>{applicant.degreeType}</td>
              <td>{applicant.address}</td>
              <td>{applicant.state}</td>
              <td>{applicant.pincode}</td>
              <td>{applicant.status}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleApprove(applicant.id)}
                  disabled={applicant.status === "Confirmed"}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleReject(applicant.id)}
                  disabled={applicant.status === "Confirmed"}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ApplicantTable;
