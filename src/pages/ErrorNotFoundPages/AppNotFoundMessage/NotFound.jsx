import React from "react";
import notFoundImg from "../../../assets/App-Error.png";
const NotFound = () => {
  return (
    <section className="h-[calc(100vh-90px)]  bg-[#f5f5f5] p-10 md:p-12 lg:p-14 xl:p-20">
      <div className="pb-4">
        <img
          src={notFoundImg}
          alt="notFoundImg-image"
          className="mx-auto object-cover"
        />
      </div>
      <div className="py-4">
        <h2 className="text-center text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-6 pb-3">
        OPPS!! APP NOT FOUND
        </h2>
        <p className="py-4 text-xl text-center text-[#627382]">
        The App you are requesting is not found on our system.  please try another apps
        </p>

        <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 lg:px-12 py-3 rounded-sm text-xl font-semibold flex items-center gap-2 text-white mt-4 xl:mt-8 mx-auto">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
