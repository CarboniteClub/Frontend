import React from "react";
import Footer from "../Footers/Footer";
import { Link } from "react-router-dom";
import DashboardHeader from "../Headers/DashboardHeader";
import nft from "../assets/nft.svg";
import star from "../assets/star.svg";
import LeftNav from "../Headers/LeftNav";
import locked from "../assets/locked.svg";

const Customize = () => {
  const listSkills = () => {
    let obj = [
      {
        name: "Design",
        xp: 20,
      },
      {
        name: "Crypto",
        xp: 15,
      },
      {
        name: "Blockchain",
        xp: 10,
      },
      {
        name: "Artifical Intelligence",
        xp: 7,
      },
      {
        name: "Marketing ",
        xp: 5,
      },
    ];

    return obj.map((item) => {
      return (
        <div className="flex justify-between my-4 text-xl">
          <h1 className="text-secondary-white">{item.name}</h1>
          <h1 className="">
            {item.xp} <span className="text-custom-yellow">XP</span>
          </h1>
        </div>
      );
    });
  };

  const showSkills = () => {
    let obj = [
      "Design ",
      "Crypto",
      "Blockchain",
      "Artificial Intelligence",
      "Marketing",
    ];

    return obj.map((item) => {
      return (
        <div className="flex justify-between bg-custom-black text-2xl px-8 py-4 rounded-2xl my-6">
          <h1>{item}</h1>
          <label>
            <input
              checked
              type="checkbox"
              className="accent-custom-yellow w-6 h-6"
            />
          </label>
        </div>
      );
    });
  };

  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black">
          <LeftNav />
        </div>
        <div className="col-span-5 bg-primary-black">
          <DashboardHeader />

          <div className="h-12 bg-primary-black"></div>
          <div className="grid grid-cols-5 bg-primary-black px-16 gap-8 ">
            <div className="col-span-3 ">
              <h1 className="text-2xl pb-4">Select Your Skills</h1>
              <h1 className="text-xl text-secondary-white pb-4">
                Choose what you want to show in your NFT Resume.
              </h1>
              {showSkills()}
              <div className="px-auto py-12 bg-custom-black rounded-2xl text-white text-center">
                <div className="flex justify-center">
                  <img src={locked} className="mr-4 " />
                  <h1 className="text-xl ">
                    Pay <span className="text-custom-yellow "> 15 NEAR </span>{" "}
                    To Save Changes
                  </h1>
                </div>

                <button className="text-xl bg-primary-black mt-4 text-white px-6 py-4  rounded-3xl shadow-lg shadow-secondary-black">
                  Pay 15 NEAR
                </button>
              </div>
            </div>
            <div className="col-span-2 bg-custom-black rounded-3xl">
              <img src={nft} className="w-full" />
              <div className=" px-8">
                <div className="my-8">
                  <h1 className="text-2xl font-bold">Your NFT Name</h1>
                  <h1 className="text-secondary-white">
                    Created on 28 May 2022
                  </h1>
                </div>
                <div className="inline-block">
                  <img src={star} className="inline-block pr-2 w-10 h-10" />
                  <h1 className="font-bold inline-block text-xl align-sub">
                    Your Top Skills
                    <span className="text-lg text-secondary-white">
                      (Public)
                    </span>
                  </h1>
                </div>

                {listSkills()}

                <div className="h-8"></div>
              </div>
            </div>
          </div>

          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Customize;
