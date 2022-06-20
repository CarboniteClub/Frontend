import React from "react";
import UserHeader from "../../Headers/UserHeader";
import LeftNav from "../../Headers/LeftNavUsers";
import Footer from "../../Footers/Footer";

const Guidelines = () => {
  return (
    <>
      <div className="grid grid-cols-6 text-white font-Montserrat">
        <div className="col-span-1 bg-primary-black">
          <LeftNav />
        </div>
        <div className="col-span-5 bg-primary-black">
          <UserHeader />

          <div className="h-12 bg-primary-black"></div>

          <div className="px-16">
            <h1 className="text-2xl font-semibold">Rating System</h1>
            <p className="text-lg">
              <span className="text-secondary-white">
                Understand the use cases of{" "}
                <span className="font-semibold">XPs</span> at
              </span>
              <span className="text-custom-yellow"> Carbonite.Club </span>
            </p>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              Extension
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                1 Hours = 1 <spXPsan className="font-semibold"></spXPsan>
              </li>
              <li className="my-2">Can earn only 6XPs per day</li>
              <li className="my-2">Will only track few selected website</li>
              <li className="my-2">
                Can get blacklisted for illegal things like automation
              </li>
              <li className="my-2">User pattern is noted</li>
            </ul>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              Task Completion
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                1 NEAR = 500 <spXPsan className="font-semibold"></spXPsan>
              </li>
            </ul>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              Levels
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                1000 <span className="font-semibold">XPs</span> = 1 Level
              </li>
            </ul>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              Streaks
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                10 Days * 6 Hours = 60 Hours = 60{" "}
                <span className="font-semibold">XPs</span> + 20{" "}
                <span className="font-semibold">XPs</span> = 80{" "}
                <span className="font-semibold">XPs</span>
              </li>
            </ul>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              Leaderboard
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                Weekly top 3 <span className="font-semibold">XPs</span> = Reward
                of 100 <spXPsan className="font-semibold"></spXPsan>
              </li>
            </ul>

            <h1 className="text-2xl font-semibold text-custom-yellow mt-10">
              How To Use <spXPsan className="font-semibold"></spXPsan>?
            </h1>
            <ul className="list-disc ml-8">
              <li className="my-2">
                Higher the <span className="font-semibold">XPs</span> higher
                chances to get work.
              </li>
              <li className="my-2">
                Higher <span className="font-semibold">XPs</span> = Higher
                Rewards
              </li>
              <li className="my-2">
                Higher <span className="font-semibold">XPs</span> = New Upgrades
              </li>
              <li className="my-2">
                Higher <span className="font-semibold">XPs</span> = Community
                Leaders
              </li>
            </ul>
          </div>

          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Guidelines;
