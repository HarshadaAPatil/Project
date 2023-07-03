// import { Nav } from "react-bootstrap";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function DefaultNav(){
    return (<>
    {/* <nav className="bg-dark text-light ms-auto text-center pt-3">
        <div className="px-3 row" style={{height:"3.5rem"}} >
            {/* </div> */}
            {/* <div className="row"> */}
            {/* <div className="col-3">
         </div>
            <div className="col-3">  
         </div>
            <div className="col-3"> 
         </div>
            <div className="col-3">
        </div> */}
            {/* </div> */}
        {/* <Nav.Link onClick={logOutAction}>Log Out</Nav.Link> */}
        {/* </div>
    // </nav> */}

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Nav.Link><Link to={"/contactus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>Contact Us</div></Link></Nav.Link>
                <Nav.Link>
                <Link to={"/aboutus"} style={{flex:"0.1", textDecoration:"none", color:"white" }}>  <div style={{flex:"0.001"}}>AboutUs</div></Link>
                </Nav.Link>
                {/* <Nav.Link> */}
                {/* <Nav.Link onClick={logOutAction}>Log Out</Nav.Link> */}
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
</>);
}