import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About me</span>
        <span>A passionate Web Developer</span>
        <spane>
        "Hi there! My name is Ashna T, and I'm a B-Tech CSE Student and a Web  developer 
        <br/>
         who was with a passion for developing customise website . 
         <br/>
         I have quite good experience in developing web and  applications .
    
          <br />
          I am always eager to learn new technologies and stay up to date with industry advancements.
          <br />
          I believe in writing code that is not only functional but also maintainable, scalable, and secure.
          <br />
          My experience includes working on projects from conceptualization to deployment, 
          <br />
          and I have a strong understanding of  development methodologies and practices. 
        </spane>
        <a   href="https://drive.google.com/file/d/1-1Bih-PFcpNEuPPI1YKbXpI8l7jRJ9de/view?usp=sharing"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button s-button">View CV </button>
              </a>
       
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card2
            emoji={HeartEmoji}
            heading={"Hobbies"}
            detail={"I enjoying  a lot in reading and watching mystery , thriller and horror films 😁  . Also I am obsessed with rain , nature  , and travel....Yeah sure...I am a person who loves loneliness"}
            
            
          />

          

        </motion.div>

        
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={" Have a  look  at some of my applications 😂"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card3
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Some of my designs 😂 are here...don't miss it "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
