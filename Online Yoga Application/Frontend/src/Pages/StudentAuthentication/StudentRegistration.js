import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
// import { useState } from "react";
import "./login_student.css";
export default function StudentRegistration() {
  const navigate = useNavigate();
    let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

 

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      // let url = `http://localhost:9090/api/users/?name=${user.username}&password=${user.password}&email=${user.email}`;

      // let res = await fetch(url);

      // if (res.status != 200) {
      //   let serverMsg = await res.text();
      //   throw new Error(serverMsg);
      // }

      // e.preventDefault();
      // const user={name,address}
      console.log(user);
      fetch("http://localhost:9090/api/users/",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(user)
      }).then(()=>{
          console.log("New Student Added")
      })
      // setName('')
      // setAddress('')

      let newuser = {
        name: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      // alert("success");
      setTimeout(() => {
        // setIsSuccess(true);
        // setIsError(false);
        navigate("/studentLogin", { replace: true });
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
        <h2 className="title" style={{paddingLeft:"100px"}}> Sign up</h2>

          <form ref={formRef} className="needs-validation form-control"  style={{border:"none", paddingLeft:"100px"}}>
            <Form.Group>
              <input
                type="text"
                className=" input-field form-control form-control-lg mb-2 mt-1"
                placeholder="Enter username"
                value={user.name}
                pattern="^[A-Za-z][A-Za-z0-9]{3,}$"
                onChange={handlerUsernameAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Username should start with character and may contain digits. Special character not allowed min
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
                placeholder="Enter password"
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
              value="Register"
              className="w-100 btn mt-4 input-field"
              onClick={registerAction}
            />
          </form>

          {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
            Registration Success.. Please Login !!</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Email already exists. Please try again!!
            </p>
          )}
        {/* </div> */}
      </div>
    </div>
    <div className="panels-container">
    <div className="panel left-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
          “A quiet mind is the healthiest mind”
          </p>
          <Link to={"/studentLogin"} style={{flex:"0.1", textDecoration:"none", color:"white"}}><button className="btn transparent" id="sign-up-btn text-light" >
          Sign up
        </button></Link>
        </div>
        <img src="../../../assets/img/r.svg" className="image" alt="" />
      </div>
      </div>
    </div>
  );
}
