import React, { FC } from "react";

interface Props {
  first: string;
  last?: string;
}
const Breadcrumb: FC<Props> = ({ first, last = "" }) => {
  return (
    // <div className="border-b border-gray-300 dark:border-gray-500 p-4 pb-10">
    //   <h4 className="relative px-2">
    //     <div className="w-7 h-7 bg-gray-200 dark:bg-gray-800 rounded-full absolute top-0 left-0 whitespace-nowrap pl-2">
    //       <span className="text-primary">{title.slice(0, 1)}</span>
    //       <span>{title.slice(1)}</span>
    //     </div>
    //   </h4>
    // </div>
    <div className="relative">
      <h1 className="uppercase pt-9">
        <span className="text-primary font-bold">{first} </span>
        {last}
      </h1>
      <div className="absolute top-0 left-0 w-full h-[200px] bg-[url('/assets/bg/home-bg-light.png')] dark:bg-[url('/assets/bg/home-bg-dark.png')] bg-contain bg-top bg-no-repeat"></div>
    </div>
  );
};

export default Breadcrumb;
