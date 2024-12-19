import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({ title, image, liveLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live App
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

// Prop types for better error checking
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
