import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { Bounce, toast } from "react-toastify";
import {
  getInstalledApp,
  saveInstalledApp,
} from "../../utilities/localstorage";
import RatingChart from "../../components/DetailsPage/RatingChart/RatingChart";
const AppDetailsPage = () => {
  const allAppsData = useLoaderData();
  const { appId } = useParams();
  const [installedAppId, setInstalledAppId] = useState(getInstalledApp());

  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    description,
    size,
  } = allAppsData.find((app) => app.id === parseInt(appId));

  // checking if the app is already installed or not

  const isAlreadyInstalled = installedAppId.includes(parseInt(appId));

  // handle install app function starts
  const handleAppInstall = (appId) => {
    const installedParsedAppId = parseInt(appId);
    setInstalledAppId([...installedAppId, installedParsedAppId]);

    if (installedParsedAppId) {
      saveInstalledApp(installedParsedAppId);
      toast.success("App Installed Successfully!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <section className="p-10 md:p-14 lg:p-16 xl:p-20 bg-[#f5f5f5]">
      {/* start part info */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 xl:gap-14">
        <div className="flex-1 rounded-lg">
          <img
            src={image}
            alt="app-image"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        {/* content */}
        <div className="flex-2 lg:flex-3">
          <h2 className="text-[#001931] text-center xl:text-left text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold">
            {title}
          </h2>
          <h4 className="pt-3 text-xl text-[#627382] text-center xl:text-left">
            Developed By{" "}
            <span className="bg-clip-text bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent font-semibold mr-2">
              Khalid Hossain
            </span>
          </h4>
          <div className="divider"></div>

          {/* downlad and rating contaienr */}
          <div className="flex items-center flex-wrap justify-center xl:justify-between mt-8 xl:mt-14 max-w-lg gap-10 xl:gap-14">
            <div className="space-y-3">
              <img src={download} alt="download icon" />
              <h2 className="text-[16px] text-[#001931]">Downloads</h2>
              <h2 className="text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold lg:font-extrabold">
                {downloads}
              </h2>
            </div>
            {/* rating */}
            <div className="space-y-3">
              <img src={rating} alt="rating icon" />
              <h2 className="text-[16px] text-[#001931]">Average Ratings</h2>
              <h2 className="text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold lg:font-extrabold">
                {ratingAvg}
              </h2>
            </div>
            {/* review */}
            <div className="space-y-3">
              <img src={review} alt="review icon" />
              <h2 className="text-[16px] text-[#001931]">Total Reviews</h2>
              <h2 className="text-[#001931] text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold lg:font-extrabold">
                {reviews}
              </h2>
            </div>
          </div>
          {/* button install */}
          <div className="pt-6">
            <button
              disabled={isAlreadyInstalled}
              onClick={() => handleAppInstall(appId)}
              className="bg-[#00d390] px-5 py-3.5 rounded-sm text-white font-semibold cursor-pointer hover:bg-emerald-600 duration-700 skeleton disabled:bg-slate-900 disabled:cursor-not-allowed mx-auto"
            >
              {isAlreadyInstalled ? "Installed" : `Install Now ( ${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="divider py-10"></div>
      {/* rating chart container starts here */}
      <div>
        <h2 className="text-[#001931] text-center xl:text-left text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold pb-5">
          Ratings
        </h2>
        <RatingChart ratings={ratings} />
      </div>
      {/* description */}
      <div className="">
        <h2 className="text-center xl:text-left text-xl lg:text-2xl font-bold text-[#001931] my-6 xl:my-10">
          Description
        </h2>
        <p className="text-[#627382] text-xl font-medium max-w-4xl text-center xl:text-left">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AppDetailsPage;

// {
//     "image": "https://i.ibb.co.com/nNpYJjVf/demo-app-2.webp",
//     "title": "MusicFlow",
//     "companyName": "Flow Media",
//     "id": 2,
//     "description": "MusicFlow lets users stream millions of songs, create playlists and explore trending music from around the world.",
//     "size": 58,
//     "reviews": 9800,
//     "ratingAvg": 4.4,
//     "downloads": "3.4M",
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 350
//         },
//         {
//             "name": "2 star",
//             "count": 410
//         },
//         {
//             "name": "3 star",
//             "count": 1200
//         },
//         {
//             "name": "4 star",
//             "count": 3600
//         },
//         {
//             "name": "5 star",
//             "count": 4240
//         }
//     ]
// }
