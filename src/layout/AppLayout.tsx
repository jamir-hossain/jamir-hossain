import React, { FC, ReactNode } from "react";
import ProfileCard from "components/ProfileCard";
import Loading from "components/Loading";
import AppNavbarMobile from "./AppNavbarMobile";
import SimpleBar from "simplebar-react";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="block md:hidden">
        <AppNavbarMobile />
        <SimpleBar style={{ height: "calc(100vh - 95px)" }}>
          {children}
        </SimpleBar>
      </div>

      <div className="layout bg-gradient-to-r from-light-primary  to-light-secondary dark:from-dark-primary  dark:to-dark-secondary">
        <ul className="bg-bubbles">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <li key={item}></li>
          ))}
        </ul>

        <div className="absolute top-0 left-0 h-full w-full px-6 py-10 hidden md:flex justify-center items-center">
          <div className="container mx-auto md:max-h-[700px] h-full">
            <div className="hidden max-h-[700px] h-full md:grid grid-cols-1 md:grid-cols-3 overflow-hidden bg-gray-50 dark:bg-dark-400 rounded-2xl">
              <div className="md:col-span-1 relative z-50">
                <ProfileCard />
              </div>
              <div className="md:col-span-2 relative">
                <Loading />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
