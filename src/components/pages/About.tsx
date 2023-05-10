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
    <PageWrapper className="about" show={activeNav === "/#about"}>
      <Breadcrumb first="I’M Jamir" last="Hossian" />
      <div className="p-6">
        <AboutText />
        <WorkingExperience className="py-10" />
        <Education />
      </div>
    </PageWrapper>
  );
};

export default About;
