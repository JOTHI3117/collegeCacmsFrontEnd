import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";

const Adddepartment = () => {
  const [department, setDepartment] = useState({
    dept: "",
    courseType: "",
    vacancy: "",
  });

  const [errors, setErrors] = useState({
    dept: "",
    courseType: "",
    vacancy: "",
  });

  const navigate = useNavigate();

  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        await axios
          .post("http://localhost:1234/addStaff", department)
          .then((res) => {
            setDepartment(res.data);

            Swal.fire({
              title: "Staff Successfully!",
              text: "Departent has been Added successfully.",
              icon: "success",
            });
            navigate("/StaffDetails");
          });
      }
    } catch (error) {}
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!department.dept.trim()) {
      newErrors.dept = "* department name is required";
      isValid = false;
    } else {
      newErrors.dept = "";
    }

    if (!department.courseType.trim()) {
      newErrors.role = "* courseType is required";
      isValid = false;
    } else {
      newErrors.courseType = "";
    }

    if (!department.vacancy.trim()) {
      newErrors.counsellorMobile = "* vacancy is required";
      isValid = false;
    } else {
      newErrors.vacancy = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onInputchange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={6} className="form py-5">
          <div className="p-4 shadow rounded bg-white md-6">
            <div className="text-center mb-4">
              <h2 className="mt-3">Add Staff</h2>
            </div>
            <Form onSubmit={handleSubmitt}>
              <Form.Group controlId="formstaffName" className="mb-3">
                <Form.Label className="float-start">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="dept"
                  placeholder="Enter your Department"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">
                  {errors.dept}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formRole" className="mb-3">
                <Form.Label className="float-start">Course Type</Form.Label>
                <Form.Control
                  as="select"
                  name="courseType"
                  onChange={onInputchange}
                  className="input-style"
                >
                  <option value="">Select Degree type</option>
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </Form.Control>
                <Form.Text className="text-danger float-end">
                  {errors.courseType}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formcounsellorMobile" className="mb-3">
                <Form.Label className="float-start">
                  department Vacancy
                </Form.Label>
                <Form.Control
                  type="text"
                  name="vacancy"
                  placeholder="Enter vacancy"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">
                  {errors.vacancy}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="float-start">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">
                  {errors.password}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label className="float-start">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={onInputchange}
                  className="input-style"
                />
                <Form.Text className="text-danger float-end">
                  {errors.confirmPassword}
                </Form.Text>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                className="mt-3 mb-3"
              >
                Add Staff
              </Button>
             <Link to="/Department"> <Button
                variant="secondary"
               
                block
                className="mt-3 mb-3"
              >
               Back
              </Button></Link>
              
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Adddepartment;
