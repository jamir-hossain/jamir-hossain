import React, { FC, ReactNode } from "react";
import { ButtonProps } from "react-html-props";

interface Props extends ButtonProps {
  children: ReactNode;
  className?: string;
}
const PrimaryIconButton: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-white bg-primary hover:bg-primary-light w-10 h-10 rounded-full flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryIconButton;
