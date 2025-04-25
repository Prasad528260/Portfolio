import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import JavaScriptLogo from '../assets/icons/js.png';
import NodeJsLogo from '../assets/icons/node-js.png';
import ReactLogo from '../assets/icons/science.png';
import HtmlLogo from '../assets/icons/html.png';
import CssLogo from '../assets/icons/css-3.png';
import PythonLogo from '../assets/icons/python.png';
import './skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const softSkillVariants = {
    hover: {
      x: 5,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const technicalSkills = [
    { src: JavaScriptLogo, label: 'JavaScript', className: 'javascript', color: '#f7df1e' },
    { src: NodeJsLogo, label: 'Node.js', className: 'nodejs', color: '#8cc84b' },
    { src: ReactLogo, label: 'React', className: 'react', color: '#61dafb' },
    { src: HtmlLogo, label: 'HTML', className: 'html', color: '#e34f26' },
    { src: CssLogo, label: 'CSS', className: 'css', color: '#2965f1' },
    { src: PythonLogo, label: 'Python', className: 'python', color: '#306998' }
  ];

  const softSkills = ['Problem Solving', 'Collaboration', 'Teamwork', 'Communication', 'Adaptability', 'Creativity'];

  return (
    <motion.div 
      ref={ref}
      className="skills-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="skills-background"></div>
      
      <motion.div 
        className="skills-wrapper"
        variants={containerVariants}
      >
        <motion.div 
          className="skills-header"
          variants={itemVariants}
        >
          <motion.h2 
            className="section-title"
            animate={inView ? pulseAnimation : {}}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="section-divider"
            variants={itemVariants}
          />
        </motion.div>

        <div className="skills-sections-container">
          <motion.div 
            className="skills-section technical-skills"
            variants={itemVariants}
          >
            <h3>Technical Expertise</h3>
            <motion.div className="skills-grid">
              {technicalSkills.map(({ src, label, className, color }) => (
                <motion.div 
                  key={label}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover="hover"
                  variants={skillVariants}
                >
                  <div className="skill-badge" style={{ borderColor: color }}>
                    <motion.img 
                      src={src} 
                      alt={label} 
                      className={`skill-logo ${className}`}
                      whileHover={{ rotate: 10 }}
                    />
                  </div>
                  <motion.p 
                    className="skill-name"
                    style={{ color: color }}
                  >
                    {label}
                  </motion.p>
                  <div 
                    className="skill-progress"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <motion.div 
                      className="progress-bar"
                      style={{ backgroundColor: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="skills-section soft-skills"
            variants={itemVariants}
          >
            <h3>Professional Skills</h3>
            <motion.div className="soft-skills-grid">
              {softSkills.map((skill, i) => (
                <motion.div 
                  key={i}
                  className="soft-skill-card"
                  variants={itemVariants}
                  whileHover="hover"
                  variants={softSkillVariants}
                >
                  <div className="soft-skill-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <p className="soft-skill-name">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;