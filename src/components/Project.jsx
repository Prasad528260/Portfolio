import React, { useEffect, useRef } from "react";
import "./project.css";
// Import images directly
import cookbookImage from "../assets/images/Screenshot 2024-12-29 131047.png";
import speedoTypeImage from "../assets/images/Screenshot 2025-03-25 220100.png";
// Import your airbnb image similarly if you have one

const Project = () => {
  const projects = [
    {
      title: "Cookbook Corner",
      description:
        "A food recipe website for travelers exploring regional cuisines and popular dishes.",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: cookbookImage, // Use imported image
      demoLink: "https://speedotype04052005.web.app/",
      repoLink: "https://github.com/Prasad528260/Portfolio",
      accentColor: "#FF9E5E" // Orange accent
    },
    {
      title: "SpeedoType",
      description:
        "An engaging platform to test and boost your typing speed with real-time tracking.",
      techStack: ["React", "JavaScript", "CSS", "Framer Motion"],
      image: speedoTypeImage, // Use imported image
      demoLink: "https://speedotype04052005.web.app/",
      repoLink: "https://github.com/Prasad528260/speedotype",
      accentColor: "#5E8BFF" // Blue accent
    },
    {
      title: "AirBnB",
      description:
        "A platform where you can book stay locations",
      techStack: ["ejs", "JavaScript", "tailwind", "Express js"],
      image: speedoTypeImage, // Update this with your airbnb image import
      demoLink: "https://airbnb-5idb.onrender.com ",
      repoLink: "https://github.com/Prasad528260/AirBnB",
      accentColor: "#34D399 " // Blue accent
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container" ref={containerRef}>
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            <p>My recent work</p>
            <span className="subtitle-line"></span>
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              style={{ '--accent-color': project.accentColor }}
            >
              <div className="project-card-inner">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link demo"
                        aria-label={`View ${project.title} demo`}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        Live Demo
                      </a>
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link code"
                        aria-label={`View ${project.title} source code`}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                        Source Code
                      </a>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span 
                        className="tech" 
                        key={i}
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          borderColor: project.accentColor,
                          color: project.accentColor
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;