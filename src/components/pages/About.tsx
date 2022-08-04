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
      <div className="p-6">
        <AboutText />
        <WorkingExperience className="py-10" />
        <Education />
      </div>
    </PageTransition>
  );
};

export default About;
