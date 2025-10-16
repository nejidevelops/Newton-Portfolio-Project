import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration - Get these from your EmailJS dashboard
      // See EMAILJS_SETUP.md for detailed instructions
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_your_service_id";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_your_template_id";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Newton Ombese",
        to_email: "newtonombese1@gmail.com",
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert(`Thanks ${formData.name}! Your message has been sent successfully. I will get back to you soon!`);
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Sorry, there was an error sending your message. Please try again or contact me directly at newtonombese1@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="aboutme-heading">Contact me</h1>
              </motion.div>
            </Col>
            <Col md={12} id="contact" className="mt-5">
              <Row>
                <Col lg={5} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="contact-form-card"
                  >
                    <div className="contact-form-header">
                      <h3>Let's Get In Touch</h3>
                      <p>Ready to start your next project with me? Send me a message and let's discuss how we can work together.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="modern-contact-form">
                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="input-wrapper">
                          <input
                            type="text"
                            className={`modern-input ${errors.name ? 'error' : ''} ${formData.name ? 'filled' : ''}`}
                            id="username"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                          />
                          <label htmlFor="username" className="floating-label">
                            Full Name *
                          </label>
                          <div className="input-highlight"></div>
                        </div>
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </motion.div>

                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="input-wrapper">
                          <input
                            type="email"
                            className={`modern-input ${errors.email ? 'error' : ''} ${formData.email ? 'filled' : ''}`}
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                          />
                          <label htmlFor="email" className="floating-label">
                            Email Address *
                          </label>
                          <div className="input-highlight"></div>
                        </div>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </motion.div>

                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="input-wrapper">
                          <textarea
                            className={`modern-textarea ${errors.message ? 'error' : ''} ${formData.message ? 'filled' : ''}`}
                            id="userMessage"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                          />
                          <label htmlFor="userMessage" className="floating-label textarea-label">
                            Your Message *
                          </label>
                          <div className="input-highlight"></div>
                        </div>
                        {errors.message && <span className="error-message">{errors.message}</span>}
                      </motion.div>

                      <motion.div 
                        className="submit-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <button
                          type="submit"
                          className="modern-submit-btn"
                          disabled={isLoading}
                        >
                          <span className="btn-content">
                            {isLoading ? (
                              <>
                                <div className="spinner"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <AiOutlineSend className="send-icon" />
                              </>
                            )}
                          </span>
                          <div className="btn-bg"></div>
                        </button>
                      </motion.div>
                    </form>
                  </motion.div>
                </Col>
                <Col lg={7} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="contact-info-section"
                  >
                    <div className="contact-info-header">
                      <h3>Get In Touch</h3>
                      <p>Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
                    </div>

                    <div className="contact-cards-container">
                      <motion.a
                        href={`mailto:newtonombese1@gmail.com`}
                        className="contact-card"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-icon">
                          <FiAtSign />
                        </div>
                        <div className="contact-info">
                          <h4>Email</h4>
                          <p>newtonombese1@gmail.com</p>
                        </div>
                      </motion.a>

                      <motion.a
                        href={`tel:+254758982500`}
                        className="contact-card"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-icon">
                          <FiPhone />
                        </div>
                        <div className="contact-info">
                          <h4>Phone</h4>
                          <p>+254 758 982 500</p>
                        </div>
                      </motion.a>

                      <motion.a
                        href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-icon">
                          <HiOutlineLocationMarker />
                        </div>
                        <div className="contact-info">
                          <h4>Location</h4>
                          <p>Nairobi, Kenya</p>
                        </div>
                      </motion.a>
                    </div>

                    <motion.div 
                      className="map-container"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6928.880067375755!2d36.796455546959166!3d-1.318713025132025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f106730cce0c3%3A0x2db496ad6b6805a3!2sCanaan%20Estate!5e0!3m2!1sen!2ske!4v1705674228639!5m2!1sen!2ske"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        title="Contact Me"
                        tabIndex="0"
                        loading="lazy"
                        className="modern-map"
                      ></iframe>
                    </motion.div>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
