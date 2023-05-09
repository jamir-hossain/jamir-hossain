import React from "react";
import { SVGProps } from "react-html-props";

const About = (props: SVGProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 6.99996C8.65703 6.99996 10 5.69429 10 4.08329C10 2.47229 8.65703 1.16663 7 1.16663C5.34297 1.16663 4 2.47229 4 4.08329C4 5.69429 5.34297 6.99996 7 6.99996ZM5.92891 8.09371C3.62031 8.09371 1.75 9.91207 1.75 12.1565C1.75 12.5302 2.06172 12.8333 2.44609 12.8333H11.5539C11.9383 12.8333 12.25 12.5302 12.25 12.1565C12.25 9.91207 10.3797 8.09371 8.07109 8.09371H5.92891Z"
        fill="#1F2937"
      />
    </svg>
  );
};

export default About;
