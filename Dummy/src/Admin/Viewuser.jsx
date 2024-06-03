import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin/Viewuser.css';

const Viewuser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1234/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (

    <div className="user-table-container">
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewuser;
