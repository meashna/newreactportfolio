
import "./Projects.css";
import img1 from "../../img/hackaway.png";
import img2 from "../../img/hackclub.png";
import img3 from "../../img/react.png";
import img6 from "../../img/shefigma.png";
import img7 from "../../img/boatfigma.png";
import img8 from "../../img/rock.png";
import img5 from "../../img/drumpad.png";
import img4 from "../../img/reactcalc.png";
import React, { useContext } from "react";
import { themeContext } from "../../Context";




const Projects = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
  return (
    <section id="projects"> 
      <h5>My Recent Works</h5>
      
      <div className=" portfolio_container">
        

        
        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img1} alt=""/>
          </div>
          <h3>A website build  for  Hackathon . </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/Hack-Club-Kmea/hackaway-website"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

              <a   href="https://hackaway.hackclub.com/index.html"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

      
        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img2} alt=""/>
          </div>
          <h3>A  react website build w  for a Community . </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/meashna/HC-Website"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

              <a   href="https://spiffy-squirrel-c376e2.netlify.app/"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img3} alt=""/>
          </div>
          <h3>Portfolio website of me . </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/Hack-Club-Kmea/hackaway-website"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

              <a   href="https://hackaway.hackclub.com/index.html"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>


        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img4} alt=""/>
          </div>
          <h3>React Calculator </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/meashna/React-calculator"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

              <a   href="https://fanciful-bubblegum-c887b7.netlify.app/"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

        
        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img5} alt=""/>
          </div>
          <h3>Drum pad </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/meashna/Drum-pad"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

              <a   href="https://meashna.github.io/Drum-pad/"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img6} alt=""/>
          </div>
          <h3>UI for a home-interior design site . </h3>
          <div className="portfolio_items-cta">
                

              <a   href="https://www.figma.com/proto/Krik5IeOOq27HILmWhSxYx/SHE.Phone%2FTablet?scaling=scale-down&page-id=0%3A1&node-id=1%3A3"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

        <article className="portfolio_items">
          <div className="portfolio_items-image">
            <img src={img7} alt=""/>
          </div>
          <h3>UI for boat Nirvana website . </h3>
          <div className="portfolio_items-cta">


              <a   href="https://www.figma.com/proto/3lo9mX2Uhg7NRXfcQ4eE0K/BOAT?scaling=scale-down&page-id=0%3A1&node-id=5%3A34"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Demo</button>
              </a>
          
          </div>
          
        </article>

        <article className="portfolio_items">
        <div className="portfolio_items-image">
            <img src={img8} alt=""/>
          </div>
          <h3>Python Rock-Papper-Scissor game using python </h3>
          <div className="portfolio_items-cta">
                <a   href="https://github.com/meashna/RockPaperScissor.py"
                      style={{ color: "white" }}
                      target="_blank" 
                      rel="noopener noreferrer">
              <button className="button i-button">Github</button>
              </a>

             
          
          </div>
          
        </article>

        
        
       
      </div>
    </section>
  );
};
export default Projects;