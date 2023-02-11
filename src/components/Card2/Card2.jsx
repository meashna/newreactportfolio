import React from "react";
import "./Card2.css";

const Card2 = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    
      <a   href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <button className="c-button">View projects</button>
        </a>
    </div>
  );
};

export default Card2;
