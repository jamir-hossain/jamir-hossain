import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import useApp from "hooks/useApp";
import React from "react";

const Achievements = () => {
  const { activeNav } = useApp();
  return (
    <PageWrapper className="achievements" show={activeNav === "/#achievements"}>
      <Breadcrumb title="Achievements" />
      <h1>This is our Achievements page</h1>
    </PageWrapper>
  );
};

export default Achievements;
