import Image from "next/image";
import React, { FC } from "react";
import navList from "utils/nav-list";
import ReactTyped from "react-typed";
import { useRouter } from "next/router";
import MoreMenu from "components/MoreMenu";

const AppNavbarMobile = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-full z-50 sticky shadow-drop">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center">
          <Image
            width={36}
            height={36}
            alt="jamir-hossain"
            src="/assets/new-profile.jpg"
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
              onClick={() => router.push(`/${url}`)}
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
