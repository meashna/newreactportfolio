import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ashnarys1320@gmail.com</span>
        <div className="f-icons">
        <a   href="https://instagram.com/ashnat___?igshid=YmMyMTA2M2Y="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                   <Insta color="white" size={"3rem"} />
        </a>


        <a   href="https://github.com/meashna"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                   <Gitub color="white" size={"3rem"} />
        </a>


        <a   href="https://twitter.com/ashnat__?t=23CrGSF1Rd4e8CG01IBOeQ&s=09"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                   <Twitter color="white" size={"3rem"} />
        </a>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
