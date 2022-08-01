import Image from "next/image";
import React, { FC } from "react";
import { DivProps } from "react-html-props";
import { SkillType } from "types/common";
import skillData from "utils/skill-data";

// export type SkillType = {
//   title_first: string;
//   title_second: string;
//   items: {
//     name: string;
//     image: string;
//   }[];
// };

const AboutSkills: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      {skillData.map((skill: SkillType, index: number) => (
        <div key={index}>
          <h4>
            <span className="text-primary">{skill.title_first}</span>{" "}
            {skill.title_second}
          </h4>
          <div className=" flex items-center flex-wrap ">
            {skill.items.map((item: any) => (
              <div
                className="flex items-center p-1 px-4 mr-2 my-1 bg-gray-100 rounded-full "
                key={item.name}
              >
                <Image
                  alt={item.name}
                  src={item.image}
                  width={item.name === "PHP" ? 26 : 18}
                  height={item.name === "PHP" ? 26 : 18}
                />
                <span className="ml-2">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
