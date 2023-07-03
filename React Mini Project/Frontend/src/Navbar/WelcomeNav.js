import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DefaultNav from "./DefaultNav";
import './welcomeNav.css';
import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import Offcanvas from 'react-bootstrap/Offcanvas';


export default function WelcomeNav(){
    let navigate =useNavigate();
    const logOutAction=()=>{
        localStorage.removeItem("loginStatus");
        localStorage.removeItem("userName");
        localStorage.removeItem("mobileno");
        localStorage.removeItem("password");
        navigate("/",{replace:true});
    };
    let loginStatus = localStorage.getItem("loginStatus");
    if(!loginStatus){
        return (<><DefaultNav /></>);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>
            <Link to={"/home"} className="me-auto" style={{flex:"0.1", textDecoration:"none", color:"white"}}><div className="ms-auto">Home</div></Link>
            </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link><Link to={"/home"} style={{flex:"0.1", textDecoration:"none", color:"white"  }}>  <div style={{flex:"0.1"}}>Quizee</div></Link> </Nav.Link>
                <Nav.Link><Link to={"/profile"} style={{flex:"0.1", textDecoration:"none", color:"white"  }}>  <div style={{flex:"0.1"}}>Profile</div></Link> 
                </Nav.Link>
              {/* </Nav>
              <Nav> */}
                <Nav.Link><Link to={"/contactus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>Contact Us</div></Link></Nav.Link>
                <Nav.Link>
                <Link to={"/aboutus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>About Us</div></Link>
                </Nav.Link>
                {/* <Nav.Link> */}
                <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }