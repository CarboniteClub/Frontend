import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import manageTask from "../assets/manageTask.svg";
import addTasks from "../assets/addTasks.svg";

const CompanyLeftNav = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  return (
    <>
      <span className="font-mulish text-2xl font-bold mx-16 text-white leading-none">
        <Link to="/">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1>Carbonite</h1>
          </div>
        </Link>
      </span>
      <div className="ml-8 my-16 text-secondary-white">
        <Link to="/company/dashboard">
          <button
            className={`flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl w-[90%] my-4 ${
              currentLocation == "/company/dashboard"
                ? "text-white bg-secondary-black"
                : ""
            } `}
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={manageTask} className="mx-2 my-auto align-sub" />
            <span className="align-super ml-2 "> Manage </span>
          </button>
        </Link>

        <Link to="/company/add-tasks">
          <button
            className={`flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl w-[90%] my-4 ${
              currentLocation == "/company/add-tasks"
                ? "text-white bg-secondary-black"
                : ""
            } `}
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={addTasks} className="mx-2 my-auto align-sub" />
            <span className="align-super ml-2 "> Add Tasks </span>
          </button>
        </Link>
      </div>
      <button
        className="flex px-8 py-4 rounded-3xl font-bold text-xl shadow-xl shadow-secondary-black my-48 mx-auto "
        style={{
          borderStyle: "outset",
        }}
      >
        <span className="align-super ml-2 "> Sign Out</span>
      </button>
    </>
  );
};

export default CompanyLeftNav;
