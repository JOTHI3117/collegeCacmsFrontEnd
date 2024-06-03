import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Std from "./../Studedash/Std";
import "./UniversityForm.css";
import { useForm } from "react-hook-form";

function Applyform() {
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
  const[documentid,setDocumentid]=useState(1);

  console.log(userId)



const [pg,setPg]=useState([]);
const [ug,setUg]=useState([]);

const [deptId , setDeptId]=useState();



  const [formData1, setFormData] = useState({
    name: "",
    mobileNumber: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    parentsMobile: "",
    religion: "",
    sslcMark: "",
    twelthMark: "",
    degreeType: "",
    address: "",
    state: "",
    pincode: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    console.log(e.target.value)
    const newValue = id === "profileImage" ? files[0] : value;
    setFormData({ ...formData1, [id]: newValue });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    Object.entries(formData1).forEach(([key, value]) => {
      if (value === "" && key !== "profileImage") {
        newErrors[key] = "This field is required";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };



  useEffect(() => {
    getPgdepts();
    getUgdepts();
  }, []);

  const getPgdepts = () => {
    axios.get("http://localhost:1234/getPgDeptDetails").then((response) => {
      setPg(response.data);
    });
  };

  const getUgdepts = () => {
    axios.get("http://localhost:1234/getUgDeptDetails").then((response) => {
      setUg(response.data);
    });
  };

  const onSubmit = (data) => {
    // e.preventDefault();

 
    
    
    if (validateForm()) {

      // console.log(typeof formData1.address)
      // console.log(typeof formData1.degreeType)
      // console.log(typeof formData1.dob)
      // console.log(typeof formData1.fatherName)
      // console.log(typeof formData1.gender)
      // console.log(typeof formData1.mobileNumber)
      // console.log(typeof formData1.motherName)
      // console.log(typeof formData1.name)
      // console.log(typeof formData1.parentsMobile)
      // console.log(typeof formData1.pincode)
      // console.log(typeof formData1.profileImage)
      // console.log(typeof formData1.religion)
      // console.log(typeof formData1.sslcMark)
      // console.log(typeof formData1.state)
      // console.log(typeof formData1.twelthMark)
      

      const formData = new FormData();

      // formData.append('Name', formData.Name);
    
      // formData.append('mobileNumber',formData.mobileNumber);
     
      // formData.append('gender', formData.gender);

      // formData.append('dob', formData.dob);
    
      // formData.append('fatherName', formData.fatherName);
     
      // formData.append('motherName', formData.motherName);
    

      // formData.append('parentsMobile',formData.parentsMobile);
    
      // formData.append('religion', formData.religion);

      // formData.append('sslcMark',formData.sslcMark);
     
      // formData.append('twelthmark', formData.twelthmark);
     
      // formData.append('degreeType', formData.degreeType);
      
      // formData.append('address', formData.address);
      
      // formData.append('state', formData.state);

      // formData.append('pincode', formData.pincode);
    
      
    
      // formData.append('id', id)

      formData.append('profileImage', data.image[0]);
      

      // Object.entries(formData).forEach(([key, value]) => {
      //   formDataToSend.append(key, value);
      //   });
       
      console.log(userId)
      try {
        axios
        .post(`http://localhost:1234/applyApplication?userId=+${userId}+&Name=+${Name}+&mobileNumber=+${mobileNumber}+&gender=+${gender}+&dob=+${dob}+&fatherName=+${fatherName}+&motherName=+${motherName}+&parentsMobile=+${parentsMobile}+&religion=+${religion}+&sslcMark=+${sslcMark}+&twelthmark=+${twelthmark}+&address=+${address}+&state=+${state}+&pincode=+${pincode}+=1&degreeType=+${degreeType}+,`, formData)
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
  };

  return (
    <div>
      <Std />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-4">
          {/* Personal Information */}
          <div className="card mb-4">
            <div className="card-header bg-light text-dark">Personal Information</div>
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
                    {errors.name && (
                      <small className="text-danger float-end">{errors.name}</small>
                    )}
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
                    {errors.mobileNumber && (
                      <small className="text-danger float-end">{errors.mobileNumber}</small>
                    )}
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
                    {errors.gender && (
                      <small className="text-danger float-end">{errors.gender}</small>
                    )}
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
                    {errors.dob && (
                      <small className="text-danger float-end">{errors.dob}</small>
                    )}
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
                    {errors.fatherName && (
                      <small className="text-danger float-end">{errors.fatherName}</small>
                    )}
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
                    {errors.motherName && (
                      <small className="text-danger float-end">{errors.motherName}</small>
                    )}
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
                    {errors.parentsMobile && (
                      <small className="text-danger float-end">{errors.parentsMobile}</small>
                    )}
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
                    {errors.religion && (
                      <small className="text-danger float-end">{errors.religion}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Information */}
          <div className="card mb-4">
            <div className="card-header bg-light text-dark">Educational Information</div>
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
                    {errors.sslcMark && (
                      <small className="text-danger float-end">{errors.sslcMark}</small>
                    )}
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
                    {errors.twelthMark && (
                      <small className="text-danger float-end">{errors.twelthMark}</small>
                    )}
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
                    {errors.degreeType && (
                      <small className="text-danger float-end">{errors.degreeType}</small>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="degreeType">document</label>
                    <select
                      className="form-control"
                      id="id"
                      onChange={(e)=>{
                        setDeptId()
                      }}
                      disabled={
                        formData1.degreeType !== "Masters" &&
                        formData1.degreeType !== "Bachelor"
                      }
                    >
                      <option>Select Department</option>
                      {formData1.degreeType === "Masters"
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
                    </select>
                    {errors.document && (
                      <small className="text-danger float-end">{errors.document}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="card mb-4">
            <div className="card-header bg-light text-dark">Address Information</div>
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
                    {errors.address && (
                      <small className="text-danger float-end">{errors.address}</small>
                    )}
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
                    {errors.state && (
                      <small className="text-danger float-end">{errors.state}</small>
                    )}
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
                    {errors.pincode && (
                      <small className="text-danger float-end">{errors.pincode}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="card mb-4">
            <div className="card-header bg-light text-dark">Profile Image</div>
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
                    {errors.profileImage && (
                      <small className="text-danger float-end">{errors.profileImage}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="row mt-4">
            <div className="col-md-12">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Applyform;
