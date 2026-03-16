import React from "react";
import InfoCard from "./InfoCard";
const infoContent = [
  {
    preTitle: "Total Downloads",
    title: "29.6M",
    endTitle: "21% more than last month",
  },
  {
    preTitle: "Total Reviews",
    title: "906K",
    endTitle: "46% more than last month",
  },
  {
    preTitle: "Active Apps",
    title: "132+",
    endTitle: "31 more will Launch",
  },
];
const Info = () => {
  return (
    <section className="p-7 sm:p-10 md:p-14 xl:p-20 bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
      {/* title */}
      <div>
        <h2 className="text-center text-white font-semibold md:font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
          Trusted by Millions, Built for You
        </h2>
      </div>
      {/* info conetn container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 mt-8 xl:mt-10">
        {
            infoContent.map((info,i)=><InfoCard
            key={`i${i}`}
            info={info}
            />)
        }
      </div>
    </section>
  );
};

export default Info;
