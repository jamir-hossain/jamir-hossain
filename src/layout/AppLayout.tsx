import Card from "components/Card";
import React, { FC, ReactNode, useState } from "react";

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
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
