import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from "sweetalert2/dist/sweetalert2.js";

import { useNavigate } from 'react-router-dom';
import StudentDash from '../../Studedash/StudentDash';
// import './StudentApplyForm.css'; // Import custom CSS file

function StudetntApplyForm() {
  const winuser = window.sessionStorage;
  const applicationname = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const usercontact = sessionStorage.getItem("mobile");
  const useremail = sessionStorage.getItem("email");
  
  
  

  const navigate=useNavigate();

  const [pg, setPg] = useState([]);
  const [ug, setUg] = useState([]);

  useEffect(() => {
    getPgdepts();
    getUgdepts();
  }, []);

  const getPgdepts = async () => {
    await axios.get("http://localhost:1234/getPgDeptDetails").then((response) => {
      setPg(response.data);
    });
  };

  const getUgdepts = async () => {
    await axios.get("http://localhost:1234/getUgDeptDetails").then((response) => {
      setUg(response.data);
    });
  };

  const [name, setName] = useState(applicationname);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [parentsMobile, setParentsMobile] = useState('');
  const [religion, setReligion] = useState('');
  const [twelthmark, setTwelthmark] = useState('');
  const [sslcMark, setSslcMark] = useState('');
  const [degreeType, setDegreeType] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [id, setId] = useState(1);

  const { register, handleSubmit, formState: { errors } } = useForm({mode:""});

  const onSubmit = (data) => {
    
    const formData = new FormData();
    formData.append('profileImage', data.profileImage[0]);
    console.log(data)
    axios.post(`http://localhost:1234/applyApplication?userId=${userId}&name=${name}&mobileNumber=${mobileNumber}&gender=${gender}&dob=${dob}&fatherName=${fatherName}&motherName=${motherName}&parentsMobile=${parentsMobile}&religion=${religion}&sslcMark=${sslcMark}&twelthmark=${twelthmark}&address=${address}&state=${state}&pincode=${pincode}&degreeType=${degreeType}&id=${id}`, formData)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Application Submitted Successfully!",
          text: "Your application has been submitted successfully.",
          icon: "success",
        });
      
      window.location.href="/layerform"
      window.location.reload();
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <StudentDash></StudentDash>
      <Container>
        <Row>
          <span className='text-center mb-5' style={{fontSize:"30px"}}>Application Form</span>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Personal Information</Card.Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name = "name" onChange={(event) => setName(event.target.value)} placeholder="Enter Name"  defaultValue={applicationname} />
                   <Form.Text className="text-danger">{errors.name?.message}</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="tel" inputMode='numeric' onChange={(event) => setMobileNumber(event.target.value)} placeholder="Enter Mobile Number" defaultValue={usercontact}  pattern={"[0-9]*"} />
                  {errors.mobileNumber && <Form.Text className="text-danger">Mobile Number is required.</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" onChange={(event) => setGender(event.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  {errors.gender && <Form.Text className="text-danger">Gender is required.</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" max="2008-12-31" onChange={(event) => setDob(event.target.value)} placeholder="Enter Date of Birth" required />
                  {errors.dob && <Form.Text className="text-danger">Date of Birth is required.</Form.Text>}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control type="text" onChange={(event) => setFatherName(event.target.value)} placeholder="Enter Father's Name" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mother's Name</Form.Label>
                  <Form.Control type="text" onChange={(event) => setMotherName(event.target.value)} placeholder="Enter Mother's Name" required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Parent's Mobile</Form.Label>
                  <Form.Control type="number" onChange={(event) => setParentsMobile(event.target.value)} placeholder="Enter Parent's Mobile" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Religion</Form.Label>
                  <Form.Control as="select" onChange={(event) => setReligion(event.target.value)} required>
                    <option value="">Select Religion</option>
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              </form>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Educational Information</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>SSLC Mark</Form.Label>
                  <Form.Control type="number" min={200} max={500} onChange={(event) => setSslcMark(event.target.value)} placeholder="Enter SSLC Mark" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>12th Mark</Form.Label>
                  <Form.Control type="number" min={200} max={500} onChange={(event) => setTwelthmark(event.target.value)} placeholder="Enter 12th Mark" required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Degree Type</Form.Label>
                  <Form.Control as="select" onChange={(event) => setDegreeType(event.target.value)} required>
                    <option value="">Select Degree Type</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters Degree</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Department</Form.Label>
                  <Form.Control as="select" onChange={(event) => setId(event.target.value)} disabled={!degreeType} required>
                    <option value=" ">Select Department</option>
                    {degreeType === "Masters"
                      ? pg.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.dept}
                          </option>
                        ))
                      : ug.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.dept}
                          </option>
                        ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Address Information</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" onChange={(event) => setAddress(event.target.value)} placeholder="Enter Address" required/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" onChange={(event) => setState(event.target.value)} placeholder="Enter State" required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control type="text" onChange={(event) => setPincode(event.target.value)} placeholder="Enter Pincode" required />
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-4 custom-card">
              <Card.Title>Upload Documents</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control type="file" {...register("profileImage")} minLength={6} onChange={(event) => setProfileImage(event.target.files[0])}  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudetntApplyForm;
