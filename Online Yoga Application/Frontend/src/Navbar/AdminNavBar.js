// import { Nav } from "react-bootstrap";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DefaultNav from "./DefaultNav";
import WelcomeNav from "./WelcomeNav";
export default function AdminNavBar(){

  let navigate =useNavigate();
  const logOutAction=()=>{
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("userName");
      localStorage.removeItem("mobileno");
      localStorage.removeItem("password");
      // navigate("/home",{replace:true});
      navigate('/gallery')
  };
return (<>
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
          {/* <NavLink className="navbar-brand" to="/" id="logo">
            <span>S</span>adhana
          </NavLink>
      */}
                <NavLink className="nav-link" to="/adminDetail"> 
                  Manage Yoga
                </NavLink>
                <NavLink className="nav-link" to="/viewPackage">
                  Online Classes
                </NavLink>
                <NavLink className="nav-link" to="/userList">
                  Show User
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
            
              {/* <NavLink className="nav-link " to="/studentLogin"> */}
              {localStorage.getItem("loginStatus") == 'true' ? (
                <NavLink className="nav-link "  onClick={logOutAction}>

                  Log Out
                  </NavLink>
              ) : (
                <NavLink className="nav-link " to="/studentLogin">
                  Log in
                  </NavLink>
              )}
        {/* </div> */}
      {/* </nav> */}
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </>
    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>
            <Link to={"/"} style={{flex:"0.1", textDecoration:"none", color:"white"}}><div className="">Home</div></Link>
            </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link>
                <Link to={"/studentLogin"} style={{flex:"0.1", textDecoration:"none", color:"white"  }}>  <div style={{flex:"0.1"}}>Login</div></Link></Nav.Link>
                <Nav.Link>
                <Link to={"/contactus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>ContactUs</div></Link> 
                </Nav.Link>
              {/* </Nav>
              <Nav> */}
                {/* <Nav.Link><Link to={"/contactus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>Contact Us</div></Link></Nav.Link>
                <Nav.Link>
                <Link to={"/aboutus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>AboutUs</div></Link>
                </Nav.Link> */}
                {/* <Nav.Link> */}
                {/* <Nav.Link onClick={logOutAction}>Log Out</Nav.Link> */}
                {/* </Nav.Link> */}
              {/* </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>  */}
</>);
}