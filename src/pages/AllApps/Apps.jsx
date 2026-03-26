import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { CiSearch } from "react-icons/ci";
import AllAppsCard from "./AllAppsCard";
import GlobalSpinner from "../../components/Loading/GlobalSpinner/GlobalSpinner";
import NotFound from "../ErrorNotFoundPages/AppNotFoundMessage/NotFound";

const AllAppsPage = () => {
  const data = useLoaderData();
  const [searchLoading, setSearchLoading] = useState(false);
  const [allApps, setAllApps] = useState(data);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSearch = (e) => {
    setSearchLoading(true);
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    setTimeout(() => {
      const searchApps = data.filter((app) =>
        app.title.toLowerCase().includes(text),
      );
      setAllApps(searchApps);
      setSearchLoading(false);
    }, 100);
 
  };

  return (
    <section className="p-8 md:p-10 lg:p-14 xl:p-20 ">
      {/* title and content */}
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-3xl xl:text-5xl font-bold text-[#001931]">
          Our All Applications
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* subtitle and search box container */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <h2 className="text-xl lg:text-2xl font-semibold text-[#001931]">
          ({allApps.length}) Apps Found
        </h2>
        <label className="px-4 py-3 border border-[#D2D2D2] rounded-sm shaodw-sm flex items-center gap-3 text-[16px] text-[#627382] focus-within:outline focus-within:outline-slate-600 duration-500 transition-all">
          <span>
            <CiSearch className="text-xl text-[#627382]" />
          </span>
          <input
            ref={inputRef}
            onChange={handleSearch}
            value={searchText}
            type="search"
            required
            placeholder="Search"
            className="placeholder:text-[#627382] placeholder:text-[16px] outline-none"
          />
        </label>
      </div>
      {searchLoading && <GlobalSpinner />}
      {/* all apps card container */}

      {allApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
          {allApps.map((app) => (
            <AllAppsCard key={app.id} app={app}></AllAppsCard>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default AllAppsPage;
