import React, { FC } from "react";
import { DivProps } from "react-html-props";

const Education: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      <h4>
        <span className="text-primary">Educational</span> Background
      </h4>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-2 text-left"
                    >
                      Company
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      As a Front-end Developer (ReactJS)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      July 2020 - July 2022
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      UI-Lib
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      Junior Full-Stack Developer (ReactJS and Laravel)
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      July 2020 - July 2022
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                      UI-Lib
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
