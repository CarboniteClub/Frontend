import React from "react";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import discordsmall from "../assets/discordsmall.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative bottom-0 w-screen  flex flex-col md:flex-row justify-between bg-secondary-black text-white font-Montserrat">
      <div className="m-6 md:m-16">
        <div className="flex justify-start my-4">
          <img src={logo} className="mx-[10px] " />
          <h1 className="text-2xl font-bold">Carbonite</h1>
        </div>
        <h2 className="text-[#B3B3B3] text-xl">
          Copyright © 2021-22 Carbonite
        </h2>
      </div>
      <div className="m-6 mt-0 md:m-16 ">
        <h1 className="text-2xl text-left md:text-right my-4">Contact Us</h1>
        <div className="flex md:justify-between">
          <a
            href="https://www.instagram.com/carboniteclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mx-2" src={instagram} alt="instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <img className="mx-2" src={twitter} alt="twitter" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img className="mx-2" src={mail} alt="mail" />
          </a>
          {/* <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <img className="ml-2" src={discordsmall} alt="discordsmall" />
          </a> */}
          <Link to="/dashboard">
            {" "}
            <img className="ml-2" src={discordsmall} alt="discordsmall" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
