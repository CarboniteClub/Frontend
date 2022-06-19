import React from "react";
import UserHeader from "../../Headers/UserHeader";
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
          <UserHeader />

          <div className="h-12 bg-primary-black"></div>

          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddTasks;
