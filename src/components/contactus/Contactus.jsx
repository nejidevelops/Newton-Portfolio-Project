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
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className={`form-input input-class ${errors.name ? 'error' : ''}`}
                          id="username"
                          name="name"
                          aria-describedby="nameHelp"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address *
                        </label>
                        <input
                          type="email"
                          className={`form-input input-class ${errors.email ? 'error' : ''}`}
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message *
                        </label>
                        <textarea
                          className={`form-message input-class ${errors.message ? 'error' : ''}`}
                          id="userMessage"
                          name="message"
                          rows="5"
                          placeholder="Enter your message..."
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          disabled={isLoading}
                        >
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
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:newtonombese1@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        newtonombese1@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+880 1603-550521`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+254758982500</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Nairobi, Kenya
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6928.880067375755!2d36.796455546959166!3d-1.318713025132025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f106730cce0c3%3A0x2db496ad6b6805a3!2sCanaan%20Estate!5e0!3m2!1sen!2ske!4v1705674228639!5m2!1sen!2ske"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
