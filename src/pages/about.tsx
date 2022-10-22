import React from "react";
import useApp from "hooks/useApp";
import Breadcrumb from "components/Breadcrumb";
import Education from "components/about/Education";
import AboutText from "components/about/AboutText";
import WorkingExperience from "components/about/WorkingExperience";

const About = () => {
  return (
    <div>
      <Breadcrumb title="About Me" />
      <div className="p-6">
        <AboutText />
        <WorkingExperience className="py-10" />
        <Education />
      </div>
    </div>
  );
};

export default About;
