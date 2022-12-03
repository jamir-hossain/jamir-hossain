import { Fragment } from "react";
import SunIcon from "icons/SunIcon";
import MoonIcon from "icons/MoonIcon";
import MoreIcon from "icons/MoreIcon";
import { useTheme } from "next-themes";
import AwardIcon from "icons/AwardIcon";
import { useRouter } from "next/router";
import DownloadIcon from "icons/DownloadIcon";
import { Menu, Transition } from "@headlessui/react";

const MoreMenu = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const themeHandler = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={themeHandler}
        className="w-7 h-7 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full mr-2"
      >
        {theme === "dark" && (
          <SunIcon className="w-4 h-4 fill-gray-500 dark:fill-gray-300" />
        )}
        {theme === "light" && (
          <MoonIcon className="w-4 h-4 fill-gray-500 dark:fill-gray-300" />
        )}
      </button>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-7 h-7 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
            <MoreIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-[134px] origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                  href="https://drive.google.com/u/0/uc?id=1zLtIYYqj0SSBS63-F1WW5QlzK14X0kn7&export=download"
                >
                  Download CV
                  <DownloadIcon className="w-3 ml-2 dark:fill-white" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => router.push("/achievements")}
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                >
                  Achievements
                  <AwardIcon className="w-3 ml-2 dark:fill-white" />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MoreMenu;
