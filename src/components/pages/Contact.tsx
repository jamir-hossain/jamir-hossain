import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React from "react";

const Contact = () => {
  const { activeNav } = useApp();
  return (
    <PageTransition show={activeNav === "/#contact"}>
      <Breadcrumb title="Contact" />
      <h1>This is our contact page</h1>
    </PageTransition>
  );
};

export default Contact;
