import React, { FC } from "react";

interface Props {
  title: string;
}
const Breadcrumb: FC<Props> = ({ title }) => {
  return (
    <div className="border-b border-gray-300 p-4">
      <h4 className="relative px-2">
        <span className="text-primary">{title.slice(0, 1)}</span>
        <span>{title.slice(1)}</span>
        <div className=" w-7 h-7 bg-gray-100 rounded-full absolute top-0 left-0 -z-50"></div>
      </h4>
    </div>
  );
};

export default Breadcrumb;
