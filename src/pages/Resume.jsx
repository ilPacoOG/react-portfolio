import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/public/resume.pdf" download className="download-resume">
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>CSS & HTML</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>PostgresQL</li>
        <li>Python</li>
      </ul>
    </section>
  );
};

export default Resume;
