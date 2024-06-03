import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Std from "./../Studedash/Std";
import "./UniversityForm.css";
import { useForm } from "react-hook-form";

function ApplyForms() {

    const winuser = window.sessionStorage;
  const name = sessionStorage.getItem("userName");
  const userId=sessionStorage.getItem("userId");

  const {register, handleSubmit} = useForm();

  const[Name,setName]=useState('');
  const[mobileNumber,setMobileNumber]=useState(0);
  const[gender,setGender]=useState('');
  const[dob,setDob]=useState('');
  const[fatherName,setFatherName]=useState('');
  const[motherName,setMotherName]=useState('');
  const[parentsMobile,setParentsMobile]=useState(0);
  const[religion,setreligion]=useState('');
  const[twelthmark,settwelthmark]=useState(0);
  const[sslcMark,setSslcMark]=useState(0);
  const[degreeType,setDegreeType]=useState('');
  const[address,setADddress]=useState('');
  const[state,setState]=useState('');
  const[pincode,setPincode]=useState(0);
  const[profileImage,setProfileImage]=useState(0);
  const[id,setId]=useState(1);


  const onSubmit = (data) => {
     

      const formData = new FormData();


      formData.append('profileImage', data.image[0]);
      
      console.log(userId)
      try {
        axios
        .post(`http://localhost:1234/applyApplication?userId=+${userId}+&Name=+${Name}+&mobileNumber=+${mobileNumber}+&gender=+${gender}+&dob=+${dob}+&fatherName=+${fatherName}+&motherName=+${motherName}+&parentsMobile=+${parentsMobile}+&religion=+${religion}+&sslcMark=+${sslcMark}+&twelthmark=+${twelthmark}+&address=+${address}+&state=+${state}+&pincode=+${pincode}+&degreeType=+${degreeType}+&id=+${id}+`, formData)
        .then((res) => {
          console.log(res.data)
          try {
            if (res.data === "Success") {

              Swal.fire({
                title: "Application Submitted Successfully!",
                text: "Your application has been submitted successfully.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Application Submission Failed!",
                text: "Failed to submit the application. Please try again later.",
                icon: "error",
              });
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch((error) => {
          console.error('Error submitting application:', error);
          Swal.fire({
            title: "Error!",
            text: "Failed to submit the application. Please try again later.",
            icon: "error",
          });
        });
      } catch (error) {
        console.log(error)
      }
    }
 


  return (
    <div>
      <div>
        <Std />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container mb-4">
            {/* Personal Information */}
            <div className="card mb-4">
              <div className="card-header bg-light text-dark">
                Personal Information
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Name */}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      
                    </div>
                  </div>
                  {/* Mobile Number */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="mobileNumber">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                     
                    </div>
                  </div>
                </div>
                {/* Gender, DOB */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select
                        className="form-control"
                        id="gender"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        onChange={(e) => setDob(e.target.value)}
                      />
                     
                    </div>
                  </div>
                </div>
                {/* Father's Name, Mother's Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="fatherName">Father's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fatherName"
                        onChange={(e) => setFatherName(e.target.value)}
                      />
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="motherName">Mother's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="motherName"
                        onChange={(e) => setMotherName(e.target.value)}
                      />
                     
                    </div>
                  </div>
                </div>
                {/* Parent's Mobile, Religion */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="parentsMobile">Parent's Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        id="parentsMobile"
                        onChange={(e) => setParentsMobile(e.target.value)}
                      />
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="religion">Religion</label>
                      <select
                        className="form-control"
                        id="religion"
                        onChange={(e) => setreligion(e.target.value)}
                      >
                        <option value="">Select Religion</option>
                        <option value="Christian">Christian</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Other">Other</option>
                      </select>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Information */}
            <div className="card mb-4">
              <div className="card-header bg-light text-dark">
                Educational Information
              </div>
              <div className="card-body">
                <div className="row">
                  {/* SSLC Mark, 12th Mark */}
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="sslcMark">SSLC Mark</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sslcMark"
                        onChange={(e) => setSslcMark(e.target.value)}
                      />
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="twelthMark">12th Mark</label>
                      <input
                        type="text"
                        className="form-control"
                        id="twelthMark"
                        onChange={(e) => settwelthmark(e.target.value)}
                      />
                      
                    </div>
                  </div>
                </div>
                {/* Degree Type */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="degreeType">Degree Type</label>
                      <select
                        className="form-control"
                        id="degreeType"
                        onChange={(e) => setDegreeType(e.target.value)}
                      >
                        <option value="">Select Degree Type</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Masters">Masters Degree</option>
                      </select>
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="degreeType">document</label>
                      <select
                        className="form-control"
                        id="id"
                       
                       
                      >
                        <option>Select Department</option>
                        {/* {formData1.degreeType === "Masters"
                          ? pg.map((u) => (
                              <option key={u.id} value={u.id}>
                                {u.dept}
                              </option>
                            ))
                          : ug.map((u) => (
                              <option key={u.id} value={u.id}>
                                {u.dept}
                              </option>
                            ))} */}
                      </select>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="card mb-4">
              <div className="card-header bg-light text-dark">
                Address Information
              </div>
              <div className="card-body">
                {/* Address */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        onChange={(e) => setADddress(e.target.value)}
                      />
                      
                    </div>
                  </div>
                </div>
                {/* State, Pincode */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        onChange={(e) => setState(e.target.value)}
                      />
                     
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        onChange={(e) => setPincode(e.target.value)}
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="card mb-4">
              <div className="card-header bg-light text-dark">
                Profile Image
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="profileImage">Profile Image</label>
                      <input
                        type="file"
                        className="form-control"
                        id="profileImage"
                        {...register(profileImage)}
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="row mt-4">
              <div className="col-md-12">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyForms;
