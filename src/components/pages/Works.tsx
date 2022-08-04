import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import ProjectCard from "components/works/ProjectCard";
import useApp from "hooks/useApp";
import React from "react";
import { ProjectType } from "types/common";
import worksData from "utils/works-data";

const Works = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#works"}>
      <Breadcrumb title="Works" />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
          {worksData.map((item) => (
            <div key={item.id} className="md:col-span-6 z-50">
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Works;
