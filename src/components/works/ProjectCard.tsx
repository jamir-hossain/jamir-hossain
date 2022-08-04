import React, { FC } from "react";
import { ProjectType } from "types/common";

const ProjectCard: FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="border border-gray-300 rounded-lg">
      <h1>Project Image</h1>
      <div className="py-2 px-4 border-t border-gray-100">
        <h5>{project.name}</h5>
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
