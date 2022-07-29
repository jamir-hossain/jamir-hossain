import { Transition } from "@headlessui/react";
import React, { FC, ReactNode } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}
const PageTransition: FC<Props> = ({ show, children }) => {
  return (
    <Transition
      show={show}
      enter="transition ease-in-out duration-1000 transform"
      enterFrom="-translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transition ease-in-out duration-1000 transform"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="-translate-x-full opacity-0"
      className="absolute top-4 bottom-4 m-auto bg-white rounded-r-lg w-full"
    >
      {children}
    </Transition>
  );
};

export default PageTransition;
