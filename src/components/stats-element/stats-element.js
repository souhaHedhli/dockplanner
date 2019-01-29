import React from "react";
import './stats-element.css';


const StatsElement = (props) => {
  const {logo,title,description} = props
  return(
    <div className="stats-element-style ">
      <img src={logo} alt='icon'/>
      <h2>{title}</h2>
      <p>{description}</p>
  </div>
  )
}

export default StatsElement;
