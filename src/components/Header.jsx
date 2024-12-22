import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
          src="/src/assets/images/michael.png"
          alt="Michael Fleming"
          className="header-michael"
        />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">
            <img
              src="/src/assets/images/aboutme.png"
              alt="About Me"
              className={`nav-aboutme ${animated.aboutme ? "animate" : ""}`}
              onClick={() => handleAnimation("aboutme")}
            />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <img
              src="/src/assets/images/portfolio.png"
              alt="Portfolio"
              className={`nav-portfolio ${animated.portfolio ? "animate" : ""}`}
              onClick={() => handleAnimation("portfolio")}
            />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              src="/src/assets/images/contact.png"
              alt="Contact"
              className={`nav-contact ${animated.contact ? "animate" : ""}`}
              onClick={() => handleAnimation("contact")}
            />
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <img
              src="/src/assets/images/resume.png"
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
