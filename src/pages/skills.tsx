import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import AboutSkills from "components/skills/AboutSkills";
import useApp from "hooks/useApp";
import React from "react";

const Skills = () => {
  const { activeNav } = useApp();
  return (
    <div>
      <Breadcrumb title="Skills" />
      <AboutSkills className="px-6" />
    </div>
  );
};

export default Skills;
