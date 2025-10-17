import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import nyc from "../../images/nyc.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import { FaInternetExplorer, FaGithub, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

// Projects data structure
const projectsData = [
  {
    id: 1,
    title: "Bofulo Jillo Hair Studio",
    description: "Welcome to Bofulo Jillo Hair Studio, where style meets sophistication! Our HTML/CSS project is a virtual representation of a trendy and modern hair studio that combines cutting-edge design with seamless functionality.",
    image: nyc,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mohammadnewton.github.io/Barber-shop-project/",
    githubUrl: "https://github.com/mohammadnewton/Barber-shop-project",
    category: "Frontend",
    featured: true,
    status: "Completed",
    year: "2023"
  },
  {
    id: 2,
    title: "Modern Bank App",
    description: "This app is all about a payment method giving information and containing multiple sections that convey data that is relevant to the project. Built with modern React and styled with TailwindCSS.",
    image: hd,
    technologies: ["React", "Vite", "TailwindCSS"],
    liveUrl: "https://meek-capybara-16dfe7.netlify.app/",
    githubUrl: "https://github.com/mohammadnewton/modern_bank_app",
    category: "Full Stack",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    title: "DevsPark",
    description: "Devspark is a conference website that invites people to the tech summits. A comprehensive platform for tech enthusiasts to discover and attend developer conferences.",
    image: pp,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mohammadnewton.github.io/Newton-Capstone-Project/",
    githubUrl: "https://github.com/mohammadnewton/Newton-Capstone-Project",
    category: "Frontend",
    featured: false,
    status: "Completed",
    year: "2023"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Modern Project Card Component
const ModernProjectCard = ({ project, index }) => (
  <motion.div
    className="modern-project-card"
    variants={cardVariants}
    whileHover={{ 
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 }
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
        <img src={project.image} alt={project.title} className="project-image" />
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

export default function Projects() {
  return (
    <div>
      <Container fluid className="projects-section" id="projects">
        <Container>
          <Row>
            <Col
              md={12}
              className="projects-description d-flex justify-content-start"
            >
              <motion.div
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h1 className="aboutme-heading">Featured Projects</h1>
                <p className="section-subtitle">
                  Showcasing my latest work and technical expertise
                </p>
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
                {projectsData.map((project, index) => (
                  <ModernProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </motion.div>
            </Col>
          </Row>
          <motion.div 
            className="view-all-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/projectspage">
              <motion.button 
                className="modern-view-all-btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(123, 12, 134, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <motion.div 
                  className="btn-icon"
                  whileHover={{ x: 5 }}
                >
                  <HiArrowRight />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </Container>
    </div>
  );
}
