import AboutText from "components/about/AboutText";
import Education from "components/about/Education";
import WorkingExperience from "components/about/WorkingExperience";
import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const About = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/"}>
      <Breadcrumb title="About Me" />
      <AboutText />
      <WorkingExperience />
      <Education />
    </PageTransition>
  );
};

export default About;
