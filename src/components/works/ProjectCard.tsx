import React, { FC } from "react";
import { ProjectType } from "types/common";

const ProjectCard: FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="shadow-drop bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-full">
      <div
        className="group relative h-[260px] bg-cover"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        <a
          href={project.live_url}
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200 flex items-end justify-center pb-4"
          style={{ background: "linear-gradient(180deg,#020024 0%,rgba(9,9,121,0) 0%,rgba(0,0,0,.517244) 80%,rgba(0,0,0,.872987) 100%)" }}
        ></a>
      </div>
      <div className="py-2 px-4 border-t border-gray-100">
        <h5 className="mb-2">{project.name}</h5>
        <p>{project.title}</p>

        <div className="flex items-center flex-wrap mb-2 mt-4">
          {project.technologies.map((item) => (
            <span
              key={item}
              className="bg-gray-100 dark:bg-dark-400 text-gray-900 dark:text-white px-2 py-1 text-xs rounded-[3px] m-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
