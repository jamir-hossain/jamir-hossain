import useApp from "hooks/useApp";
import LoadingIcon from "icons/LoadingIcon";
import React from "react";

const Loading = () => {
  const { activeNav } = useApp();

  return (
    <>
      {activeNav === "/" && (
        <div className="hidden md:flex justify-center items-center absolute top-4 bottom-4 m-auto bg-gray-50 rounded-r-lg w-full ">
          <LoadingIcon />
        </div>
      )}
    </>
  );
};

export default Loading;
