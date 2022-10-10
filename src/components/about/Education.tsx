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
          <table className="min-w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th scope="col">Degree</th>
                <th scope="col">Institute</th>
                <th scope="col">Result</th>
                <th scope="col">Session</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td>Diploma in Engineering (Electrical)</td>
                <td>
                  Sylhet Polytechnic Institute,
                  <br />
                  Sylhet.
                </td>
                <td>*</td>
                <td>2019-2020</td>
              </tr>
              <tr className="bg-white">
                <td>Secondary School Certificate (SSC)</td>
                <td>
                  UCEP Hafiz Mazumdar Sylhet
                  <br />
                  Technical School
                </td>
                <td>
                  GPA 5.00
                  <br />
                  (Out of 5)
                </td>
                <td>2017-2018</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Education;
