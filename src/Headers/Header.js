import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="absolute w-screen  flex items-center justify-between px-6 py-4 bg-black ">
      {/* <span className="font-mulish text-2xl font-bold mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1 className="font-bold">Carbonite</h1>
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
      <div className="w-full mr-4">
        <ul className=" flex flex-row float-right">
          <li className=" text-md whitespace-nowrap px-16 py-2 font-bold  text-white">
            <Link to="/#">Dashboard</Link>
          </li>
          <li className="text-md whitespace-nowrap px-16 py-2 font-bold text-header-unselected bg-custom-yellow text-black rounded-3xl">
            <Link to="/#">Join Waitlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
