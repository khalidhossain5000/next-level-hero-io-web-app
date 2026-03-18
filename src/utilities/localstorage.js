//app inof saving in the local stoarge ---->

import Swal from "sweetalert2";

const getAppFromLocalStorage = () => {
  const installedAppId = localStorage.getItem("installedApp");

  if (installedAppId) {
    return JSON.parse(installedAppId);
  }
  return [];
};

//saving installed app data in the local storage

const saveAppInLocalStorage = (appId) => {
  const installedAppInLocal = getAppFromLocalStorage();

  if (installedAppInLocal.includes(appId)) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "App Is Already Installed",
    });
  }

  if (appId) {
    installedAppInLocal.push(appId);

    localStorage.setItem("installedApp", JSON.stringify(installedAppInLocal));
  }
};

//remove app from the local storgae

const removeAppFromLocalStorage = (id) => {
  const getAllInstalledApps = getAppFromLocalStorage();

  if (getAllInstalledApps) {
    const remainingInstalledApp = getAllInstalledApps.filter(
      (installedId) => installedId !== id,
    );
    localStorage.setItem("installedApp", JSON.stringify(remainingInstalledApp));
  }
};

export {
  getAppFromLocalStorage as getInstalledApp,
  saveAppInLocalStorage as saveInstalledApp,
  removeAppFromLocalStorage as uninstallApp,
};
