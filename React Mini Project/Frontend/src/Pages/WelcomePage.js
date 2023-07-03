import WelcomeNav from "../Navbar/WelcomeNav";
import "./profile.css";

export default function WelcomePage(){
    return (<>
    {/* <WelcomeNav /> */}
    <div>
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
        </div>
    </>);
}