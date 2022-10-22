import React from "react";
import Card from "components/Card";
import AppNavbar from "layout/AppNavbar";
import useApp from "hooks/useApp";
import DownloadIcon from "icons/DownloadIcon";
import AwardIcon from "icons/AwardIcon";
import Image from "next/image";
import ReactTyped from "react-typed";

const ProfileCard = () => {
  const { navHandler } = useApp();

  return (
    <Card className="h-full flex flex-col justify-between overflow-hidden">
      <div>
        <div className="relative bg-gray-300 pb-10 overflow-hidden flex items-center justify-center ">
          <Image
            width={340}
            height={340}
            src="/assets/top-banner.png"
            alt="skills"
          />
          <div className="absolute bottom-8 w-full flex items-center justify-center">
            <Image
              width={216}
              height={216}
              src="/assets/new-profile.jpg"
              alt="profile"
              className="rounded-full "
            />
          </div>
          <div className="absolute -bottom-4 left-0 w-full flex">
            <div
              className="w-full h-14 bg-white"
              style={{ rotate: "10deg", marginLeft: "-100px" }}
            ></div>
            <div
              className="w-full h-14 bg-white"
              style={{ rotate: "-10deg", marginRight: "-100px" }}
            ></div>
          </div>
        </div>
        <div className="text-center">
          <h4>Jamir Hossain</h4>
          <p className=" text-primary font-semibold ">
            <ReactTyped
              strings={["Programmer", "Junior Full-Stack Developer"]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </p>
        </div>
      </div>

      <div>
        <AppNavbar />

        <div className="border-t border-gray-300 flex items-center justify-between">
          <a
            className="nav-btn flex-row py-4"
            href="https://drive.google.com/u/0/uc?id=1zLtIYYqj0SSBS63-F1WW5QlzK14X0kn7&export=download"
          >
            Download CV
            <DownloadIcon className="w-3 ml-2 " />
          </a>
          <button
            onClick={() => navHandler("/#achievements")}
            className="nav-btn flex-row py-4"
          >
            Achievements
            <AwardIcon className="w-3 ml-2 " />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
