import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to track active link
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // Get current route

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Text on the Left */}
        <div className="navbar-logo">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Navbar Links on the Right */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={location.pathname === "/project" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
