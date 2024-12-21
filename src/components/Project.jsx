import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({ title, image, liveLink, repoLink, bubbleStyle }) => {
  return (
    <div className="project">
      <div className={`speech-bubble ${bubbleStyle}`}>
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
      <img src={image} alt={title} className="project-image" />
    </div>
  );
};

// Prop types for better error checking
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  bubbleStyle: PropTypes.oneOf(['speech', 'whisper', 'electric']),
};

Project.defaultProps = {
  bubbleStyle: 'speech',
};

export default Project;
