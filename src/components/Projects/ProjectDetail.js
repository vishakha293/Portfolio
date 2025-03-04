import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { title } = useParams();

  return (
    <div className="project-detail">
      <h1>{title} Project Details</h1>
      <p>More details about {title} will go here.</p>
    </div>
  );
}

export default ProjectDetail;