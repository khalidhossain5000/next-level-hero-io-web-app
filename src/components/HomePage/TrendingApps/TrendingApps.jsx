import React, { use } from "react";
import TrendingAppCard from "./TrendingAppCard";
import { Link } from "react-router";

const TrendingApps = ({ trendingAppPromise }) => {
  const { data } = use(trendingAppPromise);

  const finalTrendingAppData = data.slice(0, 8);

  return (
    <section className="p-6 sm:p-10 md:p-14 lg:p-18 xl:p-20">
      <h2 className="text-center text-2xl md:text-3xl xl:text-5xl font-bold text-[#001931] py-4">
        Trending Apps
      </h2>
      <p className="text-sm md:text-lg lg:text-xl text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {finalTrendingAppData.map((app) => (
          <TrendingAppCard key={app.id} trendingApp={app} />
        ))}
      </div>
      <div className="mt-10  text-center">
        <Link
          to="/apps"
          className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 xl:px-10 py-3 rounded-sm text-sm md:text-[16px] font-semibold mx-auto gap-2 text-white "
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
