import logo from "./logo.svg";
import "./App.css";
// // import "./Pages/qz.scss";
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import WelcomeNav from "./Navbar/WelcomeNav";
import WelcomePage from "./Pages/WelcomePage";
import StudentLogin from "./Pages/StudentAuthentication/StudentLogin";
import StudentRegistration from "./Pages/StudentAuthentication/StudentRegistration";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyFooter from "./Pages/MyFooter";
import Profile from "./Pages/Profile";
import Quize from "./Pages/Quiz";
import OsQuize from "./Pages/OsQuize";
import Package from "./Pages/Package";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import YogaType from "./Pages/YogaType";
import AddYogaType from "./Pages/AddYogaType";
import Admindetail from "./Pages/Admindetail";
import ViewYogaType from "./Pages/ViewYogaType";
import UpdateYogaType from "./Pages/UpdateYogaType";
import DeleteYogaType from "./Pages/DeleteYogaType";
import UserList from "./Pages/UserList";
import UpdateUser from "./Pages/UpdateUser";
import DeleteUser from "./Pages/DeleteUser";
import JoinLec from "./Pages/Join";
import AdminPackage from "./Pages/AdminPackage";
import ViewClasses from "./Pages/ViewClasses";
import UpdateClass from "./Pages/UpdateClass";
import AddClasses from "./Pages/AddClasses";

function App() {
  return (
    <>
      <BrowserRouter>
        <WelcomeNav />
        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
          <Route path="/addYogaType" element={<AddYogaType />} />
          <Route path="/addClasses" element={<AddClasses />} />
         <Route path="/viewYogaType" element={<ViewYogaType />}/>

         <Route path="/updateYogaType/:id" element={<UpdateYogaType />}/>
         <Route path="/deleteYogaType/:id" element={<DeleteYogaType />}/>
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/yogaType/:id" element={<YogaType />} />

          <Route path="/userList" element={<UserList />}/>
          <Route path="/updateUser/:id" element={<UpdateUser />}/>
          <Route path="/updateClass/:id" element={<UpdateClass />}/>
         <Route path="/deleteUser/:id" element={<DeleteUser />}/>
         <Route path="/join/:id" element={<ProtectedRoute ><JoinLec /></ProtectedRoute>}/>
          
          <Route
            path="/studentRegistration"
            element={<StudentRegistration />}
          />
          <Route path="/adminDetail" element={<ProtectedRoute ><Admindetail /></ProtectedRoute>} />
          <Route path="/osquize" element={<ProtectedRoute ><OsQuize /></ProtectedRoute>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/classes" element={<Package />} />
          <Route path="/adminPackage" element={<AdminPackage />} />
          <Route path="/viewPackage" element={<ViewClasses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/studentLogin"} replace={true} />;
  }

  return children;
}

export default App;
