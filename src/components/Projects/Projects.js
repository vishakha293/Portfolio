import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useNavigate } from "react-router-dom";
import './project.css';

import ats from "../../Assets/Projects/ATS.PNG";
import KonarkPro from "../../Assets/Projects/KonarkPro.PNG";
import HPBoard from "../../Assets/Projects/HpTechBoard.PNG";
import YEIDA from "../../Assets/Projects/YEIDA.PNG";
import Heffernan from "../../Assets/Projects/Heffernan.PNG";
import IGRS from "../../Assets/Projects/IGRS.PNG";

const projects = [
  { imgPath: ats, title: 'ATS', description: 'ATS Project' },
  { imgPath: KonarkPro, title: 'Konark', description: 'Konark Project' },
  { imgPath: Heffernan, title: 'Heffernan', description: 'Heffernan Project' },
  { imgPath: IGRS, title: 'IGRS', description: 'IGRS Project' },
  { imgPath: YEIDA, title: 'YEIDA', description: 'YEIDA Project' },
  { imgPath: HPBoard, title: 'HPBoard', description: 'HPBoard Project' }
];

function Projects() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid-item ${index === (hoveredIndex !== null ? hoveredIndex : activeIndex) ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/project/${project.title}`)}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
