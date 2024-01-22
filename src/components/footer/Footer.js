import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaMediumM } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Newton Ombese</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Newton Ombese</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/mohammadnewton"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammad-newton-ombese/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@newtonombese1"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMediumM />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/mohanewto200"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:newtonombese1@gmail.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
