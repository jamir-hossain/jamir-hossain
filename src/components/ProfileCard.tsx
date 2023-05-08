import React from "react";
import Image from "next/image";
import useApp from "hooks/useApp";
import ReactTyped from "react-typed";
import SimpleBar from "simplebar-react";
import AwardIcon from "icons/AwardIcon";
import SocialLinks from "./SocialLinks";
import AppNavbar from "layout/AppNavbar";
import ThemeControl from "./ThemeControl";
import DownloadIcon from "icons/DownloadIcon";

const ProfileCard = () => {
  const { navHandler } = useApp();

  return (
    <div className="w-full h-full flex items-center">
      <Image
        width={420}
        height={540}
        src="/assets/jamir-hossain.png"
        alt="skills"
      />

      {/* <div className="absolute -bottom-4 left-0 w-full flex">
        <div
          className="w-full h-14 bg-white dark:bg-gray-800"
          style={{ rotate: "10deg", marginLeft: "-100px" }}
        ></div>
        <div
          className="w-full h-14 bg-white dark:bg-gray-800"
          style={{ rotate: "-10deg", marginRight: "-100px" }}
        ></div>
      </div> */}

      {/* <div className="text-center">
        <h4>Jamir Hossain</h4>
        <p className=" text-primary font-semibold ">
          <ReactTyped
            strings={["Programmer", "Jr. Full-Stack Developer"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </p>
      </div> */}

      {/* <SocialLinks />
      <ThemeControl /> */}

      {/* <div className="mt-2">
        <AppNavbar />
        <div className="border-t border-gray-300 dark:border-gray-600 flex items-center justify-between">
          <a
            className="nav-btn flex-row py-4"
            href="https://github.com/jamir-hossain/jamir-hossain/raw/main/cv.pdf"
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
      </div> */}
    </div>
  );
};

export default ProfileCard;
