import React, { FC, ReactNode } from "react";
import ProfileCard from "components/ProfileCard";
import AppNavbar from "./AppNavbar";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="block md:hidden">
        <AppNavbar className="bg-white fixed w-full z-50" />
        <div>{children}</div>
      </div>
      <div className="layout">
        <ul className="bg-bubbles">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <li key={item}></li>
          ))}
        </ul>

        <div className="absolute top-0 left-0 h-full w-full px-6 py-10 hidden md:flex justify-center items-center">
          <div className="container mx-auto md:max-h-[700px] h-full">
            <div className="hidden max-h-[700px] h-full md:grid grid-cols-1 md:grid-cols-8 overflow-hidden">
              <div className="md:col-span-3 z-50">
                <ProfileCard />
              </div>
              <div className="relative md:col-span-5">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
