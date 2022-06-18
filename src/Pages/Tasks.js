import React, { useState } from "react";
import Footer from "../Footers/Footer";
import { Link } from "react-router-dom";
import DashboardHeader from "../Headers/DashboardHeader";
import LeftNav from "../Headers/LeftNav";
import cross from "../assets/cross.svg";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [showModal, setShowModal] = useState(true);
  const [modalData, setModalData] = useState({
    title: "Frontend Website for World Coin",
    publishedBy: "SuperTeam DAO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac morbi sed non felis ultricies tristique consequat nunc. Pulvinar facilisi mauris sit lorem. Pretium donec cursus nisl integer. Ullamcorper orci, nibh id ac a sociis. Purus, turpis odio quis pharetra nisi tempor.",
    requirements: [
      "Approximately 20-30 hours of commitment",
      "Regular Updates",
      "5 iterations",
      "Original File to be uploaded",
      "Timely Submission",
    ],
    deadline: "20 June 2022",
    reward: 1500,
    format: "PSD, PDF",
  });

  const listTasks = () => {
    let obj = [
      {
        name: "Frontend Website for WorldCoin",
        organiser: "SuperTeamDAO",
        category: "Development",
        rewards: "1200",
      },
      {
        name: "Design Icon Set",
        organiser: "DeFi DAO",
        category: "Design",
        rewards: "75",
      },
      {
        name: "Setup Environment",
        organiser: "Protocol DAO",
        category: "Blockchain",
        rewards: "370",
      },
      {
        name: "Graphic Design Campaign",
        organiser: "Solana DAO",
        category: "Design",
        rewards: "244",
      },
    ];
    let categoryToColr = {
      Development: "text-development-cat",
      Design: "text-design-cat",
      Blockchain: "text-blockchain-cat",
    };

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-12 py-4 my-6 flex justify-between  rounded-3xl text-xl">
          <div>
            <h1 className="font-bold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">{item.organiser}</h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
          <div className=" text-right">
            <div className="my-2 ">
              <h1 className="text-xl inline-block px-2"> {item.rewards} </h1>
              <h1 className="text-sm inline-block">NEAR</h1>
            </div>

            <button className="my-2 text-custom-yellow px-4 py-2 rounded-lg bg-submit-black">
              See More
            </button>
          </div>
        </div>
      );
    });
  };

  const listFilters = () => {
    let obj = [
      "Development",
      "Design",
      "Artificial Intelligence",
      "Blockchain",
    ];

    return obj.map((item) => {
      return (
        <div className="my-4">
          <label>
            <input
              type="checkbox"
              checked
              className="accent-custom-yellow w-6 h-6 align-middle"
            />
          </label>
          <h1 className="inline-block text-xl mx-4 align-top">{item}</h1>
        </div>
      );
    });
  };

  const listInvited = () => {
    let obj = [
      {
        name: "Android Development",
        organiser: "Dev DAO",
        category: "Development",
      },
    ];
    let categoryToColr = {
      Development: "text-development-cat",
      Design: "text-design-cat",
      Blockchain: "text-blockchain-cat",
    };

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-12 py-4 my-6 flex justify-between  rounded-3xl text-xl">
          <div>
            <h1 className="font-bold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">{item.organiser}</h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
        </div>
      );
    });
  };

  const listInProgress = () => {
    let obj = [
      {
        name: "Three JS Development",
        organiser: "Dev DAO",
        category: "Blockchain",
      },
      {
        name: "Coinbase Development",
        organiser: "Coin DAO",
        category: "Development",
      },
      {
        name: "Chainlink Development",
        organiser: "Base DAO",
        category: "Blockchain",
      },
      {
        name: "Node JS Dev",
        organiser: "Team DAO",
        category: "Development",
      },
    ];
    let categoryToColr = {
      Development: "text-development-cat",
      Design: "text-design-cat",
      Blockchain: "text-blockchain-cat",
    };

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-8 py-4 my-6 flex justify-between rounded-3xl text-xl">
          <div>
            <h1 className="font-bold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">{item.organiser}</h1>
            <div className="flex justify-between">
              <h1 className={`${categoryToColr[item.category]} my-1`}>
                {item.category}
              </h1>
            </div>
          </div>
          <div>
            <button className="text-custom-yellow my-8 px-4 py-2 rounded-lg bg-submit-black ">
              Submit
            </button>
          </div>
        </div>
      );
    });
  };

  const listInterested = () => {
    let obj = [
      {
        name: "Three JS Development",
        organiser: "Dev DAO",
        category: "Blockchain",
      },
      {
        name: "Coinbase Development",
        organiser: "Coin DAO",
        category: "Development",
      },
      {
        name: "Chainlink Development",
        organiser: "Base DAO",
        category: "Blockchain",
      },
      {
        name: "Node JS Dev",
        organiser: "Team DAO",
        category: "Development",
      },
    ];
    let categoryToColr = {
      Development: "text-development-cat",
      Design: "text-design-cat",
      Blockchain: "text-blockchain-cat",
    };

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-12 py-4 my-6 flex justify-between  rounded-3xl text-xl">
          <div>
            <h1 className="font-bold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">{item.organiser}</h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
        </div>
      );
    });
  };

  const exploreTasks = () => {
    return (
      <div className="mx-12">
        <h1 className="text-2xl">Featured</h1>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="mr-8">{listTasks()}</div>
          </div>
          <div className="col-span-1 bg-custom-black my-6 rounded-3xl p-8">
            <h1 className="text-2xl my-2">Filter</h1>
            <h1 className="text-xl text-secondary-white my-2 mb-4">Skills</h1>
            {listFilters()}
          </div>
        </div>
      </div>
    );
  };

  const myTasks = () => {
    return (
      <div className="mx-12">
        <h1 className="text-2xl my-4">Your Tasks</h1>
        <div className="grid grid-cols-3">
          <div className="mx-4">
            <h1 className="text-xl my-2">
              In Progress <span className="text-custom-yellow">(4)</span>{" "}
            </h1>
            <hr className="w-full mx-auto border-custom-yellow" />
            {listInProgress()}
          </div>
          <div className="mx-4">
            <h1 className="text-xl my-2">
              Invited <span className="text-custom-yellow">(1)</span>{" "}
            </h1>
            <hr className="w-full mx-auto border-custom-yellow" />
            {listInvited()}
          </div>
          <div className="mx-4">
            <h1 className="text-xl my-2">
              Interested <span className="text-custom-yellow">(4)</span>{" "}
            </h1>
            <hr className="w-full mx-auto border-custom-yellow" />
            {listInterested()}
          </div>
        </div>
      </div>
    );
  };

  const displayModal = () => {
    return (
      <>
        <div className="justify-center font-Montserrat items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-6xl ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-custom-black outline-none focus:outline-none">
              <div className="grid grid-cols-4 gap-8 p-8">
                <div className="col-span-3 border-r-2 border-[#FFFFFF17] px-6 py-4">
                  <h1 className="text-2xl font-bold mb-4">{modalData.title}</h1>
                  <h1 className="text-custom-yellow my-2 text-xl">
                    Published By : {modalData.publishedBy}
                  </h1>
                  <h1 className="text-secondary-white text-xl mt-8 mb-2">
                    Description
                  </h1>
                  <h1 className="text-justify mb-2">{modalData.description}</h1>
                  <h1 className="text-secondary-white text-xl mt-4 mb-2">
                    Requirements
                  </h1>
                  <ul className="list-disc ml-6">
                    {modalData.requirements.map((item) => {
                      return <li className="my-1">{item}</li>;
                    })}
                  </ul>
                  <h1 className="text-secondary-white text-xl mt-6 mb-2">
                    Deadlines
                  </h1>
                  <h1> Latest By : {modalData.deadline} </h1>
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
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };

  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black">
          <LeftNav />
        </div>
        <div className="col-span-5 bg-primary-black">
          <DashboardHeader />
          <div className="flex justify-center my-12">
            <button
              className={`flex px-12 mx-4 py-4 ${
                activeTab == "explore" ? "bg-secondary-black" : ""
              } rounded-3xl font-bold shadow-xl  `}
              style={{
                borderStyle: "outset",
              }}
              onClick={() => {
                setActiveTab("explore");
              }}
            >
              Explore
            </button>
            <button
              className={`flex px-12 mx-4 py-4 ${
                activeTab == "myTasks" ? "bg-secondary-black" : ""
              } rounded-3xl font-bold shadow-xl  `}
              style={{
                borderStyle: "outset",
              }}
              onClick={() => {
                setActiveTab("myTasks");
              }}
            >
              Your Tasks
            </button>
          </div>
          {activeTab == "explore" ? exploreTasks() : myTasks()}
          {showModal ? displayModal() : null}
          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tasks;
