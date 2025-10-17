import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ucsc from "../../images/rwd.png";
import ufm from "../../images/alx.png";
import microverse from "../../images/microverse.pdf";
import cbta from "../../images/andelar.pdf";
import skill from "../../images/andela-react.png";
import c from "../../images/apprentice-cloud.jpeg";
import iq from "../../images/datacamp-sql.png";
import microversefs from "../../images/microverse-fs.png";
import Particle from "../../Particle";
import {
  FaExternalLinkAlt,
  FaCertificate,
  FaStar,
  FaAward,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";

// Certificates data structure
const certificatesData = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "SoloLearn",
    description: "Comprehensive certification in responsive web design principles, covering HTML5, CSS3, flexbox, grid layouts, and mobile-first design approaches.",
    image: ucsc,
    certificateUrl: "https://www.sololearn.com/certificates/CT-FCMJ7UDO",
    category: "Frontend Development",
    featured: true,
    year: "2023",
    skills: ["HTML5", "CSS3", "Responsive Design", "Mobile-First"],
  },
  {
    id: 2,
    title: "React",
    issuer: "Andela",
    description: "Advanced React certification covering component architecture, state management, hooks, context API, and modern React development patterns.",
    image: skill,
    certificateUrl: cbta,
    category: "Frontend Framework",
    featured: true,
    year: "2023",
    skills: ["React", "JSX", "Hooks", "State Management"],
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Microverse",
    description: "Comprehensive full-stack development program covering frontend and backend technologies, databases, APIs, and software development best practices.",
    image: microversefs,
    certificateUrl: microverse,
    category: "Full Stack Development",
    featured: true,
    year: "2023",
    skills: ["React", "Ruby", "Rails", "PostgreSQL", "Git"],
  },
  {
    id: 4,
    title: "Introduction to SQL",
    issuer: "DataCamp",
    description: "Foundational SQL certification covering database queries, data manipulation, joins, aggregations, and database design principles.",
    image: iq,
    certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ec8900b489e7466eb41d244920843927cd92f9c5",
    category: "Database",
    featured: false,
    year: "2023",
    skills: ["SQL", "Database Queries", "Data Analysis"],
  },
  {
    id: 5,
    title: "Software Engineering Programme",
    issuer: "ALX",
    description: "Intensive software engineering program focusing on system design, algorithms, data structures, and professional software development practices.",
    image: ufm,
    certificateUrl: "https://d36-gr04.eu1.hubspotlinks.com/Ctc/2O+113/d36-GR04/VWCLp_3z7msLW705mF_719JbqW4-ljtc4ZmdMdN4FBQLV5nKv_V3Zsc37CgNq5W1W0NkV41SVMHW3H6yBw7R50KbW4m1wWF90kzNQW2hMh9f7sh8lsN7zN0MWxv2hqVqnJmq650RzkW7S44My6L8MDQW5KKCGn8X5RpSVcQcmt3SWDRLW2mx_DC1WbF5sV6Hp2c45bRWBN58qcLY5bBg-W6sqLy048Ggd6W5Wjylh6cztkBW92zMtc4cP4qGW8J4GZ-2j81sQW7n7S976ld7ZRW47VzQc3G6dGvW9cx_ws49vR5GVQQlY22l9lX2W6qbKvH4D4S1DW217Ljq3QlhmcW48-g7v1X47HxW6RDJ0K7TjGh4N3Y5MZ-nq7VGW56fHYJ4ZV6GrW4Kd0hW7_LgQyN788T3XnXYwlW6jS8pp7xD_XPW3hKgty4QqdcPW1ktN8Z5k65HnW8HM64_8RBSwhW8tj72D8Xw0JmW5RBL641MMLhyW20zsPt2-M098V197HB3psT8zW4M7Fgy7XFVPtW4DqpT_5xMh_z3pfv1",
    category: "Software Engineering",
    featured: true,
    year: "2023",
    skills: ["C Programming", "Python", "Algorithms", "System Design"],
  },
  {
    id: 6,
    title: "Basic JavaScript",
    issuer: "Apprentice Cloud",
    description: "JavaScript fundamentals certification covering ES6+ features, DOM manipulation, asynchronous programming, and modern JavaScript development.",
    image: c,
    certificateUrl: c,
    category: "Programming Language",
    featured: false,
    year: "2022",
    skills: ["JavaScript", "ES6+", "DOM", "Async Programming"],
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

// Modern Certificate Card Component
const ModernCertificateCard = ({ certificate, index }) => (
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
      {certificate.featured && (
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

      {/* Certificate Image Container */}
      <div className="project-image-container">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-actions">
            <motion.a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="project-action-btn primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaCertificate />
              <span>View Certificate</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{certificate.title}</h3>
          <div className="project-meta">
            <span className="project-category">{certificate.category}</span>
            <span className="project-year">{certificate.year}</span>
          </div>
        </div>

        <p className="project-description">{certificate.description}</p>

        {/* Skills/Technologies */}
        <div className="project-technologies">
          {certificate.skills.map((skill, idx) => (
            <span key={idx} className="tech-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* Certificate Footer */}
        <div className="project-footer">
          <div className="project-status">
            <FaAward />
            <span>{certificate.issuer}</span>
          </div>
          <div className="project-links">
            <motion.a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          {/* Certificates Section */}
          <Container fluid className="projects-section" id="certificates">
            <Container>
              <Row>
                <Col
                  md={12}
                  className="certificate-description d-flex justify-content-start"
                >
                  <motion.div
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h1 className="aboutme-heading">My Certifications</h1>
                  </motion.div>
                </Col>

                <Col xs={12} className="mt-4">
                  <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {certificatesData.map((certificate, index) => (
                      <ModernCertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
