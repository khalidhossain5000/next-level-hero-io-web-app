import React, { useState } from "react";
import { getInstalledApp, uninstallApp } from "../../utilities/localstorage";
import { useLoaderData } from "react-router";
import MyInstalledCard from "../../components/MyInstallPage/MyInstalledCard";
import NotFound from "../ErrorNotFoundPages/AppNotFoundMessage/NotFound";
import { Bounce, toast } from "react-toastify";

const MyInstallation = () => {
  const myInstalledAppFromLocal = getInstalledApp();
  const allAppsData = useLoaderData();

  const myInstalledApps = allAppsData.filter((app) =>
    myInstalledAppFromLocal.includes(app.id),
  );
  const [allInstalledApp, setAllInstalledApp] = useState(myInstalledApps);
  const [sort, setSort] = useState("default");
  //uninstall the app starts here
  const handleUninstall = (id) => {
    uninstallApp(id);
    const remainingInstalledApps = myInstalledApps.filter(
      (app) => app.id !== id,
    );

    setAllInstalledApp(remainingInstalledApps);
    toast('App Uninstalled SucessFully !', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    //
  };

  // const handleSort=(e)=>{
  //   setSort(e.target.value)
  //   if(sort==="low"){
  //     const lowToHighSortedData=allInstalledApp.sort((a,b)=>a.size-b.size)
  //     console.log(lowToHighSortedData,'this is lo to hight sorted data here')
  //   }
  // }

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);

    let sortedData = [];

    if (value === "low") {
      sortedData = [...allInstalledApp].sort((a, b) => a.size - b.size);
    } else if (value === "high") {
      sortedData = [...allInstalledApp].sort((a, b) => b.size - a.size);
    }

    setAllInstalledApp(sortedData);
  };

  return (
    <section className="bg-[#f5f5f5] p-10 md:p-12 lg:p-14 xl:p-20 min-h-[calc(100vh-90px)]">
      <h2 className="text-center text-[#001931] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Your Installed Apps
      </h2>
      <p className="text-center text-xl text-[#627382] py-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="mt-10">
        {/* title and sort */}
        <div className="flex items-center justify-between my-10">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#001931]">
            {myInstalledApps.length} Apps Found
          </h2>
          <select value={sort} onChange={handleSort} className="select w-36">
            <option value="default" disabled={true}>
              Sort By Size
            </option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
          </select>
        </div>
        {/* installed app container */}

        {allInstalledApp.length > 0 ? (
          <div className="space-y-6 mt-10">
            {allInstalledApp.map((installedApp) => (
              <MyInstalledCard
                key={installedApp.id}
                installedApp={installedApp}
                handleUninstall={handleUninstall}
              ></MyInstalledCard>
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>{" "}
    </section>
  );
};

export default MyInstallation;
