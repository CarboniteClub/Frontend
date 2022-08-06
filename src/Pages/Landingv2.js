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

import { Buffer } from "buffer";
global.Buffer = Buffer;
const nearAPI = require("near-api-js");
const { Contract, connect, keyStores, WalletConnection } = nearAPI;

const DEFAULT_GAS = "30000000000000"; // 30 Terra Gas = 30 * 10^12 Gas units

const NO_DEPOSIT = "0";

const RECORD_STORAGE_COST = "1000000000000000000000000"; // 1 Near

const contract_id = "carbonite.testnet";

const Landing2 = () => {
  const navigate = useNavigate();

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

  const login_handler = async () => {
    const networkConfig = {
      networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };

    const near = await connect(networkConfig);

    const wallet = new WalletConnection(near);

    if (!wallet.isSignedIn()) {
      wallet.requestSignIn({
        contract_id,
        methodNames: [
          "new",
          "add_m_aadhaar_record",
          "add_m_driving_license_record",
        ],
        successUrl: "http://localhost:3000/vault/user", // optional redirect URL on success
        // failureUrl: "REPLACE_ME://.com/failure"
      });
    } else {
      navigate("/vault/user");
    }
  };

  return (
    <>
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white font-Montserrat w-screen overflow-x-hidden">
        <section className="flex h-screen justify-center items-center snap-start bg-black pt">
          <div className="pt-20">
            <span className="sticky">
              <div className="w-full sticky ">
                {/* border-2 border-cyan-100 */}
                <div
                  className=" opacity-75 pointer-events-none absolute rounded-full mix-blend-normal filter blur-2xl  md:-bottom-96 md:-left-72 w-[600px] h-[600px] md:w-[900px] md:h-[900px]  bg-yellow-500"
                  style={{
                    background:
                      "radial-gradient(41.94% 41.94% at 50% 50%, rgba(232, 208, 129, 0.54) 0%, rgba(232, 208, 129, 0) 100%)",
                  }}
                />
                <div
                  className="opacity-75 pointer-events-none absolute  rounded-full mix-blend-normal filter blur-2xl -top-80 md:top-0 -left-64 md:left-auto md:-right-72 w-[600px] h-[600px] md:w-[700px] md:h-[700px]  "
                  style={{
                    background:
                      "radial-gradient(41.94% 41.94% at 50% 50%, rgba(232, 208, 129, 0.54) 0%, rgba(232, 208, 129, 0) 100%)",
                  }}
                />
                <div className="absolute -left-16 md:-left-32 top-80 w-48">
                  <img className=" mx-auto my-4" src={graph} alt="graph" />
                </div>
                <div className="absolute -right-16 md:-right-32 top-80 w-48">
                  <img className=" mx-auto my-4" src={privacy} alt="graph" />
                </div>
                <div className="absolute -left-16 md:-left-32 -top-20 w-48">
                  <img className=" mx-auto my-4" src={trophy} alt="graph" />
                </div>
                <div className="absolute -right-16 md:-right-32 -top-20 w-48 w">
                  <img className=" mx-auto my-4" src={tether} alt="graph" />
                </div>
                {/* the 4 tokens */}
                {/* end of 4 tokens */}
                {/* <div className="absolute rounded-full animate-pulse animation-delay-2000 mix-blend-lighten filter blur-2xl opacity-70 top-0 -left-2 w-72 h-72 bg-indigo-500" />
              <div className="absolute rounded-full animate-bounce  mix-blend-lighten filter blur-2xl opacity-70 -bottom-20 left-20 w-72 h-72 bg-pink-500" /> */}
              </div>
            </span>

            {/* <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] hidden md:flex ">
              Build Your Proof of Skills <br /> Earn Rewards.
            </h1>
            <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] md:hidden ">
              Build Your <br /> Proof of Skills <br /> Earn Rewards.
            </h1> */}
            <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] hidden md:flex ">
              Onchain Anonymous Identity Based on <br /> Zero Knowledge Proofs
            </h1>
            <h1 className="text-4xl md:text-[4rem] lg:md:text-[5rem] font-bold text-center leading-[3rem] md:leading-[6rem] md:hidden ">
              Onchain Anonymous Identity Based on <br /> Zero Knowledge Proofs
            </h1>
            {/* <p className="text-2xl text-center my-8 mx-3 hidden md:block">
              An On-Chain Anonymous Identity Builder
            </p> */}
            {/* <p className="text-2xl text-center my-8 mx-3  md:hidden">
              An On-Chain Anonymous
              <br /> Identity Builder
            </p> */}
            {/* button style
            change font later 
             */}
            <div className="flex flex-col md:flex-row px-auto justify-center">
              {" "}
              <a
                // href="https://discord.gg/JAA4Jdu6MV"
                target="_blank"
                rel="noopener noreferrer"
                onClick={async () => await login_handler()}
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
                  Sign In
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img className="mx-auto max-w-xs md:hidden" src={phone} alt="phone" />
          <div className="mx-auto mt-16 max-w-sm md:w-7/12">
            <h1 className="text-4xl md:text-4xl font-bold leading-[3rem] md:leading-[3rem] ">
              Share Your <br />
              <span className="text-custom-yellow">Onchain </span> Identity.
            </h1>
            <p className="text-lg my-8 md:my-4 text-[#B3B3B3]">
              Create your On-Chain Anonymous Identity based on Zero Knowledge
              Proofs.
            </p>
          </div>
          <img className="mx-auto hidden md:inline" src={phone} alt="phone" />
        </section>

        {features(
          work,
          "Keep your Data a Secret",
          "Build your Identity Around one Single Proof"
        )}

        {/* <section className="flex flex-col md:flex-row h-screen justify-center items-center snap-start bg-black px-6">
          <img
            className="mx-auto hidden md:inline  h-72"
            src={track}
            alt="work"
          />

          <img
            className="h-56 self-start md:mx-12 md:hidden"
            src={track}
            alt="work"
          />
          <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
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
          
          <img
            className="h-56 self-start md:mx-12 md:hidden"
            src={proofOfWork}
            alt="proofOfWork"
          />
          <div className="mt-8  md:bg-custom-black md:h-full flex md:w-1/2">
            
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
*/}
        {features2(
          security,
          "Your Data <br /> Your Control",
          "Blockchain keeps users data privacy atmost with a secure shield attached to your data. You control it."
        )}

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
            <h1 className="text-3xl  md:text-[3rem] 2xl:text-[4rem] font-bold text-center leading-[2.5rem] md:leading-[6rem]">
              We care about your data and privacy.
            </h1>

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
              >
                Sign In
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
