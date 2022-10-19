import React from "react";
import useApp from "hooks/useApp";
import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import Education from "components/about/Education";
import AboutText from "components/about/AboutText";
import WorkingExperience from "components/about/WorkingExperience";

const About = () => {
  const { activeNav } = useApp();

  return (
    <>
      <PageWrapper
        className="about mb-[10px] pt-[50px]"
        show={activeNav === "/#about"}
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
