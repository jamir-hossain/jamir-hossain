import React, { useState } from "react";
import Image from "next/image";
import useApp from "hooks/useApp";
import ReactTyped from "react-typed";
import SimpleBar from "simplebar-react";
import AwardIcon from "icons/AwardIcon";
import SocialLinks from "./SocialLinks";
import AppNavbar from "layout/AppNavbar";
import ThemeControl from "./ThemeControl";
import DownloadIcon from "icons/DownloadIcon";
import Home from "icons/Home";
import About from "icons/About";
import Portfolio from "icons/Portfolio";
import Contact from "icons/Contact";
import Link from "next/link";

const ProfileCard = () => {
  const { navHandler } = useApp();
  const [activeNav, setActiveNav] = useState<String>("");

  const isActive = (item: string): string => {
    return activeNav === item ? "opacity-100" : "opacity-0";
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="relative">
        <Image
          width={420}
          height={540}
          src="/assets/jamir-hossain.png"
          alt="skills"
        />
        <div className="w-[160px] flex flex-col absolute z-10 top-1/2 -right-[104px] transform -translate-y-1/2">
          {navItems.map((item, index) => (
            <Link href={`#${item.href}`} key={index}>
              <div className="relative group my-2 w-9 h-9 hover:w-full rounded-full overflow-hidden hover:overflow-x-auto cursor-pointer flex items-center">
                <div className="absolute z-10 top-0 left-0 w-9 h-9 flex justify-center items-center bg-primary rounded-full">
                  <item.Icon className="w-3.5 h-3.5 text-gray-800" />
                </div>
                <span className="opacity-100 group-hover:opacity-100 transition-all duration-300 pl-12 pr-4 py-1.5 rounded-full bg-primary-light text-gray-800">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

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

const navItems = [
  { title: "Home", href: "home", Icon: Home },
  { title: "About", href: "about", Icon: About },
  { title: "Portfolio", href: "portfolio", Icon: Portfolio },
  { title: "Contact", href: "contact", Icon: Contact },
];

export default ProfileCard;
