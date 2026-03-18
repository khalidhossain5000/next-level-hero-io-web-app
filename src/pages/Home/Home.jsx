import React, { Suspense } from "react";
import Hero from "../../components/HomePage/HeroSection/Hero";
import Info from "../../components/HomePage/InfoSection/Info";
import axios from "axios";
import TrendingApps from "../../components/HomePage/TrendingApps/TrendingApps";
import GlobalSpinner from "../../components/Loading/GlobalSpinner/GlobalSpinner";
const trendingAppPromise = axios("/apps-data.json");

const HomePage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <Info />
      <Suspense
        fallback={<GlobalSpinner/>}
      >
        <TrendingApps trendingAppPromise={trendingAppPromise} />
      </Suspense>
    </div>
  );
};

export default HomePage;
