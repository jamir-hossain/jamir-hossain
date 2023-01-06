import TableContainer from "components/TableContainer";
import React, { FC } from "react";
import { DivProps } from "react-html-props";

const Education: FC<DivProps> = (props) => {
  return (
    <div {...props}>
      <div className="overflow-x-hidden">
        <h4>
          <span className="text-white md:text-primary">Educational</span>{" "}
          Background
        </h4>

        <TableContainer>
          <table className="min-w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900">
            <thead className="bg-gray-100 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-900">
              <tr>
                <th scope="col" className="dark:text-white">
                  Degree
                </th>
                <th scope="col" className="dark:text-white">
                  Institute
                </th>
                <th scope="col" className="dark:text-white">
                  Result
                </th>
                <th scope="col" className="dark:text-white">
                  Session
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                <td className="dark:text-white">
                  Diploma in Electrical Engineering
                </td>
                <td className="dark:text-white">
                  Sylhet Polytechnic Institute,
                  <br />
                  Sylhet.
                </td>
                <td className="dark:text-white">*</td>
                <td className="dark:text-white">2019-2020</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="dark:text-white">
                  Secondary School Certificate (SSC)
                </td>
                <td className="dark:text-white">
                  UCEP Hafiz Mazumdar Sylhet
                  <br />
                  Technical School
                </td>
                <td className="dark:text-white">
                  GPA 5.00
                  <br />
                  (Out of 5)
                </td>
                <td className="dark:text-white">2017-2018</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Education;
