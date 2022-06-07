import React, { useEffect } from "react";
import Header from "../Headers/Header";
import discord from "../assets/discord.svg";
import blockchain from "../assets/blockchain.svg";
import work from "../assets/work.svg";
import track from "../assets/track.svg";
import proofOfWork from "../assets/proofOfWork.svg";
import rewards from "../assets/rewards.svg";
import security from "../assets/security.svg";
import decentralised from "../assets/decentralised.svg";
import community from "../assets/community.svg";
import coin from "../assets/coin.svg";
import Footer from "../Footers/Footer";
import axios from "axios";

// import AOS from "aos";
// import "../../node_modules/aos/dist/aos.css";
const Landing2 = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       offset: 200,
  //       duration: 600,
  //       easing: "ease-in-sine",
  //       delay: 100,
  //     });
  //   }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white font-Montserrat w-screen">
        <section className="flex h-screen justify-center items-center snap-start bg-black">
          <span>
            {/* <span className="relative w-full max-w-lg">
              <div className="absolute rounded-full animate-ping mix-blend-lighten filter blur-2xl opacity-70 -top-5 -right-2 w-72 h-72 bg-yellow-500" />
              <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" />
            </span> */}

            <h1 className="text-4xl md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem]">
              Be Productive <br /> Earn Rewards.
            </h1>
            <p className="text-xl text-center my-8 mx-3">
              Get rewards for being consistent and productive
            </p>
            {/* button style
            change font later 
             */}
            <button
              className="border-solid border-2 box-border flex flex-row my-4 mx-auto items-center justify-center h-12 py-4 px-10 w-48 gap-2 text-black font-bold"
              style={{
                "border-color": "rgba(26, 26, 26, 1)",
                "box-shadow":
                  "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                "border-radius": "100px",
                background:
                  "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
              }}
            >
              Join Waitlist
            </button>
            <button
              className="border-solid border-2 box-border flex flex-row my-4 mx-auto items-center justify-center h-12 py-4 px-10 w-48 gap-2 font-bold"
              style={{
                "border-color": "rgba(26, 26, 26, 1)",
                "box-shadow":
                  "-6px -6px 12px rgba(255, 255, 255, 0.21), 6px 6px 12px rgba(0, 0, 0, 0.62)",
                "border-radius": "100px",
              }}
            >
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8767 1.75144C22.1051 0.922493 20.2308 0.333488 18.3034 0C18.0633 0.434035 17.7828 1.01781 17.5894 1.48224C15.5113 1.16977 13.4524 1.16977 11.4125 1.48224C11.2192 1.01792 10.9324 0.434035 10.6901 0C8.76083 0.333642 6.88494 0.924147 5.11243 1.75577C1.58528 7.08586 0.629093 12.2834 1.10713 17.4074C3.44658 19.1544 5.71373 20.2157 7.94269 20.9102C8.49664 20.1484 8.98632 19.3419 9.40667 18.499C8.60638 18.1943 7.83487 17.8188 7.10131 17.377C7.29435 17.2339 7.48285 17.0848 7.66652 16.9299C12.1116 19.009 16.9413 19.009 21.3334 16.9299C21.5179 17.0838 21.7063 17.2329 21.8985 17.377C21.1638 17.82 20.3908 18.1962 19.5889 18.5012C20.0117 19.3475 20.5005 20.1548 21.0529 20.9123C23.284 20.2179 25.5532 19.1566 27.8927 17.4074C28.4537 11.4675 26.9345 6.31752 23.8767 1.75134V1.75144ZM10.0123 14.2563C8.6779 14.2563 7.58358 13.0105 7.58358 11.4935C7.58358 9.97658 8.65458 8.72872 10.0123 8.72872C11.3701 8.72872 12.4643 9.97437 12.441 11.4935C12.4431 13.0105 11.3701 14.2563 10.0123 14.2563ZM18.9875 14.2563C17.6531 14.2563 16.5589 13.0105 16.5589 11.4935C16.5589 9.97658 17.6298 8.72872 18.9875 8.72872C20.3453 8.72872 21.4396 9.97437 21.4162 11.4935C21.4162 13.0105 20.3453 14.2563 18.9875 14.2563Z"
                  fill="white"
                />
              </svg>
              Discord
            </button>
          </span>
        </section>
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img
            className="mx-auto max-w-xs md:hidden"
            src={blockchain}
            alt="blockchain"
          />
          {/* <div className=""> */}
          <div className="mx-auto mt-16 max-w-sm md:w-7/12">
            <h1 className="text-4xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
              Build Your <br />
              <span className="text-custom-yellow">Web3 </span> Resume.
            </h1>
            <p className="text-lg my-8 md:my-4 text-[#B3B3B3]">
              Your proof of work on blockchain.
              <br /> Secure way to show your work to the world & get monetised.
            </p>
          </div>
          <img
            className="mx-auto hidden md:inline"
            src={blockchain}
            alt="blockchain"
          />
          {/* </div> */}
        </section>
        {/* the group of 4 sections */}
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img className="mx-auto hidden md:inline" src={work} alt="work" />
          {/* merge them later */}
          <img
            className="h-48 w-48 self-start -mx-6 md:hidden"
            src={work}
            alt="work"
          />
          <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
            {/* i liked w-7/12 ig*/}
            <div className="md:bg-custom-black items-center flex">
              <div className="md:mx-12 max-w-sm">
                <h1 className="text-4xl md:text-4xl font-bold  ">
                  You Do <br /> What You Love.
                </h1>

                <p className="text-md my-8 text-[#B3B3B3]">
                  Follow your true passion and create something that makes you
                  feel good. We make it easy for you to find & follow your
                  passion.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end of the group of 4 sections */}
        <section className="transition ease-in-out flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img
            className="mx-auto max-w-xs md:hidden"
            src={security}
            alt="security"
          />
          {/* <div className=""> */}
          <div className="mx-auto mt-16 max-w-sm md:w-7/12">
            <h1 className="block md:inline text-4xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
              Your Data <br /> Your Control
            </h1>
            {/* <h1 className="md:hidden text-3xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
              You are in control
            </h1> */}
            <p className="text-lg my-8 md:my-4 text-[#B3B3B3]">
              Blockchain keep user data privacy atmost with a secure shield
              attached to your data. You control it, you monetise it & you use
              it to track your growth.
            </p>
          </div>
          <img
            className="mx-auto hidden md:inline"
            src={security}
            alt="security"
          />
          {/* </div> */}
        </section>
        {/* why it is better section */}
        <section></section>
        {/* build the proof */}
        <section className="flex h-screen justify-center items-center snap-start bg-black">
          <span>
            {/* <span className="relative w-full max-w-lg">
              <div className="absolute rounded-full animate-ping mix-blend-lighten filter blur-2xl opacity-70 -top-5 -right-2 w-72 h-72 bg-yellow-500" />
              <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" />
            </span> */}

            <h1 className="text-3xl md:text-[5rem] font-bold text-center leading-[2.5rem] md:leading-[6rem]">
              Build the proof of your productivity.
            </h1>
            {/* button style
            change font later 
             */}
            <button
              className="border-solid border-2 box-border flex flex-row my-4 mx-auto items-center justify-center h-12 py-4 px-10 w-48 gap-2 text-black font-bold"
              style={{
                "border-color": "rgba(26, 26, 26, 1)",
                "box-shadow":
                  "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                "border-radius": "100px",
                background:
                  "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
              }}
            >
              Join Waitlist
            </button>
            <Footer />
          </span>
        </section>
      </div>
    </>
  );
};

export default Landing2;
