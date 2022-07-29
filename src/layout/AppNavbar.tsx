import React from "react";
import useApp from "hooks/useApp";
import navList from "utils/nav-list";

const AppNavbar = () => {
  const { navHandler } = useApp();
  return (
    <div className="flex items-center justify-between">
      {navList.map((item) => {
        const { title, Icon, url } = item;
        return (
          <button
            key={title}
            onClick={() => navHandler(url.length > 0 ? `/#${url}` : "/")}
            className="flex flex-col items-center justify-center hover:fill-primary hover:text-primary hover:bg-gray-100 w-full rounded-md mx-1 py-1 transition duration-200"
          >
            <Icon className="w-5 mr-1 " />
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default AppNavbar;
