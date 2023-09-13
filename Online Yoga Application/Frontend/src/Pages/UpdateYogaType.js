import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
// import { useState } from "react";
// import "./login_student.css";
export default function UpdateYogaType() {
    let {id}=useParams();
    const navigate = useNavigate();
    let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [yogaTypee, setYogaType] = useState({
    yogaType: "",
    description: "",
    path: "",
    img:""
  });
    // alert(id);
    useEffect(()=>{
        fetch(`http://localhost:9090/api/yogaTypes/getYogaType/${id}`)
        .then(res=>res.json())
        .then((result)=>{setYogaType(result);})
    },[])
  
  

  let handlerYogaTypeAction = (e) => {
    let newYogaType = { ...yogaTypee, yogaType: e.target.value };
    setYogaType(newYogaType);
  };

  let handlerDescrAction = (e) => {
    let newYogaType = { ...yogaTypee, description: e.target.value };
    console.log("Descr",yogaTypee.description)
    setYogaType(newYogaType);
  };

  let handlerPathAction = (e) => {
    let newYogaType = { ...yogaTypee, path: e.target.value };
    setYogaType(newYogaType);
  };
  let handlerImgAction = (e) => {
    let newYogaType = { ...yogaTypee, img: process.env.PUBLIC_URL +e.target.value };
    setYogaType(newYogaType);
  };
 

  let addYogaTypeAction = async () => {
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
      console.log(yogaTypee);
      fetch(`http://localhost:9090/api/yogaTypes/updateYogaType/${id}`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(yogaTypee)
      }).then(()=>{
          console.log("New Student Added")
      })
      // fetch("http://localhost:9090/api/yogaTypes/addYogaType/",{
      //     method:"POST",
      //     headers:{"content-type":"application/json"},
      //     body:JSON.stringify(yogaTypee)
      // }).then(()=>{
      //     console.log("New Yoga Type Added")
      // })
      // setName('')
      // setAddress('')

    //   let newYogaType = {
    //     yogaType: "",
    //     description: "",
    //     path: "",
    //   };
    //   setYogaType(newYogaType);

      formRef.current.classList.remove("was-validated");

      // alert("success");
      setTimeout(() => {
        // setIsSuccess(true);
        // setIsError(false);
        navigate("/viewYogaType", { replace: true });
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
                placeholder="Enter Yoga Type"
                value={yogaTypee.yogaType}
                pattern="^[A-Za-z][A-Za-z0-9]{3,}$"
                onChange={handlerYogaTypeAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                yogaTypee should start with character and may contain digits. Special character not allowed min
                length 4.
              </Form.Control.Feedback>
            </Form.Group>           
            <Form.Group>
              <input
                type="text"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Path"
                value={yogaTypee.path}
                pattern="^[A-Za-z][A-Za-z0-9]{3,}$"
                onChange={handlerPathAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Path invalid
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <input
                type="text"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Image path('/images/n1.jpg')"
                value={yogaTypee.img}
                pattern="^[a-zA-Z0-9 !@#$%^&*)(]{2,20}"
                onChange={handlerImgAction}
                required
              />

              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Path invalid
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <textarea
              rows={3}
              cols={46}
                className="textarea-field mb-2"
                placeholder="Enter Description"
                value={yogaTypee.description}
                pattern="^[a-zA-Z0-9 !@#$%^&*)(]{2,20}$"
                onChange={handlerDescrAction}
                required
                style={{alignItems:"center",padding:20}}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Invalid Descr  (eg. abc@pqr.xyz).
              </Form.Control.Feedback>
            </Form.Group>
            <input
              type="button"
              value="Update"
              className="w-100 btn mt-4 input-field"
              onClick={addYogaTypeAction}
            />
          </form>
          <a
              href="/viewYogaType"
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
