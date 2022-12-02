import React from "react";
import AppNavbar from "layout/AppNavbar";
import useApp from "hooks/useApp";
import DownloadIcon from "icons/DownloadIcon";
import AwardIcon from "icons/AwardIcon";
import Image from "next/image";
import ReactTyped from "react-typed";
import SimpleBar from "simplebar-react";
import ThemeControl from "./ThemeControl";
import GithubIcon from "icons/GithubIcon";
import LinkedInIcon from "icons/LinkedInIcon";
import FacebookIcon from "icons/FacebookIcon";
import NextLink from "./NextLink";

const ProfileCard = () => {
  const { navHandler } = useApp();

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-dark-400 shadow-drop rounded-2xl overflow-hidden">
      <SimpleBar className="h-full flex flex-col justify-between">
        <div className="relative bg-gray-300 dark:bg-gray-700 pb-8 pt-6 overflow-hidden flex flex-col items-center justify-center">
          <Image
            width={340}
            height={340}
            src="/assets/profile.png"
            alt="skills"
          />

          <div className="absolute -bottom-4 left-0 w-full flex">
            <div
              className="w-full h-14 bg-white dark:bg-dark-400"
              style={{ rotate: "10deg", marginLeft: "-100px" }}
            ></div>
            <div
              className="w-full h-14 bg-white dark:bg-dark-400"
              style={{ rotate: "-10deg", marginRight: "-100px" }}
            ></div>
          </div>

          <div className="text-center">
            <h4>Jamir Hossain</h4>
            <p className=" text-primary font-semibold ">
              <ReactTyped
                strings={["Programmer", "Jr. Full-Stack Developer"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </p>
          </div>

          <div className="flex items-center mt-4 mb-6">
            <NextLink href="#" className="mx-[6px]">
              <GithubIcon className="w-[22px] h-[22px]" />
            </NextLink>
            <NextLink href="#" className="mx-[6px]">
              <LinkedInIcon className="w-[22px] h-[22px]" />
            </NextLink>
            <NextLink href="#" className="mx-[6px]">
              <FacebookIcon className="w-[22px] h-[22px]" />
            </NextLink>
          </div>

          <ThemeControl />
        </div>

        <div>
          <AppNavbar />
          <div className="border-t border-gray-300 flex items-center justify-between">
            <a
              className="nav-btn flex-row py-4"
              href="https://drive.google.com/u/0/uc?id=1zLtIYYqj0SSBS63-F1WW5QlzK14X0kn7&export=download"
            >
              Download CV
              <DownloadIcon className="w-3 ml-2" />
            </a>
            <button
              onClick={() => navHandler("/#achievements")}
              className="nav-btn flex-row py-4"
            >
              Achievements
              <AwardIcon className="w-3 ml-2" />
            </button>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default ProfileCard;
