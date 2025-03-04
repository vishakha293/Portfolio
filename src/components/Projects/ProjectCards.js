import React, { useState } from "react";

function ProjectCards({ imgPath, title, description }) {
  return (
    <div className="project-card">
       {console.log(`Rendered project: ${imgPath}`)}
      <img src={imgPath} alt={title} className="project-image"  />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCards;
