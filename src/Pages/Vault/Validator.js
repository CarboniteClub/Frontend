import React, { useState, useEffect } from "react";
import Header from "../../Headers/Header";
import profile from "../../assets/profileMain.svg";
import star from "../../assets/star.svg";
import Footer from "../../Footers/Footer";

const Validator = () => {
  const listSkills = () => {
    let obj = [
      {
        name: "Age above 18 years",
        result: "Yes",
      },
      {
        name: "Holds 2 wheeler license",
        result: "Yes",
      },
      {
        name: "Holds 4 wheeler license",
        result: "No",
      },
      {
        name: "Is Senior Citizen",
        result: "Yes",
      },
      {
        name: "Holds a under Grad Degree",
        result: "N/A",
      },
      {
        name: "Has been vaccinated",
        result: "N/A",
      },
      {
        name: "Has a Pan Card",
        result: "N/A",
      },
      {
        name: "Passed in SSLC with more than 75%",
        result: "N/A",
      },
      {
        name: "Holds a under Grad Degree",
        result: "N/A",
      },
      {
        name: "Holds Indian Passport",
        result: "N/A",
      },
    ];

    return obj.map((item) => {
      return (
        <div className="flex justify-between py-4 text-xl">
          <h1 className="text-secondary-white">{item.name}</h1>
          <h1 className="">{item.result}</h1>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="text-white px-6 pt-16 font-Montserrat bg-primary-black">
        <h1 className="text-2xl pt-8 font-bold">
          Anonymous <span className="text-custom-yellow">Identity Proof</span>
        </h1>
        <img className="w-full my-4" src={profile} />
        <h1 className="text-2xl text-custom-yellow font-semibold">
          Aashish Yadav
        </h1>
        <div className="flex mt-4">
          <img src={star} />
          <h1 className="text-xl ml-2 font-semibold">Details</h1>
        </div>
        {listSkills()}
        <div className="h-20"></div>
      </div>
      <Footer />
    </>
  );
};

export default Validator;
