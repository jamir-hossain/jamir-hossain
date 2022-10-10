import AboutText from "components/about/AboutText";
import Education from "components/about/Education";
import WorkingExperience from "components/about/WorkingExperience";
import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import useApp from "hooks/useApp";
import React from "react";

const About = () => {
  const { activeNav } = useApp();
  return (
    <>
      <PageWrapper
        className="about mb-[60px]"
        show={activeNav === "/" || activeNav === "/#about"}
      >
        <Breadcrumb title="About Me" />
        <div className="p-6">
          <AboutText />
          <WorkingExperience className="py-10" />
          <Education />
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
