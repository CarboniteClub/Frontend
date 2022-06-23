import React, { useState } from "react";
import Header from "../../Headers/Header";
import laptop from "../../assets/laptop.svg";
import Footer from "../../Footers/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../constants";
import cross from "../../assets/cross.svg";

const Waitlist = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
  });

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
        setModalData({
          title: "Successfully Registered",
          message: "Lets Cre",
        });
        setShowModal(true);
      })
      .catch((err) => {
        console.log("err", err);
        setModalData(true);
      });
  };

  const displayModal = () => {
    return (
      <>
        <div className="justify-center font-Montserrat items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-[30%] my-6 mx-auto max-w-6xl ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-custom-black outline-none focus:outline-none">
              <div className="mx-6 my-8">
                <div className="flex justify-between px-4">
                  <h1 className="text-2xl text-secondary-white">
                    {/* {modalData.title} */}
                    Successfully Registered
                  </h1>
                  <button
                    className="text-white inline-block float-right background-transparent  uppercase text-2xl "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={cross} />
                  </button>
                </div>
                <div className=" border-b-2 border-[#FFFFFF17] px-6 py-2"></div>
                <h1 className="mx-4 my-2 text-secondary-white text-xl">
                  {/* {modalData.message} */}
                  Checkout Leaderboard and Waitlist for more exciting events !
                </h1>
              </div>
              {/* <div className="grid grid-cols-4 gap-8 p-8">
                <div className="col-span-3 border-r-2 border-[#FFFFFF17] px-6 py-4">
                  <h1>{modalData.title}</h1>
                  <h1>{modalData.message}</h1>
                </div>
                <div className="col-span-1">
                  <button
                    className="text-white inline-block float-right background-transparent  uppercase text-2xl "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={cross} />
                  </button>
                  <div className="flex">
                    <div>
                      <h1 className="text-custom-yellow text-xl my-2">
                        Reward
                      </h1>
                      <h1 className="text-lg mb-8">1500 NEAR</h1>
                    </div>
                  </div>

                  <h1 className="text-custom-yellow text-xl my-2">Format</h1>
                  <h1 className="text-lg mb-8">{modalData.format}</h1>

                  <h1 className="text-custom-yellow text-xl my-2">Apply</h1>
                  <p className="text-sm mb-8">
                    You’ll be notified when your request is accepted
                  </p>
                  <button className="bg-primary-black mt-8 text-white px-6 py-4 w-full rounded-3xl shadow-lg shadow-secondary-black">
                    I’m interested
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
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
        {showModal ? displayModal() : null}
      </div>
      <Footer />
    </>
  );
};

export default Waitlist;
