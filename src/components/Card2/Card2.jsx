import React from "react";
import "./Card2.css";

const Card2 = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    
     
    </div>
  );
};

export default Card2;
