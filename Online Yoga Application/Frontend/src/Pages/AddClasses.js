import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";

export default function AddClasses(){
    const navigate = useNavigate();
    let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [yogaTypee, setYogaType] = useState({
     yogaType: "",
    description: "",
    startTime: "",
    endTime: "",
    img: "",
    price:""
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

  let handlerEndDateAction = (e) => {
    let newYogaType = { ...yogaTypee, endTime: e.target.value };
    setYogaType(newYogaType);
  };
  let handlerStartDateAction = (e) => {
    let newYogaType = { ...yogaTypee, startTime: e.target.value };
    setYogaType(newYogaType);
  };
  let handlerImgAction = (e) => {
    let newYogaType = { ...yogaTypee, img: process.env.PUBLIC_URL +e.target.value };
    setYogaType(newYogaType);
  };
 
  let handlerPriceAction = (e) => {
    let newYogaType = { ...yogaTypee, price: e.target.value };
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
      fetch(`http://localhost:9090/api/liveclass/`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(yogaTypee)
      }).then(()=>{
          console.log("New Student Added")
      })

      formRef.current.classList.remove("was-validated");

      // alert("success");
      setTimeout(() => {
        navigate("/viewPackage", { replace: true });
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

    <div className="containerr" style={{height:"100%"}}>
    <div className="signin-signup justify-content-center ">
    <div className="row justify-content-center sign-up-form ms-4">
        <div className="col"><pre><br/> <a
              href="/viewPackage"
              value="Back">Back</a></pre></div>
    </div>
      <div className="row justify-content-center sign-up-form ms-4">
        {/* <div className="col-sm-12 col-md-6"> */}
        <h2 className="title" style={{paddingLeft:"100px"}}>Add Class Details</h2>

          <form ref={formRef} className="needs-validation form-control"  style={{border:"none", paddingLeft:"100px"}}>
            <Form.Group>
              <input
                type="text"
                className=" input-field form-control form-control-lg mb-2 mt-1"
                placeholder="Enter Yoga Type"
                value={yogaTypee.yogaType}
                pattern="^[a-zA-Z0-9 !@#$%^&*)(]{2,20}$"
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
                placeholder="Enter Start Date(yyyy-mm-dd)"
                value={yogaTypee.startTime}
                pattern="/^([1-9]{4})\-([0-9]{2})\-([0-9]{2})$/"
                onChange={handlerStartDateAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Date invalid
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <input
                type="text"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter End Date(yyyy-mm-dd)"
                value={yogaTypee.endTime}
                pattern="/^([1-9]{4})\-([0-9]{2})\-([0-9]{2})$/"
                onChange={handlerEndDateAction}
                required
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
                Date invalid
              </Form.Control.Feedback>
            </Form.Group>
             {/*
    img: "",
    price:""  */}
    <Form.Group>
              <input
                type="number"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Price"
                value={yogaTypee.price}
                pattern="^[1-9][0-9]{3,}$"
                onChange={handlerPriceAction}
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
              rows={2}
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
          {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
            Yoga Type Add Success..</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Failed!!
            </p>
          )}
          </form>
         
        {/* </div> */}
      </div>
      <div>
        
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
       <div className="row justify-content-center sign-up-form ms-4">
        <div className="col"><pre>  ----------------</pre></div>
    </div>
      
    </div>
  );
}
