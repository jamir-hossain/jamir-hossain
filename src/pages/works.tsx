import React from "react";
import worksData from "utils/works-data";
import ProjectCard from "components/works/ProjectCard";

const Works = () => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
        {worksData.map((item) => (
          <div key={item.id} className="md:col-span-1">
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
