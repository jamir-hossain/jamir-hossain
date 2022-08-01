import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import AboutSkills from "components/skills/AboutSkills";
import useApp from "hooks/useApp";
import React from "react";

const Skills = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#skills"}>
      <Breadcrumb title="Skills" />
      <AboutSkills />
    </PageTransition>
  );
};

export default Skills;
