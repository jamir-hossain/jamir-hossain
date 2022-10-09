import React, { FC, ReactNode } from "react";
import { DivProps } from "react-html-props";

interface Props extends DivProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const PrimaryTooltip: FC<Props> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={`[&>span]:hover:visible [&>span]:hover:opacity-100 relative ${className}`}
    >
      {children}
      <span
        className="invisible opacity-0 hover:hidden absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 text-xs rounded-[3px] whitespace-nowrap transition-all duration-200 after:content-[' '] after:w-3 after:h-3 after:bg-primary after:rotate-45 after:absolute after:-bottom-[6px] after:left-0 after:right-0 after:mx-auto"
        {...props}
      >
        {title}
      </span>
    </label>
  );
};

export default PrimaryTooltip;
