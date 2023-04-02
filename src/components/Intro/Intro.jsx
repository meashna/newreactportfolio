import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
/*import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";*/
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
//import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ashna T</span>
          <span>
            Hai peeps !! A passion for technology,
             a love for problem-solving, and an unwavering dedication to craftsmanship. 
             Whether it's creating seamless user experiences or developing custom applications, 
             I approach each project with a focus on innovation and creativity.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        
        <div className="i-icons">
        <a   href="https://github.com/meashna"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <img src={Github} alt=" google"/>
        </a>

        <a   href="https://www.linkedin.com/in/ashnat"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <img src={LinkedIn} alt="" />
        </a>
          
         
        <a   href="https://instagram.com/ashnat___?igshid=YmMyMTA2M2Y="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
        <img src={Instagram} alt="" />
        </a>
          
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      
        

        

       

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
