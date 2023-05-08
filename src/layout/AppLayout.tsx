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

      <div className="layout bg-light dark:bg-dark">
        <ul className="bg-bubbles">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <li key={item}></li>
          ))}
        </ul>

        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="md:col-span-4">
              <ProfileCard />
            </div>
            <div className="md:col-span-8 pt-[100px]">
              <Loading />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
