import React from "react";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import discordsmall from "../assets/discordsmall.svg";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className="flex justify-between bg-secondary-black text-white font-Montserrat">
      <div className="m-16">
        <div className="flex justify-start my-4">
          <img src={logo} className="mx-[10px] " />
          <h1 className="text-2xl font-bold">Carbonite</h1>
        </div>
        <h2 className="text-[#B3B3B3] text-xl">
          Copyright © 2021-22 Carbonite
        </h2>
      </div>
      <div className="m-16">
        <h1 className="text-2xl text-right my-4">Contact Us</h1>
        <div className="flex justify-between">
          <img className="mx-2" src={instagram} />
          <img className="mx-2" src={twitter} />
          <img className="mx-2" src={mail} />
          <img className="ml-2" src={discordsmall} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
