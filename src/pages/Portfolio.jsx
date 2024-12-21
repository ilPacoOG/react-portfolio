import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-image1.jpg',
      liveLink: 'https://example.com/project1',
      repoLink: 'https://github.com/yourusername/project1',
      bubbleStyle: 'speech', // Ensure the "speech" style is used
    },
    {
      title: 'Project 2',
      image: '/path-to-image2.jpg',
      liveLink: 'https://example.com/project2',
      repoLink: 'https://github.com/yourusername/project2',
      bubbleStyle: 'speech', // Apply the "speech" style here as well
    },
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
