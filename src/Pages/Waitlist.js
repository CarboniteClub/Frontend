import React from "react";
import Header from "../Headers/Header";
import laptop from "../assets/laptop.svg";
import Footer from "../Footers/Footer";
const Waitlist = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 bg-custom-black text-white font-Montserrat">
        <div className="col-span-3 mx-[8vw]">
          <h1
            className="text-[3.5rem] font-bold text-center my-16"
            style={{
              lineHeight: "4.5rem",
            }}
          >
            We're Launching Soon
            <br />
            Join the Waitlist.
          </h1>
          <h1 className="text-3xl font-bold my-4">
            About <span className="text-custom-yellow"> Carbonite </span>
          </h1>
          <h1>
            Join the 1% community of builders, where Carbon turns into Diamond &
            build your proof of work on chain. A secure way to show your work to
            the world & get monetised.{" "}
          </h1>

          <h1 className="mt-8 font-bold">Name</h1>
          <input
            className="bg-secondary-black text-secondary-white w-full p-4 my-4 outline-none"
            placeholder="Will Smith"
            type="text"
          />
          <h1 className="mt-8 font-bold">Phone Number</h1>
          <input
            className="bg-secondary-black text-secondary-white w-full p-4 my-4 outline-none"
            placeholder="9876543210"
            type="number"
            onWheel={"return false"}
          />
          <h1 className="mt-8 font-bold">Email</h1>
          <input
            className="bg-secondary-black text-secondary-white w-full p-4 my-4 outline-none"
            placeholder="name@example.com"
            type="email"
          />
          <button
            className="bg-custom-yellow block mt-12 mb-16 mx-auto text-black px-12 py-2 rounded-3xl font-bold shadow-md shadow-custom-yellow"
            style={{
              borderStyle: "outset",
            }}
          >
            Join Waitlist
          </button>
        </div>
        <div className="flex col-span-2">
          <img src={laptop} className="my-auto" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Waitlist;
