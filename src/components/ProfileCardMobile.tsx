import Image from "next/image";
import React, { FC } from "react";
import SocialLinks from "./SocialLinks";
import { useRouter } from "next/router";
import AwardIcon from "icons/AwardIcon";
import DownloadIcon from "icons/DownloadIcon";

const ProfileCardMobile: FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-drop rounded-2xl overflow-hidden h-full flex flex-col justify-between ${className}`}
    >
      <div className="relative bg-gray-300 dark:bg-gray-700 pb-4 pt-6 overflow-hidden flex flex-col items-center justify-center">
        <Image
          width={240}
          height={240}
          src="/assets/profile.png"
          alt="skills"
        />

        <h4 className="text-center">Jamir Hossain</h4>
        <SocialLinks className="mt-3" />

        <div className="absolute -bottom-4 left-0 w-full flex">
          <div
            className="w-full h-14 bg-white dark:bg-gray-800"
            style={{ rotate: "10deg", marginLeft: "-100px" }}
          ></div>
          <div
            className="w-full h-14 bg-white dark:bg-gray-800"
            style={{ rotate: "-10deg", marginRight: "-100px" }}
          ></div>
        </div>
      </div>

      <div>
        <p className="text-justify text-sm px-4 pb-4">
          A Junior Full Stack Developer. Currently, I am learning many more
          about full-stack development and working with UI-Lib. I have been
          involved with programming to gain confidence and excellence using my
          potential in the field of “Web Development”, and to express my
          innovative creative skills for self and company growth.
        </p>

        <div className="border-t border-gray-300 dark:border-gray-600 flex items-center justify-between">
          <a
            className="nav-btn flex-row py-3 mx-0 px-0"
            href="https://github.com/jamir-hossain/jamir-hossain/raw/main/cv.pdf"
          >
            Download CV
            <DownloadIcon className="w-3 ml-2" />
          </a>
          <button
            onClick={() => router.push("/achievements")}
            className="nav-btn flex-row py-3 mx-0 px-0"
          >
            Achievements
            <AwardIcon className="w-3 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardMobile;
