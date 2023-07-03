import logo from "./logo.svg";
import "./App.css";
// import "./Pages/qz.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import WelcomeNav from "./Navbar/WelcomeNav";
import WelcomePage from "./Pages/WelcomePage";
import StudentLogin from "./Pages/StudentAuthentication/StudentLogin";
import StudentRegistration from "./Pages/StudentAuthentication/StudentRegistration";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyFooter from "./Pages/MyFooter";
import AboutUs from "./Pages/AboutUs";
import Profile from "./Pages/Profile";
import Quize from "./Pages/Quiz";
import OsQuize from "./Pages/OsQuize";

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
         
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/studentRegistration"
            element={<StudentRegistration />}
          />
          <Route path="/quize" element={<ProtectedRoute ><Quize /></ProtectedRoute>} />
          <Route path="/osquize" element={<ProtectedRoute ><OsQuize /></ProtectedRoute>} />
          <Route path="/contactus" element={<ContactUs />} />
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
