import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

export default function YogaType() {
  let {id}=useParams();
  console.log(id)
  let [yogaType, setYogaType] = useState({
    yogatype: "",
    description: "",
    path: ""
  });
    // alert(id);
    useEffect(()=>{
        fetch(`http://localhost:9090/api/yogaTypes/getYogaType/${id}`)
        .then(res=>res.json())
        .then((result)=>{setYogaType(result);})
    },[])
    console.log(yogaType)
    return(
      <>
      <Alert key='warning' variant='warning' style={{marginBottom:"0"}}>
      <div className="row" style={{border:""}}>
        <div className="col-sm-12 col-md-3"></div>
        <div className="col-sm-12 col-md-6 pr-5" style={{alignItems:"center"}}>

        <iframe
            width="553"
            style={{height:"50vh"}}
            src={`https://www.youtube.com/embed/${yogaType.path}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        </div>
        <hr />
        <div className="row">
        <div className="col-sm-12 col-md-3"></div>
        <div className="col-sm-12 col-md-6 pr-5" style={{alignItems:"center"}}>
        {/* <Alert key='warning' variant='warning'> */}
        {yogaType.description}<br/>
        {yogaType.description}
        {/* </Alert> */}
</div>

        </div>
        <NavLink className="nav-link btn btn-outline" style={{ width: '250px', height: '40px' }} to="/gallery">
  Back
</NavLink>
        </Alert>
      </>
    )
}
