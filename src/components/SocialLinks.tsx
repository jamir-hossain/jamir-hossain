import React, { FC } from "react";
import NextLink from "./NextLink";
import GithubIcon from "icons/GithubIcon";
import LinkedInIcon from "icons/LinkedInIcon";
import FacebookIcon from "icons/FacebookIcon";

const SocialLinks: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center mt-4 mb-6 ${className}`}>
      <NextLink href="#" className="mx-[6px]">
        <GithubIcon className="w-[22px] h-[22px] dark:fill-white" />
      </NextLink>
      <NextLink href="#" className="mx-[6px]">
        <LinkedInIcon className="w-[22px] h-[22px] dark:fill-white" />
      </NextLink>
      <NextLink href="#" className="mx-[6px]">
        <FacebookIcon className="w-[22px] h-[22px] dark:fill-white" />
      </NextLink>
    </div>
  );
};

export default SocialLinks;
