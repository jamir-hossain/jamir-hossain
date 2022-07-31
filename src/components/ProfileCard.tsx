import React from "react";
import Card from "components/Card";
import AppNavbar from "layout/AppNavbar";
import useApp from "hooks/useApp";
import DownloadIcon from "icons/DownloadIcon";
import AwardIcon from "icons/AwardIcon";

const ProfileCard = () => {
  const { navHandler } = useApp();

  return (
    <Card className="h-full flex flex-col justify-between">
      <h1>hello left</h1>

      <div>
        <AppNavbar />

        <div className="border-t border-gray-300 flex items-center justify-between">
          <button
            onClick={() => console.log("")}
            className="nav-btn flex-row py-4"
          >
            Download CV
            <DownloadIcon className="w-3 ml-2 " />
          </button>
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
