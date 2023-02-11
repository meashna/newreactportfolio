import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Facebook from "../../img/Facebook.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import "./style.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Projects1 = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="projects">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            Our Recent <strong className="purple">Projects </strong>
          </h1>
          <Row  className="n-right"  style={{ justifyContent: "center", paddingBottom: "10px"  }}>
            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>
            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>

            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>

            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>
          </Row>

          
        </Container>
      </Container>


      <Container className="project-section">
        <Container>
          <Row  className="n-right"  style={{ justifyContent: "center", paddingBottom: "1px"  }}>
            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>
            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>

            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>

            <Col  md={4} className="n-list"  style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ProjectCards
                imgPath={Facebook}
                isBlog={false}
                title="Machine Learning"
                description=". Fusce vel massa metus."
                ghLink="https://github.com"
                demoLink="https://google.com"
              />
            </Col>
          </Row>

          
        </Container>
      </Container>
    </div>
  );
};

export default Projects1;
