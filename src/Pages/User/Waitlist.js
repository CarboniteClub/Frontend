import React, { useState } from "react";
import Header from "../../Headers/Header";
import laptop from "../../assets/laptop.svg";
import Footer from "../../Footers/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../constants";

const Waitlist = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const submitHandler = () => {
    console.log("calling submitxx", SERVER);
    axios
      .post(`${SERVER}/waitlist`, {
        name,
        email,
        phone: phoneNum,
      })
      .then((res) => {
        console.log("res data", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 md:grid-cols-5  bg-custom-black text-white font-Montserrat pt-10">
        <div className="col-span-3 mx-[8vw]">
          <h1 className="text-4xl  md:text-[3rem] 2xl:text-[4rem] font-bold text-left leading-[2.5rem] md:leading-[6rem]">
            <br />
            Join the Waitlist.
          </h1>
          {/* krishna change laptop 2 phone  */}
          <img src={laptop} className="my-auto  md:hidden" alt="Laptop" />
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
            onChange={(e) => setName(e.target.value)}
          />
          <h1 className="mt-8 font-bold">Phone Number</h1>
          <input
            className="bg-secondary-black text-secondary-white w-full p-4 my-4 outline-none"
            placeholder="9876543210"
            type="number"
            onWheel={"return false"}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <h1 className="mt-8 font-bold">Email</h1>
          <input
            className="bg-secondary-black text-secondary-white w-full p-4 my-4 outline-none"
            placeholder="name@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

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
            onClick={() => {
              submitHandler();
              // navigate("/waitlist");
            }}
          >
            Join Waitlist
          </button>
        </div>
        <div className="md:flex col-span-2 hidden">
          <img src={laptop} className="my-auto" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Waitlist;
