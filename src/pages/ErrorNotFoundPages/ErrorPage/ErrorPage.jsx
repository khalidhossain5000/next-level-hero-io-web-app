import React from "react";
import errorImg from "../../../assets/error-404.png";
import NavBar from "../../../components/NavBar/NavBar";
const ErrorPage = () => {
  return (
    <section>
      <header>
        <NavBar />
      </header>
      <main className="h-[calc(100vh-90px)]  bg-[#f5f5f5] p-10 md:p-12 lg:p-14 xl:p-20">
        <div className="pb-4">
          <img
            src={errorImg}
            alt="error-image"
            className="mx-auto object-cover"
          />
        </div>
        <div className="py-4">
          <h2 className="text-center text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold py-2">
            Oops, page not found!
          </h2>
          <p className="text-xl text-center text-[#627382]">
            The page you are looking for is not available.
          </p>

          <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 lg:px-12 py-3 rounded-sm text-xl font-semibold flex items-center gap-2 text-white mt-4 mx-auto">
            Go Back
          </button>
        </div>
      </main>
 


    </section>
  );
};

export default ErrorPage;
