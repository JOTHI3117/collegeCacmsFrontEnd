import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/getAllStaffs")
      .then((res) => {
        setStaffList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching staffLists:", error);
      });
  }, []);

  return (
    
   <div>
      <AdminDashBoard />
      <div className="user-table-container p-lg-5 ">
      <Link to="/AddStaff " className=" mb-5   accordion-header"> <Button className="accordion-button-primary">Add Staff</Button>  </Link>
        <h2 className='text-center mb-lg-5'>staffList Details</h2>
       
        <Table striped bordered hover responsive>
          <thead>
            <tr className='text-center'>
              <th>staff ID</th>
              <th>staffList Name</th>
              <th>Email</th>
              <th>Mobile</th>
              
            </tr>
          </thead>
          <tbody>
            {staffList.map((staffList) => (
              <tr className='text-center' key={staffList.staffId}>
                <td>{staffList.staffId}</td>
                <td>{staffList.staffName}</td>
                <td>{staffList.role}</td>
                <td>{staffList.counsellorMobile}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StaffList;
