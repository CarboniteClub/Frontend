import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CompanyHeader = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  const pageName = () => {
    let name = currentLocation.split("/")[1];
    console.log("name", name);
    if (name == "dashboard") name = "Manage Tasks";
    else if (name == "add-tasks") name = "Add Tasks";

    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <nav className=" flex items-center justify-between px-6 py-4 bg-black ">
      <span className="font-mulish text-2xl font-bold mx-8 text-white ">
        <Link to={`${currentLocation}`}>
          <div className="flex justify-center">
            <h1>{pageName()}</h1>
          </div>
        </Link>
      </span>

      <div className="font-bold text-right mx-8">
        <h1>Will Smith</h1>
        <h1 className="text-custom-yellow">40 XP</h1>
      </div>
    </nav>
  );
};

export default CompanyHeader;
