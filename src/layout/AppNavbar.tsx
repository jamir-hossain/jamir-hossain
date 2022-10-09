import React, { FC } from "react";
import useApp from "hooks/useApp";
import navList from "utils/nav-list";
import { DivProps } from "react-html-props";

interface Props extends DivProps {
  className?: string;
}

const AppNavbar: FC<Props> = ({ className, ...props }) => {
  const { navHandler } = useApp();

  return (
    <div
      className={`flex items-center justify-between ${className}`}
      {...props}
    >
      {navList.map((item) => {
        const { title, Icon, url } = item;
        return (
          <button
            key={title}
            onClick={() => navHandler(url.length > 0 ? `/#${url}` : "/")}
            className="nav-btn hover:bg-gray-100"
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
