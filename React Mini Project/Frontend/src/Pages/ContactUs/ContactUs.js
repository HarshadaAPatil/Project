import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();
let [isSuccess, setIsSuccess] = useState(false);
let [isError, setIsError] = useState(false);


  let [sendmail, setSendMail] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  let handlerEmailAction = (e) => {
    let newuser = { ...sendmail, user_email: e.target.value };
    setSendMail(newuser);
  };
  let handlerNameAction = (e)=>{
    let newuser = { ...sendmail, user_name: e.target.value };
    setSendMail(newuser);
  }

  let handlerSubjectAction = (e)=> {
    let newuser = { ...sendmail, subject: e.target.value };
    setSendMail(newuser);
  }

  let handlerMessageAction = (e)=> {
    let newuser = { ...sendmail, message: e.target.value };
    setSendMail(newuser);
  }
  const sendEmail = (e) => {
    
          form.current.classList.add("was-validated");
          let formStatus = form.current.checkValidity();
          if (!formStatus) {
            return;
          }

          let resetSendMail = {
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          };
          setSendMail(resetSendMail);
    
          form.current.classList.remove("was-validated");
    
          // alert("success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwpxyhg",
        "template_rzmnuyp",
        form.current,
        "OzJ5PM7tdx6Ss-1jc"
      )
      .then(
        (result) => {
            setTimeout(() => {
                setIsSuccess(true);
                // setIsError(false);
                navigate("/home", { replace: true });
              }, 800);
              
              setIsSuccess(true);
        },
        (error) => {
            setIsError(true);
        }
      );
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    //   e.target.reset();
  };
  return (
    <section>
        <div className="containerr">
        <div className="signin-signup justify-content-center ">
      <div className="row justify-content-center sign-up-form ms-4">
      {/* <div className="containerr align-items-center justify-content-center"> */}
      <h2 className="title text-align-center" style={{paddingLeft:"100px",marginLeft:"8rem"}}>Contact Us</h2>
        <form
          action=""
          ref={form}
          className=" needs-validation form-control"  style={{border:"none", paddingLeft:"100px"}}
        >
            
            <Form.Group>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name.."
            className="input-field form-control form-control-lg mb-2"
            id=""
            value={sendmail.user_name}
                pattern="[a-zA-Z ]{3,}$"
                onChange={handlerNameAction}
                required
            style={{ marginTop: "1rem" }}
          />
           <Form.Control.Feedback
                type="invalid"
                style={{ padding: "3px 0px 5px 5px" }}
              >
               Invalid name min length is 4 and contain only letters .
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
          <input
                type="email"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Email"
                value={sendmail.user_email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
            type="text"
            name="subject"
            placeholder="Subject.."
            id=""
            className="input-field form-control form-control-lg mb-2"
            required
            style={{ marginTop: "1rem" }}
            value={sendmail.subject}
            pattern="[a-zA-Z ]{3,}$"
            onChange={handlerSubjectAction}
          />
          <Form.Control.Feedback
            type="invalid"
            style={{ padding: "3px 0px 5px 5px" }}
          >
            Please enter subject min length 4.
          </Form.Control.Feedback>
        </Form.Group>
          <Form.Group>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            className="input-field form-control form-control-lg mb-2"
            style={{ marginTop: "1rem" }}
            value={sendmail.message}
            pattern="[a-zA-Z ]{3,}$"
            onChange={handlerMessageAction}
            required
          />
          <Form.Control.Feedback
            type="invalid"
            style={{ padding: "3px 0px 5px 5px" }}
          >
            Please enter message min length 4 .
          </Form.Control.Feedback>
        </Form.Group>
          <button
            type="submit"
            className="btn btn-primary form-control-lg"
            style={{ marginTop: "1rem", marginLeft:"7rem" }}
            onClick={sendEmail}
          >
            Send Message
          </button>
        </form>
        {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
           Feedback send.. We will get back to you soon!</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Failedd to send feedback..
            </p>
          )}
      </div>
      </div>
      </div>
    </section>
  );
}

export default ContactUs;
