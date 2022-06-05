import React from "react";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import leaderboard from "../assets/leaderboard.svg";
import rewardsIcon from "../assets/rewardsIcon.svg";

const Rewards = () => {
  const listLeaders = () => {
    let obj = [
      {
        rank: 1,
        name: "Tom Brady",
        xp: 4250,
      },
      {
        rank: 1,
        name: "John Doe",
        xp: 3870,
      },
      {
        rank: 1,
        name: "Tom Brady",
        xp: 2720,
      },
    ];

    let template = obj.map((item, i) => {
      return (
        <>
          <div className="flex justify-between text-2xl w-[40%] mx-auto my-2">
            <div className="flex">
              <h1 className="text-custom-yellow mx-4"> #{i + 1} </h1>
              <h1>{item.name}</h1>
            </div>
            <div>
              <h1>
                {item.xp} <span className="text-custom-yellow">XP</span>{" "}
              </h1>
            </div>
          </div>
          <hr className=" border-secondary-black border-2 w-[40%] mx-auto my-4" />
        </>
      );
    });

    return template;
  };

  return (
    <>
      <Header />
      <div className="bg-primary-black text-white">
        <h1>You’re on the early access waitlist!</h1>
        <h1>Will Smith</h1>
        <button
          className="bg-secondary-black  px-12 py-2 rounded-3xl font-bold shadow-md "
          style={{
            borderStyle: "outset",
          }}
        >
          Rank <span className="text-custom-yellow">#270</span>
        </button>
        <h1 className="">
          40 <span className="text-custom-yellow">XP</span>{" "}
        </h1>
        <div className="flex justify-center">
          <button
            className="flex px-12 py-2 bg-secondary-black rounded-3xl font-bold shadow-xl "
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={leaderboard} className="px-2" /> Leaderboard
          </button>
          <button
            className="flex px-12 py-2 rounded-3xl font-bold shadow-xl "
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={rewardsIcon} className="px-2" /> Rewards
          </button>
        </div>
        {listLeaders()}
      </div>
      <Footer />
    </>
  );
};

export default Rewards;
