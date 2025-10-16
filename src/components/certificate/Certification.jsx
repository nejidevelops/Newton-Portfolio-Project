import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ucsc from "../../images/rwd.png";
import ufm from "../../images/alx.png";
import microverse from "../../images/microverse-fs.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
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
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.credential.net/d080face-e504-4e44-8633-dbedb62013b7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={microverse} alt={microverse} />}
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
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Microverse
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
                          href="https://www.sololearn.com/certificates/CT-FCMJ7UDO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={ucsc} alt={ucsc} />}
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
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
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
                          href="https://d36-gr04.eu1.hubspotlinks.com/Ctc/2O+113/d36-GR04/VWCLp_3z7msLW705mF_719JbqW4-ljtc4ZmdMdN4FBQLV5nKv_V3Zsc37CgNq5W1W0NkV41SVMHW3H6yBw7R50KbW4m1wWF90kzNQW2hMh9f7sh8lsN7zN0MWxv2hqVqnJmq650RzkW7S44My6L8MDQW5KKCGn8X5RpSVcQcmt3SWDRLW2mx_DC1WbF5sV6Hp2c45bRWBN58qcLY5bBg-W6sqLy048Ggd6W5Wjylh6cztkBW92zMtc4cP4qGW8J4GZ-2j81sQW7n7S976ld7ZRW47VzQc3G6dGvW9cx_ws49vR5GVQQlY22l9lX2W6qbKvH4D4S1DW217Ljq3QlhmcW48-g7v1X47HxW6RDJ0K7TjGh4N3Y5MZ-nq7VGW56fHYJ4ZV6GrW4Kd0hW7_LgQyN788T3XnXYwlW6jS8pp7xD_XPW3hKgty4QqdcPW1ktN8Z5k65HnW8HM64_8RBSwhW8tj72D8Xw0JmW5RBL641MMLhyW20zsPt2-M098V197HB3psT8zW4M7Fgy7XFVPtW4DqpT_5xMh_z3pfv1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            {<img className="logo_img" src={ufm} alt={ufm} />}
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
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - ALX
                        </h3>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
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
