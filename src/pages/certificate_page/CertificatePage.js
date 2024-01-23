import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/rwd.png";
import ufm from "../../images/alx.png";
import microverse from "../../images/microverse.pdf"
import nh from "../../images/microverse-html.png";
import nactar from "../../images/microverse-js.png";
import ccna from "../../images/html.png";
import cbta from "../../images/andelar.pdf";
import skill from "../../images/andela-react.png";
import c from "../../images/apprentice-cloud.jpeg";
import iq from "../../images/datacamp-sql.png";
import computer from "../../images/rwd.png";
import graphics from "../../images/microverse-html.png";
import microversefs from "../../images/microverse-fs.png";
import Particle from "../../Particle";
export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.sololearn.com/certificates/CT-FCMJ7UDO"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={ucsc}
                                        alt={ucsc}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Responsive Web Design
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - SoloLearn
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={cbta}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={skill}
                                        alt={skill}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  React
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Andela
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={microverse}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={microversefs}
                                        alt={microversefs}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Full Stack Web Development
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Microverse
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.datacamp.com/completed/statement-of-accomplishment/course/ec8900b489e7466eb41d244920843927cd92f9c5"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={iq}
                                        alt={iq}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Introduction to SQL
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  DataCamp
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://d36-gr04.eu1.hubspotlinks.com/Ctc/2O+113/d36-GR04/VWCLp_3z7msLW705mF_719JbqW4-ljtc4ZmdMdN4FBQLV5nKv_V3Zsc37CgNq5W1W0NkV41SVMHW3H6yBw7R50KbW4m1wWF90kzNQW2hMh9f7sh8lsN7zN0MWxv2hqVqnJmq650RzkW7S44My6L8MDQW5KKCGn8X5RpSVcQcmt3SWDRLW2mx_DC1WbF5sV6Hp2c45bRWBN58qcLY5bBg-W6sqLy048Ggd6W5Wjylh6cztkBW92zMtc4cP4qGW8J4GZ-2j81sQW7n7S976ld7ZRW47VzQc3G6dGvW9cx_ws49vR5GVQQlY22l9lX2W6qbKvH4D4S1DW217Ljq3QlhmcW48-g7v1X47HxW6RDJ0K7TjGh4N3Y5MZ-nq7VGW56fHYJ4ZV6GrW4Kd0hW7_LgQyN788T3XnXYwlW6jS8pp7xD_XPW3hKgty4QqdcPW1ktN8Z5k65HnW8HM64_8RBSwhW8tj72D8Xw0JmW5RBL641MMLhyW20zsPt2-M098V197HB3psT8zW4M7Fgy7XFVPtW4DqpT_5xMh_z3pfv1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={ufm}
                                        alt={ufm}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Software Engineering Programme
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - ALX
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={c}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={c}
                                        alt={c}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Basic JavaScript
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Apprentice Cloud
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}
