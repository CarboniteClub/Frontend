import React from "react";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import leaderboard from "../assets/leaderboard.svg";
import rewardsIcon from "../assets/rewardsIcon.svg";
import link from "../assets/link.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedIn.svg";

const LeaderBoard = () => {
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

  const listSocialMedia = () => {
    let obj = [
      {
        icon: instagram,
        text: "Share Carbonite on Instagram",
        xp: "+20 XP",
      },
      {
        icon: twitter,
        text: "Quote Retweet on Twitter",
        xp: "+20 XP",
      },
      {
        icon: linkedIn,
        text: "Create a LinkedIn post",
        xp: "+20 XP",
      },
    ];

    let template = obj.map((item, i) => {
      return (
        <div className="bg-secondary-black flex justify-between px-4 py-8 text-xl mt-12">
          <div className="flex">
            <img src={item.icon} className="mx-4" />
            <h1>{item.text}</h1>
          </div>
          <div>
            <h1 className="text-custom-yellow mx-4">{item.xp}</h1>
          </div>
        </div>
      );
    });

    return template;
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
            className="flex px-12 mx-4 py-4 bg-secondary-black rounded-3xl font-bold shadow-xl "
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={leaderboard} className="px-2" /> Leaderboard
          </button>
          <button
            className="flex px-12 mx-4 py-4 rounded-3xl font-bold shadow-xl shadow-secondary-black"
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={rewardsIcon} className="pr-2" /> Rewards
          </button>
        </div>
        {listLeaders()}
        <div className="my-16">
          <h1 className="font-bold text-5xl">Become a Leader</h1>
          <h1 className="text-secondary-white my-8 text-xl">
            Start moving up the waitlist today
          </h1>

          <button
            className="flex px-12 py-2 rounded-3xl font-bold mx-auto shadow-xl shadow-secondary-black"
            style={{
              borderStyle: "outset",
            }}
          >
            <img src={link} className="px-2 text-white " /> Click to copy invite
            link
          </button>
        </div>
        <div className="w-[40%] mx-auto">{listSocialMedia()}</div>
      </div>
      <div className="h-[10vh] bg-primary-black"></div>
      <Footer />
    </>
  );
};

export default LeaderBoard;
