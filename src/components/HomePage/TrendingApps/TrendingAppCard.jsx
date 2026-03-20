import React from "react";

import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";


const TrendingAppCard = ({ trendingApp }) => {
  
  const { title, image, ratingAvg, downloads,id } = trendingApp;
  return (
    <Link to={`/apps/${id}`}>
    <div className="p-4 bg-white rounded-sm  shadow-sm">
      <div>
        <img
          src={image}
          alt="app-image"
          className="mx-auto rounded-lg shadow-md w-full"
        />
      </div>
      <h2 className="text-[#001931] text-sm sm:text-lg md:text-xl font-medium py-4">
        {title}
      </h2>

      {/* download and rating */}
      <div className="flex items-center justify-between py-4">
        <h2 className="font-medium text-[#00D390] flex items-center bg-[#F1F5E8]    px-2.5 py-1.5 rounded-sm gap-2">
   
          <span><MdOutlineFileDownload /></span>
          
          {downloads}
        </h2>
        {/* rating */}
        <h2 className="font-medium text-[#ff8811] flex items-center bg-[#fff0e1]    px-2.5 py-1.5 rounded-sm gap-2">

          <span><FaStar /></span>
          {ratingAvg}
        </h2>
      </div>
    </div>
    </Link>
  );
};

export default TrendingAppCard;
