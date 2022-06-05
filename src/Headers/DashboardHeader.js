import React from "react";
import { Link } from "react-router-dom";
const DashboardHeader = () => {
  return (
    <nav className=" flex items-center justify-between px-6 py-4 bg-black ">
      <span className="font-mulish text-2xl font-bold mx-8 text-white ">
        <Link to="/#">
          <div className="flex justify-center">
            <h1>Dashboard</h1>
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

export default DashboardHeader;
