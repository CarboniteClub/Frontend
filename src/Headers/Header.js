import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

import { Buffer } from "buffer";
global.Buffer = Buffer;
const nearAPI = require("near-api-js");
const { Contract, connect, keyStores, WalletConnection } = nearAPI;

const DEFAULT_GAS = "30000000000000"; // 30 Terra Gas = 30 * 10^12 Gas units

const NO_DEPOSIT = "0";

const RECORD_STORAGE_COST = "1000000000000000000000000"; // 1 Near

const contract_id = "carbonite.testnet";

const Header = () => {
  const navigate = useNavigate();

  const login_handler = async () => {
    const networkConfig = {
      networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };

    const near = await connect(networkConfig);

    const wallet = new WalletConnection(near);

    if (!wallet.isSignedIn()) {
      wallet.requestSignIn({
        contract_id,
        methodNames: [
          "new",
          "add_m_aadhaar_record",
          "add_m_driving_license_record",
        ],
        successUrl: "http://localhost:3000/vault/user", // optional redirect URL on success
        // failureUrl: "REPLACE_ME://.com/failure"
      });
    } else {
      navigate("/vault/user");
    }
  };

  return (
    <nav className="absolute w-screen  flex items-center justify-between px-6 py-4 bg-black  font-Montserrat">
      {/* <span className="font-mulish text-2xl font-bold mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1 className="font-bold">Carbonite</h1>
          </div>
        </Link>
      </span> */}
      <span className="font-mulish text-2xl font-bold md:mx-16 text-white leading-none">
        <Link to="/#">
          <div className="flex justify-center">
            <img src={logo} className="mx-[10px]" />
            <h1>Carbonite.Vault</h1>
          </div>
        </Link>
      </span>
      <div className="w-full mr-4">
        <ul className=" flex flex-row float-right">
          {/* <li className=" text-md whitespace-nowrap md:px-16 py-2 font-bold  text-white items-center">
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
          <li className="hidden md:inline items-center">
            {" "}
            <a
              // href="https://discord.gg/JAA4Jdu6MV"
              target="_blank"
              rel="noopener noreferrer"
              onClick={async () => await login_handler()}
            >
              {" "}
              {/* fix allignment  */}
              <button
                className=" border-solid border-2 box-border flex flex-row my-4 mx-auto md:mx-3 items-center justify-center h-12 py-auto  w-48 gap-2 text-black font-bold"
                style={{
                  "border-color": "rgba(26, 26, 26, 1)",
                  "box-shadow":
                    "-6px -6px 12px rgba(255, 255, 255, 0.21),    6px 6px 12px rgba(0, 0, 0, 0.62)",
                  "border-radius": "100px",
                  background:
                    "linear-gradient(179.79deg, #EED581 6.65%, rgba(238, 213, 129, 0.45) 94.29%)",
                }}
                onClick={async () => {
                  await login_handler();
                }}
              >
                Sign In
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
