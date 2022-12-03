import useApp from "hooks/useApp";
import React, { useState } from "react";
import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import ContactForm from "components/ContactForm";

const Contact = () => {
  const { activeNav } = useApp();

  return (
    <PageWrapper className="contact mb-[10px]" show={activeNav === "/#contact"}>
      <Breadcrumb title="Contact" />
      <ContactForm />
    </PageWrapper>
  );
};

export default Contact;
