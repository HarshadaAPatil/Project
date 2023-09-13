import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Admindetail = () => {
  const navigate=useNavigate();
  return (
    <div >
      
      <div className='home' style={{backgroundImage:" linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url(./../../public/images/yoga.jpg)",display:'flex',justifyContent:'space-around',height:"50vh",margin:"0%",padding:"20%"}}>
        <div>
        <NavLink className="nav-link btn btn-outline" style={{ width: '250px', height: '40px' }} to="/addYogaType">
          ADD Yoga Type
        </NavLink>
        </div>
      <div><NavLink className="nav-link btn btn-outline" style={{ width: '250px', height: '40px' }} to="/viewYogaType">
          View Yoga Types
        </NavLink></div>
        
        {/* <NavLink className="nav-link btn btn-outline" style={{ width: '250px', height: '40px' }} to="/addYogaType">
          Update Types
        </NavLink>
        <NavLink className="nav-link btn btn-outline" style={{ width: '250px', height: '40px' }} to="/addYogaType">
         DeleteTypes
        </NavLink> */}
      </div>
    </div>
  )
}

export default Admindetail
