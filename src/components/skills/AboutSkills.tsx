import Image from "next/image";
import React, { FC } from "react";
import { DivProps } from "react-html-props";
import { SkillType } from "types/common";
import skillData from "utils/skill-data";

const AboutSkills: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      {skillData.map((skill: SkillType, index: number) => (
        <div className="py-5" key={index}>
          <h4 className="mb-2">
            <span className="text-white md:text-primary">
              {skill.title_first}
            </span>{" "}
            {skill.title_second}
          </h4>
          <div className="flex items-center flex-wrap">
            {skill.items.map((item: any) => (
              <div
                className="flex items-center p-1 px-3 mr-2 my-1 bg-gray-100 dark:bg-gray-800 rounded-md "
                key={item.name}
              >
                <Image
                  alt={item.name}
                  src={item.image}
                  width={item.name === "PHP" ? 24 : 14}
                  height={item.name === "PHP" ? 24 : 14}
                />
                <span className="text-sm ml-2">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
