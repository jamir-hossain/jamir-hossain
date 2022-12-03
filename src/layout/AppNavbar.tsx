import React, { FC } from "react";
import useApp from "hooks/useApp";
import navList from "utils/nav-list";
import { DivProps } from "react-html-props";
import { scrollToSection } from "utils/utils";
import { useRouter } from "next/router";

interface Props extends DivProps {
  className?: string;
}

const AppNavbar: FC<Props> = ({ className, ...props }) => {
  const router = useRouter();
  const { navHandler } = useApp();

  const routeHandler = (url: string) => {
    navHandler(`/#${url}`);
    scrollToSection(url);
  };

  const activeNav = (route: string) => {
    if (router.asPath === route) {
      return "text-primary";
    }
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
            className={`nav-btn ${activeNav(`/#${url}`)}`}
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
