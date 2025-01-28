import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="card p-3" style={{ width: "18rem" }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} className="btn btn-primary">View Project</a>
    </div>
  );
};

export default ProjectCard;
