import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
// import { useState } from "react";
// import "./login_student.css";
export default function AddYogaType() {
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
  
      console.log(yogaTypee);
      fetch("http://localhost:9090/api/yogaTypes/addYogaType/",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(yogaTypee)
      }).then(()=>{
          console.log("New Student Added")
      })
      let newYogaType = {
        yogaType: "",
        description: "",
        path: "",
        img:""
      };
      setYogaType(newYogaType);

      formRef.current.classList.remove("was-validated");

      setTimeout(() => {
        navigate("/addYogaType", { replace: true });
      }, 800);
      
      setIsSuccess(true);
      
    } catch (err) {
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
    <div className="signin-signup justify-content-center ">
      <div className="row justify-content-center sign-up-form ms-4">
   
        <h2 className="title" style={{paddingLeft:"100px"}}>Add Yoga Type</h2>

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
                pattern="^[a-zA-Z0-9 !@#$%^&*)(]{2,20}"
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
              value="Add"
              className="w-100 btn mt-4 input-field"
              onClick={addYogaTypeAction}
            />
          </form>
          <a
              href="/adminDetail"
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
      </div>
    </div>
      
    </div>
  );
}
