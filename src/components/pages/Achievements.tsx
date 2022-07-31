import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const Achievements = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#achievements"}>
      <Breadcrumb title="Achievements" />
      <h1>This is our Achievements page</h1>
    </PageTransition>
  );
};

export default Achievements;
