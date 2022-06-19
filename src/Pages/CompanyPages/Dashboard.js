import React, { useState } from "react";
import UserHeader from "../../Headers/UserHeader";
import LeftNav from "../../Headers/CompanyLeftNav";
import Footer from "../../Footers/Footer";

const CompanyDashboard = () => {
  const [tabActive, setTabActive] = useState("Add");

  const listShortList = () => {
    let obj = [
      {
        name: "Design Icon Set",
        status: "Shortlist",
        category: "Design",
        applicants: 12,
      },
      {
        name: "Graphic Design Campaign",
        status: "Shortlist",
        category: "Design",
        applicants: 5,
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
            <h1 className="font-semibold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">
              Status - {item.status}
            </h1>
            <h1 className={` ${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
          <div className=" text-right">
            <div className="my-2 ">
              <h1 className="text-xl mt-4 text-secondary-white">
                No. of Applicants
              </h1>
              <h1 className="text-2xl mt-4 text-white px-2">
                {item.applicants}
              </h1>
            </div>
          </div>
        </div>
      );
    });
  };

  const listReview = () => {
    let obj = [
      {
        name: "Setup Environment",
        status: "Review",
        category: "Blockchain",
        postedOn: "14 May 2022",
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
            <h1 className="font-semibold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">
              Status - {item.status}
            </h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
          <div className=" text-right">
            <div className="my-2 ">
              <h1 className="text-lg inline-block">Posted On - </h1>
              <h1 className="text-lg inline-block px-2"> {item.postedOn} </h1>
            </div>

            <button className="my-2 text-custom-yellow px-4 py-2 rounded-lg bg-submit-black">
              Review
            </button>
          </div>
        </div>
      );
    });
  };

  const listCompleted = () => {
    let obj = [
      {
        name: "Create Blockchain Environment",
        status: "Completed",
        category: "Blockchain",
        postedOn: "5 June 2022",
        payment: "Processed",
      },
      {
        name: "Design NFT",
        status: "Completed",
        category: "Design",
        postedOn: "23 May 2022",
        payment: "Paid",
      },
      {
        name: "App Development",
        status: "Completed",
        category: "Development",
        postedOn: "14 May 2022",
        payment: "Paid",
      },
    ];

    let categoryToColr = {
      Development: "text-development-cat",
      Design: "text-design-cat",
      Blockchain: "text-blockchain-cat",
      Paid: "text-custom-yellow",
      Processed: "text-blockchain-cat",
    };

    return obj.map((item) => {
      return (
        <div className="bg-custom-black px-12 py-4 my-6 flex justify-between  rounded-3xl text-xl">
          <div>
            <h1 className="font-semibold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">
              Status - {item.status}
            </h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
          <div className=" text-right">
            <div className="my-2 ">
              <h1 className="text-lg inline-block">Completed On - </h1>
              <h1 className="text-lg inline-block px-2"> {item.postedOn} </h1>
            </div>

            <button
              className={`my-2 ${
                categoryToColr[item.payment]
              } px-4 py-2 rounded-lg bg-submit-black`}
            >
              {item.payment}
            </button>
          </div>
        </div>
      );
    });
  };

  const listTasks = () => {
    let obj = [
      {
        name: "Frontend Website for WorldCoin",
        status: "Published",
        category: "Development",
        postedOn: "5 June 2022",
      },
      {
        name: "Design Icon Set",
        status: "Shortlist",
        category: "Design",
        postedOn: "23 May 2022",
      },
      {
        name: "Setup Environment",
        status: "Review",
        category: "Blockchain",
        postedOn: "14 May 2022",
      },
      {
        name: "Graphic Design Campaign",
        status: "Shortlist",
        category: "Design",
        postedOn: "7 May 2022",
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
            <h1 className="font-semibold my-2">{item.name}</h1>
            <h1 className="text-secondary-white my-2">
              Status - {item.status}
            </h1>
            <h1 className={`${categoryToColr[item.category]} my-2`}>
              {item.category}
            </h1>
          </div>
          <div className=" text-right">
            <div className="my-2 ">
              <h1 className="text-lg inline-block">Posted On - </h1>
              <h1 className="text-lg inline-block px-2"> {item.postedOn} </h1>
            </div>

            <button className="my-2 text-custom-yellow px-4 py-2 rounded-lg bg-submit-black">
              See More
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black">
          <LeftNav />
        </div>
        <div className="col-span-5 bg-primary-black">
          <UserHeader />

          <div className="h-12 bg-primary-black"></div>
          <div className="mx-14">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Live Tasks</h1>
              <div className="flex justify-around text-lg">
                <button
                  className={`bg-secondary-black mx-4 ${
                    tabActive == "Add"
                      ? "text-custom-yellow"
                      : "text-secondary-white"
                  }  rounded-lg px-4 py-2`}
                  onClick={() => setTabActive("Add")}
                >
                  Add
                </button>

                <button
                  className={`bg-secondary-black mx-4 ${
                    tabActive == "Shortlist"
                      ? "text-custom-yellow"
                      : "text-secondary-white"
                  }  rounded-lg px-4 py-2`}
                  onClick={() => setTabActive("Shortlist")}
                >
                  Shortlist
                </button>

                <button
                  className={`bg-secondary-black mx-4 ${
                    tabActive == "Review"
                      ? "text-custom-yellow"
                      : "text-secondary-white"
                  }  rounded-lg px-4 py-2`}
                  onClick={() => setTabActive("Review")}
                >
                  Review
                </button>

                <button
                  className={`bg-secondary-black mx-4 ${
                    tabActive == "Completed"
                      ? "text-custom-yellow"
                      : "text-secondary-white"
                  }  rounded-lg px-4 py-2`}
                  onClick={() => setTabActive("Completed")}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="mt-16 mr-4">
              {tabActive == "Add"
                ? listTasks()
                : tabActive == "Shortlist"
                ? listShortList()
                : tabActive == "Review"
                ? listReview()
                : tabActive == "Completed"
                ? listCompleted()
                : null}
            </div>
          </div>
          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyDashboard;
