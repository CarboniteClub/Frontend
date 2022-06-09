import React from "react";
import Footer from "../Footers/Footer";
import { Link } from "react-router-dom";
import DashboardHeader from "../Headers/DashboardHeader";
import nft from "../assets/nft.svg";
import star from "../assets/star.svg";
import overallgrowth from "../assets/overallgrowth.svg";
import greenProgress from "../assets/greenProgress.svg";
import globe from "../assets/globe.svg";
import youtube from "../assets/youtube.svg";
import wikipedia from "../assets/wikipedia.svg";
import udemy from "../assets/udemy.svg";
import codeforces from "../assets/codeforces.svg";
import leaderboardYellow from "../assets/leaderboardYellow.svg";
import time from "../assets/time.svg";
import LeftNav from "../Headers/LeftNav";

const Dashboard = () => {
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
        name: "Development",
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
            {item.xp} <span className="text-custom-yellow">XP</span>{" "}
          </h1>
        </div>
      );
    });
  };

  const listOverallPerformace = () => {
    let obj = [
      {
        name: "Consistency",
        score: 9.0,
      },
      {
        name: "Growth",
        score: 7.5,
      },
    ];

    return obj.map((item) => {
      return (
        <div className="flex justify-between  my-4 text-xl  ">
          <h1 className="text-secondary-white">{item.name}</h1>
          <h1 className="">{item.score}</h1>
        </div>
      );
    });
  };

  const listVisitedWebsites = () => {
    let obj = [
      {
        icon: youtube,
        name: "YouTube",
        time: "5h 12min",
      },
      {
        icon: wikipedia,
        name: "Wikipedia",
        time: "2h 47min",
      },
      {
        icon: udemy,
        name: "Udemy",
        time: "1h 05min",
      },
      {
        icon: codeforces,
        name: "Codeforces",
        time: "43min",
      },
      {
        icon: youtube,
        name: "YouTube",
        time: "5h 12min",
      },
    ];

    return obj.map((item) => {
      return (
        <div className="mx-8 text-center my-4">
          <img className="mx-auto " src={item.icon} />
          <h1 className="text-xl my-2"> {item.name} </h1>
          <h1 className="text-secondary-white"> {item.time} </h1>
        </div>
      );
    });
  };

  const listLeaderBoard = () => {
    let obj = [
      {
        name: "Tom Brady",
        xp: 4250,
      },
      {
        name: "John Doe",
        xp: 3750,
      },
      {
        name: "Rachael",
        xp: 1245,
      },
      {
        name: "Jane Doe",
        xp: 750,
      },
      {
        name: "Mitchel",
        xp: 245,
      },
    ];

    return obj.map((item, i) => {
      return (
        <div className="flex justify-between mx-8 text-md my-4">
          <h1>
            <span className="text-custom-yellow">#{i + 1}</span>
            <span className="ml-4">{item.name}</span>
          </h1>
          <h1>
            <span className="mr-2">{item.xp}</span>
            <span className="text-custom-yellow">XP</span>
          </h1>
        </div>
      );
    });
  };

  const listTimeSpent = () => {
    let skills = [
      {
        name: "Design",
        color: "#EF972D",
      },
      {
        name: "Crypto",
        color: "#EED581",
      },
      {
        name: "Blockchain",
        color: "#263238",
      },
      {
        name: "AI",
        color: "#AFE3F3",
      },
      {
        name: "Marketing",
        color: "#FFFFFF",
      },
    ];

    return skills.map((item) => {
      return (
        <div className="flex my-2">
          <div className="my-auto">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.257507"
                width="14"
                height="14"
                rx="7"
                fill={item.color}
              />
            </svg>
          </div>
          <h1 className="align-super text-xl px-4 text-secondary-white">
            {item.name}
          </h1>
        </div>
      );
    });
  };

  const listSubmittedTasks = () => {
    let obj = [
      {
        name: "Design Animation Graphics",
        organiser: "DeFi DAO",
        status: "Accepted",
        submittedOn: "1 June 2022",
      },
      {
        name: "Windows Development",
        organiser: "SuperTeam DAO",
        status: "Submitted",
        submittedOn: "30 May 2022",
      },
      {
        name: "Web 3 Token Developer",
        organiser: "Token DAO",
        status: "Submitted",
        submittedOn: "25  May 2022",
      },
      {
        name: "Video Editing",
        organiser: "Creatives DAO",
        status: "Accepted",
        submittedOn: "14 May 2022",
      },
    ];

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-12 py-6 rounded-3xl text-xl">
          <h1 className="font-bold my-2">{item.name}</h1>
          <h1 className="text-secondary-white">{item.organiser}</h1>
          <div className="flex justify-between text-secondary-white mt-6">
            <h1 className="">Submitted On</h1>
            <h1 className="px-2">Status</h1>
          </div>
          <div className="flex justify-between my-2">
            <h1 className="">{item.submittedOn}</h1>
            <h1
              className={`bg-secondary-black px-4 py-2 ${
                item.status == "Submitted" ? "text-red-text" : "text-green-text"
              }`}
            >
              {item.status}
            </h1>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black hidden 2xl:inline">
          <LeftNav />
        </div>
        <div className="col-span-6 2xl:col-span-5 bg-primary-black">
          <DashboardHeader />

          <div className="h-12 bg-primary-black"></div>
          <div className="grid grid-cols-8 bg-primary-black px-16 gap-8 ">
            <div className="col-span-2 bg-custom-black rounded-3xl">
              <img src={nft} className="w-full" />
              <div className=" px-8">
                <div className="my-8">
                  <h1 className="text-2xl font-bold">Will Smith</h1>
                  <h1 className="text-secondary-white">
                    Minted on 28 May 2022
                  </h1>
                </div>
                <div className="flex justify-between text-xl">
                  <h1>
                    XP : <span className="text-custom-yellow">40</span>
                  </h1>
                  <h1>
                    Rank : <span className="text-custom-yellow">270</span>
                  </h1>
                </div>
                <div className="inline-block mt-8">
                  <img src={star} className="inline-block pr-2 w-10 h-10" />
                  <h1 className="font-bold inline-block text-xl align-sub">
                    Your Top Skills
                  </h1>
                </div>

                {listSkills()}

                <div className="inline-block mt-8">
                  <img
                    src={overallgrowth}
                    className="inline-block pr-2 w-10 h-10"
                  />
                  <h1 className="font-bold inline-block text-xl align-sub">
                    Overall
                  </h1>
                </div>

                {listOverallPerformace()}

                <button
                  className="flex px-8 py-4 rounded-3xl font-bold text-xl shadow-xl shadow-secondary-black mt-20 mb-8 mx-auto "
                  style={{
                    borderStyle: "outset",
                  }}
                >
                  <span className="align-super ml-2 "> Customize NFT</span>
                </button>
              </div>
            </div>
            <div className="col-span-5 ">
              <div className="text-xl flex mb-4 mt-4">
                <img src={greenProgress} className="w-6 h-6" />
                <h1 className="ml-4">
                  You were <span className="text-[#4BB543]"> 14% </span> more
                  productive today.
                </h1>
              </div>
              <div className="grid grid-rows-10 gap-8">
                <div className=" bg-custom-black row-span-2 rounded-3xl">
                  <div className="text-xl flex pt-12 pb-6 px-20">
                    <img src={globe} className="w-6 h-6" />
                    <h1 className="ml-4 align-super">Most Visited Websites</h1>
                  </div>
                  <div className="flex mx-12">{listVisitedWebsites()}</div>
                </div>
                <div className="grid grid-cols-2 row-span-3 gap-8 justify-between">
                  <div className="bg-custom-black col-span-1 rounded-3xl ">
                    <img
                      src={overallgrowth}
                      className="mx-auto w-12 mb-4 mt-8"
                    />
                    <h1 className="text-2xl text-center  mb-6">Progress</h1>
                    <div className="flex justify-between mx-8 text-xl my-2">
                      <h1 className="">Weekly Growth</h1>
                      <h1 className=" text-xl text-custom-yellow">28</h1>
                    </div>
                    <h1 className="mx-8 text-[#607D8B]">XP Gained</h1>
                  </div>
                  <div className="bg-custom-black col-span-1 rounded-3xl ">
                    <img
                      src={leaderboardYellow}
                      className="mx-auto w-12 mb-4 mt-8"
                    />
                    <h1 className="text-2xl text-center  mb-6">Leaderboard</h1>
                    {listLeaderBoard()}
                  </div>
                </div>
                <div className=" bg-custom-black row-span-5 rounded-3xl">
                  <div className="text-xl flex pt-12 pb-6 px-20">
                    <img src={time} className="w-6 h-6" />
                    <h1 className="ml-4 align-super">Time spent on skills</h1>
                  </div>
                  <div className="flex mx-12 justify-between">
                    <div className="mx-8">{listTimeSpent()}</div>
                    <div>Img</div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className=" px-8 py-4 rounded-3xl font-bold text-xl my-8  bg-secondary-black"
                      style={{
                        borderStyle: "outset",
                      }}
                    >
                      <span className="align-super ml-2 "> Daily</span>
                    </button>
                    <button
                      className=" px-8 py-4 rounded-3xl font-bold text-xl my-8 "
                      style={{
                        borderStyle: "outset",
                      }}
                    >
                      <span className="align-super ml-2 text-secondary-white">
                        Weekly
                      </span>
                    </button>
                    <button
                      className=" px-8 py-4 rounded-3xl font-bold text-xl my-8 "
                      style={{
                        borderStyle: "outset",
                      }}
                    >
                      <span className="align-super ml-2 text-secondary-white">
                        Monthly
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mx-16 text-3xl font-bold mt-16 mb-8">
            Submitted Tasks
          </h1>
          <div className="grid grid-cols-2 gap-8 mx-16">
            {listSubmittedTasks()}
          </div>
          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
