import React, { useEffect } from "react";
import Header from "../Headers/Header";
import discord from "../assets/discord.svg";
import phone from "../assets/phone.svg";
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
import { useNavigate } from "react-router-dom";

import tether from "../assets/tether.svg";
import tether_main from "../assets/tether_main.svg";

import graph from "../assets/graph.svg";
import privacy from "../assets/privacy.svg";
import trophy from "../assets/trophy.svg";

// import AOS from "aos";
// import "../../node_modules/aos/dist/aos.css";
const Landing2 = () => {
  const navigate = useNavigate();

  //   const listSkills = (name, xp) => {
  //     return (
  //       <div className="flex justify-between my-4 text-xl">
  //         <h1 className="text-secondary-white">{name}</h1>
  //         <h1 className="">
  //           {xp} <span className="text-custom-yellow">XP</span>{" "}
  //         </h1>
  //       </div>
  //     );
  //   };

  const features = (imageSRC, title, description) => {
    return (
      <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
        <img
          className="mx-auto hidden md:inline  w-72"
          src={imageSRC}
          alt="work"
        />
        {/* merge them later */}
        <img
          className="h-48 w-48 self-start md:mx-12 md:hidden"
          src={imageSRC}
          alt={imageSRC}
        />
        <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
          {/* i liked w-7/12 ig*/}
          <div className="md:bg-custom-black items-center flex">
            <div className="md:mx-12 max-w-sm">
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className="text-4xl md:text-4xl font-bold"
              ></h1>

              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-md my-8 text-[#B3B3B3]"
              ></p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const features2 = (imageSRC, title, description) => {
    return (
      <section className="transition ease-in-out flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6 ">
        <img
          className="mx-auto max-w-xs md:hidden"
          src={imageSRC}
          alt={imageSRC}
        />
        {/* <div className=""> */}
        <div className="mx-auto mt-16 max-w-sm md:w-7/12">
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className="block  text-center text-4xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] "
          ></h1>
          {/* <h1 className="md:hidden text-3xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
          You are in control
        </h1> */}
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-lg my-8 md:my-4  text-center text-[#B3B3B3]"
          ></p>
        </div>
        <img
          className="mx-auto hidden md:inline"
          src={imageSRC}
          alt={imageSRC}
        />
        {/* </div> */}
      </section>
    );
  };

  const features3 = (imageSRC, title, description) => {
    return (
      <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
        <img
          className="mx-auto hidden md:inline md:ml-[-15px]  w-72"
          src={imageSRC}
          alt="work"
        />
        {/* merge them later */}
        <img
          className="h-48 w-48 self-start md:mx-12 md:hidden"
          src={imageSRC}
          alt={imageSRC}
        />
        <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
          {/* i liked w-7/12 ig*/}
          <div className="md:bg-custom-black items-center flex">
            <div className="md:mx-12 max-w-sm">
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className="text-4xl md:text-4xl font-bold"
              ></h1>

              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-md my-8 text-[#B3B3B3]"
              ></p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white font-Montserrat w-screen overflow-x-hidden">
        <section className="flex h-screen justify-center items-center snap-start bg-black">
          <div>
            <span className="relative w-full max-w-lg">
              <div
                className="absolute rounded-full mix-blend-normal filter blur-2xl  -top-60 -left-72 w-[40vw] h-[40vw] bg-yellow-500"
                style={{
                  background:
                    "radial-gradient(41.94% 41.94% at 50% 50%, rgba(232, 208, 129, 0.54) 0%, rgba(232, 208, 129, 0) 100%)",
                }}
              />
              <div
                className="absolute rounded-full mix-blend-lighten filter blur-2xl  top-60 left-[500px] w-[40vw] h-[40vw] bg-yellow-500"
                style={{
                  background:
                    "radial-gradient(41.94% 41.94% at 50% 50%, rgba(232, 208, 129, 0.54) 0%, rgba(232, 208, 129, 0) 100%)",
                }}
              />
              <div className="absolute left-[52vw] top-80 w-48">
                <img className=" mx-auto my-4" src={graph} alt="graph" />
              </div>
              <div className="absolute right-0 top-80 w-48">
                <img className=" mx-auto my-4" src={privacy} alt="graph" />
              </div>
              <div className="absolute left-[52vw] -top-20 w-48">
                <img className=" mx-auto my-4" src={trophy} alt="graph" />
              </div>
              <div className="absolute right-0 -top-20 w-48 w">
                <img className=" mx-auto my-4" src={tether} alt="graph" />
              </div>

              {/* the 4 tokens */}

              {/* end of 4 tokens */}
              {/* <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" /> */}
            </span>
            {/* text-3xl  md:text-[3rem] 2xl:text-[4rem] font-bold text-center leading-[2.5rem] md:leading-[6rem] */}
            <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] hidden md:flex ">
              Build Your Proof of Skills <br /> Earn Rewards.
            </h1>
            <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] md:hidden ">
              Build Your <br /> Proof of Skills <br /> Earn Rewards.
            </h1>
            <p className="text-2xl text-center my-8 mx-3 hidden md:block">
              An On-Chain Anonymous Identity Builder
            </p>
            <p className="text-2xl text-center my-8 mx-3  md:hidden">
              An On-Chain Anonymous
              <br /> Identity Builder
            </p>
            {/* button style
            change font later 
             */}
            <div className="flex flex-col md:flex-row px-auto justify-center">
              {" "}
              <a
                href="https://discord.gg/JAA4Jdu6MV"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button
                  className="z-10 border-solid border-2 box-border flex flex-row my-4 mx-auto md:mx-3 items-center justify-center h-12 py-4  w-48 gap-2 text-black font-bold"
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
              {/* <a
                href="https://discord.gg/JAA4Jdu6MV"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button
                  className="border-solid border-2 box-border flex flex-row my-4 mx-auto md:mx-3 items-center justify-center h-12 py-4  w-48 gap-2 font-bold"
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
                      fill="gray"
                    />
                  </svg>
                  <div className="text-[gray]">Discord</div>
                </button>
              </a> */}
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img className="mx-auto max-w-xs md:hidden" src={phone} alt="phone" />
          {/* <div className=""> */}
          <div className="mx-auto mt-16 max-w-sm md:w-7/12">
            <h1 className="text-4xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
              Build Your <br />
              <span className="text-custom-yellow">Onchain </span> Identity.
            </h1>
            <p className="text-lg my-8 md:my-4 text-[#B3B3B3]">
              Create your On-Chain Anonymous Identity based on your Proof of
              Tasks and get paid in Crypto.
            </p>
          </div>
          <img className="mx-auto hidden md:inline" src={phone} alt="phone" />
          {/* </div> */}
        </section>
        {/* the group of 4 sections */}
        {features(
          work,
          "Work On Your Skillsets",
          "Complete tasks in skills that you want to work in and build your identity around it."
        )}
        {/* {features3(
          track,
          "Track <br /> Your Progess",
          "Use our Extension to keep a track of your learnings on Internet. We provide analytics so that you know where you are spending most of your time and can work on it."
        )} */}
        {/* {features(
          proofOfWork,
          "Build Your <br /> Proof of Tasks",
          "With consistency comes power, power to share & build yout work without any limits. Proof of work demands more of skills you learn in a practical manner."
        )} */}
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img
            className="mx-auto hidden md:inline  h-72"
            src={track}
            alt="work"
          />
          {/* merge them later */}
          <img
            className="h-56 self-start md:mx-12 md:hidden"
            src={track}
            alt="work"
          />
          <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
            {/* i liked w-7/12 ig*/}
            <div className="md:bg-custom-black items-center flex">
              <div className="md:mx-12 max-w-sm">
                <h1 className="text-4xl md:text-4xl font-bold">
                  Track <br />
                  Your Progess
                </h1>

                <p className="text-md my-8 text-[#B3B3B3]">
                  Use our Extension to keep a track of your learnings on
                  Internet. We provide analytics so that you know where you are
                  spending most of your time and can work on it.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img
            className="mx-auto hidden md:inline  h-96"
            src={proofOfWork}
            alt="proofOfWork"
          />
          {/* merge them later */}
          <img
            className="h-56 self-start md:mx-12 md:hidden"
            src={proofOfWork}
            alt="proofOfWork"
          />
          <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
            {/* i liked w-7/12 ig*/}
            <div className="md:bg-custom-black items-center flex">
              <div className="md:mx-12 max-w-sm">
                <h1 className="text-4xl md:text-4xl font-bold">
                  Build Your <br /> Proof of Tasks
                </h1>

                <p className="text-md my-8 text-[#B3B3B3]">
                  Complete tasks to add them to your Portfolio NFT to showcase
                  your credibility around the internet.
                </p>
              </div>
            </div>
          </div>
        </section>
        {features(
          tether_main,
          "Get Paid in  Crypto",
          "Complete tasks to get rewards in Crypto directly in your wallet instantly with no waiting time."
        )}
        {/* end of the group of 4 sections */}
        {features2(
          security,
          "Your Data <br /> Your Control",
          "Blockchain keeps users data privacy atmost with a secure shield attached to your data. You control it, you monetize it & you use it to track your growth."
        )}
        {/* why it is better section */}
        <section className="flex min-h-screen justify-center items-center snap-start ">
          <div className="md:pt-12">
            {" "}
            <h1 className="text-center text-6xl md:text-[5rem] font-bold pt-28 md:pt-0">
              Why it’s <span className="text-custom-yellow "> better </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly 2xl:my-24">
              <div
                className="m-12 rounded-2xl p-4 py-12 text-center max-w-sm"
                style={{
                  background: " #050505",
                  "box-shadow":
                    " -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)",
                  "border-radius": "24px",
                }}
              >
                <img className="mx-auto " src={decentralised} />
                <h1 className="text-3xl font-bold my-4">Decentralised</h1>
                <p>
                  You control what you want on the platform & hold the rights to
                  where we go
                </p>
              </div>
              <div
                className="m-12 rounded-2xl p-4 py-12 text-center max-w-sm hidden md:inline"
                style={{
                  background: " #050505",
                  "box-shadow":
                    " -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)",
                  "border-radius": "24px",
                }}
              >
                <img className="mx-auto " src={community} />
                <h1 className="text-3xl font-bold my-4">Community</h1>
                <p>
                  Become the 1% of the world & meet similar minds with growth
                  mindset.
                </p>
              </div>
              <div
                className="m-12 border-black rounded-2xl p-4 py-12 text-center max-w-sm hidden md:inline"
                style={{
                  background: " #050505",
                  "box-shadow":
                    " -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)",
                  "border-radius": "24px",
                }}
              >
                <img className="mx-auto " src={coin} />
                <h1 className="text-3xl font-bold my-4">Incentives</h1>
                <p>
                  Learning becomes much more fun when you get incentivised for
                  the same
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex min-h-screen justify-center items-center snap-start md:hidden">
          <div>
            {" "}
            <div
              className="m-12 rounded-2xl p-4 py-12 text-center max-w-sm"
              style={{
                background: " #050505",
                "box-shadow":
                  " -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)",
                "border-radius": "24px",
              }}
            >
              <img className="mx-auto " src={community} />
              <h1 className="text-3xl font-bold my-4">Community</h1>
              <p>
                Become the 1% of the world & meet similar minds with growth
                mindset.
              </p>
            </div>
            <div
              className="m-12 border-black rounded-2xl p-4 py-12 text-center max-w-sm"
              style={{
                background: " #050505",
                "box-shadow":
                  " -6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)",
                "border-radius": "24px",
              }}
            >
              <img className="mx-auto " src={coin} />
              <h1 className="text-3xl font-bold my-4">Incentives</h1>
              <p>
                Learning becomes much more fun when you get incentivised for the
                same
              </p>
            </div>
          </div>
        </section>
        {/* build the proof */}
        <section className="flex flex-col h-screen  justify-center items-center snap-start bg-black w-full">
          <div className="h-full"></div>

          <div className="w-full">
            {/* <span className="relative w-full max-w-lg">
              <div className="absolute rounded-full animate-ping mix-blend-lighten filter blur-2xl opacity-70 -top-5 -right-2 w-72 h-72 bg-yellow-500" />
              <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" />
            </span> */}

            <h1 className="text-3xl  md:text-[3rem] 2xl:text-[4rem] font-bold text-center leading-[2.5rem] md:leading-[6rem]">
              Build the proof of your productivity.
            </h1>
            {/* button style
            change font later 
             */}
            <a
              href="https://discord.gg/JAA4Jdu6MV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="border-solid border-2 box-border flex flex-row my-4 mx-auto items-center justify-center h-12 py-4  w-48 gap-2 text-black font-bold"
                style={{
                  "border-color": "rgba(26, 26, 26, 1)",
                  "box-shadow":
                    "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                  "border-radius": "100px",
                  background:
                    "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
                }}
<<<<<<< HEAD
=======
                onClick={() => {
                 // navigate("/waitlist");
                }}
>>>>>>> c9dc37e46910fb861e6775c6346e87912670bab0
              >
                Join Community
              </button>
            </a>
          </div>
          <div className="h-full"></div>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Landing2;
