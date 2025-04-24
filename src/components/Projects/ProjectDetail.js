import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './project.css';
import './projectDetail.css';
import Particle from '../Particle'; // Assuming this gives you the matching background
import ats1 from '../../Assets/Projects/ATS.PNG'; // sample images
import ats2 from '../../Assets/Projects/Capture.PNG';

function ProjectDetail() {
  const { title } = useParams();

  // Mock data (later fetch this dynamically or from navigation state)
  const projectData = {
    ATS: {
      images: [ats1, ats2],
      techStack: ['React', 'Spring Boot', 'MySQL', 'Bootstrap'],
      description:
        'A recruitment management tool for evaluating candidates, tracking applications, and generating insightful reports.',
      links: [
        { label: 'GitHub Repo', url: 'https://github.com/your-repo/ats' },
        { label: 'Live Demo', url: 'https://ats-demo.example.com' },
      ],
    },
    // add other projects here
  };

  const [currentImage, setCurrentImage] = useState(0);
  const data = projectData[title];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % data.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <div className="project-detail-container">
      <Particle />
      <div className="project-detail-card">
        <h1>{title}</h1>
        <div className="slideshow">
          <img src={data.images[currentImage]} alt={`${title} screenshot`} />
        </div>
        <p className="project-description">{data.description}</p>
        <h3>Tech Stack</h3>
        <ul className="tech-stack">
          {data.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <h3>Links</h3>
        <ul className="project-links">
          {data.links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;
