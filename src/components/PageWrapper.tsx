import SimpleBar from "simplebar-react";
import React, { FC, ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  show: boolean;
  className?: string;
  children: ReactNode;
}
const PageWrapper: FC<Props> = ({ show, className, children }) => {
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

      <div className={`${className} block md:hidden h-full overflow-auto`}>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
