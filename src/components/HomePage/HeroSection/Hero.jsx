import React from "react";
import bannerImg from "../../../assets/hero.png";
import playStore from "../../../assets/play-store.png";
import appStore from "../../../assets/app-store.png";

const Hero = () => {

  return (
    <section className="bg-[#f5f5f5] px-6 md:px-10 lg:px-14 xl:px-20 pt-10 lg:pt-12 xl:pt-20 ">
      {/* content */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[#001931] text-2xl sm:text-4xl md:text-5xl xl:text-7xl font-bold">
          We Build
        </h1>
        <h1 className="text-[#001931] text-2xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mb-4 sm:mb-2">
          <span className="bg-clip-text bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-sm xl:text-xl mt-4 max-w-180 xl:max-w-250 mx-auto">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        {/* hero button */}
        <div className="flex items-stretch gap-2 my-4 md:my-6 xl:my-10 justify-center max-w-md mx-auto">
          <a href="https://play.google.com/store/games" target="_blank" className="md:text-center sm:flex-1 flex items-center gap-2 lg:gap-4 py-2 md:py-3 px-3 md:px-6 rounded-xs border border-[#D2D2D2] text-sm md:text-lg lg:text-xl font-medium md:font-semibold text-[#001931] h-full cursor-pointer hover:bg-slate-200 transiton duration-500 hover:shadow-2xl" >
            <img src={playStore} alt="" className="" />
            Google Play
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank"   className="md:text-center sm:flex-1 flex items-center gap-2 lg:gap-4 py-2 md:py-3 px-3 md:px-6 rounded-xs border border-[#D2D2D2] text-sm md:text-lg lg:text-xl font-medium md:font-semibold text-[#001931] h-full cursor-pointer hover:bg-slate-200 transiton duration-500 hover:shadow-2xl">
            <img src={appStore} alt="" />
            App Store
          </a>
        </div>
      </div>
      {/* image */}
      <div className="pt-6 md:pt-3 2xl:pt-5 md:w-6/12 lg:w-5/12 xl:w-9/12  mx-auto">
        <img src={bannerImg} alt="hero-section-image" className="mx-auto " />
      </div>
    </section>
  );
};

export default Hero;
