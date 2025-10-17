import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ucsc from "../../images/rwd.png";
import ufm from "../../images/alx.png";
import microverse from "../../images/microverse-fs.png";
import { Link } from "react-router-dom";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

// Certificate data structure
const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Microverse",
    logo: microverse,
    url: "https://www.credential.net/d080face-e504-4e44-8633-dbedb62013b7",
    date: "2023",
    skills: ["React", "JavaScript", "Ruby on Rails", "Node.js"],
    verified: true,
    description: "Comprehensive full-stack development program covering modern web technologies"
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "SoloLearn",
    logo: ucsc,
    url: "https://www.sololearn.com/certificates/CT-FCMJ7UDO",
    date: "2022",
    skills: ["HTML5", "CSS3", "Responsive Design", "Mobile-First"],
    verified: true,
    description: "Mastering responsive web design principles and modern CSS techniques"
  },
  {
    id: 3,
    title: "Software Engineering Programme",
    issuer: "ALX",
    logo: ufm,
    url: "https://d36-gr04.eu1.hubspotlinks.com/Ctc/2O+113/d36-GR04/VWCLp_3z7msLW705mF_719JbqW4-ljtc4ZmdMdN4FBQLV5nKv_V3Zsc37CgNq5W1W0NkV41SVMHW3H6yBw7R50KbW4m1wWF90kzNQW2hMh9f7sh8lsN7zN0MWxv2hqVqnJmq650RzkW7S44My6L8MDQW5KKCGn8X5RpSVcQcmt3SWDRLW2mx_DC1WbF5sV6Hp2c45bRWBN58qcLY5bBg-W6sqLy048Ggd6W5Wjylh6cztkBW92zMtc4cP4qGW8J4GZ-2j81sQW7n7S976ld7ZRW47VzQc3G6dGvW9cx_ws49vR5GVQQlY22l9lX2W6qbKvH4D4S1DW217Ljq3QlhmcW48-g7v1X47HxW6RDJ0K7TjGh4N3Y5MZ-nq7VGW56fHYJ4ZV6GrW4Kd0hW7_LgQyN788T3XnXYwlW6jS8pp7xD_XPW3hKgty4QqdcPW1ktN8Z5k65HnW8HM64_8RBSwhW8tj72D8Xw0JmW5RBL641MMLhyW20zsPt2-M098V197HB3psT8zW4M7Fgy7XFVPtW4DqpT_5xMh_z3pfv1",
    date: "2024",
    skills: ["C Programming", "Python", "Data Structures", "Algorithms"],
    verified: true,
    description: "Intensive software engineering program focusing on computer science fundamentals"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Modern Certificate Card Component
const ModernCertCard = ({ cert, index }) => (
  <motion.div
    className="modern-cert-card"
    variants={cardVariants}
    whileHover="hover"
    whileTap={{ scale: 0.98 }}
    layout
  >
    <div className="cert-card-inner">
      {/* Verification Badge */}
      {cert.verified && (
        <motion.div 
          className="verification-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <FaCheckCircle />
        </motion.div>
      )}
      
      {/* Card Header with Logo */}
      <div className="modern-cert-header">
        <div className="logo-container">
          <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
        </div>
        <div className="cert-overlay">
          <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-certificate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiExternalLink />
            <span>View Certificate</span>
          </motion.a>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="modern-cert-content">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        <p className="cert-description">{cert.description}</p>
        
        {/* Skills Tags */}
        <div className="cert-skills">
          {cert.skills.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="skill-tag">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="skill-tag more">+{cert.skills.length - 3}</span>
          )}
        </div>
        
        {/* Date */}
        <div className="cert-meta">
          <FaCalendarAlt />
          <span>{cert.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

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
              <motion.div
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h1 className="aboutme-heading">Certifications</h1>
                <p className="section-subtitle">Professional achievements and continuous learning</p>
              </motion.div>
            </Col>
            <Col xs={12} className="mt-4">
              <motion.div
                className="certificates-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {certificatesData.map((cert, index) => (
                  <ModernCertCard 
                    key={cert.id} 
                    cert={cert} 
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
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/certificatepage">
              <motion.button 
                className="modern-view-all-btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(123, 12, 134, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Certificates</span>
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
