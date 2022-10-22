import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import ProjectCard from "components/works/ProjectCard";
import useApp from "hooks/useApp";
import React from "react";
import worksData from "utils/works-data";

const Works = () => {
  const { activeNav } = useApp();
  return (
    <div>
      <Breadcrumb title="Works" />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
          {worksData.map((item) => (
            <div key={item.id} className="md:col-span-1">
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
