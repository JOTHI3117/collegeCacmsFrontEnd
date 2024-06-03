import React from "react";
import { Link } from "react-router-dom";

function AdminDashBoard() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
              Welcome Admin
            </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span >Admin Dashboard</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-md-auto gap-2">
              {/* <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/AdminDashboard">
                  <i class="bi bi-house-fill me-2"></i>Home
                </a>
              </li> */}
              <li class="nav-item rounded">
                <Link to='/AdminApplicationrequest' class="nav-link active" aria-current="page" href="/AdminApplicationrequest">
                  <i class="bi bi-house-fill me-2"></i>Applications
                </Link>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/viewUser">
                  <i class="bi bi-house-fill me-2"></i>Users
                </a>
              </li>

              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/StaffDetails">
                  <i class="bi bi-house-fill me-2"></i>Staffs
                </a>
              </li>

              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/Department">
                  <i class="bi bi-house-fill me-2"></i>Departments
                </a>
              </li>

              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="/stafflogin">
                  <i class="bi bi-house-fill me-2"></i>Logout
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminDashBoard;

