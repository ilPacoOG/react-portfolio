import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Google Books Search Engine',
      // image: '/path-to-image1.jpg',
      liveLink: 'https://book-search-engine-d40d.onrender.com',
      repoLink: 'https://github.com/ilPacoOG/book-search-engine',
      bubbleStyle: 'speech', // Ensure the "speech" style is used
    },
    {
      title: (<>
        Flippity Flippin AI - <br /> Flashcard App with AI
      </>),
      // image: '/path-to-image2.jpg',
      // liveLink: 'https://example.com/project2',
      repoLink: 'https://github.com/ilPacoOG/flippity-flippinAI',
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
