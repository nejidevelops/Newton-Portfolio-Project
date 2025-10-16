import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaInternetExplorer, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Bofulo Jillo Hair Studio
                    </h5>
                    <img src={nyc} alt={nyc} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://mohammadnewton.github.io/Barber-shop-project/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaInternetExplorer
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://github.com/mohammadnewton/Barber-shop-project"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`github`}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to Bofulo Jillo Hair Studio, where style meets sophistication! Our HTML/CSS project is a virtual representation of a trendy and modern hair studio that combines cutting-edge design with seamless functionality.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Modern Bank App
                    </h5>
                    <img src={hd} alt={hd} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://meek-capybara-16dfe7.netlify.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaInternetExplorer
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://github.com/mohammadnewton/modern_bank_app"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`github`}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      This app is all about a payment method giving information and containing multiple sections that convey data that is relevant to the project.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React + Vite, TailwindCSS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      DevsPark
                    </h5>
                    <img src={pp} alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://mohammadnewton.github.io/Newton-Capstone-Project/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaInternetExplorer
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                      <a
                        href={"https://github.com/mohammadnewton/Newton-Capstone-Project"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`github`}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Devspark is a conference website that invites people to the tech summits.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
