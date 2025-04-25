import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter,
  FiCheckCircle
} from "react-icons/fi";
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    
    // Replace these with your actual EmailJS credentials
    const serviceId = "service_8va8m19";
    const templateId = "template_vj91vf8";
    const publicKey = "C5aOe7FGXi8w0moX9";
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSubmitted(true);
          setIsLoading(false);
          reset(); // Reset the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div 
        className="bg-blob-1"
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="bg-blob-2"
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h2>Get In Touch</h2>
          <p className="subtitle">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form"
            variants={itemVariants}
          >
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
              >
                <FiCheckCircle className="success-icon" />
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <div className={`form-group ${errors.name ? "error" : ""}`}>
                  <input
                    type="text"
                    placeholder=" "
                    {...register("name", { required: "Name is required" })}
                  />
                  <label>Your Name</label>
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>

                <div className={`form-group ${errors.email ? "error" : ""}`}>
                  <input
                    type="email"
                    placeholder=" "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <label>Email Address</label>
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className={`form-group ${errors.message ? "error" : ""}`}>
                  <textarea
                    placeholder=" "
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  <label>Your Message</label>
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loader"></span>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <p className="info-text">
              Feel free to reach out through any of these channels:
            </p>

            <div className="info-group">
              <div className="info-item">
                <FiMail className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </div>
              </div>

              <div className="info-item">
                <FiPhone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="info-item">
                <FiMapPin className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="Twitter"
              >
                <FiTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;