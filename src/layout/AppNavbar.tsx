import React, { FC } from "react";
import useApp from "hooks/useApp";
import navList from "utils/nav-list";
import { DivProps } from "react-html-props";
import { scrollToSection } from "utils/utils";

interface Props extends DivProps {
  className?: string;
}

const AppNavbar: FC<Props> = ({ className, ...props }) => {
  const { navHandler } = useApp();

  const routeHandler = (url: string) => {
    navHandler(`/#${url}`);
    scrollToSection(url);
  };

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
            onClick={() => routeHandler(url)}
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
