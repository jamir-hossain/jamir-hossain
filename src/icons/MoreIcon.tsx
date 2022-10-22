import React from "react";
import { SVGProps } from "react-html-props";

const MoreIcon = (props: SVGProps) => {
  return (
    <svg fill="currentColor" viewBox="0 0 128 512" {...props}>
      <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
    </svg>
  );
};

export default MoreIcon;
