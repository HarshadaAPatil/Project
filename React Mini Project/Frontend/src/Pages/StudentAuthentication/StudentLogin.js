import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './login_student.css';
import { Form } from "react-bootstrap";
export default function StudentLogin() {
  const navigate = useNavigate();
  let formRef=useRef();
  let [isSuccess,setIsSuccess]=useState(false);
  let [isError,setIsError]=useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    // BACKEND
   try
    {
      formRef.current.classList.add("was-validated");
      let formStatus=formRef.current.checkValidity();
      if(!formStatus){
        return;
      }

      let url = `http://localhost:4000/login-by-post`;
      let data = {email: user.email,password: user.password};
      let res = await fetch(url, {method: "POST",body:JSON.stringify(data),headers:{"Content-Type": "application/json",},});

    // await fetch(url);
      if(res.status==500){
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }
      let list=await res.json();
      // alert(list.email)
      // alert(res.json());
      // console.log();
      // let loggedUser=await res.json();
      localStorage.setItem("mobileno",list.mobile);
      localStorage.setItem("password",list.password);
      localStorage.setItem("userName",list.username);
      localStorage.setItem("email",list.email);
      localStorage.setItem("loginStatus","true");
      
      let newuser = {
        email: "",
        password: "",
      };
      setUser(newuser);
      formRef.current.classList.remove("was-validated");

      setTimeout(() => {
        // setIsSuccess(true);
        // setIsError(false);
        navigate("/home", { replace: true });
      }, 900);
      setIsSuccess(true);
    
    //   navigate("/home",{replace:true});
    // }
    }
    catch(err){
      // alert(err.message);
      setIsError(true);
    }
    finally{
      setTimeout(()=>{
        setIsError(false);
        setIsSuccess(false);
      },5000);
    }
  };

  return (
    <div className="containerr">
    {/* <div className="forms-container"> */}
    <div className="signin-signup justify-content-center ">
      <div className="row justify-content-center sign-up-form ms-4">
        <h2 className="title" style={{paddingLeft:"100px"}}>Student Sign in</h2>
          <form ref={formRef} className="needs-validation form-control"  style={{border:"none", paddingLeft:"100px"}}>
            <Form.Group>
              <input
                type="email"
                className="input-field form-control form-control-lg mb-2"
                placeholder="Enter Email"
                value={user.email}
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
              value="Login"
              className="w-100 btn mt-4 input-field"
              onClick={loginAction}
            />
          </form>
          {isSuccess && (
            <p className="social-text" style={{color: "green",fontWeight: "bold",fontSize: "20px"}}>
            Login Success.. Enjoy !!</p>
          )}
          {isError && (
            <p className="social-text" style={{color: "red",fontWeight: "bold",fontSize: "20px"}}>
              Login Credentials are not valid please check and try again!!
            </p>
          )}
        </div>
      </div>
      <div className="panels-container">

    <div className="panel left-panel">
      <div className="content">
        <h3>New Student ?</h3>
        <p>
          In life, the classroom is everywhere. The exam comes at the very end.
        </p>
        <Link to={"/studentRegistration"} style={{flex:"0.1", textDecoration:"none", color:"white"}}><button className="btn transparent" id="sign-up-btn text-light" >
          Sign up
        </button></Link>
      </div>
      <img src="../../../../assets/img/l.svg" className="image" alt="" />
    </div>
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          In life, the classroom is everywhere. The exam comes at the very end.
        </p>
        <button className="btn transparent" id="sign-in-btn">
          Sign in
        </button>
      </div>
      <img src="../../../assets/img/r.svg" className="image" alt="" />
    </div>
    </div>
  );
}
