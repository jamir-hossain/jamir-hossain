import Breadcrumb from "components/Breadcrumb";
import PageTransition from "components/PageTransition";
import useApp from "hooks/useApp";
import React, { useState } from "react";

const Contact = () => {
  const { activeNav } = useApp();
  const [ph, setPh] = useState({
    name: " ",
    email: " ",
    description: "",
  });
  const phHandler = (text: any) => setPh({ ...ph, ...text });

  return (
    <PageTransition show={activeNav === "/#contact"}>
      <Breadcrumb title="Contact" />
      <form className="max-w-[585px] w-full mx-auto mt-8">
        <h1 className="text-[36px] font-semibold text-center">Get In Touch</h1>
        <p className="text-lg text-gray-400 font-normal text-center mt-2 mb-12">
          Have any project? I’d love to hear from you{" "}
          <span className="text-red-500 text-xl">♥</span>
        </p>
        <div className="mb-5 relative w-full bg-white dark:bg-dark group rounded-md">
          <input
            id="name"
            type="text"
            name="name"
            className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline outline-1 outline-gray-300 dark:outline-gray-700 appearance-none focus:outline-primary dark:focus:outline-primary peer"
            placeholder={ph.name}
            onFocus={() => phHandler({ name: "Type Here" })}
            onBlur={() => phHandler({ name: " " })}
            required
          />
          <label
            htmlFor="name"
            className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
          >
            Name
          </label>
        </div>

        <div className="mb-5 relative w-full bg-white dark:bg-dark group rounded-md">
          <input
            id="email"
            type="email"
            name="email"
            className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline outline-1 outline-gray-300 dark:outline-gray-700 appearance-none focus:outline-primary dark:focus:outline-primary peer"
            placeholder={ph.email}
            onFocus={() => phHandler({ email: "Type your email" })}
            onBlur={() => phHandler({ email: " " })}
            required
          />
          <label
            htmlFor="email"
            className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
          >
            Email
          </label>
        </div>

        <div className="mb-6 relative w-full bg-white dark:bg-dark group rounded-md">
          <textarea
            rows={6}
            id="description"
            name="description"
            className="block p-4 rounded-md w-full text-xs font-normal text-gray-900 dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-600 bg-transparent outline outline-1 outline-gray-300 dark:outline-gray-700 appearance-none focus:outline-primary dark:focus:outline-primary peer"
            placeholder={ph.description}
            onFocus={() => phHandler({ description: "Type description" })}
            onBlur={() => phHandler({ description: " " })}
            required
          ></textarea>
          <label
            htmlFor="description"
            className="ml-[14px] z-[1] flex items-center px-1 rounded-[3px] peer-focus:font-medium absolute bg-white dark:bg-dark text-xs font-normal text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-[20px] scale-75 top-3 peer-focus:z-10 origin-[0] peer peer-disabled:bg-green-500 peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[4.5px] peer-focus:scale-75 peer-focus:-translate-y-[20px]"
          >
            Description
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-md font-medium text-base flex items-center justify-center bg-primary text-white hover:bg-primary-dark transition-colors duration-200 mx-auto"
        >
          Send Message
        </button>
      </form>
    </PageTransition>
  );
};

export default Contact;
