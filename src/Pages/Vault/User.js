import React, { useState, useEffect } from "react";
import Header from "../../Headers/Header";
import profile from "../../assets/profilePic.svg";
import qrCode from "../../assets/qrCode.svg";
import Footer from "../../Footers/Footer";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [listDocs, setListDocs] = useState([
    "Aadhaar Card",
    "Driving License",
    "PAN Card",
    "Marks Sheets",
    "Passport",
  ]);

  const displayDocs = () => {
    return listDocs.map((item) => {
      return (
        <div className="rounded-lg p-6 text-center my-1 h-24  bg-custom-yellow w-[49%] text-custom-black">
          <h1 className="text-lg font-semibold">{item}</h1>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="text-white px-6 pt-16 font-Montserrat bg-primary-black">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl pt-8 font-semibold">
              Welcome <span className="text-custom-yellow">Aashish</span>
            </h1>
            <h1 className="text-base py-6">
              Carbonite.Vault issues masked documents so you can protect your
              private data & still verify documents.
            </h1>
          </div>
          <img src={profile} />
        </div>

        <h1 className="text-2xl pt-8 font-semibold">
          <span className="text-custom-yellow"> Reference </span>Documents
        </h1>

        <div className="flex mt-4 flex-wrap justify-between">
          {displayDocs()}
          <div className="rounded-lg p-6  text-center my-1 h-24  bg-[#4c462a] w-[49%] text-white">
            <h1 className="text-lg font-semibold">More +</h1>
          </div>
        </div>
        <div className="rounded-lg p-6 text-center h-24 my-1 bg-custom-yellow  text-custom-black">
          <h1 className="text-lg font-semibold">Government Initiatives</h1>
        </div>

        <img
          onClick={() => navigate("/qr-scanner")}
          className="mx-auto py-12"
          src={qrCode}
        />
      </div>
      <Footer />
    </>
  );
};

export default User;
