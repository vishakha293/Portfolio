import React, { useState } from "react";

function ProjectCards({ imgPath, title, description }) {
  return (
    <div className="project-card">
      <img src={imgPath} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
