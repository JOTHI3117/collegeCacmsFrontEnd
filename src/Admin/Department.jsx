import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";

const Department = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/getDepts")
      .then((res) => {
        setDepartment(res.data);
        console.log(department)
      })
      .catch((error) => {
        console.error("Error fetching Department List:", error);
      });
  }, []);

  return (
    
   <div>
      <AdminDashBoard />
      <div className="user-table-container p-lg-5 ">
      <Link to="/AddDepartment" className=" mb-5 accordion-header"> <Button className="accordion-button-primary" >Add department</Button>  </Link>
        <h2 className='text-center mb-lg-5'>department Details</h2>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr className='text-center'>
              <th>DepartmentId</th>
              <th>department Name</th>
              <th>Course Type</th>
              <th>Vacancy</th>
             
            </tr>
          </thead>
          <tbody>
            {department.map((department) => (
              <tr className='text-center' key={department.id}>
                <td>{department.id}</td>
                <td>{department.dept}</td>
                <td>{department.courseType}</td>
                <td>{department.vacancy}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Department;
