import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Header from "../../Headers/Header";
import Footer from "../../Footers/Footer";
import { useNavigate } from "react-router-dom";

const QRScanner = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("No result");

  return (
    <>
      <Header />
      <div className="text-white px-6 pt-12 font-Montserrat bg-primary-black">
        <QrReader
          className="w-full py-24"
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              navigate("/vault/user");
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default QRScanner;
