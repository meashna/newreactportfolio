import React from "react";
import "./Card3.css";

const Card3 = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    
      <a   href="https://www.figma.com/proto/VfSwGeaLEjSq95xiPZADXv/PORTFOLIO?node-id=1%3A48&scaling=min-zoom&page-id=0%3A1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <button className="c-button">View projects</button>
        </a>
    </div>
  );
};

export default Card3;
