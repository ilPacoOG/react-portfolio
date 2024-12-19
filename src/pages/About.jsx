import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <img
        src="/assets/profile-pic.jpg" // Replace with your image path
        alt="Your Name"
        className="profile-pic"
      />
      <h2>About Me</h2>
      <p>
        Hi, I'm [Your Name], a passionate web developer with experience in
        creating responsive, user-friendly web applications using React, JavaScript,
        and modern front-end technologies.
      </p>
    </section>
  );
};

export default About;
