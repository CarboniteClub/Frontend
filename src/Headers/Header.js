import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="absolute w-screen  flex items-center justify-between px-6 py-4 bg-black  font-Montserrat">
      {/* <span className="font-mulish text-2xl font-bold mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1 className="font-bold">Carbonite</h1>
          </div>
        </Link>
      </span> */}
      <span className="font-mulish text-2xl font-bold md:mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1>Carbonite</h1>
          </div>
        </Link>
      </span>
      <div className="w-full mr-4">
        <ul className=" flex flex-row float-right">
          {/* <li className=" text-md whitespace-nowrap md:px-16 py-2 font-bold  text-white items-center">
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
          <li className="hidden md:inline items-center">
            {" "}
            <a
              href="https://discord.gg/ukT2XGJv"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* fix allignment  */}
              <button
                className=" border-solid border-2 box-border flex flex-row my-4 mx-auto md:mx-3 items-center justify-center h-12 py-auto  w-48 gap-2 text-black font-bold"
                style={{
                  "border-color": "rgba(26, 26, 26, 1)",
                  "box-shadow":
                    "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                  "border-radius": "100px",
                  background:
                    "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
                }}
                onClick={() => {
                  // navigate("/waitlist");
                }}
              >
                Join Community
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
