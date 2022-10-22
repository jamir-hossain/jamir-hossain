import { useRouter } from "next/router";
import React, { FC, useState, createContext, useEffect } from "react";

type AppContextType = {
  activeNav: string;
  navHandler: (nav: string) => void;
};
// ----------------------------------------------------------------------

const AppContext = createContext<AppContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const AppContextProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(router.asPath);

  const navHandler = (value: string) => {
    router.push(value);
    if (activeNav === value) {
      setActiveNav(value);
    } else {
      setActiveNav("");
      setTimeout(() => setActiveNav(value), 0);
    }
  };

  useEffect(() => {
    if (router.asPath === "/") {
      navHandler("/#about");
    }
  }, [router]);

  // useEffect(() => {
  //   window.onresize = displayWindowSize;
  //   window.onload = displayWindowSize;
  //   function displayWindowSize() {
  //     let myWidth = window.innerWidth;
  //     if (myWidth > 767) {
  //       const path = router.pathname.split("/");
  //       console.log(path);
  //       // navHandler(`/#${path[1]}`);
  //     } else {
  //       const asPath = router.asPath.split("#");
  //       console.log(asPath);
  //       // navHandler(router.asPath);
  //     }
  //   }
  // }, []);

  return (
    <AppContext.Provider
      value={{
        activeNav,
        navHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
