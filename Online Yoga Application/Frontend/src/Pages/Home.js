import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import Quize from "./Quize";

export default function Home() {
  return (
    <>
      <div className="row p-5" style={{ background: "lightblue" }}>
        <div className="col-12 justify-content-center align-items-center text-center ">
          <h1 className="title">Welcome {localStorage.getItem("userName")}</h1>
        </div>
        <div className="row text-center" style={{padding:"10px 0 0 200px"}}>
          <div
            className="col-sm-12 col-md-3 card m-5 "
            style={{ border: "2px solid red", boxShadow:"4px 0px 3px 4px",width:"auto" }}
          >
            <Card style={{ width: "18rem",border:"none", overflow:"hidden" }}>
            {/*  */}
           
            {/* <img src="Java.jpeg" className="card-img-top w-100" alt="..." style={{height: 250}} /> */}
              <Card.Body style={{}}>
                {/* <img src="Java.jpeg" alt="..." /> */}
                <Card.Title>Java Quiz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Quiz on Core Java topics
                </Card.Subtitle>
                <Card.Text>
                <img src="./Images/java.jpeg" className="card-img-top w-100" alt="..." style={{height: "250",width:"auto",marginTop:"1rem"}} />
                </Card.Text>

                <Card.Link href="/quize" className="quizeLink btn" style={{fontSize:"12px", padding:"1rem"}}><a>Start Quiz</a> </Card.Link>
                {/* <Card.Link href="/quize">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-sm-12 col-md-3 card m-5"
            style={{ border: "2px solid red", boxShadow:"4px 0px 3px 4px",width:"auto" }}
          > 
            <Card style={{ width: "18rem",border:"none", overflow:"hidden" }}>
            {/* */}
           
              <Card.Body style={{}}>
               
                <Card.Title>Os Quiz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Quiz on basic OS topics
                </Card.Subtitle>
                <Card.Text>
                <img src="./Images/os.jpeg" className="card-img-top w-100" alt="..." style={{height: "250px",width:"auto",marginTop:"1rem"}} /> 
                </Card.Text>

                <Card.Link href="/osquize" className="quizeLink btn" style={{fontSize:"12px", padding:"1rem" }}><a>Start Quiz</a> </Card.Link>
                
                {/* <Card.Link href="/quize">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-sm-12 col-md-3 card m-5"
            style={{ border: "2px solid red", boxShadow:"4px 0px 3px 4px",width:"auto" }}
          >
            <Card style={{ width: "18rem",border:"none", overflow:"hidden" }}>
              <Card.Body style={{}}>
                {/* <img src="Java.jpeg" alt="..." /> */}
                <Card.Title>Data Structure</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Quiz on Data structure topics
                </Card.Subtitle>
                <Card.Text>
                <img src="./Images/ds.jpeg" className="card-img-top w-100" alt="..." style={{height: "250px",width:"auto",marginTop:"1rem"}} /> 
                
                </Card.Text>

                <Card.Link href="/quize" className="quizeLink btn" style={{fontSize:"12px", padding:"1rem"}}><a>Start Quiz</a> </Card.Link>
                
                {/* <Card.Link href="/quize">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-sm-12 col-md-3 card m-5"
            style={{ border: "2px solid red", boxShadow:"4px 0px 3px 4px",width:"auto" }}
          >
            <Card style={{ width: "18rem",border:"none", overflow:"hidden" }}>
              <Card.Body style={{}}>
                {/* <img src="Java.jpeg" alt="..." /> */}
                <Card.Title> Database Quiz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Quiz on Database topics
                </Card.Subtitle>
                <Card.Text>
                <img src="./Images/databse.jpeg" className="card-img-top w-100" alt="..." style={{height: "250",width:"auto",marginTop:"1rem"}} />
                
                </Card.Text>

                <Card.Link href="/quize" className="quizeLink btn" style={{fontSize:"12px", padding:"1rem"}}><a>Start Quiz</a> </Card.Link>
                
                {/* <Card.Link href="/quize">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  
  );
}
