import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Import images
import michaelImage from "/src/assets/images/michael.png";
import aboutMeImage from "/src/assets/images/aboutme.png";
import portfolioImage from "/src/assets/images/portfolio.png";
import contactImage from "/src/assets/images/contact.png";
import resumeImage from "/src/assets/images/resume.png";

const Header = () => {
  const [animated, setAnimated] = useState({
    aboutme: false,
    portfolio: false,
    contact: false,
    resume: false,
  });

  const handleAnimation = (key) => {
    setAnimated((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setAnimated((prev) => ({ ...prev, [key]: false })), 500); // Reset after animation
  };

  return (
    <header className="header">
      <div className="header-michael">
        <img
          src={michaelImage} // Updated to use the imported image
          alt="Michael Fleming"
          className="header-michael"
        />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">
            <img
              src={aboutMeImage} // Updated to use the imported image
              alt="About Me"
              className={`nav-aboutme ${animated.aboutme ? "animate" : ""}`}
              onClick={() => handleAnimation("aboutme")}
            />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <img
              src={portfolioImage} // Updated to use the imported image
              alt="Portfolio"
              className={`nav-portfolio ${animated.portfolio ? "animate" : ""}`}
              onClick={() => handleAnimation("portfolio")}
            />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              src={contactImage} // Updated to use the imported image
              alt="Contact"
              className={`nav-contact ${animated.contact ? "animate" : ""}`}
              onClick={() => handleAnimation("contact")}
            />
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <img
              src={resumeImage} // Updated to use the imported image
              alt="Resume"
              className={`nav-resume ${animated.resume ? "animate" : ""}`}
              onClick={() => handleAnimation("resume")}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
