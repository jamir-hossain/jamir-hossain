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
          <table className="min-w-full ">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th scope="col">Role</th>
                <th scope="col">Duration</th>
                <th scope="col">Company</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td>As a Front-end Developer (ReactJS)</td>
                <td>July 2021 - June 2022</td>
                <td>UI-Lib</td>
              </tr>
              <tr className="bg-white">
                <td>Junior Full-Stack Developer (ReactJS and Laravel)</td>
                <td>June 2022 - Ongoing</td>
                <td>UI-Lib</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};

export default WorkingExperience;
