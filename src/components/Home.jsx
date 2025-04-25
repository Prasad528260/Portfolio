import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello! I'm Prasad Subhedar";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="home">
      <div className="particles-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="home-container">
        {/* Left column: Image */}
 
        <div className="home-image">
          <div className="image-wrapper">
            <img src="./image1.jpg" alt="Prasad Subhedar" />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Full Stack Developer</span>
                <span className="overlay-text">UI/UX Enthusiast</span>
                <span className="overlay-text">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right column: Text */}
        <div className="home-text">
          <h1 className="title">
            {displayText}
            <span className={`cursor ${showCursor ? "visible" : ""}`}>|</span>
          </h1>
          <p className="description">
            A passionate developer crafting seamless web applications. I thrive
            on solving complex challenges and designing intuitive, user-friendly
            interfaces. My expertise spans JavaScript, React, Node.js, and
            beyond. Dive into my world of code and creativity!
          </p>
          <div className="button-group">
            <Link to="/About">
              <button className="contact-btn">
                <span>About Me</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
            <a href="#profiles" className="secondary-btn">
              My Coding Profiles ↓
            </a>
          </div>

          <div className="tech-stack">
            <span>Tech Stack:</span>
            <div className="tech-icons">
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-git-plain colored"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Coding Profiles Section */}
      <div className="profiles-section" id="profiles">
        <h2 className="profiles-title">
          <span>Coding</span>
          <span className="highlight">Profiles</span>
        </h2>
        <p className="profiles-subtitle">
          Where I challenge myself and contribute to the community
        </p>
        <div className="profiles-container">
          <div className="profile-card">
            <div className="card-icon">
              <img
                src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                alt="LeetCode"
              />
            </div>
            <div className="card-content">
              <h3>LeetCode</h3>
              <p>Explore my problem-solving journey </p>
              <div className="stats"></div>
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="card-btn">
                  Visit Profile
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-icon">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
              />
            </div>
            <div className="card-content">
              <h3>GitHub</h3>
              <p>Check out my open-source projects and contributions.</p>
              <div className="stats"></div>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="card-btn">
                  Visit Profile
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
                alt="HackerRank"
              />
            </div>
            <div className="card-content">
              <h3>HackerRank</h3>
              <p>View my coding challenges and certifications.</p>
              <div className="stats"></div>
              <a
                href="https://www.hackerrank.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="card-btn">
                  Visit Profile
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
