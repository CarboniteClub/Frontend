import React from "react";
import CompanyHeader from "../../Headers/CompanyHeader";
import LeftNav from "../../Headers/CompanyLeftNav";
import Footer from "../../Footers/Footer";

const AddTasks = () => {
  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black">
          <LeftNav />
        </div>
        <div className="col-span-5 bg-primary-black">
          <CompanyHeader />

          <div className="h-12 bg-primary-black"></div>
          <div className="grid grid-cols-3 mx-14">
            <div className="col-span-2">
              <h1 className="text-2xl font-semibold">Enter Task Details</h1>
              <h1 className="text-xl my-6 mt-16 mb-4">
                Title of the task <span className="text-custom-yellow">*</span>
              </h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-3 text-secondary-white"
                type="text"
                placeholder="Will Smith"
              />

              <h1 className="text-xl my-4 mt-8 mb-4">
                Task Description <span className="text-custom-yellow">*</span>
              </h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-4 text-secondary-white"
                type="text"
                placeholder="Describe the project"
              />

              <h1 className="text-xl my-4 mt-8 mb-4">Requirements</h1>
              <ol className="list-decimal">
                <li className="my-8 ml-6">
                  <input
                    className="bg-secondary-black outline-none ml-4 p-4 text-secondary-white"
                    type="text"
                    placeholder="Will Smith"
                    style={{
                      width: "-webkit-fill-available",
                    }}
                  />
                </li>
                <li className="my-8 ml-6">
                  <input
                    className="bg-secondary-black outline-none ml-4 p-4 text-secondary-white"
                    type="text"
                    placeholder="Will Smith"
                    style={{
                      width: "-webkit-fill-available",
                    }}
                  />
                </li>
                <li className="my-8 ml-6">
                  <input
                    className="bg-secondary-black outline-none ml-4 p-4 text-secondary-white"
                    type="text"
                    placeholder="Will Smith"
                    style={{
                      width: "-webkit-fill-available",
                    }}
                  />
                </li>
                <li className="my-8 ml-6">
                  <input
                    className="bg-secondary-black outline-none ml-4 p-4 text-secondary-white"
                    type="text"
                    placeholder="Will Smith"
                    style={{
                      width: "-webkit-fill-available",
                    }}
                  />
                </li>
                <li className="my-8 ml-6">
                  <input
                    className="bg-secondary-black outline-none ml-4 p-4 text-secondary-white"
                    type="text"
                    placeholder="Will Smith"
                    style={{
                      width: "-webkit-fill-available",
                    }}
                  />
                </li>
              </ol>

              <h1 className="text-xl mt-8 mb-4">
                Deadline <span className="text-custom-yellow">*</span>
              </h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-4 text-secondary-white"
                type="text"
                placeholder="08/11/2022"
              />

              <h1 className="text-xl mt-8 mb-4">
                Format <span className="text-custom-yellow">*</span>
              </h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-4 text-secondary-white"
                type="text"
                placeholder="PDF"
              />

              <h1 className="text-xl mt-8 mb-4">Skill Required</h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-4 text-secondary-white"
                type="text"
                placeholder="Development"
              />
              <h1 className="text-xl mt-8 mb-4">
                Reward (in SOL) <span className="text-custom-yellow">*</span>
              </h1>
              <input
                className="bg-secondary-black outline-none w-full px-6 py-4 text-secondary-white"
                type="text"
                placeholder="1500"
              />

              <button
                className="border-solid border-2 box-border flex mx-auto my-12 w-48 items-center justify-center h-12 py-4 px-10  gap-2 text-black font-bold"
                style={{
                  "border-color": "rgba(26, 26, 26, 1)",
                  "box-shadow":
                    "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                  "border-radius": "100px",
                  background:
                    "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
                }}
              >
                Pay Reward
              </button>
            </div>
            <div></div>
          </div>

          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddTasks;
