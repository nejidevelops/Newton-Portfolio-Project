import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import pp from "../../images/portfolio.png";
import meal from "../../images/meal.png";
import ac from "../../images/ac.png";
import calculator from "../../images/calculator.png";
import library from "../../images/library.png";
import {
  FaInternetExplorer,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";

// All Projects data structure
const allProjectsData = [
  {
    id: 1,
    title: "Bofulo Jillo Hair Studio",
    description:
      "Welcome to Bofulo Jillo Hair Studio, where style meets sophistication! Our HTML/CSS project is a virtual representation of a trendy and modern hair studio that combines cutting-edge design with seamless functionality.",
    image: nyc,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mohammadnewton.github.io/Barber-shop-project/",
    githubUrl: "https://github.com/mohammadnewton/Barber-shop-project",
    category: "Frontend",
    featured: true,
    status: "Completed",
    year: "2023",
  },
  {
    id: 2,
    title: "Modern Bank App",
    description:
      "This app is all about a payment method giving information and containing multiple sections that convey data that is relevant to the project. Built with modern React and styled with TailwindCSS.",
    image: hd,
    technologies: ["React", "Vite", "TailwindCSS"],
    liveUrl: "https://meek-capybara-16dfe7.netlify.app/",
    githubUrl: "https://github.com/mohammadnewton/modern_bank_app",
    category: "Full Stack",
    featured: true,
    status: "Completed",
    year: "2024",
  },
  {
    id: 3,
    title: "Budget App",
    description:
      "Budget App is an application that allows users to create budgets and track them. A comprehensive financial management tool for personal and business use.",
    image: ci,
    technologies: ["Ruby", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://bofulo-budget-app.onrender.com/",
    githubUrl: "https://github.com/mohammadnewton/budget-app",
    category: "Full Stack",
    featured: false,
    status: "Completed",
    year: "2023",
  },
  {
    id: 4,
    title: "HaipCRM",
    description:
      "Welcome to Haip CRM, an Integrated Complaints Referral Mechanism designed to facilitate quality service and accountability from government and non-governmental service providers at the county level in Kenya.",
    image: eco,
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    liveUrl: "https://melodious-naiad-a806af.netlify.app/",
    githubUrl: "https://github.com/mohammadnewton/haipcrm",
    category: "Full Stack",
    featured: true,
    status: "Completed",
    year: "2024",
  },
  {
    id: 5,
    title: "DevsPark",
    description:
      "Devspark is a conference website that invites people to the tech summits. A comprehensive platform for tech enthusiasts to discover and attend developer conferences.",
    image: pp,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mohammadnewton.github.io/Newton-Capstone-Project/",
    githubUrl: "https://github.com/mohammadnewton/Newton-Capstone-Project",
    category: "Frontend",
    featured: false,
    status: "Completed",
    year: "2023",
  },
  {
    id: 6,
    title: "Space Travelers Hub",
    description:
      "Space Travelers' Hub is a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
    image: meal,
    technologies: ["React", "Redux", "API"],
    liveUrl: "https://space-travelers-hub-d4k6.onrender.com/",
    githubUrl: "https://github.com/mohammadnewton/space-travelers-hub",
    category: "Frontend",
    featured: false,
    status: "Completed",
    year: "2023",
  },
  {
    id: 7,
    title: "Awesome Analytics",
    description:
      "Awesome Analytics is a comprehensive data visualization and analytics platform that helps businesses make data-driven decisions with interactive charts and reports.",
    image: ac,
    technologies: ["React", "Chart.js", "Node.js"],
    liveUrl: "https://awesome-analytics-zeta.vercel.app/",
    githubUrl: "https://github.com/mohammadnewton/awesome-analytics",
    category: "Full Stack",
    featured: false,
    status: "Completed",
    year: "2024",
  },
  {
    id: 8,
    title: "Math Magicians",
    description:
      "Math magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read random math-related quotes.",
    image: calculator,
    technologies: ["React", "API"],
    liveUrl: "https://math-magicians-9qvd.onrender.com/",
    githubUrl: "https://github.com/mohammadnewton/Math-Magician",
    category: "Frontend",
    featured: false,
    status: "Completed",
    year: "2023",
  },
  {
    id: 9,
    title: "Bookstore CMS",
    description:
      "Bookstore CMS is a comprehensive content management system for bookstores. It allows users to add, remove, and manage books in their collection with a clean and intuitive interface.",
    image: library,
    technologies: ["React", "Redux", "CSS"],
    liveUrl: "https://bookstore-cms-qx4j.onrender.com/",
    githubUrl: "https://github.com/mohammadnewton/bookstore",
    category: "Frontend",
    featured: false,
    status: "Completed",
    year: "2023",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Modern Project Card Component
const ModernProjectCard = ({ project, index }) => (
  <motion.div
    className="modern-project-card"
    variants={cardVariants}
    whileHover={{
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="project-card-inner">
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          className="featured-badge"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <FaStar />
          <span>Featured</span>
        </motion.div>
      )}

      {/* Project Image Container */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-actions">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-action-btn primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-action-btn secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Footer */}
        <div className="project-footer">
          <div className="project-status">
            <BiTime />
            <span>{project.status}</span>
          </div>
          <div className="project-links">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
            >
              <FaInternetExplorer />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ProjectPage() {
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
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                    href={
                                      "https://github.com/mohammadnewton/Barber-shop-project"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                    href={
                                      "https://github.com/mohammadnewton/modern_bank_app"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Budget App
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://bofulo-budget-app.onrender.com/"
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
                                    href={
                                      "https://github.com/mohammadnewton/budget-app"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  Budget App is an application that allows users to create budgets and track them.
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
                                Ruby, HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  HaipCRM
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn">
                                <a
                                    href={
                                      "https://melodious-naiad-a806af.netlify.app/"
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
                                    href={
                                      "https://github.com/mohammadnewton/haipcrm"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  Welcome to Haip CRM, an Integrated Complaints Referral Mechanism designed to facilitate quality service and accountability from government and non-governmental service providers at the county level in Kenya. The platform enables users to submit complaints via SMS, which are then forwarded to the relevant aid or service provider for prompt response and feedback.
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
                                React, Node.js, Express.js ,MySQL
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                    href={
                                      "https://github.com/mohammadnewton/Newton-Capstone-Project"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  of my expertise and creativity.
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
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Chakra Landng Page
                                </h5>
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://nextjs-chakra-ui-landing-page.vercel.app/"
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
                                    href={
                                      "https://github.com/mohammadnewton/Nextjs-Chakra-UI-Landing-Page"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  A project build with React Vite, it is basically a Landing Page but purely template with Chakra UI no CSS or CSS framework used
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
                                Next.js, ChakraUI
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Coffee Shop
                                </h5>
                                <img src={ac} alt={ac} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://nextjs-chakra-ui-landing-page.vercel.app/"
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
                                    href={
                                      "https://mohammadnewton.github.io/Coffee-Website/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  The Best Of The Chefs And Coffee Makers Are Employed In Our Cafe To Make Sure You Are Served The Best Coffee In Town
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
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Soma Uhekimike
                                </h5>
                                <img src={library} alt={library} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://soma-uhekimike-bofulo.netlify.app/"
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
                                    href={
                                      "https://github.com/mohammadnewton/soma-uhekimike"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  Soma Uhemikike is a book library website that show book covers and ofer links to the book dealers after giving details about the book. 
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
                                HTML, CSS, JavaScript, React
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
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
                                  Math Magician
                                </h5>
                                <img src={calculator} alt={calculator} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://math-magician-11ou.onrender.com/"
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
                                    href={
                                      "https://github.com/mohammadnewton/Math-Magician"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
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
                                  Math magician is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read random math-related quote.
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
                                React, API
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
        </Container>
      </Container>
    </section>
  );
}
