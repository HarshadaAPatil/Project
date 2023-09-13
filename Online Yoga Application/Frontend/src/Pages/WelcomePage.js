import WelcomeNav from "../Navbar/WelcomeNav";
import "./profile.css";
import AboutUs from "./AboutUs";
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";
import "./header.css";
export default function WelcomePage(){
    return (<>
    {/* <WelcomeNav /> */}
    {/* <div>
    <video
            src="./Videos/yoga.mp4"
            className="d-block w-100"
            alt="..."
            autoPlay muted
            loop
            style={{opacity:"15"}}
            
          >
            <div className="d-flex justify-content-center align-items-center"
        style={{height:"89.5vh",
            color: "#0A192F",
            overflowY: "hidden",
            minHeight: "500px",
            backgroundColor: "beige",
            // backgroundImage: "url('../assets/img/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontFamily: 'Space Mono',
            flexDirection:"column", height: "100vh"
            }} >
        <h1 className="font-weight-light">Welcome to Quizy!</h1><br />
        <h3 className="lead">It ain't that I'm questionin' you. To take part in any quiz.</h3>
                
        </div>
          </video>
          <AboutUs />
        
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" >
        <div className="carousel-item active">
          <video
            src="./Videos/yoga.mp4"
            className="d-block w-100"
            alt="..."
            autoPlay muted
            loop
          ></video>
        
        <div className="char">
          <p style={{ marginLeft: 300, color: 'white', fontWeight: 'bold', textShadow: '7px 5px 10px #1B1B1B, 5px 5px 10px #382F2F' }}>Online Yoga Classes, Live & Interactive</p>
        </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://st2.depositphotos.com/1017986/6016/i/950/depositphotos_60167695-stock-photo-group-of-smiling-women-stretching.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="char">
            <p style={{ marginLeft: 300, color: 'white', fontWeight: 'bold', textShadow: '7px 5px 10px #1B1B1B, 5px 5px 10px #382F2F' }}>Online Yoga Classes, Live & Interactive</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://thumbs.dreamstime.com/b/web-156637519.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="char">
            <p style={{ marginLeft: 300, color: 'white', fontWeight: 'bold', textShadow: '7px 5px 10px #1B1B1B, 5px 5px 10px #382F2F' }}>Online Yoga Classes, Live & Interactive</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}

      <div className="home">
        <div className="content">
          <h5>Welcome to Sadhana</h5>
          <h1>
            Yoga <span className="changecontent"></span>
          </h1>
          <p>
            Bend Your Mind, Inspire Yourself
          </p>
          <NavLink to="/classes">Join Us</NavLink>
        </div>
      </div>
    {/* </> */}

{/* // export default Home */}


{/* <div >
    <Carousel>
      <Carousel.Item interval={100}>
      <video
            src="./Videos/yoga.mp4"
            className="d-block w-100"
            alt="..."
            autoPlay muted
            loop
            style={{height:"50vh", width:"auto" }}
          ></video>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
            src="https://st2.depositphotos.com/1017986/6016/i/950/depositphotos_60167695-stock-photo-group-of-smiling-women-stretching.jpg"
            className="d-block w-100"
            alt="..."
            style={{height:"50vh", width:"auto" }}
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            src="https://thumbs.dreamstime.com/b/web-156637519.jpg"
            className="d-block w-100"
            alt="..."
            style={{height:"50vh", width:"100%" }}
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div> */}
    </>);
}