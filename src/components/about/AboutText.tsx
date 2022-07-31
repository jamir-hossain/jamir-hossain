import React, { FC } from "react";
import { DivProps } from "react-html-props";

const AboutText: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      <h5 className=" ">Hello! I’m Jamir Hossain</h5>
      <p className=" text-justify ">
        A Junior Full Stack Developer. Currently, I am learning many more about
        full-stack development and working with UI-Lib. I have been involved
        with programming to gain confidence and excellence using my potential in
        the field of “Web Development”, and to express my innovative creative
        skills for self and company growth.
      </p>
    </div>
  );
};

export default AboutText;
