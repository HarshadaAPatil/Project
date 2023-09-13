// import { Nav } from "react-bootstrap";
import { Container, Nav, NavDropdown, Navbar, NavItem } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function DefaultNav(){
    return (<>
  <>
  <Navbar bg="light" expand="lg"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <NavLink className="navbar-brand" to="/" id="logo">
            <span>S</span>adhana
          </NavLink>
             <Nav className="ml-auto nav-item">
             <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/classes">
                  Classes
                </NavLink>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
                <NavLink className="nav-link" to="/gallery">
                  Gallary
                </NavLink>
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
                <NavLink className="nav-link" to="/contactus">
                 Contact Us
                </NavLink>
                <NavLink className="nav-link " to="/studentLogin">
                Login
              </NavLink>
              </Nav>
              </Navbar.Collapse>
          </Navbar>
      {/* <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/" id="logo">
            <span>S</span>adhana
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
            {/* <span i className="fa-solid fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/classes">
                  Classes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                 Contact Us
                </NavLink>
              </li>
            </ul>            
            <li className="nav-item">
              <NavLink className="nav-link " to="/studentLogin">
                Login
              </NavLink>
            </li>
          </div>
        </div>
      </nav> */} 
    </>
</>);
}