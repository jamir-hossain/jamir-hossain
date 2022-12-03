import TableContainer from "components/TableContainer";
import React, { FC } from "react";
import { DivProps } from "react-html-props";

const WorkingExperience: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      <div className="overflow-x-hidden">
        <h4>
          <span className="text-white md:text-primary">Working</span> Experience
        </h4>

        <TableContainer>
          <table className="min-w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900">
            <thead className="bg-gray-100 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-900">
              <tr>
                <th scope="col" className="dark:text-white">
                  Role
                </th>
                <th scope="col" className="dark:text-white">
                  Duration
                </th>
                <th scope="col" className="dark:text-white">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                <td className="dark:text-white">
                  As a Front-end Developer (ReactJS)
                </td>
                <td className="dark:text-white">July 2021 - June 2022</td>
                <td className="dark:text-white">UI-Lib</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="dark:text-white">
                  Junior Full-Stack Developer (ReactJS and Laravel)
                </td>
                <td className="dark:text-white">June 2022 - Ongoing</td>
                <td className="dark:text-white">UI-Lib</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};

export default WorkingExperience;
