import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Course from './pages/Course/Course';
import Login from './pages/studentLogin/Login';
import StaffLogin from './pages/StaffLogin/StaffLogin';
import Register from './pages/StaffLogin/Register';
import Std from './Studedash/Std';
// import Applyform from './pages/Applyform';
import StaffDashBoard from './pages/StaffLogin/StaffDashBoard';
import ApplicationsRequest from './pages/StaffLogin/ApplicationsRequest';
import Tablee from './Tablee';
import DocumentUploader from './pages/studentLogin/DocumentUploader';
import AdminDashBoard from './Admin/AdminDashBoard';
import Viewuser from './Admin/Viewuser';
// import ApplyForms from './pages/ApplyForms';

function App() {
  return (
    <div className="App">
      
      {/* <Tablee></Tablee> */}
    {/* <Applyform></Applyform> */}
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage></HomePage>} />
      <Route exact path="/about" element={<About></About>} />
      <Route exact path="/Course" element={<Course></Course>} />
      <Route exact path="/studentlogin" element={<Login></Login>} />
      <Route exact path="/stafflogin" element={<StaffLogin></StaffLogin>} />
      <Route exact path="/studentDashboard" element={<Std></Std>} />
      
      <Route exact path="/staffDashboard" element={<StaffDashBoard></StaffDashBoard>} />
      <Route exact path="/ApplicationDisplay" element={<ApplicationsRequest></ApplicationsRequest>} />
      <Route exact path="/Applicationrequest" element={<ApplicationsRequest></ApplicationsRequest>} />
      <Route exact path="/AdminDashboard" element={<AdminDashBoard></AdminDashBoard>} />
      
      <Route
            exact
            path="/registerstudent"
            element={<Register></Register>}
          />
            {/* <Route exact path="/jothi" element={<DocumentUploader/>} /> */}
            <Route exact path="/viewUser" element={<Viewuser></Viewuser>} />
      </Routes>

      </BrowserRouter>
      

     
    </div>
  );
}

export default App;
