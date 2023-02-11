import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a   href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <button className="c-button">Website for a Hackathon</button>
        </a>
        <a   href="https://github.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <button className="c-button">Website for a Community</button>
        </a>

    </div>
  );
};

export default Card;
