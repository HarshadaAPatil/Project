import { redirect, useNavigate, useParams } from "react-router-dom";
import ViewYogaType from "./ViewYogaType";

export default function DeleteYogaType(){
    let {id}=useParams();
    if(window.confirm("Do you want to delete the Yoga Type")){
        fetch(`http://localhost:9090/api/yogaTypes/deleteYogaType/${id}`,{
          method:"DELETE",
        //   headers:{"content-type":"application/json"},
        //   body:JSON.stringify(yogaTypee)
      }).then(()=>{
          console.log("New Student Added")
        
      })
    }
    return
          <ViewYogaType />
}