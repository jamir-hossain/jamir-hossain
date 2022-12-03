import React from "react";
import Image from "next/image";
import AwardIcon from "icons/AwardIcon";
import { useRouter } from "next/router";
import DownloadIcon from "icons/DownloadIcon";
import Breadcrumb from "components/Breadcrumb";
import Education from "components/about/Education";
import AboutText from "components/about/AboutText";
import WorkingExperience from "components/about/WorkingExperience";
import SocialLinks from "components/SocialLinks";
import ProfileCardMobile from "components/ProfileCardMobile";

const About = () => {
  const router = useRouter();

  return (
    <div className="px-4 py-6">
      <ProfileCardMobile className="block md:hidden" />
      <WorkingExperience className="py-10" />
      <Education />
    </div>
  );
};

export default About;
