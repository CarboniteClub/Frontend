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

const Landing = () => {
  return (
    <>
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white font-Montserrat w-screen">
        <section class="flex h-screen justify-center items-center snap-start">
          <div class="">
            <h1
              className="text-[5rem] font-bold text-center"
              style={{
                lineHeight: "6rem",
              }}
            >
              Be Productive <br /> Earn Rewards.
            </h1>
            <p className="text-2xl text-center my-8">
              Get rewards for being consistent and productive
            </p>
            <div className="flex justify-center ">
              <button
                className="bg-custom-yellow text-black px-12 py-2 rounded-3xl font-bold shadow-md shadow-custom-yellow"
                style={{
                  borderStyle: "outset",
                }}
              >
                Join Waitlist
              </button>
              <button
                className="flex px-12 py-2 rounded-3xl font-bold shadow-xl "
                style={{
                  borderStyle: "outset",
                }}
              >
                <img src={discord} className="px-2" /> Discord
              </button>
            </div>
          </div>
        </section>
        {/* border-2 border-white */}
        <section class="flex h-screen  items-center snap-start">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-[70%] mx-auto mt-16">
              <h1
                className="text-[4.5rem] font-bold"
                style={{
                  lineHeight: "6rem",
                }}
              >
                Build Your <br />{" "}
                <span className="text-custom-yellow">Web3 </span> Resume.
              </h1>
              <p className="text-2xl my-8">
                Your proof of work on blockchain. Secure way to show your work
                to the world & get monetised.
              </p>
            </div>
            <div>
              <img className="mx-auto" src={blockchain} />
            </div>
          </div>
        </section>
        {/* the group of 4 starts  */}
        {/* <section class=" snap-mandatory h-screen"> */}{" "}
        <div className=" md:h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src={work} />
          </div>
          <div className="bg-custom-black h-full flex">
            <div className="w-[70%]  mx-auto bg-custom-black items-center flex">
              <div className="">
                <h1
                  className="text-[4.5rem] font-bold "
                  style={{
                    lineHeight: "5.5rem",
                  }}
                >
                  You Do <br /> What You Love.
                </h1>
                <p className="text-2xl my-8">
                  Follow your true passion and create something that makes you
                  feel good. We make it easy for you to find & follow your
                  passion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src={track} />
          </div>
          <div className="bg-custom-black h-full flex">
            <div className="w-[70%]  m-auto bg-custom-black">
              <h1
                className="text-[4.5rem] font-bold "
                style={{
                  lineHeight: "5.5rem",
                }}
              >
                Track
                <br /> Your Progess.
              </h1>
              <p className="text-2xl my-8">
                The information that you gain every single day, even a minute
                one can be exponential with time. A simple & efficient way to
                track things can go a long way.
              </p>
            </div>
          </div>
        </div>
        <div className="md:h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto " src={proofOfWork} />
          </div>
          <div className="bg-custom-black flex h-full">
            <div className="w-[70%]  m-auto bg-custom-black">
              <h1
                className="text-[4.5rem] font-bold "
                style={{
                  lineHeight: "5.5rem",
                }}
              >
                Build Your
                <br /> Proof of Work.
              </h1>
              <p className="text-2xl my-8">
                With consistency comes power, power to share & build yout work
                without any limits. Proof of work demands more of skills you
                learn in a practical manner.
              </p>
            </div>
          </div>
        </div>
        <div className="md:h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src={rewards} />
          </div>
          <div className="bg-custom-black flex h-full">
            <div className="w-[70%]  m-auto bg-custom-black">
              <h1
                className="text-[4.5rem] font-bold "
                style={{
                  lineHeight: "5.5rem",
                }}
              >
                Rewards,
                <br /> Rewards, Rewards.
              </h1>
              <p className="text-2xl my-8">
                Being productive can be fun if you get rewards to compete & stay
                consistent. Our platform keeps the users at the centre & rewards
                you for doing productive things.
              </p>
            </div>
          </div>
        </div>
        {/* </section> */}
        <section className="flex h-screen justify-center items-center snap-start">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-[70%] mx-auto mt-16">
              <h1
                className="text-[4.5rem] font-bold"
                style={{
                  lineHeight: "6rem",
                }}
              >
                Your Data <br /> Your Control.
              </h1>
              <p className="text-2xl my-8">
                Blockchain keep user data privacy atmost with a secure shield
                attached to your data. You control it, you monetise it & you use
                it to track your growth.
              </p>
            </div>
            <div>
              <img className="mx-auto py-[8rem]" src={security} />
            </div>
          </div>
        </section>
        <section className="flex h-screen justify-center items-center snap-start">
          <div>
            {" "}
            <h1 className="text-center text-[5rem] font-bold">
              Why it’s <span className="text-custom-yellow "> better </span>
            </h1>
            <div className="flex justify-evenly my-24">
              <div className="m-12 border-black rounded-2xl p-4 text-center w-[20%]">
                <img className="mx-auto my-4" src={decentralised} />
                <h1 className="text-3xl font-bold my-4">Decentralised</h1>
                <p>
                  You control what you want on the platform & hold the rights to
                  where we go
                </p>
              </div>
              <div className="m-12 border-black rounded-2xl p-4 text-center w-[20%]">
                <img className="mx-auto my-4" src={community} />
                <h1 className="text-3xl font-bold my-4">Community</h1>
                <p>
                  Become the 1% of the world & meet similar minds with growth
                  mindset.
                </p>
              </div>
              <div className="m-12 border-black rounded-2xl p-4 text-center w-[20%]">
                <img className="mx-auto my-4" src={coin} />
                <h1 className="text-3xl font-bold my-4">Incentives</h1>
                <p>
                  Learning becomes much more fun when you get incentivised for
                  the same
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex h-screen justify-center items-center snap-start">
          <div>
            {" "}
            <h1 className="text-[4.5rem] font-bold text-center ">
              Build the proof of your productivity.
            </h1>
            <button
              className="bg-custom-yellow mx-auto block mt-12 text-black px-12 py-2 rounded-3xl font-bold shadow-md shadow-custom-yellow"
              style={{
                borderStyle: "outset",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Landing;
