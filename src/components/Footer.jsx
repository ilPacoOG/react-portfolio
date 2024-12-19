import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} Your Name. Built with React.
    </p>
    <div className="footer-links">
      <a href="https://github.com/ilPacoOG" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/michael-fleming-7b43402ba/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
