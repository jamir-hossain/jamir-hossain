import { Transition } from "@headlessui/react";
import React, { FC, ReactNode } from "react";
import SimpleBar from "simplebar-react";

interface Props {
  show: boolean;
  children: ReactNode;
}
const PageTransition: FC<Props> = ({ show, children }) => {
  return (
    <>
      <Transition
        show={show}
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
        className="hidden md:block absolute top-4 bottom-4 m-auto bg-gray-50 rounded-r-lg w-full"
      >
        <SimpleBar style={{ height: "100%" }}>{children}</SimpleBar>
      </Transition>
      <Transition
        show={show}
        enter=""
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave=""
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="block md:hidden bg-gray-50 w-full"
      >
        <SimpleBar style={{ height: "calc(100vh - 60px)" }}>
          {children}
        </SimpleBar>
      </Transition>
    </>
  );
};

export default PageTransition;
