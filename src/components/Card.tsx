import React, { FC, ReactNode } from "react";
import { DivProps } from "react-html-props";

interface Props extends DivProps {
  children: ReactNode;
  className?: string;
}
const Card: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-md bg-white shadow-drop ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
