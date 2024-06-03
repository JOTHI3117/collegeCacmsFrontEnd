import React from "react";
import "./StaffDashBoard.css";
import { Link } from "react-router-dom";

function StaffDashBoard() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
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
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-md-auto gap-2">
              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-house-fill me-2"></i>Home
                </a>
              </li>
              <li class="nav-item rounded">
                <Link to='/Applicationrequest' class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-house-fill me-2"></i>Applications
                </Link>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-house-fill me-2"></i>profile
                </a>
              </li>

              <li class="nav-item rounded">
                <a class="nav-link active" aria-current="page" href="#">
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

export default StaffDashBoard;
