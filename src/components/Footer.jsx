// In your Home.jsx or a separate Footer.jsx component

import React from 'react';
import './footer.css'; // If you want to style the footer separately

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Prasad. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
