import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import DefaultNav from "./DefaultNav";
import './welcomeNav.css';


export default function WelcomeNav(){
    let navigate =useNavigate();
    const logOutAction=()=>{
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("role");
        navigate("/home",{replace:true});
    };
    let loginStatus = localStorage.getItem("loginStatus");
    
    if(!loginStatus){
        return (<><DefaultNav /></>);
    }
    else if(loginStatus){
      if(localStorage.getItem("role")==="admin")
    {
      return (<><AdminNavBar /> </>);

    }
  }    
    return (
        <>
        <Navbar bg="light" expand="lg"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
        {/* <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container"> */}
          <NavLink className="navbar-brand" to="/" id="logo">
            <span>S</span>adhana
          </NavLink>
          <Nav className="ml-auto nav-item">
          
                <NavLink className="nav-link" to="/gallery">
                  Yoga
                </NavLink>
                <NavLink className="nav-link" to="/classes">
                  Classes
                </NavLink>
          
                <NavLink className="nav-link" to={`/updateUser/${localStorage.getItem("userId")}`}>
                My Profile
                </NavLink>
              
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              <NavLink className="nav-link" to="/contactus">
                 Contact Us
                </NavLink> 
              {localStorage.getItem("loginStatus") == 'true' ? (
                <NavLink className="nav-link " onClick={logOutAction}>
                  Log Out
                  </NavLink>
              ) : (
                <NavLink className="nav-link " to="/studentLogin">
                  Log in
                  </NavLink>
              )}
          {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
        </>
      );
    }