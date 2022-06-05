import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import dashboard from "../assets/dashboard.svg";
import tasksDim from "../assets/tasks-dim.svg";
import customizeDim from "../assets/customize-dim.svg";
import communityDim from "../assets/community-dim.svg";
import guidelinesDim from "../assets/guidelinesDim.svg";

const LeftNav = () => {
  return (
    <>
      {" "}
      {/* <span className="font-mulish text-3xl font-bold mx-16  ">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1>Carbonite</h1>
          </div>
        </Link>
      </span> */}
      <span className="font-mulish text-2xl font-bold mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1>Carbonite</h1>
          </div>
        </Link>
      </span>
      <div className="ml-8 my-16 text-secondary-white">
        <button
          className="flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl bg-secondary-black my-4"
          style={{
            borderStyle: "outset",
          }}
        >
          <img src={dashboard} className="mx-2 my-auto align-sub" />
          <span className="align-super ml-2 text-white"> Dashboard </span>
        </button>
        <button
          className="flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl  my-4"
          style={{
            borderStyle: "outset",
          }}
        >
          <img src={tasksDim} className="mx-2 my-auto align-sub text-left" />
          <span className="align-super"> Tasks </span>
        </button>
        <button
          className="flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl  my-4"
          style={{
            borderStyle: "outset",
          }}
        >
          <img
            src={customizeDim}
            className="mx-2 my-auto align-sub text-left"
          />
          <span className="align-super"> Customize </span>
        </button>
        <button
          className="flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl  my-4"
          style={{
            borderStyle: "outset",
          }}
        >
          <img
            src={communityDim}
            className="mx-2 my-auto align-sub text-left"
          />
          <span className="align-super"> Community</span>
        </button>
        <button
          className="flex px-8 py-4 rounded-3xl font-bold text-2xl shadow-xl  my-4"
          style={{
            borderStyle: "outset",
          }}
        >
          <img
            src={guidelinesDim}
            className="mx-2 my-auto align-sub text-left"
          />
          <span className="align-super"> Guidelines</span>
        </button>
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

export default LeftNav;
