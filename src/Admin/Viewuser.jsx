import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminDashBoard from "./AdminDashBoard";
import "bootstrap/dist/css/bootstrap.min.css";

const Viewuser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <AdminDashBoard />
      <div className="user-table-container p-lg-5 ">
        <h2 className="text-center mb-lg-5">User Details</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Mobile</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="text-center" key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Viewuser;
