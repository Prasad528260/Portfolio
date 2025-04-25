import React, { useEffect } from "react";
import "./Timeline.css";

const timelineData = [
  {
    date: "2010",
    title: "Tilak Nagar Vidyamandir High School",
    description: "Completed my schooling with a focus on science and mathematics.",
    position: "left",
    bgColor: "rgba(255, 255, 255, 0.1)",
    icon: "🏫",
  },
  {
    date: "2016",
    title: "Royal International College",
    description: "Pursued my higher secondary education specializing in science.",
    position: "right",
    bgColor: "rgba(0, 174, 255, 0.1)",
    icon: "🎓",
  },
  {
    date: "2020",
    title: "Don Bosco Institute of Technology",
    description: "Graduated with a Bachelor's degree in Computer Science and Engineering.",
    position: "left",
    bgColor: "rgba(255, 165, 0, 0.1)",
    icon: "👨‍💻",
  }
];

const Timeline = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".timeline-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <div className="particles-background">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1
          }} />
        ))}
      </div>
      
      <h1 className="timeline-title">
        <span className="title-gradient">My Educational Journey</span>
      </h1>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.position}`}
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="timeline-dot">
              <div className="dot-pulse"></div>
              <div className="timeline-icon">{item.icon}</div>
            </div>
            <div className="timeline-content" style={{ backgroundColor: item.bgColor }}>
              <div className="content-inner">
                <h2 className="timeline-heading">
                  <span className="heading-highlight">{item.title}</span>
                </h2>
                <p className="timeline-description">{item.description}</p>
                <span className="timeline-date">{item.date}</span>
              </div>
              <div className="content-decoration"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;