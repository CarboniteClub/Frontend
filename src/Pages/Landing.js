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
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },4000);
  return (
    <>
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white font-Montserrat w-screen">
        {/* <div class="relative top-8 -left-4 w-96 h-96 bg-yellow-300 rounded-full blur-xl opacity-30 animate-pulse z-50"></div> */}
        <section className="flex h-screen justify-center items-center snap-start">
          <div className="">
            <div className="relative w-full max-w-lg">
              <div className="absolute rounded-full animate-ping mix-blend-lighten filter blur-2xl opacity-70 -top-5 -right-2 w-72 h-72 bg-yellow-500" />
              <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" />
            </div>
            <h1 className="text-6xl md:text-[5rem] font-bold text-center leading-[4rem] md:leading-[6rem]">
              Be Productive <br /> Earn Rewards.
            </h1>
            <p className="text-2xl text-center my-8">
              Get rewards for being consistent and productive
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center ">
              <button
                className="col-span-1 bg-custom-yellow text-black px-12 py-2 rounded-3xl font-bold shadow-md shadow-custom-yellow"
                style={{
                  borderStyle: "outset",
                }}
              >
                Join Waitlist
              </button>
              {/* <button
                className="col-span-1 bg-custom-yellow py-2 rounded-3xl font-bold shadow-md shadow-custom-yellow"
                style={{
                  borderStyle: "outset",
                }}
              >
                <div className="flex mx-auto w-full">
                  <img src={discord} className="px-2" /> Discord
                </div>
              </button> */}
              <div className="col-span-1 flex items-center px-auto py-2 rounded-3xl font-bold shadow-xl ">
                {" "}
                <button
                  className="flex self-center w-full"
                  style={{
                    borderStyle: "outset",
                  }}
                >
                  <img src={discord} className="px-2" /> Discord
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* border-2 border-white */}
        <section className="flex h-screen  items-center snap-start">
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
        {/* <section className=" snap-mandatory h-screen"> */}{" "}
        <div className=" h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 "  data-aos="fade-right">
          <div className="">
              <img className="mx-auto"  src={work} />
          </div>
          <div className="md:bg-custom-black h-full flex">
            <div className="w-[70%]  mx-auto md:bg-custom-black items-center flex">
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
        <div className=" h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src={track} />
          </div>
          <div className="md:bg-custom-black h-full flex">
            <div className="w-[70%]  m-auto md:bg-custom-black">
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
        <div className="h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto " src={proofOfWork} />
          </div>
          <div className="md:bg-custom-black flex h-full">
            <div className="w-[70%]  m-auto md:bg-custom-black">
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
        <div className="h-screen justify-center items-center snap-start grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <img className="mx-auto" src={rewards} />
          </div>
          <div className="md:bg-custom-black flex h-full">
            <div className="w-[70%]  m-auto md:bg-custom-black">
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
        <section className="flex min-h-screen justify-center items-center snap-start">
          <div>
            {" "}
            <h1 className="text-center text-6xl md:text-[5rem] font-bold">
              Why it’s <span className="text-custom-yellow "> better </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-evenly my-24">
              <div className="m-12 border-white border-2 rounded-2xl p-4 text-center ">
                <img className="mx-auto my-4" src={decentralised} />
                <h1 className="text-3xl font-bold my-4">Decentralised</h1>
                <p>
                  You control what you want on the platform & hold the rights to
                  where we go
                </p>
              </div>
              <div className="m-12 border-black rounded-2xl p-4 text-cente ">
                <img className="mx-auto my-4" src={community} />
                <h1 className="text-3xl font-bold my-4">Community</h1>
                <p>
                  Become the 1% of the world & meet similar minds with growth
                  mindset.
                </p>
              </div>
              <div className="m-12 border-black rounded-2xl p-4 text-center">
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
