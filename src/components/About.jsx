import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Skills from "./Skills";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <motion.div
        className="about-container"
        ref={aboutRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="about-content">
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          
          <motion.p className="intro" variants={itemVariants}>
            Hi, I'm <span className="highlight">Prasad Subhedar</span>, a passionate<br />
            <span className="typing-text">Web Developer</span> and <span className="typing-text">Problem Solver</span>.
          </motion.p>
          
          <motion.div className="divider" variants={itemVariants} />
          
          <motion.p className="short-paragraph" variants={itemVariants}>
            I specialize in building clean, responsive websites and web
            applications with modern technologies, focusing on creating intuitive
            user experiences and robust solutions.
          </motion.p>
          
          <motion.p className="short-paragraph" variants={itemVariants}>
            My expertise spans across frontend and backend development using
            technologies like React, Node.js, and various databases. I'm
            committed to writing clean, efficient code that delivers both
            performance and maintainability.
          </motion.p>
          
          <motion.p className="short-paragraph" variants={itemVariants}>
            When I'm not coding, you can find me contributing to open-source
            projects, learning new technologies, or solving algorithmic
            challenges.
          </motion.p>

          <motion.div className="cta-container" variants={itemVariants}>
            <p className="cta">
              Interested in collaborating or have a project in mind?
            </p>
            <a href="#contact" className="contact-link">
              Let's Connect
              <span className="link-arrow">→</span>
            </a>
          </motion.div>
        </div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </motion.div>
      <Skills />
      <Timeline />
    </>
  );
};

export default About;