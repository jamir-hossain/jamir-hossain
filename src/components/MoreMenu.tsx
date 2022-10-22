import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MoreIcon from "icons/MoreIcon";
import CodeIcon from "icons/CodeIcon";
import DownloadIcon from "icons/DownloadIcon";
import AwardIcon from "icons/AwardIcon";
import { useRouter } from "next/router";

const MoreMenu = () => {
  const router = useRouter();
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full">
            <MoreIcon className="w-5 h-5 text-gray-500 " />
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
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                  href=" https://drive.google.com/u/0/uc?id=1zLtIYYqj0SSBS63-F1WW5QlzK14X0kn7&export=download"
                >
                  Download CV
                  <DownloadIcon className="w-3 ml-2 " />
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => router.push("/achievements")}
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                >
                  Achievements
                  <AwardIcon className="w-3 ml-2 " />
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
