import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const About = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/"}>
      <h1>This is our about page</h1>
    </PageTransition>
  );
};

export default About;
