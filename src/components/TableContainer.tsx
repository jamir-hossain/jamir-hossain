import React, { FC, ReactNode } from "react";

const TableContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded border border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
