import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
// import { useState } from "react";
// import "./login_student.css";
export default function UpdateUser() {
    let {id}=useParams();
    const navigate = useNavigate();
    let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
    // alert(id);
    useEffect(()=>{
        fetch(`http://localhost:9090/api/users/getusers/${id}`)
        .then(res=>res.json())
        .then((result)=>{setUser(result);})
    },[])
  
  

  let handlerNameAction = (e) => {
    let newYogaType = { ...user, name: e.target.value };
    setUser(newYogaType);
  };

  let handlerEmailAction = (e) => {
    let newYogaType = { ...user, email: e.target.value };
    console.log("Descr",user.email)
    setUser(newYogaType);
  };

  let handlerPasswordAction = (e) => {
    let newYogaType = { ...user, password: e.target.value };
    setUser(newYogaType);
  };
  

  let updateUserAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
    
      console.log(user);
      fetch(`http://localhost:9090/api/users/update/${id}`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(user)
      }).then(()=>{
          console.log("New Student Added")
      })
   
      localStorage.setItem("password",user.password);
      localStorage.setItem("userName",user.name);
      localStorage.setItem("email",user.email);
      formRef.current.classList.remove("was-validated");

      // alert("success");
      setTimeout(() => {
        // setIsSuccess(true);
        // setIsError(false);
        navigate("/gallery", { replace: true });
      }, 800);
      
      setIsSuccess(true);
      
    } catch (err) {
      // alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (

    <div className="containerr">
    {/* <div className="forms-container"> */}
    <div className="signin-signup justify-content-center ">
      <div className="row justify-content-center sign-up-form ms-4">
        {/* <div className="col-sm-12 col-md-6"> */}
        <h2 className="title" style={{paddingLeft:"100px"}}>Update</h2>

          <form ref={formRef} className="needs-validation form-control"  style={{border:"none", paddingLeft:"100px"}}>
            <Form.Group>
              <input
                type="text"
                className=" input-field form-control form-control-lg mb-2 mt-1"
                placeholder="Enter Name"
                value={user.name}
                pattern="^[A-Za-z][A-Za-z0-9]{3,}$"
                onChange={handlerNameAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                user should start with character and may contain digits. Special character not allowed min
                length 4.
              </Form.Control.Feedback>
            </Form.Group>           
            <Form.Group>
              <input
                type="email"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Email"
                value={user.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handlerEmailAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Invalid email Id (eg. abc@pqr.xyz).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <input
                type="password"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Password"
                value={user.password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={handlerPasswordAction}
                required
              />

              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Password must contain 8 or more characters that are of at least
                one number, and one uppercase and lowercase letter
              </Form.Control.Feedback>
            </Form.Group>
          
            <input
              type="button"
              value="Update"
              className="w-100 btn mt-4 input-field"
              onClick={updateUserAction}
            />
          </form>
          <a
              href="/gallery"
              value="Back">Back</a>
        
          {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
            Yoga Type Add Success..</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Failed!!
            </p>
          )}
        {/* </div> */}
      </div>
    </div>
    {/* <div className="panels-container">
    <div className="panel left-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            In life, the classroom is everywhere. The exam comes at the very
            end.
          </p>
          <Link to={"/studentLogin"} style={{flex:"0.1", textDecoration:"none", color:"white"}}><button className="btn transparent" id="sign-up-btn text-light" >
          Sign up
        </button></Link>
        </div>
        <img src="../../../assets/img/r.svg" className="image" alt="" />
      </div>
      </div> */}
      
    </div>
  );
}
