
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"


export default function JoinLec() {
    let {id}=useParams();
    let [liveClasses, setLiveClasses] = useState({
        description:"",
    endTime:"",
    startTime:"",
    price:"",
    yogaType:"",
    img:""
    }

    );

    console.log(id);

    useEffect(() => {
        axios
          .get(`http://localhost:9090/api/liveclass/getLiveClass/${id}`)
          .then((response) => {
            setLiveClasses(response.data);
            console.log(liveClasses)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      return (
        <>
        <div className="main-txt">
                <h1>
                  <span>L</span>ive <span>C</span>alasses
                </h1>
              </div>
          <section className="packages" id="packages">
            <div className="container">
              
              <div className="row" style={{height:"auto"}}>
                {/* {liveClasses &&
                  liveClasses.map((item) => { */}
                    
                      <>
                        <div className="col-md-6 py-3 py-md-0 mt-3" style={{paddingBottom:"5px",height:"auto", marginLeft:"35ex"}}>
                          <div className="card" style={{ height: '580px', margin:"10ex"}}>
                            <img
                              src={liveClasses.img}
                              className="img-fluid card-img-top"
                              alt=""
                            />
                            
                            <div className="card-body" style={{height:"auto"}}>
                              <h3>{liveClasses.yogaType}</h3>
                              <p>{liveClasses.description}</p>
                    
                              <p>
                                Start Date :-<strong>&nbsp;&nbsp;{liveClasses.startTime}</strong>
                                <br />
                                End Date :-<strong>&nbsp;&nbsp;{liveClasses.endTime}</strong>
                              </p>
                              <h6>
                                price :-  <strong>&nbsp; ₹ {liveClasses.price}</strong>
                              </h6>
                              <div className='col-sm-12 col-md-12'><NavLink to={`https://youtu.be/bQyXVus5mfw`} style={{marginLeft:"25ex"}}>Start</NavLink></div>
                              
                            </div>
                            
                          </div>
                          <div>
                                <pre>     </pre>
                            </div>
                            <div>
                                <pre>     </pre>
                            </div>
                        </div>
                      </>
                    
                  {/* } */}
                  {/* ) */}
                  {/* } */}
              </div>
            </div>
          </section>
        </>
      )
   
}
// const JoinLec = () =>{
//     const id=useParams();

    
// }

// export default JoinLec;