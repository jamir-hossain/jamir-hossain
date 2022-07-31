import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const Skills = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#skills"}>
      <Breadcrumb title="Skills" />
      <h1>This is our skills page</h1>
    </PageTransition>
  );
};

export default Skills;
