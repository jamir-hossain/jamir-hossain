import Image from "next/image";
import React, { FC } from "react";
import { DivProps } from "react-html-props";

const AboutText: FC<DivProps> = (props) => {
  return (
    <div
      {...props}
      className="flex flex-col-reverse md:grid md:grid-cols-5 gap-5 md:items-center"
    >
      <div className="md:col-span-3">
        <h5 className=" ">Hello! I’m Jamir Hossain</h5>
        <p className="text-justify text-gray-100 md:text-gray-900 ">
          A Junior Full Stack Developer. Currently, I am learning many more
          about full-stack development and working with UI-Lib. I have been
          involved with programming to gain confidence and excellence using my
          potential in the field of “Web Development”, and to express my
          innovative creative skills for self and company growth.
        </p>
      </div>
      <div className="md:col-span-2">
        <Image
          width={460}
          height={460}
          layout="responsive"
          src="/assets/top-banner.png"
          alt="skills"
        />
      </div>
    </div>
  );
};

export default AboutText;
