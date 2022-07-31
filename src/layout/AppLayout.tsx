import React, { FC, ReactNode } from "react";
import ProfileCard from "components/ProfileCard";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <ul className="bg-bubbles">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <li key={item}></li>
        ))}
      </ul>
      <div className="absolute top-0 left-0 h-full w-full px-6 py-10 flex justify-center items-center ">
        <div
          className="container mx-auto overflow-hidden"
          style={{ maxHeight: "700px", height: "100%" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-8"
            style={{ maxHeight: "700px", height: "100%" }}
          >
            <div className="md:col-span-3 z-50">
              <ProfileCard />
            </div>
            <div className="relative md:col-span-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
