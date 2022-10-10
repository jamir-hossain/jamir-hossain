import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import AboutSkills from "components/skills/AboutSkills";
import useApp from "hooks/useApp";
import React from "react";

const Skills = () => {
  const { activeNav } = useApp();
  return (
    <PageWrapper className="skills mb-[60px]" show={activeNav === "/#skills"}>
      <Breadcrumb title="Skills" />
      <AboutSkills className="px-6" />
    </PageWrapper>
  );
};

export default Skills;
