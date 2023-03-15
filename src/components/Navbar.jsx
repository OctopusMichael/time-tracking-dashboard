import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/image-jeremy.png";

const Navbar = () => {
  const active = {
    color: 'white',
  }
  
  const disactive = {
    default: {
        color: "#eee"
    }
    
  
  }
  return (
    <>
      <div className="container p-0">
        <div className="section-avatar">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <div className="avatar-name ">
            <h5>Report for</h5>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="navbar-menu">
          <NavLink style={({ isActive }) => isActive ? active : disactive}  to="/time-tracking-dashboard/"> Daily </NavLink>
          <NavLink style={({ isActive }) => isActive ? active : disactive}  to="/time-tracking-dashboard/weekly"> Weekly</NavLink>
          <NavLink style={({ isActive }) => isActive ? active : disactive}  to="/time-tracking-dashboard/monthly"> Monthly</NavLink>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
