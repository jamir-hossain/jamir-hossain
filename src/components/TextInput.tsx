import React, { FC, useState } from "react";
import { InputProps } from "react-html-props";

interface Props extends InputProps {
  id: string;
  label: string;
  placeHolder?: string;
}

const TextInput: FC<Props> = ({ id, label, placeHolder, ...props }) => {
  const [placeholder, setPlaceholder] = useState(" ");

  return (
    <div className="mb-5 relative w-full bg-white dark:bg-gray-800 group rounded-md">
      <input
        id={id}
        name={props.name}
        className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline outline-1 outline-gray-300 dark:outline-gray-700 appearance-none focus:outline-primary dark:focus:outline-primary peer"
        placeholder={placeholder}
        onFocus={() => setPlaceholder(placeHolder || "Type Here")}
        onBlur={() => setPlaceholder(" ")}
        {...props}
      />
      <label
        htmlFor={id}
        className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-gray-800 text-xs font-normal text-gray-700 dark:text-gray-300 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
