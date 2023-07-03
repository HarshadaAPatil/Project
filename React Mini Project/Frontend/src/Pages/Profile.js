// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// function Profile() {
//   const { id } = useParams();
//   const [values, setValues] = useState({
//     username: localStorage.getItem("userName"),
//     email: localStorage.getItem("email"),
//     password: localStorage.getItem("password"),
//     mobileno: localStorage.getItem("mobileno")
//   });

// let handlerUserName = (e)=>{

// }

//   let handlerEmailAction = (e) => {
//     let newuser = { ...values, email: e.target.value };
//     setValues(newuser);
//   };
//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost:4000/find-all-user?" + localStorage.getItem("email")
//       )
//       .then((res) => {
//         setValues({
//           ...values,
//           email: res.data.email,
//           username: res.data.username,
//           password: res.data.password,
//           mobileno: res.data.mobile,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     axios
//       .post(
//         "http://localhost:4000/find-all-user?" + localStorage.getItem("email"),values
//       )
//       .then((res) => {
        
//       })
//       .catch((err) => console.log(err));
//   }

//   }
//   return (
//     <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
//       <div className="w-50 border bg-secondary tect-white p-5">
//         <form action="" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">UserName:</label>
//             <input
//               type="text"
//               name="username"
//               className="input-field form-control form-control-lg mb-2"
//               placeholder="Enter Name"
//               value={values.username}
//               onChange={e => setValues({...values,name: e.target.value})}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 className="input-field form-control form-control-lg mb-2"
//                 placeholder="Enter Email"
//                 value={localStorage.getItem("email")}
//                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                 // onChange={handlerEmailAction}
//                 required
//               />
//           </div>
//           <br />
//           <button className="btn">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Profile;
import "./profile.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
export default function Profile() {
    let formRef = useRef();
    let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  // alert(localStorage.getItem("username"))
  let [user, setUser] = useState({
    username: localStorage.getItem("userName"),
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    mobile: localStorage.getItem("mobileno"),
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let updateAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
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
        Navigate("/studentLogin", { replace: true });
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
    <center className="mt-0">
    <div className="text-center justify-content-center align-items-center bg-success-subtle mt-0 profile">
        {/* <div className="col-sm-12 col-md-6"> */}
        <h2 className="" style={{paddingLeft:"100px"}}>
            <div>
            <h2 className="text-light">Hello {localStorage.getItem("userName")}</h2>
                </div></h2>

          <div>
          <form ref={formRef} className="needs-validation"  style={{border:"none", paddingRight:"350px", background:"rose", height:"100vh" }}>
            <Form.Group className="text-center" style={{paddingLeft:"390px"}}>
              <input
                type="text"

                className=" input-field form-control form-control-lg mb-2 mt-1"
                placeholder="Enter username"
                value={user.username}
                pattern="^[A-Za-z][A-Za-z0-9]{3,}$"
                onChange={handlerUsernameAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Username should start with character and may contain digits. min
                length 4.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-center" style={{paddingLeft:"390px"}}>
              <input
                type="email"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Email"
                value={user.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                // onChange={handlerEmailAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Invalid email Id (eg. abc@pqr.xyz).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-center" style={{paddingLeft:"390px"}}>
              <input
                type="text"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter mobile"
                pattern="[7-9][0-9]{9}"
                maxLength={10}
                minLength={10}
                value={user.mobile}
                onChange={handlerMobileAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Invalid Mobile no.(It should start with 7/8/9 and contain 10
                digits.)
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-center" style={{paddingLeft:"390px"}}>
              <input
                type="text"
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
            <Form.Group className="text-center" style={{paddingLeft:"390px"}}>
            {/* <input
              type="button"
              value="Update Profile"
              className="w-100 btn mt-4 input-field"
            //   onClick={}
            /> */}
            </Form.Group>
          </form>

          </div>
          {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
            Registration Success.. Please Login !!</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Email already exists. Please try again!!
            </p>
          )}
        </div>
        </center>
  );
}
