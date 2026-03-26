import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const MyInstalledCard = ({ installedApp,handleUninstall }) => {
  const { image, title, downloads, size, ratingAvg,id } = installedApp;
  return (
    <div className="p-4 rounded-sm bg-white flex flex-col lg:flex-row items-center justify-between">
      {/* left side content container */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <img
          src={image}
          alt="installedapp image"
          className="w-20 rounded-lg shadow-sm"
        />
        <div>
          <h2 className="text-xl font-medium text-[#001932]">{title}</h2>
          {/* other contetn */}
          <div className="flex items-center gap-6 pt-4 pb-2">
            <h2 className="text-[16px] text-[#00D390] font-medium flex items-center gap-1">
              <span>
                <MdOutlineFileDownload />
              </span>
              {downloads}
            </h2>
            <h2 className="text-[16px] text-[#ff8811] font-medium flex items-center gap-1">
              <span>
                <FaStar />
              </span>
              {ratingAvg}
            </h2>
            <h2 className="text-[16px] text-[#627382] font-medium">
              {size} MB
            </h2>
          </div>
        </div>
      </div>
      {/* right side uninstall button */}
      <div>
        <button onClick={()=>handleUninstall(id)} className="bg-[#00d390] px-5 py-3.5 rounded-sm text-white font-semibold cursor-pointer hover:bg-emerald-600 duration-700 skeleton ">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default MyInstalledCard;
