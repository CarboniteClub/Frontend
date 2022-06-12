import React, { useState } from "react";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import leaderboard from "../assets/leaderboard.svg";
import rewardsIcon from "../assets/rewardsIcon.svg";
import tetherRewards from "../assets/tetherRewards.svg";

const Rewards = () => {
  const [RewardList, setRewardList] = useState([
    {
      title: "Top 5 Users",
      description: "Direct access to platform & 100 USDT each.",
    },
    {
      title: "Top 6 - 10 Users",
      description: "Get rewards of 50 USDT each.",
    },
    {
      title: "Top 10 - 50 Users",
      description: "Get rewards of 20 USDT each.",
    },
    {
      title: "Top 50 - 100 Users",
      description: "Get rewards of 10 USDT each.",
    },
    {
      title: "Top 100 - 1000 Users",
      description: "Exciting Rewards and access to discord community.",
    },
    {
      title: "3 randomly Selected Users",
      description: "Direct access to platform & 50 USDT each.",
    },
  ]);

  const listRewards = () => {
    return RewardList.map((item) => {
      return (
        <div
          className="shadow-xl shadow-secondary-black p-8 m-4 rounded-3xl"
          style={{
            borderStyle: "outset",
            width: "350px",
          }}
        >
          <img src={tetherRewards} className="mx-auto py-4" />
          <h1 className="text-xl font-bold py-2">{item.title}</h1>
          <h2 className="text-secondary-white py-2">{item.description}</h2>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="bg-primary-black text-white text-center font-Montserrat">
        <div className="h-[10vh]"></div>
        <h1 className="text-xl pt-16 ">You’re on the early access waitlist!</h1>
        <h1 className="text-5xl font-bold py-8">Will Smith</h1>
        <button
          className="bg-secondary-black  px-12 py-2 rounded-3xl font-bold shadow-md "
          style={{
            borderStyle: "outset",
          }}
        >
          Rank <span className="text-custom-yellow">#270</span>
        </button>
        <h1 className="my-4">
          40 <span className="text-custom-yellow">XP</span>{" "}
        </h1>
        <div className="flex justify-center my-12">
          <button
            className="flex px-12 mx-4 py-4 rounded-3xl font-bold shadow-xl shadow-secondary-black"
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={leaderboard} className="px-2" /> Leaderboard
          </button>
          <button
            className="flex px-12 mx-4 py-4 bg-secondary-black rounded-3xl font-bold shadow-xl "
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={rewardsIcon} className="pr-2" /> Rewards
          </button>
        </div>
        <div className="mx-52 text-center flex flex-wrap justify-evenly">
          {listRewards()}
        </div>
        <div className="h-[10vh]"></div>
      </div>
      <Footer />
    </>
  );
};

export default Rewards;
