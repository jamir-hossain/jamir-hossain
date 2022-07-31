import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const Works = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#works"}>
      <Breadcrumb title="Works" />
      <h1>This is our works page</h1>
    </PageTransition>
  );
};

export default Works;
