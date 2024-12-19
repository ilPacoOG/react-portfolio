import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path-to-image1.jpg',
      liveLink: 'https://example.com/project1',
      repoLink: 'https://github.com/raychorn/project1',
    },
    {
      title: 'Project 2',
      image: '/path-to-image2.jpg',
      liveLink: 'https://example.com/project2',
      repoLink: 'https://github.com/raychorn/project2',
    },
    // Add more projects here
  ];

  return (
    <section className='portfolio'>
      <h2>Portfolio</h2>
      <div className='projects'>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
