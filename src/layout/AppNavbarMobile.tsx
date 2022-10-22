import React, { FC, useEffect, useState } from "react";
import useApp from "hooks/useApp";
import navList from "utils/nav-list";
import { DivProps } from "react-html-props";
import { scrollToSection } from "utils/utils";
import ReactTyped from "react-typed";
import Image from "next/image";
import AppNavbar from "./AppNavbar";
import { useRouter } from "next/router";
import MoreMenu from "components/MoreMenu";
import CodeIcon from "icons/CodeIcon";
import MoreIcon from "icons/MoreIcon";

interface Props extends DivProps {
  className?: string;
}

const AppNavbarMobile: FC<Props> = ({ className, ...props }) => {
  const { navHandler } = useApp();
  const router = useRouter();

  const routeHandler = (url: string) => {
    router.push(`/${url}`);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className="bg-white w-full z-50 sticky shadow-drop">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center">
          <Image
            width={36}
            height={36}
            alt="profile"
            src="/assets/new-profile.JPG"
            className="rounded-full"
          />
          <div className="pl-2">
            <h6>Jamir Hossain</h6>
            <p className=" text-primary text-xs ">
              <ReactTyped
                strings={["Programmer", "Junior Full-Stack Developer"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </p>
          </div>
        </div>
        <MoreMenu />
      </div>
      <div className="flex items-center justify-between">
        {navList.map((item) => {
          const { title, Icon, url } = item;
          return (
            <button
              key={title}
              onClick={() => routeHandler(url)}
              className="nav-btn hover:bg-gray-100"
            >
              <Icon className="w-5 mr-1 " />
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppNavbarMobile;
