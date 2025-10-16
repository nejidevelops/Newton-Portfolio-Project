import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import profileImg from "../../../public/profile.jpg";
import "../../style.css";
export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <div className="brand-container">
            <div className="profile-image-container">
              <img 
                src={profileImg} 
                className="profile-image" 
                alt="Newton Ombese Profile" 
                onError={(e) => {
                  e.target.src = "/profile.jpg"; // Fallback
                }}
              />
            </div>
            <div className="brand-text">
              <h5 className="brand-name">Newton Ombese</h5>
              <span className="brand-subtitle">Full Stack Developer</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          className="custom-toggler"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificatepage"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Certifications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
                className="nav-link-custom"
              >
                <FaBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/nejidevelops/Newton-Portfolio-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
